// console.log('Dynamic Quote Website')

let data;
let textHtml = document.getElementById("text")
let authorHtml = document.getElementById("author")
function quotes (){
    let randomNo = Math.random()*1643
    let wholeRandom = Math.ceil(randomNo)
    console.log(wholeRandom)
    if(realData[wholeRandom].author==null){
        realData[wholeRandom].author = "Unknown"
    }
    textHtml.innerText = realData[wholeRandom].text
    authorHtml.innerText = realData[wholeRandom].author

    console.log(realData[wholeRandom].text)
    console.log(realData[wholeRandom].author)
}

let getQuotes= async()=>{
    try{
        let api = "https://type.fit/api/quotes"
        data = await fetch(api)
        realData = await data.json()
        console.log(data)
        quotes()
        // console.log(Math.ceil(1.3))
        
    }
    catch(error){
        // console.log(error)
    }
}
getQuotes()

