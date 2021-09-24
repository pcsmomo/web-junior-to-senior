# Summary of

The Complete Junior to Senior Web Developer Roadmap by Andrei Neagoie

<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#section-2-ssh">Section 2: SSH</a></li>
    <li><a href="#section-3-performance-part-1">Section 3: Performance Part 1</a></li>
    <li><a href="#section-4-react-redux-module-bundling">Section 4: React + Redux + Module Bundling</a></li>
    <li><a href="#section-5-performance-part-2">Section 5: Performance Part 2</a></li>
    <li><a href="#section-6-testing">Section 6: Testing</a></li>
    <li><a href="#section-7-typescript">Section 7: TypeScript</a></li>
    <li><a href="#section-8-spa-vs-server-side-rendering">Section 8: SPA vs Server Side Rendering</a></li>
    <li><a href="#section-9-security">Section 9: Security</a></li>
    <li><a href="#section-10-code-analysis">Section 10: Code Analysis</a></li>
    <li><a href="#section-11-docker">Section 11: Docker</a></li>
    <li><a href="#section-12-redis">Section 12: Redis</a></li>
    <li><a href="#section-13-session-jwt">Section 13: Sessions + JWT</a></li>
    <li><a href="#section-14-aws">Section 14: AWS</a></li>
    <li><a href="#section-15-performance-part-2">Section 15: Performance Part 3</a></li>
  </ul>
</details>

# Details

## Section 13: Sessions JWT

<details open>
  <summary>Click to Contract/Expend</summary>

### 329. Section Overview

JWT : JSON Web Token

### 330. Cookies vs Tokens

1. Traditional Cookie-Based Auth
   - Set-Cookie: session=...
   - Both browser and backend need to store Session information.
2. Modern Token-Based Auth
   - token : ...JWT in \*Local storage, but can be stored in Session storage or a cookie in the browser
   - Backend doesn't need to store session information
   - Stateless
   - It can be access from many API servers easily
   - It can serve browser and IOS/Android as well
   - Cons: delevery data could be bigger than simple cookie

