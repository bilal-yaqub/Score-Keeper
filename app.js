let button = document.querySelector('button')
let playerNames = document.querySelector('#playerNames')
let selection = document.querySelector('#gameSelection')
let footballForm = document.querySelector('#footballForm')
let scoreKeeper = document.querySelector('#scoreKeeper')
let tableTennisForm = document.querySelector('#tableTennisForm')

console.log(scoreKeeper.children)


let firstTo = 0
let playerOne = ""
let playerTwo = ""
let playerOneScore = 0
let playerTwoScore = 0
let footballSelected = false
let footballFormSelections = [footballForm.one, footballForm.three, footballForm.five]
let tableTennisFormSelections = [tableTennisForm.five, tableTennisForm.ten, tableTennisForm.twenty]

let tableTennisImage = 'http://pngimg.com/uploads/ping_pong/ping_pong_PNG102675.png'
let footballImage = 'https://lh3.googleusercontent.com/proxy/gKokMvyPADQXk45bBdC46k6seUvnCj5y2xAFqDzPsJaRnRmAaU8-8nicgWfd0hUBlz4VxitxGZ5cjK8TlHLN_ciJNU4teBoj_vnZC9CFR0zeVrdOrdQkmA'

function createImage() {
    if (selection.gameSelectionChoice.value != 'Please Choose a Game') {
        let image = document.createElement('img')
        image.classList.add('image')

        if (selection.gameSelectionChoice.value == 'Football') image.src = footballImage
        else image.src = tableTennisImage

        document.body.append(image)
    }
}

button.addEventListener('click', function (evt) {
    evt.preventDefault()

    createImage()

    if (selection.gameSelectionChoice.value == 'Football') {
        footballSelected = true
        footballForm.style.display = 'block'
    } else tableTennisForm.style.display = 'block'

    selection.style.display = 'none'
})

for (let i = 0; i < 3; i++) {
    let footballOption = footballFormSelections[i]
    let tableTennisOption = tableTennisFormSelections[i]

    footballOption.addEventListener('change', function () {
        switch (i) {
            case 0:
                firstTo = 1
                break;
            case 1:
                firstTo = 3
                break;
            case 2:
                firstTo = 5
                break;
        }
        footballForm.style.display = 'none'
        playerNames.style.display = 'block'
    })

    tableTennisOption.addEventListener('change', function () {
        switch (i) {
            case 0:
                firstTo = 5
                break;
            case 1:
                firstTo = 10
                break;
            case 2:
                firstTo = 15
                break;
        }

        footballForm.style.display = 'none'
        playerNames.style.display = 'block'
    })
}

playerNames.addEventListener('submit', function (evt) {
    evt.preventDefault()

    playerOne = playerNames.player1.value
    playerTwo = playerNames.player2.value

    scoreKeeper.children[2].innerText = `${playerOne}  +1`
    scoreKeeper.children[3].innerText = `${playerTwo}  +1`

    playerNames.style.display = 'none'
})

scoreKeeper.children[2].addEventListener('click', function () {
    playerOneScore += 1
    console.log(firstTo)
    if (playerOneScore >= firstTo) {
        scoreKeeper.style.display = 'none'
        let text = document.createElement('p')
        text.innerText = `${playerOne} wins`
        document.body.append(text)
    }

    scoreKeeper.children[0].innerText = `${playerOneScore} : ${playerTwoScore}`
})

scoreKeeper.children[3].addEventListener('click', function () {
    playerTwoScore += 1
    if (playerOneScore >= firstTo) {
        scoreKeeper.style.display = 'none'
        let text = document.createElement('p')
        text.innerText = `${playerOne} wins`
        document.body.append(text)
    }

    scoreKeeper.children[0].innerText = `${playerOneScore} : ${playerTwoScore}`
})
scoreKeeper.children[4].addEventListener('click', function () {
    playerOneScore = 0
    playerTwoScore = 0
    scoreKeeper.children[0].innerText = `${playerOneScore} : ${playerTwoScore}`
})