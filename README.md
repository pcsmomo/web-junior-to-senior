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

<details>
