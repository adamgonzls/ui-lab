<script lang="ts">
  import { onMount } from "svelte"
  import "$lib/assets/fonts/12-ecommerce-shop/stylesheet.css"
  import "../../styles.css"
  import fabricChair from "$lib/assets/images/fabric-armchair-610w.png"
  import armchair from "$lib/assets/images/modern-living-room-wooden-armchair-308w.png"
  import rockingChair from "$lib/assets/images/rocking-chair-315w.png"
  import roundTable from "$lib/assets/images/round-wooden-vintage-table-389w.png"
  import redThrone from "$lib/assets/images/red-and-gold-throne-chair-392w.png"
  import concreteBench from "$lib/assets/images/concrete-wood-bench-327w.png"
  import peachCouch from "$lib/assets/images/peach-couch-301w.png"
  import shoppingBag from "$lib/assets/images/purse-wallet.svg"
  import Arrow from "../../components/12-ecommerce-shop/Arrow.svelte"
  function setCurrentProduct(id: number) {
    products.find((product) => {
      if (product.id === id) {
        currentProduct = product
      }
    })
  }
  function randomIntRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const rangeLow = 17
  const rangeHigh = 95
  export let borderRadius = `${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% / ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}%`
  let products = [
    {
      id: 1,
      name: "Relax Seat",
      tagline: "Feel the essence of comfort",
      description:
        "A cozy fabric chair designed to help you relax after a long day. With soft cushioning and a timeless design, it's perfect for any room in your home.",
      price: "390$",
      image: fabricChair,
      dimensions: {
        width: "28 in (71.1 cm)",
        height: "34 in (86.4 cm)",
        depth: "30 in (76.2 cm)",
      },
    },
    {
      id: 2,
      name: "Rocking Chair",
      tagline: "Rock your world",
      description:
        "A modern take on the classic rocking chair. Perfect for quiet evenings or reading a good book, this chair combines style and function effortlessly.",
      price: "290$",
      image: rockingChair,
      dimensions: {
        width: "26 in (66 cm)",
        height: "36 in (91.4 cm)",
        depth: "32 in (81.3 cm)",
      },
    },
    {
      id: 3,
      name: "The Circle",
      tagline: "Gather around",
      description:
        "A sleek and stylish round table, ideal for dining rooms or living spaces. Its minimalist design makes it a versatile addition to your home.",
      price: "190$",
      image: roundTable,
      dimensions: {
        width: "42 in (106.7 cm)",
        height: "30 in (76.2 cm)",
        depth: "42 in (106.7 cm)",
      },
    },
    {
      id: 4,
      name: "Red Throne",
      tagline: "Claim your kingdom in style.",
      description:
        "An elegant and bold throne-style chair, crafted for comfort and style. Its vibrant red upholstery adds a regal touch to any room.",
      price: "490$",
      image: redThrone,
      dimensions: {
        width: "30 in (76.2 cm)",
        height: "48 in (121.9 cm)",
        depth: "32 in (81.3 cm)",
      },
    },
    {
      id: 5,
      name: "The Urban Perch",
      tagline: "Urban living, elevated seating.",
      description:
        "A sturdy and stylish concrete bench that combines industrial charm with practicality. Ideal for outdoor or modern indoor spaces.",
      price: "290$",
      image: concreteBench,
      dimensions: {
        width: "48 in (121.9 cm)",
        height: "18 in (45.7 cm)",
        depth: "14 in (35.6 cm)",
      },
    },
    {
      id: 6,
      name: "Peach Couch",
      tagline: "Peachy keen",
      description:
        "A vibrant peach-colored couch that adds a pop of color to your living space. Its comfortable design makes it perfect for lounging or entertaining.",
      price: "390$",
      image: peachCouch,
      dimensions: {
        width: "72 in (182.9 cm)",
        height: "34 in (86.4 cm)",
        depth: "30 in (76.2 cm)",
      },
    },
  ]
  let currentProduct = {}
  function getRandomProduct() {
    return products[Math.floor(Math.random() * products.length)]
  }
  onMount(() => {
    currentProduct = getRandomProduct()
  })
</script>

