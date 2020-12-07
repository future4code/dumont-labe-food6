import React from 'react';
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../Hooks/UseForm'
import { login } from '../../Services/User'
// import { useProtectPage } from '../../Hooks/UseProtectPage'
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { goToSignUp } from '../../Routes/Cordinator'
import LogoTitle from '../../Assets/logotitle.svg'



function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false)

  const { form, onChange } = useForm({
    email: "",
    password: ""
  })
  
  // useProtectPage()
  const history = useHistory()

 
  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    login(form, history)
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
      <S.LoginPageContainer>
        <S.TitleLogo src={LogoTitle}/>
        <h3>Entrar</h3>
        <S.FormContainer onSubmit={handleSubmit}>
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
          <Button 
            variant='contained'
            color="primary"
            type="submit"
          >
            LOGIN
          </Button>
          <Button 
            color="primary"
            onClick={() => goToSignUp(history)}
          >
            Não possui cadastro? 
            Clique aqui.
          </Button>
        </S.FormContainer>
      </S.LoginPageContainer>
  );
}
export default LoginPage;