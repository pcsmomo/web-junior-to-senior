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

</details>

# Next Step

- Combine README-front.md back into README.md
- [Awesome Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- Review Performance and digest them again
- Use Vercel and Serverless
