export const goToBuy =(history)=>{
    history.push('/pagina-principal')
}

export const goToLoginPage =(history)=>{
    history.push('/login')
}

export const goToSignUp =(history)=>{
    history.push('/cadastro')
}

export const goToAdress =(history)=>{
    history.push('/cadastro/endereco')
}

export const goToHomePage =(history)=>{
    history.push('/')
}

export const goToProfilePage =(history)=>{
    history.push('/meu-perfil')
}

export const goToAddressEdit =(history)=>{
    history.push('/editar-endereco')
}

export const goToSignUpEdit =(history)=>{
    history.push('/editar-cadastro')
}

export const goToShoppingCart =(history)=>{
    history.push('/carrinho')
}

export const logOut = (history) => {
    localStorage.removeItem('token')
    history.push('/login')
}
