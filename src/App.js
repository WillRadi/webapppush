import './App.css';

import React, { useEffect } from "react";
import { onMessage, getToken } from "firebase/messaging";
import { messaging } from "./firebase";

function App() {
  function test() {
    console.log('passou no teste');
  }

  // Registrar o Service Worker
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
    // Configurar recebimento de mensagens em primeiro plano
    onMessage(messaging, (payload) => {
      console.log("Mensagem recebida no app:", payload);
      // Exibir notificação ou atualizar o estado do app
    });

    // Solicitar permissão para notificações
    const requestPermission = async () => {
      try {
        const token = await getToken(messaging, {
          vapidKey: "BL78wBZ7tj5H4X_lEjlUDvutAG6dyfWQy8oEYCmrywGvtWFRpqA1Vbspfo6e6d8JfTlHLsMgACdGQ5hqhIiILb4"
        });
        if (token) {
          console.log("Token de notificação:", token);
          // Armazene o token no backend, se necessário
        } else {
          console.log("Não foi possível obter o token.");
        }
      } catch (error) {
        console.error("Erro ao obter o token:", error);
      }
    };

    requestPermission();
  }, []);

  return (
    <div className="App">
      {test()}
      <h1>Carregou o App.js</h1>
    </div>
  );
}

export default App;
