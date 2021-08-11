let button = document.querySelector('button')
let playerNames = document.querySelector('#playerNames')
let selection = document.querySelector('#gameSelection')
let footballForm = document.querySelector('#footballForm')
let scoreKeeper = document.querySelector('#scoreKeeper')
let tableTennisForm = document.querySelector('#tableTennisForm')
let playerOneName = document.querySelector('#playerOneName')
let playerTwoName = document.querySelector('#playerTwoName')

console.log(scoreKeeper.children)


let firstTo = 0
let playerOne = ""
let playerTwo = ""
let playerOneScore = 0
let playerTwoScore = 0
let footballSelected = false
let footballFormSelections = [footballForm.one, footballForm.three, footballForm.five]
let tableTennisFormSelections = [tableTennisForm.five, tableTennisForm.ten, tableTennisForm.twenty]

let tableTennisImage = 'https://cdn.pixabay.com/photo/2014/04/02/17/00/ping-pong-307629_960_720.png'
let footballImage = 'https://clipart-best.com/img/football/football-clip-art-12.png'

function createImage() {
    let image = document.createElement('img')

    if (selection.gameSelectionChoice.value == 'Football') {
        image.src = footballImage
        image.id = 'footballImage'
    } else {
        image.src = tableTennisImage
        image.id = 'tableTennisImage'
    }

    document.body.append(image)
}

button.addEventListener('click', function (evt) {
    evt.preventDefault()

    if (selection.gameSelectionChoice.value != 'Please Choose a Game') {
        createImage()

        if (selection.gameSelectionChoice.value == 'Football') {
            footballSelected = true
            footballForm.style.display = 'block'
        } else tableTennisForm.style.display = 'block'

        selection.style.display = 'none'
    }
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

        tableTennisForm.style.display = 'none'
        playerNames.style.display = 'block'
    })
}

playerNames.addEventListener('submit', function (evt) {
    evt.preventDefault()

    if ((playerNames.player1.value != "") && (playerNames.player2.value != "")) {
        playerOne = playerNames.player1.value
        playerTwo = playerNames.player2.value

        scoreKeeper.children.playerOneBtn.innerText = `${playerOne}  +1`
        scoreKeeper.children.playerTwoBtn.innerText = `${playerTwo}  +1`

        playerOneName.innerText = playerOne
        playerTwoName.innerText = playerTwo


        playerNames.style.display = 'none'
        scoreKeeper.style.display = 'block'
    }
})

scoreKeeper.children.playerOneBtn.addEventListener('click', function () {
    playerOneScore += 1

    if (playerOneScore >= firstTo) {
        scoreKeeper.style.display = 'none'
        let text = document.createElement('p')
        text.innerText = `${playerOne} wins`
        document.body.append(text)
    }

    scoreKeeper.children.showScore.innerText = `${playerOneScore} : ${playerTwoScore}`
})

scoreKeeper.children.playerTwoBtn.addEventListener('click', function () {
    playerTwoScore += 1
    if (playerOneScore >= firstTo) {
        scoreKeeper.style.display = 'none'
        let text = document.createElement('p')
        text.innerText = `${playerOne} wins`
        document.body.append(text)
    }

    scoreKeeper.children.showScore.innerText = `${playerOneScore} : ${playerTwoScore}`
})
scoreKeeper.children.resetBtn.addEventListener('click', function () {
    playerOneScore = 0
    playerTwoScore = 0
    scoreKeeper.children.showScore.innerText = `${playerOneScore} : ${playerTwoScore}`
})