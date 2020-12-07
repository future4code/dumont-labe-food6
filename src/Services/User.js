import React from 'react'
import axios from 'axios'
import BaseUrl from '../Constants/BaseUrl'


export const login = (body, history) => {
  axios.post(`${BaseUrl}/login`, body).then(response => {
      localStorage.setItem('token', response.data.token)
      // goToBuy(history)
  }).catch(error => {
      console.log(error.message)
      alert('E-mail ou senha inválidos!')
  })
}

export const signUp = (body, history) => {
  axios.post(`${BaseUrl}/signup`, body).then(response => {
      localStorage.setItem('token', response.data.token)
      alert('Cadastro efetuado com sucesso!')
      // goToBuy(history)
  }).catch(error => {
      console.log(error.message)
  })
}