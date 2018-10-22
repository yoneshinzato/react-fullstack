import React from 'react'
import Link from './Link'
import Botao from './Botao'
import Legenda from './Legenda'
import Campo from './Campo';

function Formulario() {
  return (
    <form>
      <h1>Login</h1>
      <p>Entre com seu email e senha.</p>
      
      <Legenda htmlFor="email">Email:</Legenda>
      <Campo id="email" type="text" name="email" placeholder="email"  />
      <Legenda htmlFor="senha">Senha:</Legenda>
      <Campo id="senha" type="password" name="senha" placeholder="senha"  />
      <Botao>Enviar</Botao>
      <Link href="/conta">Criar uma conta</Link>
    </form>
  );
}

export default Formulario