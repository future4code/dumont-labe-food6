import React from 'react';
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../Hooks/UseForm'
import { updateProfile } from '../../Services/User'
import { TextField, Button } from '@material-ui/core'
import Header from '../../Components/Header/Header'



function SignUpEditPage() {
    const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: ""
  })
  
  // useProtectPage()
  const history = useHistory()

 
  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(form, history)
  }



  return (
    <S.Container>
        <Header title={'Editar'}/>
        <S.FormEditSignUp onSubmit={handleSubmit}>
        <TextField 
          value={form.name} 
          onChange={handleInputChange}
          variant='outlined'
          label='Nome'
          placeholder='Nome e sobrenome'
          name='name'
          type='text'
          required
        />
        <br />
        <TextField 
          value={form.email}
          onChange={handleInputChange}
          variant='outlined'
          label='E-mail'
          placeholder='email@email.com'
          name='email'
          type='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
          required
        />
        <br />
        <TextField 
          value={form.cpf}
          onChange={handleInputChange}
          variant= 'outlined'
          label='CPF'
          placeholder='000.000.000-00'
          minlength="11"
          name='cpf'
          type='cpf'
          pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}'
          required
        />
        <br/>
          <Button 
            variant='contained'
            color="primary"
            type="submit"
          >
            SALVAR
          </Button>
        </S.FormEditSignUp>
    </S.Container>
  );
}
export default SignUpEditPage;

