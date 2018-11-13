const showMessage = message => `Hi ${message}`

function sayIt(message){
    console.log(showMessage(message));
}

module.exports.saySomething = sayIt;