<main class="content-container">
  <img class="img--rotate" src={fabricChair} alt="Cantilever chair" />
  <img class="decorative-chair__image" src={armchair} alt="Cantilever chair" />
  <div class="background-blob" style="--borderRadius: {borderRadius}"></div>
  <div class="info-container">
    <div>
      <h1 class="store__name">
        Haven &amp; <span class="store__accent">Hue</span>
      </h1>
      <nav class="store__navigation">
        <span>Furniture</span>
        <span>Designers</span>
        <span>Trends</span>
        <span>Blog</span>
        <span>Contact</span>
        <span class="cart">
          <img class="cart__image" src={shoppingBag} alt="shopping bag" />
        </span>
      </nav>
      <div class="product__container">
        <div class="product__info">
          <h2 class="product__name">{currentProduct.name}</h2>
          <h3 class="product__tagline">{currentProduct.tagline}</h3>
          <p class="product__extended-description">
            {currentProduct.description}
          </p>
          <span class="product__price">{currentProduct.price}</span><br />
          <button class="product__add-to-cart">Add to cart</button>
          <Arrow fillColor="#ecad27" rotation="270deg" />
        </div>
        <div class="product__image-container">
          <div
            style="--borderRadius: {borderRadius}"
            class="product__background-blob"
          >
            <img
              class="product__image"
              src={currentProduct.image}
              alt={currentProduct.name}
            />
          </div>
          {#if currentProduct.dimensions}
            <div class="product__dimensions">
              <h3 class="product__dimensions-title">Dimensions:</h3>
              {#each Object.entries(currentProduct.dimensions) as [key, value]}
                <p class="product__dimensions-measurement">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </p>
              {/each}
            </div>
          {/if}
        </div>
      </div>
      <div class="related__products">
        {#each products as product}
          <button
            class="related__button"
            on:click={() => setCurrentProduct(product.id)}
          >
            <img
              class="related__image {product.id === currentProduct.id
                ? 'product__selected--large'
                : ''}"
              src={product.image}
              alt={product.name}
            />
            {#if product.id === currentProduct.id}
              <div
                style="--borderRadius: {borderRadius}"
                class="product__selected"
              ></div>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  * {
    --body-font: "Poppins", sans-serif;
    --ryder: #ecad27; /* Vibrant Yellow */
    --rain-cloud: #adadad; /* Neutral Gray */
    --overcast: #ebebeb; /* Light Neutral */
    --stormy-night: #2b2b2b; /* Dark Charcoal Gray */
    --terracotta: #d37b4a; /* Warm Terracotta */
    --deep-lagoon: #377d87; /* Muted Teal */
    --honeydew: #f4f7e4; /* Pale Yellow-Green */
    --oxblood: #5a2b2f; /* Dark Red/Wine */
  }
  main {
    font-family: var(--body-font);
  }
  .store__name {
    font-size: 5rem;
    line-height: 100%;
  }
  .store__accent {
    color: var(--deep-lagoon);
  }
  .store__navigation {
    margin-top: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
  @media (min-width: 900px) {
    .store__navigation {
      gap: 2rem;
    }
  }
  .store__navigation span {
    cursor: pointer;
    margin-bottom: 0.5rem;
    border-bottom: 3px solid transparent;
    transition:
      border-color 0.3s ease,
      color 0.3s ease;
  }
  .store__navigation span:hover {
    color: var(--stormy-night);
    border-bottom: 3px solid var(--deep-lagoon);
  }
  @media (min-width: 600px) {
    .cart {
      margin-left: auto;
    }
  }
  .cart__image {
    width: 20px;
  }
  .content-container {
    position: relative;
    min-height: 100vh;
    background-color: var(--overcast);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .info-container {
    margin: 2em;
    margin-bottom: 5em;
    border-radius: 15px;
    padding: 20px;
    background-color: #fff;
    z-index: 10;
    position: relative;
  }
  .product__container {
    margin-top: 1.25em;
  }
  @media (min-width: 600px) {
    .product__container {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }
  .product__info,
  .product__image-container {
    flex: 1;
  }
  .product__image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product__image {
    max-height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .product__dimensions {
    margin-top: 1em;
  }
  .product__dimensions-title {
    font-size: 1rem;
  }
  .product__dimensions-measurement {
    font-size: 0.75rem;
  }
  .product__name {
    font-size: 2.5rem;
  }
  .product__tagline {
    text-transform: capitalize;
    color: var(--stormy-night);
    font-size: 1.75rem;
    letter-spacing: -0.75px;
  }
  .product__extended-description {
    margin-top: 1.25em;
    color: var(--stormy-night);
  }
  .product__price {
    display: inline-block;
    margin-top: 2rem;
    font-size: 4rem;
    color: var(--ryder);
    font-weight: bold;
    line-height: 100%;
  }
  .product__add-to-cart {
    display: inline-block;
    margin-top: 2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
  }
  .product__background-blob {
    background-color: var(--ryder);
    border-radius: var(--borderRadius);
  }
  .related__products {
    display: none;
  }
  @media (min-width: 600px) {
    .related__products {
      position: absolute;
      left: 0;
      bottom: -10%;
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
  }
  .related__button {
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
  .product__selected {
    border-radius: var(--borderRadius);
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: var(--deep-lagoon);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .product__selected--large {
    transform: scale(1.25);
  }
  .related__image {
    width: 80px;
    transition: transform 0.2s;
    object-fit: contain;
  }
  .related__image:hover {
    transform: scale(1.25);
  }
  .img--rotate {
    z-index: 2;
    transform: rotate(-30deg);
    position: absolute;
    top: -25%;
    left: -25%;
  }
  .decorative-chair__image {
    display: none;
  }
  @media (min-width: 600px) {
    .decorative-chair__image {
      width: 190px;
      display: block;
      position: absolute;
      bottom: -3%;
      right: -5%;
      z-index: 11;
    }
  }
  .background-blob {
    position: absolute;
    top: -10%;
    right: -10%;
    width: 75%;
    height: 100%;
    background-color: #e1e1e1;
    border-radius: var(--borderRadius);
    z-index: 1;
  }
</style>
