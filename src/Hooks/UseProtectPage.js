
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToBuy } from "./../Routes/Cordinator";

export const useProtectPage = () => {
  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      goToLoginPage(history);
    } 
    // else {
    //   goToBuy(history) // Para continuar logado, caso tenha token
    // }
  }, [history]);
};
