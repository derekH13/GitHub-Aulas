
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("Método deve ser implementado pela subclasse");
    }
}


class Cachorro extends Animal {
    emitirSom() {
        return "Au Au!";
    }
}


class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
}


const cachorro1 = new Cachorro("Rex", 3);
const gato1 = new Gato("Mia", 2);
const cachorro2 = new Cachorro("Buddy", 5);


console.log(`${cachorro1.nome} diz: ${cachorro1.emitirSom()} e tem ${cachorro1.idade} anos.`);
console.log(`${gato1.nome} diz: ${gato1.emitirSom()} e tem ${gato1.idade} anos.`);
console.log(`${cachorro2.nome} diz: ${cachorro2.emitirSom()} e tem ${cachorro2.idade} anos.`);
