import React from 'react'
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm'
import { signUp } from '../../Services/User'
// import { useProtectPage } from '../../Hooks/UseProtectPage'
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'



function SignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false)

  const {form, onChange} = useForm({
    name: "",
    email: "",
    cpf: "",
    password: ""
  })
  
  // useProtectPage() //Proteção da página
  const history = useHistory()

  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    signUp(form, history)
  }

  // Função para mostrar a senha ou não
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
      }
    }


  return (
    <S.SignupPageContainer>
      {/* <Logo src={LogoPage}/> */}
      <S.ChevronLeftIconStyled/>
        <S.LineHeader/>
      <S.FormSignUp onSubmit={handleSubmit}>
        <h3>Cadastrar</h3>
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
        <TextField 
          value={form.password}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Senha'
          placeholder='Mínimo 6 caracteres'
          minlength="6"
          name='password'
          required
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              showPassword ? <VisibilityIcon onClick={handleShowPassword}/> : <VisibilityOffIcon onClick={handleShowPassword}/>
            ),
          }}
        />
        <br/>
        <TextField 
          value={form.password}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Confirmar'
          placeholder='Confirme a senha anterior'
          minlength="6"
          name='password'
          type='password'
          required
        />
        <br/>
        <Button
          variant='contained'
          color="primary"
          type="submit"
        >
          CRIAR
        </Button>
      </S.FormSignUp>
    </S.SignupPageContainer>
  );
}
export default SignUpPage;