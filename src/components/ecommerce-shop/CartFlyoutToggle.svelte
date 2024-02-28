<script>
  import {isCartOpen} from '../../cartStore.ts'
</script>

<button on:click={() => isCartOpen.set(!$isCartOpen)}>Cart</button>