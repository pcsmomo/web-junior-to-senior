# Summary of

The Complete Junior to Senior Web Developer Roadmap by Andrei Neagoie

## Details

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

<details>
