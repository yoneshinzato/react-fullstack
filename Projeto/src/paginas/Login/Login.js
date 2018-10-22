import React from 'react'
import Formulario from '../../componentes/Formulario'
import './Login.css'

function Login() {
  return (
    <main className="login">
      <Formulario titulo="Login" texto="Entre com seu email e senha.">
        <Formulario.Legenda htmlFor="email">Email:</Formulario.Legenda>
        <Formulario.Campo id="email" type="email" name="email" placeholder="Email"  />
        
        <Formulario.Legenda htmlFor="senha">Senha:</Formulario.Legenda>
        <Formulario.Campo id="senha" type="password" name="senha" placeholder="Senha"  />
        
        <Formulario.Botao>Enviar</Formulario.Botao>
        
        <Formulario.Link href="/conta">Criar uma conta</Formulario.Link>
      </Formulario>
    </main>
  );
}

export default Login