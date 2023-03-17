const url ="https://striveschool-api.herokuapp.com/api/product/"
const objFetch ={
    headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWVlY2Y4MWI0MjAwMTM5YjI3YmMiLCJpYXQiOjE2NzkwNDAyMzYsImV4cCI6MTY4MDI0OTgzNn0.Eln5zBkeZta6ZTIIIFfCWOVAsrnNIhojVwn-FNgWskQ"
    }
}

fetch(url,objFetch)
    .then(resp =>resp.json())
    .then(data => stampaCard(data))
    .catch(error=>console.error(error))


let stampaCard =function (dato){
    dato.forEach(oggetto => {
        let {name,brand,imageUrl,price,_id}=oggetto

        creaCard(name,brand,imageUrl,price,_id)
    });
}

let creaCard=function (titolo,brand,img,prezzo,id){
    let target= document.querySelector("#target")

    let col= document.createElement("div")
    col.classList.add("col")

    let card=document.createElement("div")
    card.classList.add("card","mb-3")

    let cardEader = document.createElement("div")
    cardEader.classList.add("card-header","d-flex","py-1","justify-content-between")

    let h5= document.createElement("h5")
    h5.classList.add("card-title","m-0")
    h5.innerText=titolo

    let h6= document.createElement("h6")
    h6.classList.add("m-0")
    h6.innerText=brand

    let image= document.createElement("img")
    image.classList.add("card-img-top","myimg","img-fluid","rounded-0","border-0")
    image.src=img

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body","pt-0")

    let small=document.createElement("small")
    small.classList.add("card-text")
    small.innerText=`prezzo: ${prezzo}$`

    let btnGrup = document.createElement("div")
    btnGrup.classList.add("btn-group-sm","mt-2")

    let btnInfo=document.createElement("button")
    btnInfo.classList.add("btn","btn-outline-info","btn-sm")
    btnInfo.type="button"
    btnInfo.innerText="Scopri di più"

    let btnModifica=document.createElement("button")
    btnModifica.classList.add("btn","btn-outline-success","btn-sm")
    btnModifica.type="button"
    btnModifica.innerText="Modifica"

    target.appendChild(col)
    col.appendChild(card)
    card.appendChild(cardEader)
    cardEader.appendChild(h5)
    cardEader.appendChild(h6)
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(small)
    cardBody.appendChild(btnGrup)
    btnGrup.appendChild(btnInfo)
    btnGrup.appendChild(btnModifica)

    btnInfo.addEventListener("click",()=>{
        window.location.replace("../dettaglio.html?id="+ id)
    })

    btnModifica.addEventListener("click",()=>{
        window.location.replace("../backOffice.html?id="+ id)
    })
    
}

