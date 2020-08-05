import firebase from "firebase"

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_APPKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID
}

firebase.initializeApp(config)