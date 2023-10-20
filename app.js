const input = document.querySelector(".input");
const form = document.querySelector(".main-form");
const container = document.querySelector(".container");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = '';

    
    const apiKey = '7078015890994f95af535407231810';
    const city = input.value;

    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then((res) => {
            const data = res.data;
            console.log(data);
            const value = {
                'Name': data.location.name,
                'Region': data.location.region,
                'Country': data.location.country,
                'Text': data.current.condition.text,
                'Icon': data.current.condition.icon,
                'Temperature': data.current.temp_c,
                'FeelsLike': data.current.feelslike_c,
            };

            
            const date = new Date().toLocaleDateString();
            const time = new Date().toLocaleTimeString();

            container.style.color = "red";
            container.innerHTML = `
                <div id="weather-box" class="wrap">
                    <div id="location-box" class="lf-padd">
                        <div class="d-flex justify-between">
                            <p> <i class="fa-solid fa-location-dot" style="color: #ffffff;"></i> &nbsp; ${value.Name}, ${value.Region}, ${value.Country}  </p>
                            <p id="date">${date}</p>
                        </div>
                    </div>
                    <div class="lf-padd">
                        <p id="current-weather-head"> Current Weather </p>
                        <p id="time">${time}</p>
                    </div>
                    <div class="d-flex gap">
                        <div class="d-flex">
                            <img id="icon" src="${value.Icon}" alt="icon" width="120px" height="120px">
                            <p id="temp"> ${value.Temperature}<sup id="temp-unit">°C</sup> </p>
                        </div>
                        <div>
                            <p id="text"> ${value.Text}</p>
                            <p id="feels-like"> Feels Like &nbsp; ${value.FeelsLike}°</p>
                        </div>
                    </div>
                </div>`;
        })
        .catch((err) => {
            alert('Data not found');
        });
});
