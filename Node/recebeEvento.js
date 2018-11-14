const enviaMensagem = require('./enviaEvento.js');

const mensagem = new enviaMensagem();

mensagem.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem "${mensagem}" foi enviada com sucesso!`);
});

mensagem.enviar('Olá mundo!');