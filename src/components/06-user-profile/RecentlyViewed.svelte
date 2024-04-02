<script>
  export let userList
</script>

<div class="recently-viewed__container">
  <h2>Previously viewed users</h2>
  <uln class="recently-viewed__list">
    {#each $userList as { login, avatar_url, name }, i}
      <li class="recently-viewed__item">
        <img class="recently-viewed__img" src={avatar_url} alt={name} />
        <span class="recently-viewed__login">{login}</span>
      </li>
    {/each}
  </uln>
</div>

<style>
  .recently-viewed__container {
    margin-top: 1rem;
    border-top: 1px solid var(--submarine);
    padding-top: 1rem;
  }
  .recently-viewed__list {
    list-style-type: none;
    padding-top: 1rem;
    padding-left: 0;
    display: flex;
    gap: 1rem;
  }
  .recently-viewed__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .recently-viewed__img {
    width: 60px;
    border-radius: 50%;
  }
  .recently-viewed__login {
    font-size: 0.75rem;
  }
</style>
