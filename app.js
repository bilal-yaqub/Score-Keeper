let button = document.querySelector('button')
let selection = document.querySelector('#gameSelection')
let footballForm = document.querySelector('#footballForm')
let tableTennisForm = document.querySelector('#tableTennisForm')

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

    if (selection.gameSelectionChoice.value == 'Football') footballForm.style.display = 'block'
    else tableTennisForm.style.display = 'block'

    selection.style.display = 'none'
})

for (let i = 0; i < 3; i++) {
    let footballOption = footballFormSelections[i]
    let tableTennisOption = tableTennisFormSelections[i]

    footballOption.addEventListener('change', function () {
        footballForm.style.display = 'none'
    })

    tableTennisOption.addEventListener('change', function () {
        footballForm.style.display = 'none'
    })
}