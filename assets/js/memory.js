let array = [
    { src: "assets/img/memory/p1.png" },
    { src: "assets/img/memory/p2.png" },
    { src: "assets/img/memory/p3.png" },
    { src: "assets/img/memory/p4.png" },
    { src: "assets/img/memory/p5.png" },
    { src: "assets/img/memory/p6.png" },
    { src: "assets/img/memory/p7.png" },
    { src: "assets/img/memory/p8.png" },
    { src: "assets/img/memory/p9.png" },
    { src: "assets/img/memory/p10.png" },
    { src: "assets/img/memory/p11.png" },
    { src: "assets/img/memory/p12.png" }
]
let content = document.getElementById("content")
let many = document.getElementsByClassName("radio")

function radio() {
    for (let i = 0; i < many.length; i++) {
        if (many[i].checked) {
            document.querySelector(`.chouse`).style.display = "none"
            for (let j = 0; j < many[i].value; j++) {

                let img = document.createElement("img")
                let img1 = document.createElement("img")
                let imgBack = document.createElement("img")
                let imgBack1 = document.createElement("img")
                let div = document.createElement("div")
                div.style.position = "relative"
                let div1 = document.createElement("div")
                div1.style.position = "relative"
                img.src = array[j].src
                imgBack.src = "assets/img/memory/question_mark_PNG102.png"
                div.appendChild(img)
                div.appendChild(imgBack)
                img1.src = array[j].src
                imgBack1.src = "assets/img/memory/question_mark_PNG102.png"
                div1.appendChild(img1)
                div1.appendChild(imgBack1)

                img.className = "front"
                img1.className = "front"
                img.style.position = "absolute"
                img1.style.position = "absolute"
                imgBack.className = `back`
                imgBack1.className = `back`
                imgBack.style.position = "absolute"
                imgBack1.style.position = "absolute"
                div.className = "memory-card"
                div.dataset.framework = `img${j}`
                div1.className = "memory-card"
                div1.dataset.framework = `img${j}`

                content.appendChild(div)
                content.appendChild(div1)
                content.style.display = "grid"

                let cardsArray = document.querySelectorAll(".memory-card")

                cardsArray.forEach(card => {
                    let rand = Math.floor(Math.random() * document.getElementsByTagName("img").length)
                    card.style.order = rand
                })
                content.style.gridTemplateColumns = `repeat(${many[i].value / 2}, 1fr)`
            }
        }
    }
    let cards = document.querySelectorAll(`.memory-card`)
    let flipCard = false
    let block = false
    let firstCard
    let secondCard

    const flippen = e => {
        if (block) return;
        let target = e.target.parentElement
        console.log(target.parentElement)
        if (target === firstCard) return;

        target.classList.add("flip")

        if (!flipCard) {
            flipCard = true
            firstCard = target
            console.log(firstCard)
        } else {

            flipCard = false
            secondCard = target
            console.log(secondCard)
            check()

        }
    }

    const check = () => {
        if (firstCard.dataset.framework == secondCard.dataset.framework) {
            setTimeout(() => {

                firstCard.removeEventListener("Click", flippen)
                secondCard.removeEventListener("Click", flippen)
                // firstParent.classList.remove("flip")
                // secondParent.classList.remove("flip")
                //firstCard.style.opacity = 0
                // secondCard.style.opacity = 0
            }, 1000)

        } else {
            console.log("not equal")
            block = true
            setTimeout(() => {

                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")
                reset()
            }, 1000)
        }
    }

    let reset = () => {
        flipCard = block = false;
        console.log(flipCard)
        console.log(block)
        firstCard = secondCard = null
        console.log(firstCard)
        console.log(secondCard)
    }

    cards.forEach(card => {
        card.addEventListener("click", flippen)
    })

}
document.getElementById("los").addEventListener("click", () => {
    radio()
})

