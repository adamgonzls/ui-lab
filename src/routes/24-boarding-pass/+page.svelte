<script>
  const detailsObj = {
    firstName: "Adam",
    lastName: "Gonzales",
    from: "Bucharest",
    to: "Colombo",
    airline: "Southwest",
    flight: "423",
    seat: "3A",
    class: "Business",
    baggage: "Full",
    date: "22 APR",
    boardingTime: "14:35",
    terminal: "1",
    departure: "15:10",
    gate: "5",
  }
</script>

<div class="content-container">
  <div class="pass__container">
    <div>
      <h1>Boarding pass</h1>
      <h2>{detailsObj.airline}</h2>
    </div>
    <div class="pass__main">
      <div class="pass__name">Name of Passenger:</div>
      <div>From:</div>
      <div>To:</div>
      <div class="pass__name">{detailsObj.firstName} {detailsObj.lastName}</div>
      <div>Bucharest</div>
      <div>Colombo</div>
      <div>Flight:</div>
      <div>423</div>
      <div>Seat:</div>
      <div>{detailsObj.seat}</div>
      <div>Class:</div>
      <div>Business</div>
      <div>Baggage:</div>
      <div>Full</div>
      <div>Date:</div>
      <div>22 APR</div>
      <div>Boarding Time:</div>
      <div>14:35</div>
      <div>Terminal:</div>
      <div>1</div>
      <div>Departure:</div>
      <div>15:10</div>
      <div>Gate:</div>
      <div>5</div>
    </div>
    <div>
      Boarding pass
      <div class="pass__name">{detailsObj.firstName} {detailsObj.lastName}</div>
      <div>{detailsObj.seat}</div>
      <h2>{detailsObj.airline}</h2>
    </div>
  </div>
</div>

<style>
  .content-container {
    background-color: #f4f6ff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pass__container {
    border: 1px solid black;
    border-radius: 0.25rem;
    display: flex;
  }
  .pass__main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .pass__name {
    grid-column: 1 / 3;
    /* text-align: center; */
  }
</style>
