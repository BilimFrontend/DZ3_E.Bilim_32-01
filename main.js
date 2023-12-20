const characters_card = document.querySelector('.characters-card');


const xhrCharacter = new XMLHttpRequest()
xhrCharacter.open('GET','data/character.json')
xhrCharacter.setRequestHeader('Content-type','application/json')
xhrCharacter.send()

xhrCharacter.addEventListener('load', () => {
    const data = JSON.parse(xhrCharacter.response)
    data.forEach((character) => {
        const character_item = document.createElement('div')
        character_item.setAttribute('class', 'character-item')
        character_item.innerHTML = `
            <p class="name-character">${character.name}</p>
            <div class="character-photo">
                <img src="${character.photo}" alt="">
            </div>
            <p class="desc-character">${character.desc}</p>
        `
    characters_card.append(character_item)
    })
})


const xhrCountry = new XMLHttpRequest()
xhrCountry.open('GET', 'data/country.json')
xhrCountry.setRequestHeader('Content-type', 'application/json')
xhrCountry.send()

xhrCountry.addEventListener('load', () => {
    const parsedCountryXhr = JSON.parse(xhrCountry.response)
    console.log(parsedCountryXhr)
})
