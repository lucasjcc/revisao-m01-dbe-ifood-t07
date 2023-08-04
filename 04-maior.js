const medias = [40, 60, 80, 95, 56.7, 35, 90]

let maiorValorAteEntao = medias[0]
for (let media of medias) {
    if (media > maiorValorAteEntao) {
        maiorValorAteEntao = media
    }
}

console.log(maiorValorAteEntao)