<script>
  import "../../styles.css"
  import "$lib/assets/fonts/stylesheet.css"
  import "$lib/assets/fonts/37-weather/stylesheet.css"
  let fahrenheit = 72
  let celsius = ((fahrenheit - 32) * 5) / 9
</script>

<div class="page">
  <main class="weather">
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
