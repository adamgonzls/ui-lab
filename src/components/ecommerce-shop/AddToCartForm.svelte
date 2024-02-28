<form on:submit|preventDefault={addToCart}>
  <slot></slot>
</form>

<script>
  import {addCartItem, isCartOpen} from '../../cartStore.ts'

  const hardCodedItemInfo = {
    id: 'wood-chair',
    name: 'Wooden Chair',
    imageSrc: '$lib/assets/images/cantilever-chair-700w.png'
  }

  function addToCart() {
    isCartOpen.set(true)
    addCartItem(hardCodedItemInfo)
  }
</script>