const jwt = require('jsonwebtoken');
const redis = require('redis');

// setup Redis:
const redisClient = redis.createClient({ host: '127.0.0.1' });
// It cannot connect if redis server is running on local
// and this smart-brain-api is running on docker.

const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  }
  return db
    .select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('email', '=', email)
          .then((user) => user[0])
          .catch((err) => Promise.reject('unable to get user'));
      } else {
        Promise.reject('wrong credentials');
      }
    })
    .catch((err) => Promise.reject('wrong credentials'));
};

const getAuthTokenId = () => {
  console.log('auth ok');
};

const signToken = (email) => {
  const jwtPayload = { email };
  // return jwt.sign(jwtPayload, process.env.JWTSECRETKEY);
  return jwt.sign(jwtPayload, 'JWT_SECRET', { expiresIn: '2 days' });
};

const createSession = (user) => {
  // JWT token, return user data
  const { email, id } = user;
  const token = signToken(email);
  return { seccess: 'true', userId: id, token };
};

// Higher order function : = (db, bcrypt) => (req, res)
const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization
    ? getAuthTokenId()
    : handleSignin(db, bcrypt, req, res)
        .then((data) =>
          data.id && data.email ? createSession(data) : Promise.reject(data)
        )
        .then((session) => res.json(session))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
  // handleSignin: handleSignin,
  signinAuthentication: signinAuthentication
};
