<nav>
  <h1><a href="#">CircleUp</a></h1>
  <ul class="nav__pages">
    <li>Features</li>
    <li>Privacy</li>
    <li>Help Centre</li>
    <li>Blog</li>
  </ul>
  <div class="nav__actions">
    <a href="#">Log in</a>
    <a class="nav__signup" href="#">Sign up</a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--blue-zodiac);
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  nav h1 {
    border-radius: 40px;
    padding: 0.25rem 1rem;
    font-family: var(--header-font);
    background-color: #e5ffb5;
  }
  nav a {
    text-decoration: none;
    color: var(--blue-zodiac);
  }
  .nav__pages {
    display: flex;
    list-style-type: none;
    gap: 20px;
  }
  .nav__actions {
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 40px;
    padding: 0.25rem 1rem;
    background-color: #ffffff;
  }
  .nav__signup {
    padding: 0.25rem 1rem;
    border-radius: 40px;
    background-color: var(--blue-zodiac);
    color: #ffffff;
  }
</style>
