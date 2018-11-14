const EventEmitter = require('events');

const events = new EventEmitter();

function enviar(mensagem) {
    console.log('Enviando mensagem:', mensagem);
    event.emit('mensagemEnviada', mensagem);
}

module.exports.enviar = enviar;
module.exports.events = events;