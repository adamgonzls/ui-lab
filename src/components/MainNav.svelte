<nav>
  <a href="/">Home</a>
  <a href="/01-sign-up">Sign Up</a>
  <a href="/03-landing-page">Landing Page</a>
  <a href="/06-user-profile">User Profile</a>
  <a href="/08-404-page">404 Page</a>
  <a href="/12-ecommerce-shop">Ecommerce Shop</a>
</nav>

<style>
  nav {
    color: var(--black);
    display: flex;
    gap: 0.5em;
    font-size: 0.75rem;
    flex-wrap: wrap;
  }
  @media (min-width: 300px) {
    nav {
      padding-right: 2em;
      padding-left: 2em;
    }
  }
  @media (min-width: 500px) {
    nav {
      padding-right: 3em;
      padding-left: 3em;
      font-size: 1rem;
    }
  }
  @media (min-width: 700px) {
    nav {
      padding-right: 75px;
      padding-left: 75px;
      gap: 1em;
    }
  }
  a {
    text-decoration: none;
    color: var(--black);
    font-family: var(--body-font);
  }
</style>
