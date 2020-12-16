import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToBuy } from "./../Routes/Cordinator";

export const useProtectPage = () => {
  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      goToLoginPage(history) // Se não tem token, vai redirecionar para a página de login
    } 
    else {
      goToBuy(history) // Para continuar logado, caso tenha token
    }
  }, [history]);
};
