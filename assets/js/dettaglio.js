let titolo=document.querySelector("#titolo")
let immagine=document.querySelector("#immagine")
let brend=document.querySelector("#brand")
let descrizione=document.querySelector("#descrizione")
let prezzo=document.querySelector("#prezzo")
let creazione=document.querySelector("#creazione")
let aggiornamento=document.querySelector("#aggiornamento")
let idUser=document.querySelector("#idUser")
let container=document.querySelector("#container")

let id = new URLSearchParams(window.location.search).get("id")

const url ="https://striveschool-api.herokuapp.com/api/product/"+id
const objFetch ={
    headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWVlY2Y4MWI0MjAwMTM5YjI3YmMiLCJpYXQiOjE2NzkwNDAyMzYsImV4cCI6MTY4MDI0OTgzNn0.Eln5zBkeZta6ZTIIIFfCWOVAsrnNIhojVwn-FNgWskQ"
    }
}

fetch(url,objFetch)
    .then(resp =>resp.json())
    .then(data => creaProdotti(data))
    .catch(error=>console.error(error))

let creaProdotti=function(dato){
    let{name,description,brand,imageUrl,price,userId,createdAt,updatedAt}=dato
    
    titolo.textContent=name 
    immagine.src=imageUrl 
    brend.textContent=brand 
    descrizione.textContent=description 
    prezzo.textContent= price
    creazione.textContent= new Date(createdAt).toLocaleString()
    aggiornamento.textContent= new Date(updatedAt).toLocaleString()
    idUser.textContent=userId 
    
    container.classList.remove("d-none")
}

