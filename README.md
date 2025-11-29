# 🧝‍♂️ Jogo – Classe de Herói

**Projeto feito para o desafio da DIO**

Este projeto foi criado para praticar lógica de programação usando classes, funções e condicionais.
A ideia é criar um herói com nome, idade e tipo, e fazer com que ele realize um ataque diferente conforme o tipo escolhido.

## 📌 Como funciona

**Cada herói possui:**

- nome

- idade

- tipo

E um método atacar() que mostra no console qual ataque ele usou.

## 📄 Trecho do código
```javaScript
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
```

## ✔️ Exemplo de saída
```
o mago atacou usando magia
o ninja atacou usando shuriken
```
## 🏆 Resultado Final
Este projeto reforça conceitos essenciais de programação, como classes, métodos e condicionais.
Além disso, ele pode ser expandido futuramente com:

- Entrada de dados pelo terminal

- Validação do tipo de herói

- Sistema de níveis ou experiência

- Lista de heróis criados pelo usuário

- Interface gráfica simples

- Novos tipos de ataque ou classes adicionais
