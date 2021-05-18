// const rl = require('./interface')

// rl.question('E á POO, ein?', resposta => {
//     console.log(`Sua resposta foi: ${resposta}`)
//     rl.close();
// })

// const options = require('./data')
// const MachineOption = require('./controller/class/machine')
// let sorteio = new MachineOption({opt: options}).sort()

// console.log(sorteio)

const options = require('./data')
const User = require('./controller/class/user')

let usuario = new User({opt: options, name: 'Maria', selected: 'Papel'}).game()

console.log(usuario)