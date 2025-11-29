class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque = ""

        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        }

        console.log("o " + this.tipo + " atacou usando " + ataque)
    }
}

let h1 = new Heroi("Ryu", 23, "ninja")
h1.atacar()

let h2 = new Heroi("Merlin", 80, "mago")
h2.atacar()

let h3 = new Heroi("Thor", 40, "guerreiro")
h3.atacar()
