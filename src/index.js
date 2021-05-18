// const rl = require('./interface')

// rl.question('E á POO, ein?', resposta => {
//     console.log(`Sua resposta foi: ${resposta}`)
//     rl.close();
// })

const options = require('./data')
const MachineOption = require('./controller/class')

let sorteio = new MachineOption({opt: options}).sort()

console.log(sorteio)