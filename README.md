# Amazon Clone

Amazon Clone is the Fully functional Real custom made Web application that covers and entire E-commerece functionality from designing, User Authentication till Payments build using `React JS`, `Firebase` and `Stripe`.

- To view the deployed Application, click on the link given below : ***Amazon Clone Web App*** 
  - [https://clone-961f9.web.app/](https://clone-961f9.web.app/)  
  
**A Demo of the Web App :**

![Amazon Clone](https://github.com/asthasharma98/Amazon-clone/blob/master/Readme%20Resource/amazon.gif)

### Features 

As a user you can 

- Login/Log out or set up a New Account(Register) 
- View list of different products 
- Add and remove them from Cart 
- proceed to checkout page to buy the product 
- create orders and Make payments 
- View Order history and details 

### Project Structure

Project consist of following stages:

- Setting up a react Router 
- creating the Navigation bar
- Creating the home Page of Amazon - to display sample products
- Setting up a React [Context API](https://reactjs.org/docs/context.html) - The Context API is a component structure provided by the React framework, which enables us to share specific states across all levels of the application. In this project, there is need to manage two states: basket (to manage the shopping cart) and user (for managing the details of the currently logged in user).
- Setting up payment functionality using API's provided by [Stripe](https://stripe.com/in)(Stripe is an online payment processing and credit card processing platform for businesses.)
- Setting up a [Firebase](https://firebase.google.com/) - for Handling database, authentication and also for depolying application.Basically the database will be used to store the login information for the users, but the resource can be used for storing product information as well.
- Setting up Authentication
- Deployement 

### Firebase 

Firebase is a great service provided by Google for configuring the backend of any web application with all the general necessities like database preparation, authentication using various methods, etc.

#### Setup

- Create a project on Firebase, setup the database and setup sign-in method using Email/Password.
- Register your application and set up Firebase hosting.
- nstall necessary Firebase dependencies in your local setup.
  ```
  npm install -g firebase-tools && npm install firebase && firebase login
  ```
- Open the `Firebase SDK snippet` section in your Firebase project and copy paste the necessary configuration in a file named `firebase.js`.
- In this file, utilize the below code to make use of Firebase authentication and database.
   ```
   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth = firebase.auth();

   export { db, auth };
   ```
   
   **Reference link for above process is given below :**
   
   - [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)
   - [https://blog.logrocket.com/user-authentication-firebase-react-apps/](https://blog.logrocket.com/user-authentication-firebase-react-apps/)

 #### Deployment 
  
  - To deploy a production version of the Amazon Clone, we need to set up Firebase hosting. Type command in console
    ```
    npm init
    ```
  - Build your React application.
    ```
    npm run build
    ```
  - Setup Firebase hosting and deploy
    ```
    firebase deploy
    ```
  **Reference link for deploying application on firebase**
   - [https://firebase.google.com/docs/hosting/quickstart](https://firebase.google.com/docs/hosting/quickstart)
   - [https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425)
   
 ### Usage 
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:
```
npm start 
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```
npm build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

***To run the application locally; clone the repo, install dependencies and run the app.***

***To clone the repository***
```
https://github.com/asthasharma98/Amazon-clone.git
```

### Tools and Technologies 
  
  ![https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)	
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
  ![https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
 ![https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white](	https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  
### Reference Link 

- [How to integrate stripe with react](https://www.pluralsight.com/guides/how-to-integrate-stripe-with-react)
- [https://stripe.com/docs/stripe-js/react](https://stripe.com/docs/stripe-js/react)
- [https://www.toptal.com/react/react-context-api](https://www.toptal.com/react/react-context-api)
- [http://getbem.com/naming/](http://getbem.com/naming/)
- [https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react](https://www.digitalocean.com/community/tutorials/how-to-create-custom-components-in-react)

### Credits 

[Clever Programmer](https://www.youtube.com/c/CleverProgrammer)
  
