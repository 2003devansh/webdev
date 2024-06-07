const apikey = "9158a655783ee5fbd140d33b83c47640" 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=banglore";


const searchBox = document.querySelector(".search > input")
const searchBtn = document.querySelector(".search > button")
async function CheckWheather() {
    const response = await fetch(apiUrl +  `appid = ${apikey}`)
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click",()=>{
    CheckWheather(searchBox.value);
})
