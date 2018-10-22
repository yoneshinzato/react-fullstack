import React from 'react'
import Formulario from '../componentes/Formulario'
import './Conta.css'

function Conta() {
  return (
    <main className="conta">
      <Formulario titulo="Conta" texto="Envie o formulário para criar uma conta!">
        <Formulario.Legenda htmlFor="nome">Nome:</Formulario.Legenda>
        <Formulario.Campo id="nome" type="text" name="nome" placeholder="Nome"  />
        
        <Formulario.Legenda htmlFor="telefone">Telefone:</Formulario.Legenda>
        <Formulario.Campo id="telefone" type="tel" name="telefone" placeholder="Telefone"  />
        
        <Formulario.Legenda htmlFor="email">Email:</Formulario.Legenda>
        <Formulario.Campo id="email" type="email" name="email" placeholder="Email"  />
        
        <Formulario.Legenda htmlFor="senha">Senha:</Formulario.Legenda>
        <Formulario.Campo id="senha" type="password" name="senha" placeholder="Senha"  />
        
        <Formulario.Botao>Enviar</Formulario.Botao>
        
        <Formulario.Link href="/login">Fazer login</Formulario.Link>
      </Formulario>
    </main>
  );
}

export default Conta