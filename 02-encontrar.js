// Encontrar os alunos que tiveram média igual ou maior que 60 (passaram de ano)

const medias = [40, 60, 80, 100, 97.2, 56.7, 35, 90]


let mediasEncontradas = []
for (let media of medias) {
    if (media >= 60) {
        mediasEncontradas.push(media)
    }
}

if (mediasEncontradas.length === 0) {
    console.log("Nenhuma média foi acima ou igual a 60")
} else {
    console.log(mediasEncontradas)
}



// let mediaEncontrada = false
// for (let media of medias) {
//     if (media >= 60) {
//         mediaEncontrada = media
//         break
//     }
// }

// if (!mediaEncontrada) {
//     console.log("Nenhuma média foi acima ou igual a 60")
// } else {
//     console.log(mediaEncontrada)
// }
