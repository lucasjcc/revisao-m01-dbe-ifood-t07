const medias = [40, 30, 80, 95, 56.7, 35, 90]

let menorValorAteEntao = medias[0]
for (let media of medias) {
    if (media < menorValorAteEntao) {
        menorValorAteEntao = media
    }
}

console.log(menorValorAteEntao)