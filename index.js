// console.log('Dynamic Quote Website')

let data;
let textHtml = document.getElementById("text")
let authorHtml = document.getElementById("author")
let button = document.getElementById("btn")

function quotes (){
    let randomNo = Math.random()*1643
    let wholeRandom = Math.ceil(randomNo)
    if(realData[wholeRandom].author==null){
        realData[wholeRandom].author = "Unknown"
    }
    textHtml.innerText = realData[wholeRandom].text
    authorHtml.innerText = realData[wholeRandom].author

}

let getQuotes= async()=>{
    try{
        let api = "https://type.fit/api/quotes"
        data = await fetch(api)
        realData = await data.json()
        quotes()
        
    }
    catch(error){
        console.log(error)
    }
}
getQuotes()

button.addEventListener("click",()=>{
    quotes() 
})


