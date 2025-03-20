let apiKey="";
fetch("config.json")
    .then(response => response.json())
    .then(config => {
        apiKey=config.API_KEY;
        
    })
    .catch(error => console.error("Error al cargar config.json:", error));



function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Por favor, ingresa una ciudad.");
        return;
    }
    
   
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    fetch(url)
        .then(response => response.json())

        .then(data => {
            document.getElementById("weatherInfo").innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>Temperatura: ${data.current.temperature}°C</p>
            <p>Humedad: ${data.current.humidity}%</p>
            <p>Fecha y hora actual: ${data.location.localtime}</p>
            <p>Índice UV: ${data.current.uv_index}</p>
        `;
        })

        .catch(error => console.error("Error al obtener los datos:", error));
}


//if (data.cod === "615") {
//    document.getElementById("weatherInfo").innerHTML = "<p>Ciudad no encontrada.</p>";
//} else {
    
//<p>Temperatura: ${data.main.temp}°C</p>
//            <p>Clima: ${data.weather[0].description}</p>
//            <p>Humedad: ${data.main.humidity}%</p>
//            <p>Viento: ${data.wind.speed} m/s</p>