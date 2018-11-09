import React, {Component} from 'react'
import { cadastraPostit } from '../../redux/actions'
import {connect} from 'react-redux'
import './Postit.css'

//cadastrada, somente visualizado ou removido - três estados do postit
//postit é um formulário 
class Postit extends Component {
    constructor(props){
        super(props)
        
    }

//<Postit cadastraPostit={cadastraOuAlteraPostit} />
    cadastraOuAlteraPostit = (evento) => {
        //a função acima pega os dados e passar pra cadastraPostit, que é a que dispara a ação
        evento.preventDefault()
       const form = evento.target
                 
        const dados = {
            id: `96959919-1a17-4f49-b8d5-6a7c99789e5${Math.random(100)}`,
            //gerado um id aleatorio já que não tem o backend ainda
            titulo: form.titulo.value, //name = "titulo" pega o valor digitado em titulo
            //é dessa forma que pega o valor lá do input texto
            texto: form.texto.value
        }

        //pega os dados digitados no formulario
        //enviar os dados passando para a função cadastraOuAlteraPostit
        this.props.cadastraPostit(dados)
        //dispara a ação

        form.reset() //vai limpar o formulario depois que preenche
    }

    render(){
const cadastrando = !this.props.id

        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
                <input
                    className="postit__titulo"

                    type="text"
                    name="titulo"
                    placeholder="Título"
                    autoComplete="off"
                    defaultValue={this.props.titulo}
                    //o valor que foi passado
                />
                <textarea 
                    className="postit__texto"
                    name="texto"
                    placeholder="Digite um texto..."
                    rows={5}
                    autoComplete="off"
                    defaultValue={this.props.texto}
                />
                {/* //o if vai no button. e o atributo que será usado será o id. this.props.id significa que está alterando */}
                <button className="postit__botao-concluir">
                    Concluído
                </button>

            </form>
        ) 
    }
}

export default connect(
    null,
    {cadastraPostit}
)(Postit)
//null porque quer só disparar a ação 0 não precisa de nenhuma info do usuário

// const props = {cadastraPostit: cadastraPostit}