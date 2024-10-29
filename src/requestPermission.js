import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

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

export default requestPermission;
