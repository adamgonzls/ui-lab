<script lang="ts">
  import { onDestroy } from "svelte"
  import { userList } from "../../stores"
  import "$lib/assets/fonts/06-user-profile/stylesheet.css"
  import "../../styles.css"
  import Compass from "$lib/assets/images/compass.svelte"
  import GithubIcon from "$lib/assets/images/github-icon.svelte"
  import DocumentIcon from "$lib/assets/images/document-icon.svelte"
  import RecentlyViewed from "../../components/06-user-profile/RecentlyViewed.svelte"

  let usernameQuery = ""
  let hasSubmitted = false

  let gitHubUser_value: {
    avatar_url?: string
    name?: string
    location?: string
    bio?: string
    html_url?: string
    repoData?: [
      {
        name?: string
        description?: string
        html_url?: string
        language?: string
      },
    ]
  } = {}

  let userList_value = []

  function checkLocalStorage() {
    if (typeof localStorage !== "undefined") {
      const localStorageUserList = localStorage.getItem("userList")
      if (localStorageUserList) {
        userList.set(JSON.parse(localStorageUserList))
      }
    }
  }

  const unsubscribeUserList = userList.subscribe((value) => {
    if (usernameQuery !== "") {
      console.log(localStorage)
      if (typeof localStorage !== "undefined") {
        console.log("setting userlist")
        localStorage.setItem("userList", JSON.stringify(value))
      }
    }
    userList_value = value
  })

  function handleChange() {
    hasSubmitted = false
  }

  async function handleSubmit() {
    const response = await fetch(
      `https://api.github.com/users/${usernameQuery}`
    )
    if (response.ok) {
      const data = await response.json()
      // gitHubUser.set(data)
      getRepos(usernameQuery, data)
      hasSubmitted = true
    } else {
      // gitHubUser.set({})
      hasSubmitted = true
      console.error("Error:", response.status, response.statusText)
    }
  }

  async function getRepos(usernameQuery: String, data: Object) {
    let repoData = ""
    const response = await fetch(
      `https://api.github.com/users/${usernameQuery}/repos?sort=updated&per_page=10`
    )
    repoData = await response.json()
    const combinedData = { ...data, repoData }
    //
    userList.update((userList) => (userList = [combinedData, ...userList]))
  }
  checkLocalStorage()
  onDestroy(unsubscribeUserList)
</script>

<div class="main-container">
  <main>
    <form class="form" on:submit|preventDefault={handleSubmit}>
      <label class="form__label" for="username"
        >Enter a GitHub username to view user profile:</label
      >
      <input
        required
        type="text"
        name="username"
        id="username"
        class="form__input--username"
        bind:value={usernameQuery}
        on:input={handleChange}
        placeholder="Please enter a GitHub username"
      />
      <button class="form__submit">Submit</button>
    </form>
    {#if $userList.length > 0}
      <RecentlyViewed {userList} />
    {/if}
    <div class="content__container">
      <div class="content">
        {#if $userList.length !== 0}
          <img
            class="user__avatar"
            src={$userList[0].avatar_url}
            alt={$userList[0].name}
          />
          <h1 class="user__fullname">{$userList[0].name}</h1>
          <ul class="user__demographics">
            {#if $userList[0].location}
              <li>
                <span class="user__text-logo-row"
                  ><Compass />{$userList[0].location}</span
                >
              </li>
            {/if}
            {#if $userList[0].bio}
              <li>
                <p class="user__text-logo-row">
                  <DocumentIcon />{$userList[0].bio}
                </p>
              </li>
            {/if}
            <li>
              <a
                class="user__text-logo-row link--brand"
                href={$userList[0].html_url}><GithubIcon />GitHub profile</a
              >
            </li>
          </ul>
          {#if $userList[0].repoData}
            <div class="repos__container">
              <h2>Recent Repositories</h2>
              <ul class="repo__list">
                {#each $userList[0].repoData as { name, description, html_url, language }}
                  <li class="repo__details">
                    <h3>{name.replace("-", " ")}</h3>
                    {#if description}
                      <p class="repo__description">{description}</p>
                    {/if}
                    <a class="link--brand repo__link" href={html_url}
                      >View on GitHub</a
                    ><br />
                    {#if language}
                      <span class="repo__language">{language}</span>
                    {/if}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        {/if}
        {#if usernameQuery !== "" && $userList.length === 0 && hasSubmitted}
          <p class="user--not-found">
            Sorry, no user was found, please try again.
          </p>
        {/if}
      </div>
    </div>
  </main>
</div>

<style>
  * {
    --body-font: "Open Sans";
    --caribbeanGreen: #038b72;
    --submarine: #b7c2c2;
    --sahara: #c1a717;
    --white: #fff;
  }
  .main-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #ace5db;
    min-height: 100vh;
  }
  main {
    margin: 0 auto;
    padding: 2rem;
    width: 90%;
    max-width: 1200px;
    background-color: var(--white);
    border-radius: 25px;
    font-family: var(--body-font);
  }
  button {
    border-radius: 5px;
    color: var(--white);
    background-color: var(--caribbeanGreen);
    border: none;
  }
  input {
    border-radius: 5px;
    border: none;
    padding: 0.5rem;
    background-color: #f1f4f4;
  }
  .form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .form__label {
    font-size: 0.9rem;
    font-weight: bold;
    grid-column: 1/-1;
  }
  .form__input--username {
    grid-column: 1/3;
    border: 1px solid var(--submarine);
  }
  .form__submit {
    font-weight: bold;
  }
  .content {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .user__avatar {
    margin-top: 1rem;
    border: 5px solid var(--white);
    border-radius: 50%;
    width: 200px;
  }
  .user__demographics {
    list-style-type: none;
    padding-left: 0;
  }
  .user__demographics li {
    padding-top: 0.25rem;
  }
  .user__text-logo-row {
    display: flex;
    align-content: center;
    gap: 0.5rem;
  }
  .user__fullname {
    padding-top: 1rem;
  }
  .repos__container {
    margin-top: 1rem;
    border-top: 1px solid var(--submarine);
    padding-top: 1rem;
  }
  .repo__list {
    padding-top: 1rem;
    padding-left: 0;
    list-style-type: none;
  }
  .repo__details {
    border-radius: 5px;
    border: 1px solid var(--submarine);
    padding: 1rem;
    margin-top: 1rem;
  }
  .repo__description {
    padding-top: 0.25rem;
    font-size: 0.75rem;
  }
  .link--brand {
    color: var(--caribbeanGreen);
  }
  .repo__link {
    font-size: 0.75rem;
  }
  .repo__language {
    border-radius: 5px;
    padding: 0.25em 0.75em;
    background-color: var(--sahara);
    color: var(--white);
    font-size: 0.75rem;
  }
  .user--not-found {
    padding-top: 1rem;
  }
  @media screen and (min-width: 800px) {
    .repo__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    .repo__details {
      margin-top: 0;
    }
  }
</style>
