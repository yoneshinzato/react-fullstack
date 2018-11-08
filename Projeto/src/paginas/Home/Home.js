import React, { Component } from 'react'
import { connect } from 'react-redux'
//importa o conect
import { Redirect } from 'react-router-dom'
import './Home.css'
import carregando from './carregando.svg'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
           carregando: true 
        }
    }

    render(){
        if(!this.props.usuario){
            return <Redirect to="/login" />
            //vai importar do react router 
            //tá usando classe então tem que usar this.props.usuario
        }

        return(
            <main className="home">    
                {this.state.carregando ? (
                    <img className="home__loading" src={carregando} alt="carregando" />
                    ) : (
                    <div>

                    </div>
                    //aqui vai listar os postits amanhã
                    )

                    })
            </main> 
            //if dentro da tag coloca chave
         )
    }

}


export default connect(
    (state) =>({usuario: state.usuario})
    )(Home)
