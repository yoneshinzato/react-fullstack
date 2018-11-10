import React, {Component} from 'react'
import { cadastraPostit, alteraPostit, removePostit } from '../../redux/actions'
import {connect} from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import './Postit.css'


//cadastrada, somente visualizado ou removido - três estados do postit
//postit é um formulário 
class Postit extends Component {
    constructor(props){
        super(props)
        this.state = { editando: false}
        //começa como falso porque estão sendo visualizados. 
        //se estiverem sendo editados, o editando: true
        
    }

    habilitaEdicao = () =>{
        //trocar o editando de false para true
        this.setState({editando:true})
        //quando estiver editando false quer dizer que está sendo visualizado
    }

    removePostit = (evento) => {
        evento.stopPropagation()
        //pra ação de remover é só passar o id
        this.props.removePostit(this.props.id)
        //a função dispara a ação
        //ta chamando a ação do props e essa ação vai estar no action viu
    }

    

//<Postit cadastraPostit={cadastraOuAlteraPostit} />
    cadastraOuAlteraPostit = (evento) => {
        //a função acima pega os dados e passar pra cadastraPostit, que é a que dispara a ação
        evento.preventDefault()

        const cadastrando = !this.props.id
        //pra estar cadastrando, id tem que estar vazio

       const form = evento.target

       if(cadastrando){
           const dados = {
            //    id: `96959919-1a17-4f49-b8d5-6a7c99789e5${Math.random(100)}`,
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
       }    else {
           //tem que ter uma função altera postit com os dados alterados
           const dados = {
               id: this.props.id,
               titulo: form.titulo.value,
               texto: form.texto.value
           }

           this.props.alteraPostit(dados)
           //só consegue usar o id no props aí em cima

           this.setState({editando:false})
           //editando false porque ele está sendo visualizado
           
       }
    
    }
                 

    render(){
    const cadastrando = !this.props.id
    //se retorna true é porque não tinha id

        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit} onClick={this.habilitaEdicao}>
                {!cadastrando && this.state.editando &&(
                    <button type="button" className="postit__botao-remover" onClick={this.removePostit}>
                        <MdDeleteForever />
                    </button> 
                )}
                
                {/* não está cadastrando e estar editando */}
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
                {(cadastrando || this.state.editando) && (
                    <button className="postit__botao-concluir">
                        Concluído
                    </button>
                )}
                {/* entre parenteses porque sao duas funções 
                quando não precisa do else usa esse if com operador lógico
                */}
                

            </form>
        ) 
    }
}

export default connect(
    null,
    {cadastraPostit, alteraPostit, removePostit}
)(Postit)
//null porque quer só disparar a ação 0 não precisa de nenhuma info do usuário

// const props = {cadastraPostit: cadastraPostit}