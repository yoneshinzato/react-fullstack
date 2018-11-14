const EventEmitter = require('events');

const ibento = new EventEmitter();

ibento.on('x', function(gluglu){
    console.log("Aooooo, sofrência!", gluglu.nomeEvento);
})

ibento.emit('x', {'nomeEvento': 'x'});