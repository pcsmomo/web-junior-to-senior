# Summary of

The Complete Junior to Senior Web Developer Roadmap by Andrei Neagoie

# Details

<details open>
  <summary>Click to Contract/Expend</summary>

## Section 2: SSH

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

## Section 3: Performance Part 1

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

## Section 4: React + Redux + Module Bundling

### 62. Updated Code For This Section

https://github.com/aneagoie/robofriends

https://github.com/aneagoie/robofriends-redux

### 69. CWD: create-react-app 2

[Create React App](https://create-react-app.dev/docs/getting-started)
[React Documents](https://reactjs.org/docs/getting-started.html)

</details>

# Next Step

- [Awesome Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- Review Performance and digest them again
