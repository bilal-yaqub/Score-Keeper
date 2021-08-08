let selection = document.querySelector('#gameSelection')
let button = document.querySelector('button')

let footballImage = 'https://lh3.googleusercontent.com/proxy/gKokMvyPADQXk45bBdC46k6seUvnCj5y2xAFqDzPsJaRnRmAaU8-8nicgWfd0hUBlz4VxitxGZ5cjK8TlHLN_ciJNU4teBoj_vnZC9CFR0zeVrdOrdQkmA'
let tableTennisImage = 'http://pngimg.com/uploads/ping_pong/ping_pong_PNG102675.png'


button.addEventListener('click', function (evt) {
    evt.preventDefault()

    console.dir(selection)
    if (selection.value != 'Please Choose a Game') {
        let image = document.createElement('img')
        image.classList.add('image')

        if (selection.value == 'Football') image.src = footballImage
        else image.src = tableTennisImage

        document.body.append(image)
    }
})