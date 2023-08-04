// Contador quantos alunos tiveram média igual ou maior que 60 (passaram de ano)


const medias = [40, 60, 80, 100, 97.2, 56.7, 35, 90]

let contadorMedias = 0
for (let media of medias) {
    if (media >= 60) {
        contadorMedias += 1
    }
}

console.log(contadorMedias)