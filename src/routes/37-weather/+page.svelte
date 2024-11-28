<script>
  import { PUBLIC_OPENWEATHER_API_KEY } from "$env/static/public"
  import { iso31661 } from "iso-3166"
  import { iso31662 } from "iso-3166"
  console.log(iso31661)
  // console.log(iso31662)
  import { onMount } from "svelte"
  import "../../styles.css"
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/37-weather/stylesheet.css"
  import { get } from "svelte/store"
  let fahrenheit = 72
  let celsius = ((fahrenheit - 32) * 5) / 9
  let cityName = ""
  let countryCode = ""
  let stateCode = ""
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

  function getWeatherData(lat, lon) {
    console.log("Getting weather data")
    //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    https: weatherDataApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${PUBLIC_OPENWEATHER_API_KEY}`
    fetch(weatherDataApi)
      .then((response) => response.json())
      .then((data) => {
        console.log("inside getWeatherData")
        console.log(data)
      })
  }

  onMount(async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${PUBLIC_OPENWEATHER_API_KEY}`
    )
    const data = await response.json()
    console.log(data)
  })

  async function getData() {
    console.log("Getting data")
    getLocationLatLong()
  }
</script>

<div class="page">
  <main class="weather">
    <input id="cityNameInput" bind:value={cityName} type="text" />
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
    <span class="weather__city">Paris</span>
    <span class="weather__date">Friday, 20 January</span>
    <span class="weather__description">Sunny</span>
    <span class="weather__fahrenheit">{fahrenheit}°F</span>
    <span class="weather__celsius">{celsius.toFixed(1)}°C</span>
    <h2 class="weather__summary-title">Daily Summary</h2>
    <p class="weather__summary">Feels like 35 due to direct sun</p>
    <div class="weather__conditions">
      <div class="weather__condition">
        <span>5 mph</span>
        <h3>Wind</h3>
      </div>
      <div class="weather__condition">
        <span>20%</span>
        <h3>Humidity</h3>
      </div>
      <div class="weather__condition">
        <span>10 miles</span>
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
  .weather {
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
