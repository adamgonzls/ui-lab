<script lang="ts">
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
  function randomIntRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const rangeLow = 17
  const rangeHigh = 95
  export let borderRadius = `${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% / ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}% ${randomIntRange(rangeLow, rangeHigh)}%`
</script>

<main class="content-container">
  <img class="img--rotate" src={fabricChair} alt="Cantilever chair" />
  <img class="img--rotate-2" src={armchair} alt="Cantilever chair" />
  <div class="background-blob" style="--borderRadius: {borderRadius}"></div>
  <div class="info-container">
    <div>
      <nav class="page-navigation">
        <a href="#">Furniture</a>
        <a href="#">Designers</a>
        <a href="#">Trends</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a class="cart" href="#"
          ><img class="cart__image" src={shoppingBag} alt="" /></a
        >
      </nav>
      <div class="product__container">
        <div class="product__info">
          <h1>Relax Seat</h1>
          <h2 class="product__tagline">Feel the essence of comfort</h2>
          <p class="product__extended-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            optio, quibusdam adipisci laboriosam, temporibus in voluptates esse
            sequi debitis ad ipsum! Sit molestias autem quidem labore doloribus
            necessitatibus debitis numquam?
          </p>
          <span class="product__price">390$</span><br />
          <button class="product__add-to-cart">Add to cart</button>
          <Arrow fillColor="#ecad27" rotation="270deg" />
        </div>
        <div>color</div>
        <div class="product__image">
          <div
            style="--borderRadius: {borderRadius}"
            class="product__background-blob"
          >
            <img src={fabricChair} alt="" />
          </div>
        </div>
      </div>
      <div class="related-products">
        <img class="related-image" src={rockingChair} alt="" />
        <img class="related-image" src={roundTable} alt="" />
        <img class="related-image" src={concreteBench} alt="" />
        <img class="related-image" src={redThrone} alt="" />
        <img class="related-image" src={peachCouch} alt="" />
      </div>
    </div>
  </div>
</main>

<style>
  * {
    --body-font: "Poppins", sans-serif;
    --ryder: #ecad27;
    --rain-cloud: #adadad;
    --overcast: #ebebeb;
  }
  main {
    font-family: var(--body-font);
  }
  a {
    color: #111;
    text-decoration: none;
  }
  .page-navigation {
    display: flex;
    gap: 80px;
  }
  .cart {
    margin-left: auto;
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
    margin: 60px;
    padding: 20px;
    background-color: #fff;
    z-index: 10;
    position: relative;
  }
  .product__container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
  }
  .product__info,
  .product__image {
    flex: 1;
  }
  .product__tagline {
    color: var(--rain-cloud);
    font-size: 1.2rem;
  }
  .product__extended-description {
    margin-top: 2rem;
    color: var(--rain-cloud);
  }
  .product__price {
    display: inline-block;
    margin-top: 2rem;
    color: var(--ryder);
    font-weight: bold;
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
    /* background: red; */
    /* border-radius: borderRadius; */
    background-color: var(--ryder);
    border-radius: var(--borderRadius);
  }
  .related-products {
    position: absolute;
    left: 0;
    bottom: -10%;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .related-image {
    width: 80px;
    transition: transform 0.2s;
    object-fit: contain;
  }
  .related-image:hover {
    transform: scale(1.25);
  }
  .img--rotate {
    transform: rotate(-30deg);
    position: absolute;
    top: -25%;
    left: -25%;
  }
  .img--rotate-2 {
    position: absolute;
    bottom: -5%;
    right: -8%;
    z-index: 11;
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
