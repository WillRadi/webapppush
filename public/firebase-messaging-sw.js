importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyC5eLLPLFR7ZKko4dqgFHk368nA1NPRfGE",
  authDomain: "webapppush-b68ec.firebaseapp.com",
  projectId: "webapppush-b68ec",
  storageBucket: "webapppush-b68ec.appspot.com",
  messagingSenderId: "611276232847",
  appId: "1:611276232847:web:1df9da8180ac3561ec38fa"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Mensagem de segundo plano recebida:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
