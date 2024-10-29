import './App.css';

import React, { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { messaging } from "./firebase";
import { requestPermission } from "./requestPermission"

function App() {
  function test() {
    console.log('passou no teste')
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.error("Falha ao registrar o Service Worker:", error);
      });
  }

  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log("Mensagem recebida no app:", payload);
      // Exibir notificação ou atualizar o estado do app
    });
  }, []);

  return (
    <div className="App">
      {test()}
      {console.log('outro teste')}
      <h1>Carregou o App.js</h1>
      <requestPermission />
    </div>
  );
}

export default App;
