/**
 * --------------------------------
 * 
 * INITIAL SETUP INSTALLATION
 * 
 * --------------------------------
 * 
 * 1.visit : console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app(create config)
 * 4. install firebase : npm install firebase
 * 5. add config file to your project
 * 6. Danger: Do not publish  or make firebase config to public by publish those to github
 * 
 * --------------------------------
 * 
 * INTEGRATION SETUP
 * 
 * --------------------------------
 * 
 * 7. Visit: Go to Docs > build > Authentication > Web > get started
 * 8. export app from the firebase.config.js file : export default app
 * 9. Login.jsx:  import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 
 * --------------------------------
 * 
 * PROVIDER SETUP
 * 
 * --------------------------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and  provider
 * 13. active sign-in method (google, facebook, github, etc.)
 * 14.[Vite] : change 127.0.0.1 to localhost
 * 
 * --------------------------------
 * 
 * Others Method
 * 
 * --------------------------------
 * 
 * 1. activate the auth provider (create app, provider redirect url , client id, client secret)
 */ 