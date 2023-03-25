---
sidebar_label: 'Authentication'
sidebar_position: 5
---

# Authentication

**SfUserAuth** is the authentication supermod provided by Superflows. It allows you to implement email-otp-based authentication functionality to your HTML, CSS, and Javascript app.

## 👋 Introduction

### About Passwordless Sign-ins

Remembering passwords has become a headache these days. Password-less sign-in is in vogue, and naturally so! It is extremely convenient as users needn’t remember their passwords! User experience, user convenience, data & privacy protection and security are some of the important aspects that need to be considered, while developing an authentication system. According to my humble opinion, OTP-based password-less authentication is one of the simplest & safest ways to authenticate users.

### About Supermods

A supermod is an independently deployable module of an application that has a scoped & well-defined functionality and that encapsulates both the frontend and backend functionalities. You can architect your application such that it is composed of several supermods working in tandem with each other. Broadly speaking, the supermod-based architecture makes your application modular and more maintainable, as it scales.

### This Tutorial

This tutorial demonstrates how to add the sign in functionality to your app using the SfUserAuth supermod. So brace yourself, get into your developer groove, on your mark, get set and go! 👨‍🔧👩‍🔧

## 💡 What's New In This Tutorial?

Authentication functionality is critical as your entire application will hinge on it. This tutorial demonstrates the use of the library SfUserAuth, which commoditizes the authentication functionality.

## 🤔 What Should You Know Prior To Starting?

The target audience of this tutorial is web developers or anybody who is interested in web development. You need not be an expert developer to follow and understand this tutorial. It is perfectly fine if you are a novice web developer. The only pre-requisite is that you should have basic familiarity with HTML, CSS and Javascript.

## **🏆** What Will You Learn At The End Of This Tutorial?

Look at the example below. It is a single-page application developed using purely HTML, CSS and Javascript. It uses the SfUserAuth library for implementing the authentication microservice. Developing this application is the goal of the current tutorial.

Go ahead, play around with it.

<iframe src="https://sfuserauth-vanilla.superflowsappv3.repl.co/#auth/signup" width="400" height="800" ></iframe>

<br /><br />

