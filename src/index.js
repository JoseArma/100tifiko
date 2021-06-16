//-----------API----------
const api = "https://rickandmortyapi.com/api"
const apiCharacter = "https://rickandmortyapi.com/api/character/"
const apiAvatar = "https://rickandmortyapi.com/api/character/avatar/"

//-----------DOM-----------
const padre = document.getElementById("character_section")



const btnPop = document.getElementsByClassName('character_container')

async function getData() {
    let allCharacter = await fetch(apiCharacter)
    let jsonAll = await allCharacter.json()
    let ch_name = jsonAll.results

    for (let x = 1; x < 21; x++) {
        let allFotos = await fetch(apiAvatar + x + ".jpeg")
        padre.innerHTML += `<div class="character_container" id="btn_popup" data-id="card${x}"> <p class="character_name">${ch_name[x - 1].name}</p><a href="#modal" id="${x}"  data-id="card${x}" onclick="showData(this)" ><img src="${allFotos.url}" alt=""></a></div>`
    }
}
getData()




//SECTION WINDOW DATA
const imgCh = document.getElementById('pop_img')

async function showData(element) {
    let dataAll = await fetch(apiCharacter)
    let dataJson = await dataAll.json()
    let dr = dataJson.results
    for (let i = 0; i < 24; i++) {

        if (element.dataset.id == `card${i}`) {
            let dataFoto = await fetch(apiAvatar + i + ".jpeg")
            let avatar = dataFoto.url
            imgCh.innerHTML = `<img src="${avatar}">`
            document.getElementById('pop_title').innerHTML = `${dr[i - 1].name}`
            document.getElementById('pop_status').innerHTML = "Estado:" + " " + `${dr[i - 1].status}`
            document.getElementById('pop_specie').innerHTML = "Especie:" + " " + `${dr[i - 1].species}`
            document.getElementById('pop_gender').innerHTML = "Genero:" + " " + `${dr[i - 1].gender}`
            document.getElementById('pop_origin').innerHTML = "Lugar de origen:" + " " + `${dr[i - 1].origin.name }`
        }

    }



}