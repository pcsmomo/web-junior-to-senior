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

</details>

# Next Step

- [Awesome Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- Review Performance and digest them again
