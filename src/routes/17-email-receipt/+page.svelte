<script>
  import "$lib/assets/fonts/17-email-receipt/stylesheet.css"
  import blueBird from "$lib/assets/images/17-email-receipt/bluebird.png"
  import money from "$lib/assets/images/17-email-receipt/money-400w.png"
  import Heart from "../../components/17-email-receipt/heart.svelte"
  const date = new Date()
  const formattedDate = date
    .toLocaleString("en-US", {
      weekday: "short", // Short name for the day
      year: "numeric", // Full numeric year
      month: "short", // Short name for the month
      day: "2-digit", // Two-digit day
      hour: "2-digit", // Two-digit hour
      minute: "2-digit", // Two-digit minute
      second: "2-digit", // Two-digit second
      hour12: false, // 24-hour time format
    })
    .replace(",", "") // Remove the comma after the day
  const purchasedItems = [
    {
      name: "Minimalist Stoneware Vase",
      sku: 10234,
      quantity: 1,
      unitPrice: "$48.00",
    },
    {
      name: "Handwoven Macramé Wall Hanging",
      sku: 20456,
      quantity: 1,
      unitPrice: "$72.00",
    },
    {
      name: "Concrete Desk Organizer Set",
      sku: 30123,
      quantity: 1,
      unitPrice: "$39.00",
    },
  ]
</script>

<div class="page">
  <img class="money" src={money} alt="A fake dollar bill" />
  <main>
    <img class="bird" src={blueBird} alt="A bluebird" />
    <Heart classes="heart--50 heart fade-out" />
    <div class="receipt">
      <h1>Luxe & Lineage Design Co.</h1>
      <span>{formattedDate}</span>
      <span class="receipt__address"
        >456 Modernist Blvd, Suite 12, Urban Heights</span
      >
      <div class="purchases">
        {#each purchasedItems as item}
          <div class="purchase__item">
            <h2 class="purchase__name">{item.name}</h2>
            <h3 class="purchase__detail">sku: {item.sku}</h3>
            <h3 class="purchase__detail">qty: {item.quantity}</h3>
            <h3 class="purchase__detail">price: {item.unitPrice}</h3>
          </div>
        {/each}
      </div>
      <p class="receipt__thanks">Thank you for your purchase!</p>
      <p class="receipt__notice">
        Your receipt has been sent to your email address.
      </p>
      <a class="receipt__homepage" href="/">Return to the homepage</a>
    </div>
  </main>
</div>

<style>
  :root {
    --robot-font: "Silkscreen", sans-serif;
  }
  .page {
    background-color: orange;
  }
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--robot-font);
    background: #1a2244;
  }
  .receipt {
    margin-top: 2em;
    margin-bottom: 2em;
    padding-top: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 2em;
    width: 300px;
    background: #f7fbfc;
    --mask: conic-gradient(
          from -45deg at bottom,
          #0000,
          #000 1deg 89deg,
          #0000 90deg
        )
        bottom/30px 51% repeat-x,
      conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg)
        top / 30px 51% repeat-x;
    -webkit-mask: var(--m);
    mask: var(--m);
    --webkit-mask: var(--mask);
    mask: var(--mask);
  }
  .purchases {
    margin-top: 1em;
  }
  .purchase__item {
    margin-top: 1em;
  }
  .purchase__name {
    font-size: 1rem;
  }
  .purchase__detail {
    font-size: 0.8rem;
  }
  .receipt__thanks {
    margin-top: 1em;
    font-size: 0.8rem;
  }
  .receipt__address {
    display: inline-block;
    margin-top: 1em;
    font-size: 0.8rem;
  }
  .receipt__notice {
    margin-top: 1em;
    font-size: 0.8rem;
  }
  .receipt__homepage {
    margin-top: 1em;
    font-size: 0.8rem;
    display: block;
  }
  p {
    font-family: var(--robot-font);
  }
  .bird {
    z-index: 1;
    position: absolute;
    top: 0;
    left: -60px;
    width: 100px;
    transform: scaleX(-1);
  }
  .money {
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
  }
  @media (min-width: 800px) {
    .bird {
      left: -100px;
      width: 200px;
    }
    .money {
      width: 300px;
    }
  }
</style>
