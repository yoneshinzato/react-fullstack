const EventEmitter = require('events');
const eventEvent = require('./eventEvent.js');

events.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem "${mensagem}" foi enviada com sucesso!`);
});


enviaMensagem.enviar('Olá mundo!');