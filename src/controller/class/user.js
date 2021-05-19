const MachineOption = require('./machine');
const inquirer = require('inquirer');
const options = require('../../data');
const gameby = require('../../data/gameby')

class User extends MachineOption {
    constructor({opt, name, selected}) {
        super({opt});

        this._name = name;
        this._selected = selected;
        this._sort = this.sort();
    }

    set name(string) {
        this._name = string;
    }

    get name (){
        return this._name;
    }

    set selected(string) {
        this._selected = string;
    }

    get selected(){
        return this._selected;
    }

    logic(){
        if (this._selected === this._sort){
            return `${this._name}, você escolheu: ${this._selected}, e a máquina escolheu: ${this._sort}... houve um empate!`
        } else if ((this._selected === 'Pedra' && this._sort === 'Tesoura') || (this._selected === 'Tesoura' && this._sort === 'Papel') || (this._selected === 'Papel' && this._sort === 'Pedra')) {
            return `${this._name}, você escolheu: ${this._selected}, e a máquina escolheu: ${this._sort}... você ganhou!!!`
        } else {
            return `${this._name}, você escolheu: ${this._selected}, e a máquina escolheu: ${this._sort}... você perdeu ):`
        }

        // else if ((this._selected === 'Pedra' && this._sort === 'Papel') || (this._selected === 'Tesoura' && this._sort === 'Pedra') || (this._selected === 'Papel' && this._sort === 'Tesoura')){
        //     return `${this._name},Você perdeu! - usuário: ${this._selected} | máquina: ${this._sort}`
        // }
    }

    game(){
        console.info(gameby);
        return inquirer.prompt([
            {
                name: 'name',
                message: 'Qual o seu nome? ',
                default: 'Jogador'
            },
            {
                type: 'list',
                name: 'jokenpo',
                message: 'Selecione uma opção: ',
                choices: options
            }
        ]).then((answers) => {
            this._name = answers.name
            this._selected = answers.jokenpo
            console.info(`${this.logic()}`)
        })
    }
}

module.exports = User