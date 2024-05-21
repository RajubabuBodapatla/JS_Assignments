const APIKEY = "a74ac56f202033e62a0d4531f0bfcfe4"
const cityname = "tirupati"
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=a74ac56f202033e62a0d4531f0bfcfe4`)
.then((a) => {
        return a.json();
    }
)
.then((a) => console.log(a))
.catch((err) => console.log(err))

function display(a){
    const sit=a.weather.main
    const tmp=a.main.temp
   return document.getElementById("temp").innerHTML=sit
}



const APIKey = "a68993b0f456c4e930d566ac0836f1cf"
const url = "https://www.w3schools.com/css/default.asp"
fetch(`https://qrtag.net/api/qr(_transparent)(_[size]).[png|svg](?url=${url})`)
.then((a) => {
        return a.text();
    }
)
let img=document.querySelector("img")
.then((a) => img.innetHTML=a)
.catch((err) => console.log(err))

function display(a){
    const sit=a.weather.main
    const tmp=a.main.temp
   return document.getElementById("temp").innerHTML=sit
}
