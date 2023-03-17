let nome =document.querySelector("#nome")
let brend =document.querySelector("#brend")
let descrizione =document.querySelector("#description")
let immagineProdotto =document.querySelector("#imgUrl")
let prezzo =document.querySelector("#prezzo")
let creaBtn =document.querySelector("#btnCrea")
let modificaBtn =document.querySelector("#btnModifica")
let resettaBtn =document.querySelector("#btnResetta")
let eliminaBtn =document.querySelector("#btnElimina")
let form = document.querySelector("form")

let idd = new URLSearchParams(window.location.search).get("id")

const url = idd? "https://striveschool-api.herokuapp.com/api/product/" + idd : "https://striveschool-api.herokuapp.com/api/product/"

const method = idd ? "PUT" : "POST"

const objFetch ={
    headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWVlY2Y4MWI0MjAwMTM5YjI3YmMiLCJpYXQiOjE2NzkwNDAyMzYsImV4cCI6MTY4MDI0OTgzNn0.Eln5zBkeZta6ZTIIIFfCWOVAsrnNIhojVwn-FNgWskQ"
    }
}

window.onload = async () => {

    if (idd) {

        document.querySelector("#h1").innerText = " Modifica Prodotto" 
        creaBtn.innerText = "Modifica" 
        
        resettaBtn.classList.remove("d-none")
        eliminaBtn.classList.remove("d-none")
        

        try {
            const resp = await fetch(url,objFetch) 
            const dato = await resp.json()
            const { name,description,brand,imageUrl,price} = dato


            
            nome.value = name
            descrizione.value = description
            prezzo.value = price
            brend.value = brand
            immagineProdotto.value=imageUrl

        } catch (error) {
            console.log(error)
        }
    }

}

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            window.location.assign("./index.html")
        }
        

        form.classList.add('was-validated')
      }, false)
      
    })
  })()


form.onsubmit = async (event) => {
    event.preventDefault();


    const newAppointment = {
        name:nome.value ,
        description: descrizione.value, 
        brand:brend.value,
        imageUrl:immagineProdotto.value, 
        price:prezzo.value           
    }

    

    try {
        
        const resp = await fetch(url, {
            method, 
            body: JSON.stringify(newAppointment), 
            headers: {
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWVlY2Y4MWI0MjAwMTM5YjI3YmMiLCJpYXQiOjE2NzkwNDAyMzYsImV4cCI6MTY4MDI0OTgzNn0.Eln5zBkeZta6ZTIIIFfCWOVAsrnNIhojVwn-FNgWskQ",
                "Content-Type": "application/json"
            }
        })

        

    } catch (error) {
        console.log(error)
    }
}

eliminaBtn.onclick = async () => {

        try {
            
            const resp = await fetch(url, { 
                method: "DELETE",
                headers: {
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWVlY2Y4MWI0MjAwMTM5YjI3YmMiLCJpYXQiOjE2NzkwNDAyMzYsImV4cCI6MTY4MDI0OTgzNn0.Eln5zBkeZta6ZTIIIFfCWOVAsrnNIhojVwn-FNgWskQ",
                "Content-Type": "application/json"
            } })
            const deletedObj = await resp.json()

            
            
            window.location.assign("./index.html")

        } catch (error) {
            console.log(error)
        }
        
}

resettaBtn.onclick= ()=>{
    nome.value = ""
    descrizione.value = ""
    prezzo.value = ""
    brend.value = ""
    immagineProdotto.value=""
}

creaBtn.onclick=()=>{
    form.classList.add("validazione")
}

