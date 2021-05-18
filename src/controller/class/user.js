const MachineOption = require('./machine')

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
            return `${this._name}, você empatou! - usuário: ${this._selected} | máquina: ${this._sort}`
        } else {
            return `${this._name}, A máquina está aprendendo - usuário: ${this._selected} | máquina: ${this._sort}`
        }
    }

    game(){
        return this.logic();
    }
}

module.exports = User