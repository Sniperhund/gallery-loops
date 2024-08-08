const images = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300?random=4",
    "https://picsum.photos/300/300?random=5",
    "https://picsum.photos/300/300?random=6",
    "https://picsum.photos/300/300?random=7",
    "https://picsum.photos/300/300?random=8",
]

const forLoop = document.querySelector(".outputForLoop")
const whileLoop = document.querySelector(".outputWhileLoop")
const doWhileLoop = document.querySelector(".outputDoWhileLoop")

function createImage(parent, index) {
    const image = document.createElement("img")

    parent.appendChild(image)

    image.src = images[index]
}

for (let i = 0; i < images.length; i++) {
    createImage(forLoop, i)
}

let i = 0

while (i < images.length) {
    createImage(whileLoop, i)
    i++
}

i = 0

do {
    createImage(doWhileLoop, i)
    i++
} while (i < images.length)
