const EventEmitter = require('events');

class EnviaMensagem extends EventEmitter {
    enviar(mensagem){
        console.log('Enviando Mensagem', mensagem);
        this.emit('mensagemEnviada', mensagem);
    }
}

module.exports = EnviaMensagem;