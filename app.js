const input = document.querySelector(".input");
const form = document.querySelector(".main-form");
const container = document.querySelector(".container");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const apiKey = '7078015890994f95af535407231810';
    const city = input.value;

    try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        const data = res.data;
        console.log(data);
        container.innerHTML += `<div class="main-content">
        
            <div class="first-div">
        <p class="name">${data.location.name}, ${data.location.region}, ${data.location.country}</p>
            <p class="time">${data.location.localtime}</p>
            </div>
            
            <p class="heading">Current Weather</p>
            <div class="sec-div">
            <div class="flex">
                <img class="icon" src="${data.current.condition.icon}" width="120px"  height="120px">
                <p class="temp">${data.current.temp_c}<sup class"unit">°C</sup></p>
            </div>
            <div>
                <p class="text">${data.current.condition.text}</p>
            </div>
            </div>  
                
            
            <div class="third-div">
            <div>
            <p class="head">Humidity</p>
            <p>${data.current.humidity}</p>
            </div>
            <div>
            <p class="head">FeelsLike</p>
            <p>${data.current.feelslike_c}</p>
            </div>
            <div>
            <p class="head">Gust</p>
            <p>${data.current.gust_mph}</p>
            </div>
            <div>
            <p class="head">Pressure</p>
            <p>${data.current.pressure_in}</p>
            </div>
            <div>
            <p class="head">Wind</p>
            <p>${data.current.wind_mph}</p>
            </div>
            

            </div>
            <hr>
            
            
            
        </div>`;
    } catch (error) {
        alert('Data not found');
    }
});