- [Cookies vs. Tokens: The Definitive Guide - Dzone](https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide)
- [Token Authentication vs. Cookies - Stackoverflow](https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies)
- [Why JWTs Suck as Session Tokens - scotch.io](https://scotch.io/bar-talk/why-jwts-suck-as-session-tokens)

### 333. JWT

- [jsonwebtoken - Github](https://github.com/auth0/node-jsonwebtoken)
- [JWT.io](https://jwt.io/)

### 337. Profile Icon

```sh
npm install --save bootstrap reactstrap
```

### 346. Resources: HTML Entities

[HTML 4 Entity Name - &times; &amp;](https://www.w3schools.com/charsets/ref_html_entities_4.asp)

### 351. User Authentication

Useful Higher Order Function & Promise Return Pattern

### 352. Sending The JWT Token

```sh
npm install --save jsonwebtoken
```

### 353. Adding Redis

```sh
# Run server
$ src/redis-server
# It cannot connect if redis server is running on local
# and this smart-brain-api is running on docker.
```

### 355. Solution: #3 - Adding Redis To Docker Compose

```sh
# we can connect the redix server running on the docker
docker-compose exec redis redis-cli
```

### 356. Storing JWT Tokens

```sh
# logging in on front server
# check if the token is stored in redis
docker-compose exec redis redis-cli
> get [token]
# "1"  , my user id is "1"
```

### 358. Client Session Management

- sessionStorage: data in sessionStorage is cleared when the page session ends
  - Opening a page in a new tab or window creates a new session with the value of the top-level browsing context, which differs from how session cookies work
- localStorage: data in localStorage doesn't expire,

Bearer

```json
{
  "method": "post",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "token"
    // Setting "token" with Bearer is a conventional pattern
    // 'Authorization': 'Bearer ' + token
  }
}
```

### 359. Resources: Bearer Token

- [What Are Refresh Tokens and How to Use Them Securely](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)
- [Why is 'Bearer' required before the token in 'Authorization' header in a HTTP request?](https://security.stackexchange.com/questions/108662/why-is-bearer-required-before-the-token-in-authorization-header-in-a-http-re)

### 365. Optional: Why bcrypt-nodejs?

bcypt-nodejs works whole systems such as Mac, Windows, and Linux \
(even though it is not being maintained anymore)\
But, bcrypt.js might occur a problem on a different system or not.

### 367. Exercise: #4 - Improving SmartBrain

[Exercise: #4 - Improving SmartBrain](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10521040#questions)

</details>

## Section 14: AWS

<details open>
  <summary>Click to Contract/Expend</summary>

### 371. Amazon Web Services

Google "aws flow"

### 372. Monolithic vs Micro Services

1. Monolithic : All codes are in one place
2. **Micro Services** : All services are independent

### 374. Amazon Lambda Dashboard

Create Lambda function

name: rankly

> No need to create. We will create it through serverless

### 376. Serverless

```sh
npm install -g serverless

serverless
serverless create --help
```

```sh
mkdir rankly
sls create -t aws-nodejs

serverless -v
# Framework Core: 2.59.0
# Plugin: 5.4.4
# SDK: 4.3.0
# Components: 3.17.0
```

### 378. IAM

```sh
# Create AWS user - name: rankly-lamda
# serverless config with AWS account
sls config credentials --provider aws --key [PUBLIC KEY] --secret [SECRET KEY]

# AWS credential path
cat ~/.aws/credentials
```

### 379. Resources: IAM

[serverless IAM](https://www.serverless.com/framework/docs/providers/aws/guide/iam/)

### 380. Deploying A Function

```sh
# deploy
sls deploy

# run for test - it would cost
sls invoke --function rank

# run for local test - it won't charge
# and it works for simple function (not complex like using s3 or other services)
sls invoke local --function rank
```

```yml
# 1. deploye with http
events:
  - http:
      path: rank
      method: get
# endpoints:
#   GET - https://4nkrzsndyi.execute-api.us-east-1.amazonaws.com/dev/rank

# 2. deploye with httpApi
events:
  - httpApi:
      path: /rank
      method: get
# endpoints:
#   GET - https://jmyrkptd79.execute-api.us-east-1.amazonaws.com/rank

# 3. deploye with httpApi and short pattern
events:
  - httpApi: get /rank
# The same result
```

> http and httpApi receive difference responses

</details>

## Section 15: Performance Part 3

<details open>
  <summary>Click to Contract/Expend</summary>

### 388. CDNs

- CloudFlare CDN
- AWS CloudFront
- Azure CDN

### 389. GZIP

1. [GZIP](https://github.com/expressjs/compression)
   -content-encoding: gzip
   - Most browser support gzip
2. [BROTLI](https://github.com/foliojs/brotli.js)
   - content-encoding: br
   - compress 20% more than gzip
   - getting more popular

### 390. Database Scaling

1. Identify Inefficient Queries
2. Increase Memory
3. Vertical Scaling (Redis, Memchached)
   - Redis cached data
4. Sharding
   - a method for distributing data across multiple machines
   - searching only that specific part of database
5. More database
6. Database type

### 391. Caching 1

1. CPU (Center Processing Unit) : Fastest but small
2. RAM (Random Access Memory) : Fast but temporary
3. HDD (Hard Disk Drive) : Slow but persistent

### 392. Caching 2

Cache busting : the process of uploading a new file to replace an existing file that is already cached\

- bundle[contenthash].js
- styles[contenthash].css

### 393. Caching 3

Response Headers (http://localhost:3000/static/)

- ETag: W/"12f-17c0f5d367d"
- ETag: W/"131-17c0f75780e" (When change index.html)

### 394. Resources: Caching

- [Caching Everywhere](https://www.freecodecamp.org/news/the-hidden-components-of-web-caching-970854fe2c49/)
- [Cache Headers](https://web.dev/http-cache/)
- [Caching and Performance](https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers)

### 398. Nginx 2

```sh
docker-compose up --build

# http://localhost and refresh
```

http request (load balance) testing tools

- [npm loadtest](https://www.npmjs.com/package/loadtest)
- [Artillery : Planet-scale performance testing](https://artillery.io/)
- [siege](https://github.com/JoeDog/siege)
- [wrk2](https://github.com/giltene/wrk2)

```sh
npm install -g loadtest
# t: time, -c: clients, --rps: read of request per second
loadtest -t 5 -c 100 --rps 100 http://localhost:80
```

</details>

# To do

- Combine README-front.md back into README.md
- [Exercise: #4 - Improving SmartBrain](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10521040#questions)
- [Awesome Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- Review Performance and digest them again
- Use Vercel and Serverless
