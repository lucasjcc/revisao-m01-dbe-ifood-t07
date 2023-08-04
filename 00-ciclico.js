// 1) Em 2002 teve Copa do Mundo. A Copa acontece de 4 em 4 anos. Em 4576 terá Copa do Mundo?

// const anoDeCopa = 2002
// const periodo = 4
// const anoDesejado = 2026

// const diferenca = anoDesejado - anoDeCopa

// const restoDaDivisao = diferenca % periodo
// console.log("O resto da divisão é: " + restoDaDivisao)

// if (restoDaDivisao === 0) {
//     console.log("É ano de Copa")
// } else {
//     console.log("Não é ano de Copa")
// }

// 2) Eu tenho uma fila de alunos e vou sortear algum.
const filaAlunos = ["Vitera", "Vidal", "Ed", "Juninho", "Guidão", "Dani", "Caldeira"]
const numeroSorteado = 9
const periodo = filaAlunos.length

const restoDaDivisao = numeroSorteado % periodo

if (restoDaDivisao === 0) {
    console.log(filaAlunos[filaAlunos.length - 1])
} else {
    const sorteado = filaAlunos[restoDaDivisao - 1]
    console.log(sorteado)
}
