import React from 'react'
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../Hooks/UseForm'
import { address } from '../../Services/User'
import { TextField, Button } from '@material-ui/core'
import Header from '../../Components/Header/Header'
import { goToSignUp } from '../../Routes/Cordinator'



function AdressPage() {
  const {form, onChange} = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })
  
  
  const history = useHistory()

  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    address(form, history)
  }


  return (
    <S.Container>
      <Header/>
        <S.ChevronLeftIconStyled onClick={() => goToSignUp(history)}/>
        <S.LineHeader/>
        <S.FormAdress onSubmit={handleSubmit}>
        <S.TitleAdress>Meu endereço</S.TitleAdress>
        <TextField 
          value={form.street} 
          onChange={handleInputChange}
          variant='outlined'
          label='Logradouro'
          placeholder='Rua/ Av.'
          name='street'
          type='text'
          required
          size="small"
        />
        <br />
        <TextField 
          value={form.number}
          onChange={handleInputChange}
          variant='outlined'
          label='Número'
          placeholder='email@email.com'
          name='number'
          type='text'
          required
          size="small"
        />
        <br />
        <TextField 
          value={form.complement}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Complemento'
          placeholder='Apto./Bloco'
          name='complement'
          type='text'
          size="small"
        />
        <br/>
        <TextField 
          value={form.neighbourhood}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Bairro'
          placeholder='Bairro'
          name='neighbourhood'
          type='text'
          required
          size="small"
        />
        <br/>
        <TextField 
          value={form.city}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Cidade'
          placeholder='Cidade 6 caracteres'
          name='city'
          type='text'
          required
          size="small"
        />
        <br/>
        <TextField 
          value={form.state}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Estado'
          placeholder='Estado'
          name='state'
          type='text'
          required
          size="small"
        />
        <br/>
        <Button
          variant='contained'
          color="primary"
          type="submit"
        >
          SALVAR
        </Button>
      </S.FormAdress>
    </S.Container>
  );
}
export default AdressPage;