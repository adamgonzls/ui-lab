<script>
  export let userList
</script>

<div class="recently-viewed__container">
  <h2 class="recently-viewed__header">Searched users</h2>
  <ul class="recently-viewed__list">
    {#each $userList as { login, avatar_url, name }, i}
      <li class="recently-viewed__item">
        <button on:click id={login}>
          <img class="recently-viewed__img" src={avatar_url} alt={name} />
          <span class="recently-viewed__login">{login}</span>
        </button>
      </li>
    {/each}
  </ul>
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
    overflow: scroll;
  }
  .recently-viewed__item button {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  .recently-viewed__img {
    width: 50px;
    border-radius: 50%;
    max-width: unset;
  }
  .recently-viewed__login {
    font-size: 0.75rem;
  }
</style>