[Open Example In New Tab](https://replit.com/@SuperflowsAppv3/SfUserAuth-Vanilla)

## 📚 Tech-stack

**Frontend** - The frontend of this application will be designed in pure HTML, CSS, and Javascript.

**Backend** - The backend is based on the auto-scalable technologies of AWS, namely, DynamoDB & Lambda Functions. *Worry not, backend coding knowledge is not required.*


## 🚪 Step 1 - Sign In To Superflows Console

Creating the Superflows account is very simple. Go to <a href="https://console.superflows.dev">console.superflows.dev</a>. Click Get Started. If you don't have an account, sign up first. During sign in, submit your email, receive the otp, get it verified and sign in is done. Should you have any doubts, the video given below will guide you.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KP3ncvsmUGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 🧱 Step 2 - Create A New Supermod

If you are signing in for the first time, you will not have any previously created supermods. Click on the create button. Next page shows the available supermods. Choose the authentication supermod. On the new supermod page, give a name to the supermod. For instance, if the name of your project is ABC, a reasonable name for the supermod would be ABC-auth. Still, you are free to name it however you want. Note that the name string can contain alphabets, numbers and hyphens. Click the submit button and your supermod will be created. 

Please refer to the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FgISYDKThno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 🚀 Step 3 - Create A New Deployment

Click view and navigate to the supermod page. This supermod does not have any prior deployments. Go ahead, click on create. The new deployment page will open up. Admin email address is for the administrator account of the authentication supermod. Correspondence email address is the one, which will be used for email transactions, such as sending one-time-passwords. 

> Note that a verification email will be sent to the correspondence email address. Email sending will not work unless verification is completed succesfully.

Click on submit. If all goes well, the deployment will be created successfully. View it. You will see that it is being deployed. Deployment takes a few minutes to complete. 

Coming back to this page after a few minutes, we see that the deployment is complete and the supermod is available for use. 

**Api Id** - It is used to connect the frontend with the backend. This identifier is inserted into the frontend so that the frontend knows, which backend deployment to connect to.

**Sample Code** - This is the sample code provided for your convenience. You can download it and understand how to use the authentication supermod in your app. 

**Demo Instance** - The sample code is also deployed onto an instance and provided to you. This helps you immediately experience the functionality of the supermod. 

In case you have further doubts, please refer to the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UhRZBwCSKk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 🛠 Step 4 - Test The Authentication Module

Open the deployment instance in a new tab. 

### New Account / Sign In

Click the sign in button from the navigation bar. The sign in page will load. Enter an email address, any email other than the admin email address. Then press submit. Account does not exist error will be thrown. This is because the account for the email address does not exist. Go to sign up.

On the sign up page, enter your name, the email address, accept the communication and terms of use and then press submit. The account will be created and a one time password (OTP) will sent to the email address. User will then be navigated to the verify page. Look up the OTP in your inbox, enter it and press submit. You will be signed in if the OTP is correct.

### Administrator Functionality

Sign out if you are already signed in. Sign in with the administrator email address now. After administrator sign in is successful, the profile menu dropdown (the top right menu in the navigation bar) will show an admin menu. Click the authentication menu item from the admin menu. You will then be taken to the administrator section.

Administrator section is used for the following tasks:
- Looking up user information such as name, email address, active status, recent access logs
- Promoting an existing user to admin
- Demoting an existing user from admin
- Signing a user out
- Updating the name of a user

You can refer to the video given below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/PWPfNGsO1AM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 🍱 Step 5 - Get The Sample Code Working

The purpose of the sample app is to give you a ready code-base for integrating the authentication microfrontend into your application. Download the code and run it inside your web server. It will start working out of the box.

### Code Structure

The entire code is in HTML, CSS and Javascript. Please go through the code, it is extensively commented for your easier understanding.

The sample app contains the following files:
- index.html
- auth.html
- styles.css
- util.js

### index.html

- This file functions as the entry point of the sample app
- It is simply a wrapper for the authentication supermod declared in auth.html
- If the user is signed in, it shows the sign in information
- If the user is not signed in, it shows a link to the sign in page

### auth.html

- This file integrates the authentication supermod
- It handles the sign in and sign out events as well

### styles.css

- Custom css styles are specified in this css stylesheet

### util.js

- This javascript file contains some simple utilities


## Step 6 - Customize The Appearance

To customize the look and feel, you can utilize the css custom properties and parts that are exposed by the sf-user-auth components.

### sf-user-auth

- title
- subtitle
- container
- errormsg
- successmsg
- input
- submit
- buttonprimary
- badge

### Ready-to-use Themes

For your convenience, I have pre-created and open-sourced a few different themes. Go through them. Please feel free to use them however you want in your project. All the customizations are present in the styles.css file.

### Theme - Slate

[Open Project In New Tab](https://replit.com/@SuperflowsAppv3/SfUserAuth-Slate)

<iframe src="https://SfUserAuth-Slate.superflowsappv3.repl.co" width="400" height="800" ></iframe>

### Theme - Taxi

[Open Project In New Tab](https://replit.com/@SuperflowsAppv3/SfUserAuth-Taxi)

<iframe src="https://SfUserAuth-Taxi.superflowsappv3.repl.co" width="400" height="800" ></iframe>

### Theme - Glass

[Open Project In New Tab](https://replit.com/@SuperflowsAppv3/SfUserAuth-Glass)

<iframe src="https://SfUserAuth-Glass.superflowsappv3.repl.co" width="400" height="800" ></iframe>

### Theme - Stark

[Open Project In New Tab](https://replit.com/@SuperflowsAppv3/SfUserAuth-Stark)

<iframe src="https://SfUserAuth-Stark.superflowsappv3.repl.co" width="400" height="800" ></iframe>

## Conclusion

* This tutorial demonstrated how to quickly setup the authentication supermod.
* The tutorial then showed how to consume it in your app.
* Lastly, the tutorial demonstrated the possible customization options.
    

## Resources

Adding some resources below for your convenience.

### SfUserAuth Frontend Code Repository

[GitHub Link](https://github.com/superflows-dev/sf-user-auth)

### SfUserAuth Backend Code Repository

[GitHub Link](https://github.com/superflows-dev/sf-user-auth-backend)

### SfUserAuth API Documentation

[Swagger Link](https://app.swaggerhub.com/apis/SUPERFLOWSAPP3/SfAuth_Backend/1.0.0#/)

### SfUserNav NPM Library

[NPM Link](https://www.npmjs.com/package/sf-nav)

### SfUserAuth NPM Library

[NPM Link](https://www.npmjs.com/package/sf-user-auth)

### Join The Community

[Join Now](https://discord.gg/ksEXS4P9h6)

### YouTube Channel

[**View Channel**](https://www.youtube.com/channel/UCYNJLCE48yir4DsquciBuDw)

### Documentation

[Read Documentation](https://superflows.dev)