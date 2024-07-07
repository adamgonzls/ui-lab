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
  <div class="pass__container">
    <div class="pass__title">
      <h1>Boarding pass</h1>
      <h2 class="font--normal">{detailsObj.airline}</h2>
    </div>
    <div class="pass__main">
      <div class="pass__name grid--full">Name of Passenger:</div>
      <div class="pass__name grid--full font--300">
        {detailsObj.firstName}
        {detailsObj.lastName}
      </div>
      <div class="grid--half">From:</div>
      <div class="grid--half">To:</div>
      <div class="grid--half font--300">{detailsObj.from}</div>
      <div class="grid--half font--300">{detailsObj.to}</div>
      <div>Flight:</div>
      <div>Seat:</div>
      <div>Class:</div>
      <div>Baggage:</div>
      <div class="font--300">{detailsObj.flight}</div>
      <div class="font--300">{detailsObj.seat}</div>
      <div class="font--300">{detailsObj.class}</div>
      <div class="font--300">{detailsObj.baggage}</div>
      <div class="grid--half">Date:</div>
      <div class="grid--half">Flight Status:</div>
      <div class="grid--half font--300">{detailsObj.date}</div>
      <div class="grid--half font--300">{detailsObj.flightStatus}</div>
      <div class="grid--half">Boarding Time:</div>
      <div class="grid--half">Terminal:</div>
      <div class="grid--half font--300">{detailsObj.boardingTime}</div>
      <div class="grid--half font--300">{detailsObj.terminal}</div>
      <div class="grid--half">Departure:</div>
      <div class="grid--half">Gate:</div>
      <div class="grid--half font--300">{detailsObj.departureTime}</div>
      <div class="grid--half font--300">{detailsObj.gate}</div>
    </div>
    <div class="pass__outline">
      <div>
        Boarding pass
        <div class="pass__name">
          {detailsObj.firstName}
          {detailsObj.lastName}
        </div>
        <div>{detailsObj.from}</div>
        <div>{detailsObj.to}</div>
        <div>{detailsObj.seat}</div>
      </div>
      <h2>{detailsObj.airline}</h2>
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
  .pass__container {
    /* border: 1px solid black; */
    display: flex;
    border-radius: 1rem;
    background: white;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  .pass__title {
    padding: 1rem 0.625rem;
    color: white;
    background: linear-gradient(180deg, #5852fa, #4d9fed);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    /* display: flex;
    rotate: 270deg; */
  }
  .pass__main {
    padding: 1rem 0.625rem;
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(4, 1fr);
  }
  .pass__outline {
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 1rem;
    padding: 1rem 0.625rem;
    background: #4d9fed;
  }
  .pass__name {
    grid-column: 1 / 3;
    /* text-align: center; */
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
