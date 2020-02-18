# react-native-firebase-phone-auth

This is an example of firebase phone auth in react native application. i searched in google lot of areas then i found this example this is working good.This method not fully belongs to me..i will post a video also here....

## Getting Started

1.We have special static "Captcha" web page, hosted on domain, that authorized on our Firebase project. It simply shows firebase.auth.RecaptchaVerifier. User resolves captcha and it gives token string from response of callback.

2.On application login screen we show WebBrowser with "Captcha" page and listening url change event by Linking methods. On new url, we extract token string from it.

3.Then we create fake firebase.auth.ApplicationVerifier object with token and pass it to firebase.auth().signInWithPhoneNumber (with phone number). SMS code will be sent.

I wrote tested simplest code below. You can directly "copy-paste" it. Just add firebase config (this config must be same for both) and set correct "Captcha" page url. Don't forget that phone must be entered in international format. In this code "Captcha" page hosted on firebase hosting, so it automatically initializing by including init.js and authorized by default.

## Features

- Expo TabNavigated Example
- Full Authenticated
- Authentication Handled AppNavigator
- FirebasePhone Authentication Full

### How its Works ?

- First You need a "captcha.html" page which i uploaded ( Me Hosted in My Firebase )
- We Take The Token From this html page and send to the app .
- fake firebase auth will work with that given token
- SMS code will send to Our Given Phone Number

```
Go to " ./src/domain/phoneAuthentication " Edit captchaUrl with Your Hosted URL
Go to " App.js " Change Your Firebase Config
Here You Must Enter The Number is in international format eg: if indian Number then type " +91xxxxxxxxxx " .
```

##### How To Install ?

```
git clone https://github.com/thareekanvar/react-native-firebase-phone-auth.git
```

#### Contributors

###### We are welcome more contributions more authentications..

Alex Andrade ( Main part of New update )

###### Example

![Imgur Image](https://i.imgur.com/HeRMohw.gif)

Here Uploading The App.js Content and The Html Page .
