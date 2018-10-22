import React from 'react'
import Link from './Link'
import Botao from './Botao'
import Legenda from './Legenda'
import Campo from './Campo';

function Formulario() {
  return (
    <form>
      <Link href="/">Criar umaconta</Link>
      <Link href="/login">Fazer login</Link>
      <Botao>Enviar</Botao>
      <Botao disabled>Enviar</Botao>
      <Legenda htmlFor="email">Email:</Legenda>
      <Campo id="email" type="text" name="email" placeholder="email"  />
      <Legenda htmlFor="senha">Senha:</Legenda>
      <Campo id="senha" type="password" name="senha" placeholder="senha"  />
    </form>
  );
}

export default Formulario