<script lang="ts">
  import { PUBLIC_OPENWEATHER_API_KEY } from "$env/static/public"
  import { iso31661 } from "iso-3166"
  import { iso31662 } from "iso-3166"
  console.log(iso31661)
  import "../../styles.css"
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/37-weather/stylesheet.css"

  interface City {
    name: string // City name
    country: string // Country code (ISO 3166)
    state?: string // State (optional, only present for some cities)
    lat: number // Latitude
    lon: number // Longitude
  }

  interface CityWeatherData {
    name: string
    dt: number
    weather: { description: string }[]
    main: { temp: number; feels_like: number; humidity: number }
    wind: { speed: number }
    visibility: number
  }

  let debounceTimeout: number
  let cityName = ""
  let foundCities: City[] = []
  let countryCode = ""
  let stateCode = ""

  let cityWeatherData: CityWeatherData = {
    name: "",
    dt: 0,
    weather: [{ description: "" }],
    main: { temp: 0, feels_like: 0, humidity: 0 },
    wind: { speed: 0 },
    visibility: 0,
  }
  let currentDate = ""
  const mostUsedCountryCodes = [
    "US",
    "CA",
    "AU",
    "GB",
    "DE",
    "FR",
    "BR",
    "IT",
    "ES",
    "NL",
  ]

  $: sortedCountries = iso31661.sort((a, b) => {
    // Check if 'a' or 'b' is in the topCountries list
    const aIsTop = mostUsedCountryCodes.includes(a.alpha2)
    const bIsTop = mostUsedCountryCodes.includes(b.alpha2)

    // Move top countries to the top of the list
    if (aIsTop && bIsTop) {
      return (
        mostUsedCountryCodes.indexOf(a.alpha2) -
        mostUsedCountryCodes.indexOf(b.alpha2)
      ) // Respect topCountries order
    }
    if (aIsTop) return -1 // 'a' is a top country, so it comes first
    if (bIsTop) return 1 // 'b' is a top country, so it comes first

    // Alphabetical sort for the rest
    return a.alpha2.localeCompare(b.alpha2)
  })

  $: geocodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}${stateCode ? `,${stateCode}` : ""},${countryCode}&limit=3&appid=${PUBLIC_OPENWEATHER_API_KEY}`
  $: weatherDataApi = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${PUBLIC_OPENWEATHER_API_KEY}`
  $: filteredStates = iso31662.filter((state) => state.parent === countryCode)

  function getLocationLatLong() {
    // console.log(cityName)
    // console.log(countryCode)
    // console.log(geocodingApi)
    fetch(geocodingApi)
      .then((response) => response.json())
      .then((data) => {
        console.log("inside getLocationLatLong")
        // console.log(data)
        // get the weather data from the first element in the array
        console.log(data[0])
        const selectedCity = data[0]
        const { lat, lon } = selectedCity
        getWeatherData(lat, lon)
      })
  }

  // function getWeatherData(lat: number, lon: number) {
  //   console.log("Getting weather data")
  //   weatherDataApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${PUBLIC_OPENWEATHER_API_KEY}&units=imperial`
  //   fetch(weatherDataApi)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("inside getWeatherData")
  //       console.log(data)
  //       cityWeatherData = data
  //       const date = new Date(cityWeatherData.dt * 1000)
  //       currentDate = new Intl.DateTimeFormat("en-US", {
  //         weekday: "long", // Full name of the day (e.g., "Friday")
  //         day: "numeric", // Day of the month (e.g., "20")
  //         month: "long", // Full name of the month (e.g., "January")
  //       }).format(date)
  //     })
  // }

  // function getCities() {
  //   console.log("Getting cities")
  //   fetch(geocodingApi)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("inside getCities")
  //       console.log(data)
  //     })
  // }

  function formatDataCalculationDate(dt: number) {
    const date = new Date(dt * 1000)
    currentDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long", // Full name of the day (e.g., "Friday")
      day: "numeric", // Day of the month (e.g., "20")
      month: "long", // Full name of the month (e.g., "January")
    }).format(date)
    return currentDate
  }

  function convertToCelsius(temp: number) {
    const celsius = Math.round(((temp - 32) * 5) / 9)
    return celsius
  }

  function convertMetersToMiles(meters: number) {
    const miles = Math.round(meters * 0.000621371)
    return miles
  }

  async function getCities() {
    console.log(cityName)
    clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(async () => {
      // Make your API call here using searchTerm
      console.log("Making API call with:", cityName)
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${PUBLIC_OPENWEATHER_API_KEY}`
        )
        const data = await response.json()
        foundCities = data as City[]
        console.log(foundCities)
      } catch (error) {
        console.log(error)
      }
    }, 1000) // Adjust the delay as needed
  }

  async function fetchWeather(city) {
    console.log("Fetching weather for", city)
    const { lat, lon } = city
    const weatherDataApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${PUBLIC_OPENWEATHER_API_KEY}&units=imperial`
    try {
      const response = await fetch(weatherDataApi)
      const data = await response.json()
      cityWeatherData = data
      formatDataCalculationDate(cityWeatherData.dt)
    } catch (error) {
      console.log(error)
    }
  }

  async function getData() {
    console.log("Getting data")
    getLocationLatLong()
  }
</script>

<div class="page">
  <main class="weather">
    <input
      id="cityNameInput"
      bind:value={cityName}
      on:input={getCities}
      type="text"
    />
    {#if foundCities.length > 0}
      <ul class="results">
        {#each foundCities as foundCity}
          <li class="results__item">
            <button
              class="results__button"
              on:click={() => fetchWeather(foundCity)}
            >
              {foundCity.name},{foundCity.state ? ` ${foundCity.state},` : ""}
              {foundCity.country}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
    <select id="countryCodeInput" bind:value={countryCode}>
      {#each sortedCountries as country}
        <option value={country.alpha2}>{country.name}</option>
      {/each}
    </select>
    {#if countryCode}
      <select id="stateCodeInput" bind:value={stateCode}>
        {#each filteredStates as state}
          <option value={state.code}>{state.name}</option>
        {/each}
      </select>
    {/if}
    <div>
      <button on:click={getData}>Get Data</button>
    </div>
    {#if cityWeatherData.name !== ""}
      <div class="weather-data">
        <span class="weather__city">{cityWeatherData.name}</span>
        <span class="weather__date">{currentDate}</span>
        <span class="weather__description"
          >{cityWeatherData.weather[0].description}</span
        >
        <span class="weather__fahrenheit"
          >{cityWeatherData?.main?.temp
            ? `${Math.round(cityWeatherData.main.temp)}°F`
            : "Loading..."}</span
        >
        <span class="weather__celsius"
          >{convertToCelsius(cityWeatherData.main.temp)}°C</span
        >
        <h2 class="weather__summary-title">Daily Summary</h2>
        <p class="weather__summary">
          Feels like {Math.round(cityWeatherData?.main.feels_like)}°F
        </p>
        <div class="weather__conditions">
          <div class="weather__condition">
            <span>{Math.round(cityWeatherData?.wind?.speed)} mph</span>
            <h3>Wind</h3>
          </div>
          <div class="weather__condition">
            <span>{cityWeatherData?.main.humidity}%</span>
            <h3>Humidity</h3>
          </div>
          <div class="weather__condition">
            <span
              >{convertMetersToMiles(cityWeatherData?.visibility)} miles</span
            >
            <h3>Visibility</h3>
          </div>
        </div>
        <h2 class="weather__forecast-title">Weekly forecast</h2>
        <div class="weather__weekly-forecast">
          <div class="weather__forecast-day">
            26&deg; <h3>21 Jan</h3>
          </div>
          <div class="weather__forecast-day">
            25&deg; <h3>22 Jan</h3>
          </div>
          <div class="weather__forecast-day">
            27&deg; <h3>23 Jan</h3>
          </div>
          <div class="weather__forecast-day">
            26&deg; <h3>24 Jan</h3>
          </div>
        </div>
      </div>
    {/if}
  </main>
</div>

<style>
  :root {
    --midnight-black: #0b0b0b;
    --header-font: "Ledger", serif;
    --body-font: "Roboto", sans-serif;
  }
  .page {
    height: 100vh;
    background-color: var(--midnight-black);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .results {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    background-color: white;
    padding-left: 0;
    font-family: var(--body-font);
    gap: 0.5em;
  }
  .results__item {
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    font-size: 0.8rem;
    background-color: var(--midnight-black);
    color: white;
    border-radius: 9999px;
  }
  .results__button {
    border: none;
    background-color: transparent;
    color: white;
  }
  .weather-data {
    font-family: var(--body-font);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: white;
    align-items: center;
  }
  @media (min-width: 475px) {
    .weather {
      width: 80%;
    }
  }
  @media (min-width: 600px) {
    .weather {
      width: 70%;
    }
  }
  @media (min-width: 730px) {
    .weather {
      width: 60%;
    }
  }
  @media (min-width: 850px) {
    .weather {
      width: 50%;
    }
  }
  .weather__city {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .weather__date {
    margin-top: 1em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    font-size: 0.8rem;
    background-color: var(--midnight-black);
    color: white;
    border-radius: 9999px;
  }
  .weather__description {
    margin-top: 0.5em;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .weather__fahrenheit {
    font-size: 8rem;
    line-height: 100%;
  }
  .weather__celsius {
    font-size: 1.5rem;
    margin-top: 0.5em;
  }
  .weather__summary-title {
    margin-top: 0.5em;
    margin-right: auto;
    font-weight: bold;
    font-size: 1rem;
  }
  .weather__summary {
    margin-right: auto;
  }
  .weather__forecast-title {
    margin-top: 1em;
    margin-right: auto;
    font-weight: bold;
    font-size: 1rem;
  }
  .weather__weekly-forecast {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    gap: 1em;
    text-align: center;
  }
  .weather__conditions {
    border-radius: 0.5rem;
    background-color: var(--midnight-black);
    color: white;
    display: flex;
    margin-top: 1em;
    width: 100%;
  }
  .weather__condition {
    flex: 1;
    text-align: center;
    padding-top: 1em;
    padding-bottom: 0.75em;
  }
  .weather__condition h3 {
    font-size: 0.75rem;
  }
  .weather__forecast-day {
    border: 2px solid var(--midnight-black);
    border-radius: 0.5rem;
    padding-top: 0.5em;
    padding-bottom: 0.25em;
    flex: 1;
  }
  .weather__forecast-day h3 {
    font-size: 0.75rem;
  }
</style>
