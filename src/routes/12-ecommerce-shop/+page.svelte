<script>
  import CartFlyoutToggle from '../../components/ecommerce-shop/CartFlyoutToggle.svelte'
  import CartFlyout from '../../components/ecommerce-shop/CartFlyout.svelte'
  import AddToCartForm from '../../components/ecommerce-shop/AddToCartForm.svelte'
  import fabricChair from "$lib/assets/images/fabric-armchair-610w.png"
  import armchair from "$lib/assets/images/modern-living-room-wooden-armchair-308w.png"
  import rockingChair from "$lib/assets/images/rocking-chair-315w.png"
  import roundTable from "$lib/assets/images/round-wooden-vintage-table-389w.png"
  import redThrone from "$lib/assets/images/red-and-gold-throne-chair-392w.png"
  import concreteBench from "$lib/assets/images/concrete-wood-bench-327w.png"
  import peachCouch from "$lib/assets/images/peach-couch-301w.png"
  import shoppingBag from "$lib/assets/images/purse-wallet.svg"
</script>

<div class="content-container">
  <img class="img--rotate" src={fabricChair} alt="Cantilever chair">
  <img class="img--rotate-2" src={armchair} alt="Cantilever chair">
  <div class="info-container">
    <div>
      <nav class="page-navigation">
        <a href="#">Furniture</a>
        <a href="#">Designers</a>
        <a href="#">Trends</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a class="cart" href="#"><img class="cart__image" src={shoppingBag} alt=""></a>
        <CartFlyoutToggle client:load/>
      </nav>
      <div class="product__container">
        <div class="product__info">
          <h1>Relax Seat</h1>
          <h2>Feel the essence of comfort</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta optio, quibusdam adipisci laboriosam, temporibus in voluptates esse sequi debitis ad ipsum! Sit molestias autem quidem labore doloribus necessitatibus debitis numquam?</p>
          <span>390$</span>
          <button>Add to cart</button>
        </div>
        <div>color</div>
        <div class="product__image">
          <img src={fabricChair} alt="">
        </div>
      </div>
      <div class="related-products">
        <img class="related-image" src={rockingChair} alt="">
        <img class="related-image" src={roundTable} alt="">
        <img class="related-image" src={concreteBench} alt="">
        <img class="related-image" src={redThrone} alt="">
        <img class="related-image" src={peachCouch} alt="">
      </div>
    </div>
  </div>
  <AddToCartForm client:load></AddToCartForm>
  <CartFlyout client:load />
</div>

<style>
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
    height: 100vh;
    background-color: #e1e1e1;
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
</style>