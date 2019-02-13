const firebase = require('firebase')

// Required for side-effects
require('firebase/firestore')

var config = require('./config.json')

export const fbase = firebase.initializeApp(config)
const db = fbase.firestore()

export var fbprovider = new firebase.auth.FacebookAuthProvider();
export var googleprovider = new firebase.auth.GoogleAuthProvider();

export default  db
