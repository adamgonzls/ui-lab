<script>
  import BrandLogo from "./BrandLogo.svelte"
  import UserActions from "./UserActions.svelte"
</script>

<nav>
  <div class="nav--desktop">
    <BrandLogo />
    <ul class="nav__page-links">
      <li>Features</li>
      <li>Privacy</li>
      <li>Help Centre</li>
      <li>Blog</li>
    </ul>
    <UserActions />
  </div>
  <ul class="nav__page-links--mobile">
    <li>Features</li>
    <li>Privacy</li>
    <li>Help Centre</li>
    <li>Blog</li>
  </ul>
</nav>

<style>
  .nav--desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--blue-zodiac);
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .nav__page-links {
    padding-left: 0;
    display: none;
    list-style-type: none;
    gap: 20px;
  }
  .nav__page-links--mobile {
    margin-top: 0.25rem;
    padding-left: 1rem;
    list-style-type: none;
    display: flex;
    gap: 0.625rem;
    color: var(--blue-zodiac);
  }
  @media (min-width: 700px) {
    .nav__page-links {
      display: flex;
    }
    .nav__page-links--mobile {
      display: none;
    }
  }
</style>
