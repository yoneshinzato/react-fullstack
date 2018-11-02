import React, { Component } from 'react'
import  { NavLink } from 'react-router-dom'
//pega a rota pra ir
import './Menu.css'

// muda de estado então tem que ser feito classe
//<Menu usuario={props.usuaruio}
//const props = {usuario:usuario, deslogaUsuario:deslogaUsuario}
// class recebe props pelo construtor

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {aberto: false}
    }

//é pra fazer fora do render e do constructor
//pra não fazer o bind no construtor, obrigatoriamente tem que usar a arrow function

    abreOuFechaMenu = () =>{
        // evento.preventDefault()
        //tirar o preventdefault pro menu abrir e fechar
// o evento recebe tudo o que aconteceu, recebe o clique, etc
//preventDefault vai prevenir que o menu feche
//a tag navlink faz o preventDefault, por isso pode tirar
        if(this.state.aberto) {
            //state quarda a informacao se ele está ou não aberto
            //tem que fechar
            this.setState({ aberto: false}) //vai mudar o estado
            
        }else{
            //tem que abrir, esconde com um margem negativo com animação do css, vai ter que trocar essa classe --aberto
            this.setState({aberto: true})
        }

    }

    sair = () => {
        this.abreOuFechaMenu()
        this.props.deslogaUsuario()
    }




    render(){
        //primeiro vai observar se o menu está aberto ou não
        let classeDoBotao = 'navbar-menu__botao'
        let classesDasOpcoes = 'navbar-menu__opcoes'
        // condição para ver se está aberto
        if(this.state.aberto){
            //adicionar essa classe se estiver aberto
            classeDoBotao += " navbar-menu_botao--aberto"
            classesDasOpcoes += " navbar-menu__opcoes--aberto"
        }

        //no return só pode ter código html, por isso as condições acima não podem ficar dentro
        return(
            
            <nav className="navbar-menu">
                <a className={classeDoBotao} onClick={this.abreOuFechaMenu}>
                    Menu
                </a>
                {/* põe um onclik para chamar a função quando o evento do clique acontecer.
                Usa entre chaves porque é uma função, não um texto. nao passa parametro porque quem vai executar é o navegador
                quando o usuário clicar no menu 
                colocar o onclick no navlink para ver se funciona
            */}

                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink to='/quem-somos' activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                            Quem somos
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/contato' activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                            Contato
                        </NavLink>
                    </li>
                    {/* if logado 
                    //se existe usuário, mostra a tag com sair, se nao estiver logado, pega a com texto login 
                    o if no html é dentro de chaves 
                    pra acessar dentro do html, usa this.props.usuario */}
                    {this.props.usuario ? (<li>
                        <NavLink to='/login' activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>
                        {/* função sair vai armazenar o abreoufechamenu  */}
                            Sair
                        </NavLink>
                        {/* precisa saber se o usuário está ou não logado para mudar o texto aí em cima */}
                    </li>
                    
                    ) : (
                    
                    <li>
                        <NavLink to='/login' activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                            Login
                        </NavLink>
                        {/* precisa saber se o usuário está ou não logado para mudar o texto aí em cima 
                        não */}
                    </li>
                    )}
                     
                </ul>
            </nav>
        )
    }


}

export default Menu