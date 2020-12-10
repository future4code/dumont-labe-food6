import React from 'react'
import axios from 'axios'
import {BaseUrl} from '../Constants/BaseUrl'
import { goToBuy, goToAdress, goToProfilePage, logOut, goToLoginPage } from '../Routes/Cordinator'



// Função para logar
export const login = (body, history) => {
  axios.post(`${BaseUrl}/login`, body).then ((response) => {
    localStorage.setItem('user', response.data.user)
        
    if(response.data.user.hasAddress) {
      localStorage.setItem("token", response.data.token);
      alert(`Olá ${response.data.user.name}! Estou te redirecionando para o feed`)
      goToBuy(history)
  
    } else {
        localStorage.setItem("token", response.data.token);
        goToAdress(history);
    }
  }).catch(error => {
      alert('E-mail ou senha inválidos!')
      console.log(error.message)
  })
}
  

// Função de cadastro(nome, e-mail, cpf e senha) e cria login(mesmo e-mail e mesma senha)
export const signUp = (body, history) => {
  axios.post(`${BaseUrl}/signup`, body).then(response => {
      localStorage.setItem('token', response.data.token)
      goToAdress(history)
  }).catch(error => {
      console.log(error.message)
  })
}


// Função para cadastrar o endereço do usuário
export const address = (body, history) => {
  const axiosConfig = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  axios.put(`${BaseUrl}/address`, body, axiosConfig).then(response => {
      localStorage.setItem('token', response.data.token)
      alert('Cadastro efetuado com sucesso!')
      goToBuy(history)
  }).catch(error => {
      console.log(error.message)
      alert('Falha ao criar cadastro :( !')
  })
}


// Função para atualizar o endereço do usuário
export const editAddress = (body, history) => {
  const axiosConfig = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  axios.put(`${BaseUrl}/address`, body, axiosConfig).then(response => {
      localStorage.setItem('token', response.data.token)
      alert('Editado com sucesso!')
      goToProfilePage(history)
  }).catch(error => {
      console.log(error.message)
      alert('Falha ao editar endereço :( !')
  })
}


// Função para atualizar cadastro(nome, e-mail e cpf) do usuário
export const updateProfile = (body, history) => {
  const axiosConfig = {
    headers: {
      auth: localStorage.getItem('token')
    }
  }

  axios.put(`${BaseUrl}/profile`, body, axiosConfig).then(response => {
      localStorage.setItem('token', response.data.token)
      alert('Editado com sucesso!')
      logOut(history)
      goToLoginPage(history)
  }).catch(error => {
      console.log(error.message)
      alert('Falha ao editar cadastro :( !')
  })
}
