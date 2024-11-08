class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque
        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else {
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let herois = [
    new Heroi("Ricardo", 20, "mago"),
    new Heroi("Joana", 25, "guerreiro"),
    new Heroi("Carlos", 30, "monge"),
    new Heroi("Maria", 22, "ninja")
]

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar()
}