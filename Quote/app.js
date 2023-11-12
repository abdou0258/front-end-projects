const Btn = document.getElementById("new")
const quote = document.getElementById("quote")
const name = document.getElementById("name")

function getQuote(){
    fetch('https://api.quotable.io/random')  
    .then(response => response.json())
    .then(data => {
        quote.innerHTML= data['content']
        name.innerText = " - "+ data['author']
        })


}
Btn.addEventListener("click",getQuote)
getQuote()
function X() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by" + name.innerHTML,"Tweet Window", "width=600", "height=300")
}