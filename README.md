# Firebase base project
### Overview
This is a simple example of authentication using React with Firebase. Redux-like manager Storeon are used for state management.

![alt text](https://github.com/dtsiki/firebase-auth/blob/master/previews/unauthed-main-screen.png "Unauthorized main page")

![alt text](https://github.com/dtsiki/firebase-auth/blob/master/previews/sign-up-screen.png "Sign up page")

![alt text](https://github.com/dtsiki/firebase-auth/blob/master/previews/profile-screen.png "User profile page after successful authorization")

![alt text](https://github.com/dtsiki/firebase-auth/blob/master/previews/authed-main-screen.png "Authorized main page")

![alt text](https://github.com/dtsiki/firebase-auth/blob/master/previews/secret-page-screen.png "Admin only page")

### Features
* Custom routes: public (everyone can access to), private (only authenticated user can access to) and admin (a restricted routes that only admin users can see)
* Sign up and sign in
* Sign out
* Show user profile
* Update user profile
* Delete account
* Show notifications

### Installation & Setting up Firebase
Clone this repository:

```sh
$ git clone https://github.com/dtsiki/firebase-auth.git
$ cd firebase-auth
```

Install project dependencies:

```sh
npm i
```

Go to the Firebase website and create a Cloud Firestore database, then set up authentication (Sign-in method tab, Email/Password type). Then you need to get project’s configuration details: go back to the project overview and get the configuration details (apiKey, authDomain, databaseURL, etc). Create environment variable files .env in the root of your project and copy the configuration details into their environments:

```sh
REACT_APP_FIREBASE_KEY=''
REACT_APP_AUTH_DOMAIN=''
REACT_APP_PROJECT_ID=''
REACT_APP_STORAGE_BUCKET=''
REACT_APP_MESSAGING_SENDER_ID=''
REACT_APP_APP_ID=''
REACT_APP_MEASUREMENT_ID=''
```

In the project directory run:

```sh
npm start
```

Then open [http://localhost:3000](http://localhost:3000) to view the profject in your browser.

If you are more of a fan of Yarn, you can use the following command instead:

```sh
yarn i
yarn start
```