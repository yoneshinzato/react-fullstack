const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('mensagemEnviada', function(){
//     console.log('Ouvi esse evento!');
// })

// //on é o listener é obrigatório ter dois parâmetros

// event.emit('mensagemEnviada');

//esse emite

event.on('mensagemEnviada', function(flub){
    console.log('Ouvi esse evento!', flub.nomedoEvento);
})

event.emit('mensagemEnviada', {'nomedoEvento': 'mensagemEnviada'});

//no console aparece "Ouvi esse evento!" e o nome da mensagem que foi enviada