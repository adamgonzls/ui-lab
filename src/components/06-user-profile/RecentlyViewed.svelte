<script>
  export let userList
  export let removeUser
</script>

<div class="recently-viewed__container">
  <h2 class="recently-viewed__header">Searched users</h2>
  <ul class="recently-viewed__list">
    {#each $userList as { login, avatar_url, name }, i}
      <li data-id={i} class="recently-viewed__item">
        <button on:click class="recently-viewed__select" id={login}>
          <img class="recently-viewed__img" src={avatar_url} alt={name} />
          <span class="recently-viewed__login">{login}</span>
          <button
            id={`${i}_${login}`}
            on:click={removeUser}
            class="recently-viewed__delete">❌</button
          >
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
  .recently-viewed__item {
    position: relative;
  }
  .recently-viewed__item:hover .recently-viewed__delete {
    opacity: 1;
  }
  .recently-viewed__select {
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
  .recently-viewed__delete {
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
    opacity: 0;
    background: none;
    border: none;
    transition: opacity 0.3s;
  }
</style>
