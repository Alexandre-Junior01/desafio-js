class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "não possui ataque definido"; 
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Alexandre", 50, "guerreiro");
const heroi2 = new Heroi("Danillo", 80, "mago");
const heroi3 = new Heroi("Kenny", 75, "monge");
const heroi4 = new Heroi("Matheus", 35, "ninja");

heroi1.atacar(); 
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar(); 
