const button = document.getElementById("btn")
const noteContainer = document.getElementById("notes")




function addNote(){
    const newNote = document.createElement("div")
    newNote.classList.add("note")
    

    let textarea=document.createElement('textarea')
    
    textarea.rows = 5
    textarea.classList.add("txt-area")
    newNote.appendChild(textarea)

    let dlt = document.createElement("button")
    dlt.innerHTML='<i class="fa-solid fa-trash" style="color: #323539;"></i>'
    dlt.classList.add("dlt")
   

    dlt.addEventListener("click",()=>{
        newNote.remove()
       
    })

    noteContainer.appendChild(newNote)
    newNote.appendChild(dlt)
}


button.addEventListener("click",addNote)
    

    
