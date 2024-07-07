<script>
  import "$lib/assets/fonts/stylesheet.css"
  const detailsObj = {
    firstName: "Adam",
    lastName: "Gonzales",
    from: "Bucharest",
    to: "Colombo",
    airline: "Southwest",
    flight: "423",
    seat: "3A",
    flightStatus: "Delayed",
    class: "Business",
    baggage: "Full",
    date: "22 APR",
    boardingTime: "14:35",
    terminal: "1",
    departureTime: "15:10",
    gate: "5C",
  }
</script>

<div class="content-container">
  <div class="pass__content-container">
    <div class="pass__title">
      <h1 class="font--normal">Boarding pass</h1>
      <h2>{detailsObj.airline}</h2>
    </div>
    <div class="pass__main">
      <div class="grid--full">
        <h3 class=" font--normal">Name of Passenger:</h3>
        <span class=" font--300">
          {detailsObj.firstName}
          {detailsObj.lastName}
        </span>
      </div>
      <div class="grid--half">
        <h3 class="font--normal">From:</h3>
        <span class="font--300">{detailsObj.from}</span>
      </div>
      <div class="grid--half">
        <h3 class="font--normal">To:</h3>
        <span class="font--300">{detailsObj.to}</span>
      </div>
      <div>
        <h3 class="font--normal">Flight:</h3>
        <span class="font--300">{detailsObj.flight}</span>
      </div>
      <div>
        <h3 class="font--normal">Seat:</h3>
        <span class="font--300">{detailsObj.seat}</span>
      </div>
      <div>
        <h3 class="font--normal">Class:</h3>
        <span class="font--300">{detailsObj.class}</span>
      </div>
      <div>
        <h3 class="font--normal">Baggage:</h3>
        <span class="font--300">{detailsObj.baggage}</span>
      </div>
      <div class="grid--half">
        <h3 class="font--normal">Date:</h3>
        <div class="font--300">{detailsObj.date}</div>
      </div>
      <div class="grid--half">
        <h3 class="font--normal">Flight Status:</h3>
        <div class="font--300">{detailsObj.flightStatus}</div>
      </div>
      <div class="grid--half">
        <div class="font--normal">Boarding Time:</div>
        <div class="font--300">{detailsObj.boardingTime}</div>
      </div>
      <div class="grid--half">
        <h3 class="font--normal">Terminal:</h3>
        <span class="font--300">{detailsObj.terminal}</span>
      </div>
      <div class="grid--half">
        <h3 class="font--normal">Departure:</h3>
        <span class="font--300">{detailsObj.departureTime}</span>
      </div>
      <div class="grid--half">
        <h3 class="font--normal">Gate:</h3>
        <span class="font--300">{detailsObj.gate}</span>
      </div>
    </div>
    <div class="pass__outline">
      <div class="summary__details">
        <h2 class="font--normal">Boarding pass</h2>
        <div>
          {detailsObj.firstName}
          {detailsObj.lastName}
        </div>
        <div>
          <div>{detailsObj.from}</div>
          <div>{detailsObj.to}</div>
        </div>
        <div class="summary__seat">{detailsObj.seat}</div>
      </div>
      <h2 class="summary__title">{detailsObj.airline}</h2>
    </div>
  </div>
</div>

<style>
  * {
    font-family: "oswald", sans-serif;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
  .content-container {
    background-color: #f4f6ff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pass__content-container {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background: white;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  @media (min-width: 550px) {
    .pass__content-container {
      flex-direction: row;
    }
  }
  .pass__title {
    padding: 1.25rem 1rem;
    color: white;
    background: linear-gradient(180deg, #5852fa, #4d9fed);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 550px) {
    .pass__title {
      flex-direction: column-reverse;
      border-bottom-left-radius: 1rem;
      border-top-right-radius: unset;
    }
    .pass__title > * {
      transform: rotate(180deg);
      writing-mode: vertical-lr;
    }
  }
  .pass__main {
    padding: 1.25rem 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 350px) {
    .pass__main {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .pass__outline {
    padding: 1.25rem 1rem;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 1rem;
    background: #4d9fed;
  }
  .summary__details {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .summary__seat {
    font-size: 2rem;
  }
  .summary__title {
    margin-bottom: 2rem;
  }
  /* utility */
  .grid--half {
    grid-column: span 2;
  }
  .grid--full {
    grid-column: 1 / -1;
  }
  .font--300 {
    font-weight: bold;
  }
  .font--normal {
    font-weight: normal;
  }
</style>
