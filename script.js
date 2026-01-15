const config = {
    API_KEY: '6e8c518793fefa7c3aebc1fd7f0708a6'
};

const apiKey = config.API_KEY;
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');
const forecastContainer = document.getElementById('forecastContainer');
const forecastSection = document.querySelector('.forecast-section');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if(city) {
        getWeatherData(city);
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please write the name of a city'
        });
    }
});

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ing`);
        
        if (!response.ok) throw new Error("City not found.");
        
        const data = await response.json();
        
        displayCurrentWeather(data);
        
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ing`);
        const forecastData = await forecastResponse.json();
        
        processForecast(forecastData.list);

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message
        });
    }
}

function displayCurrentWeather(data) {
    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = Math.round(data.main.temp);
    document.getElementById('description').textContent = data.weather[0].description;
    
    weatherDisplay.classList.remove('hidden');
}

function processForecast(list) {
    const dailyData = list.filter(reading => reading.dt_txt.includes("12:00:00"));

    forecastContainer.innerHTML = '';
    forecastSection.classList.remove('hidden');

    renderForecastRecursive(dailyData, 0);
}

function renderForecastRecursive(dataArray, index) {
    if (index >= dataArray.length) {
        return;
    }

    const item = dataArray[index];
    
    const card = document.createElement('div');
    card.className = 'forecast-card';
    card.innerHTML = `
        <span>${new Date(item.dt_txt).toLocaleDateString()}</span>
        <span>${Math.round(item.main.temp)}°C</span>
        <span>${item.weather[0].description}</span>
    `;

    forecastContainer.appendChild(card);

    renderForecastRecursive(dataArray, index + 1);
}