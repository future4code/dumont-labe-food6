import React from 'react'
import * as S from '../ScreenStyled'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../Hooks/UseForm'
import { signUp } from '../../Services/User'
// import { useProtectPage } from '../../Hooks/UseProtectPage'
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Header from '../../Components/Header/Header'
import LogoTitle from '../../Assets/logotitle.svg'
import { goToLoginPage } from '../../Routes/Cordinator'
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

{/* ------ESTILIZAÇÃO OK -------     */}


function SignUpPage(props) {
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
    <S.Container>
         <Header  />
         <ChevronLeftIcon onClick={()=>goToLoginPage(history)}/>
         <S.LineHeader/>
         <S.Logo>
        <S.TitleLogoLogin src={LogoTitle}/>
       
        </S.Logo>
       <S.P><b>Cadastrar</b></S.P>
        
      <S.FormInputsSignUp onSubmit={handleSubmit}>

        <TextField 
          value={form.name} 
          onChange={handleInputChange}
          variant='outlined'
          label='Nome'
          placeholder='Nome e sobrenome'
          name='name'
          type='text'
          required
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              showPassword ? (
                <VisibilityIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                /> ) : (
                <VisibilityOffIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                />
              )
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
          size="small"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              showPassword ? (
                <VisibilityIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                /> ) : (
                <VisibilityOffIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                />
              )
            ),
          }}
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
      </S.FormInputsSignUp>
    </S.Container>
  );
}
export default SignUpPage;