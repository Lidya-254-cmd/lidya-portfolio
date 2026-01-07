const weatherForm = document.querySelector('.weatherform')
const cityInput = document.querySelector('.city-input')
const card = document.querySelector('.card')
const apiKey = 'd492e3f6f212b5b5e3f4f3e98b966597'


weatherForm.addEventListener('submit', async event => {
  event.preventDefault()
  const city = cityInput.value
  if (city) {
    try {
      const weather = await getWeatherData(city);
      displayInfo(weather);

    } catch (error) {
      console.error(error)
      displayError(error)
    }
  } else {
    displayError('Please Enter a city')
  }
})
async function getWeatherData(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const response = await fetch(apiUrl)
  return await response.json()
}
function displayInfo(data) {
  const { name: city, main: { temp, humidity, }, weather: [{ description, id }] } = data

  let cityDisplay = document.createElement('p')
  let tempDisplay = document.createElement('p')
  let humidityDisplay = document.createElement('p')
  let descriptionDisplay = document.createElement('p')
  let emojeDisplay = document.createElement('p')

  cityDisplay.textContent = city
  tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`
  humidityDisplay.textContent = `Humidity: ${humidity}`
  emojeDisplay.textContent = weatherEmoji(id)
  descriptionDisplay.textContent = description

  cityDisplay.classList.add('cityDisplay')
  tempDisplay.classList.add('tempDisplay')
  humidityDisplay.classList.add('humidityDisplay')
  descriptionDisplay.classList.add('descriptionDisplay')
  emojeDisplay.classList.add('emojeDisplay')
  card.textContent = ''
  card.style.display = 'flex'
  card.appendChild(cityDisplay)
  card.appendChild(tempDisplay)
  card.appendChild(humidityDisplay)
  card.appendChild(descriptionDisplay)
  card.appendChild(emojeDisplay)


}
function weatherEmoji(weatherId) {
  switch (true) {
    case (weatherId >= 200 && weatherId < 300):
      return '🌨️';
    case (weatherId >= 300 && weatherId < 400):
      return '⛈️';
    case (weatherId >= 400 && weatherId < 500):
      return '🌧️';
    case (weatherId >= 500 && weatherId < 600):
      return '🌨️';
    case (weatherId >= 600 && weatherId < 700):
      return '❄️';
    case (weatherId >= 700 && weatherId < 800):
      return '💨';
    case (weatherId === 800):
      return '☀️';
    case (weatherId >= 801 && weatherId < 810):
      return '☁️';
    default:
      return '❓'
  }
}
function displayError(mesage) {
  const messageDisplay = document.createElement('p');
  messageDisplay.textContent = mesage;
  messageDisplay.classList.add('errorDisplay');

  card.textContent = '';
  card.style.display = 'flex';
  card.appendChild(messageDisplay);
}