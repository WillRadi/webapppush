import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC5eLLPLFR7ZKko4dqgFHk368nA1NPRfGE",
  authDomain: "webapppush-b68ec.firebaseapp.com",
  projectId: "webapppush-b68ec",
  storageBucket: "webapppush-b68ec.appspot.com",
  messagingSenderId: "611276232847",
  appId: "1:611276232847:web:1df9da8180ac3561ec38fa"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, onMessage };
