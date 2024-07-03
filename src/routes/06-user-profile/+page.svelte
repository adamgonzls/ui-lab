<script lang="ts">
  import { onDestroy } from "svelte"
  import { userList } from "../../stores"
  import "$lib/assets/fonts/06-user-profile/stylesheet.css"
  import "../../styles.css"
  import Compass from "$lib/assets/images/compass.svelte"
  import GithubIcon from "$lib/assets/images/github-icon.svelte"
  import DocumentIcon from "$lib/assets/images/document-icon.svelte"
  import RecentlyViewed from "../../components/06-user-profile/RecentlyViewed.svelte"

  interface User {
    login: string
    avatar_url: string
    type: string
    extra_data: {
      bio?: string
    }
  }

  let isOverlayOpen = false
  let timeout: number | undefined = undefined
  let foundUsers: User[] = []
  let usernameQuery = ""
  let hasSubmitted = false
  let userList_value = []
  let clickedProfile = []
  let deleteUser = false
  let currentUser:
    | {
        avatar_url?: string
        name?: string
        location?: string
        bio?: string
        html_url?: string
        repoData?: {
          name?: string
          description?: string
          html_url?: string
          language?: string
        }[]
      }
    | undefined
    | null = {}

  function checkLocalStorage() {
    if (typeof localStorage !== "undefined") {
      const localStorageUserList = localStorage.getItem("userList")
      if (localStorageUserList) {
        userList.set(JSON.parse(localStorageUserList))
      }
    }
  }

  const unsubscribeUserList = userList.subscribe((value) => {
    // userlist subscribe stuff
    if (usernameQuery !== "" && hasSubmitted) {
      console.log("usernameQuery is not empty and hasSubmitted is true")
      if (typeof localStorage !== "undefined") {
        console.log("setting userlist")
        localStorage.setItem("userList", JSON.stringify(value))
      }
    }
    if (
      typeof localStorage !== "undefined" &&
      clickedProfile.length > 0 &&
      !hasSubmitted
    ) {
      console.log(
        "local storage is defined and clickedProfile has a length and hasSubmitted is false"
      )
      localStorage.setItem("userList", JSON.stringify(value))
    }
    // update local storage when a user is removed
    if (typeof localStorage !== "undefined" && deleteUser) {
      localStorage.setItem("userList", JSON.stringify(value))
      deleteUser = false
    }
    currentUser = value[0]
    userList_value = value
  })

  async function handleInputChange(event: Event) {
    const searchQuery = (event.target as HTMLInputElement).value
    const searchUrl = `https://api.github.com/search/users?q=${searchQuery}&page=1&per_page=5`
    const userDetailsURL = `https://api.github.com/users/`
    hasSubmitted = false
    console.log(`value: ${searchQuery}`)

    clearTimeout(timeout)

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
      console.log("Input Value:", searchQuery)
      // fetch users that match query
      if (usernameQuery !== "") {
        fetch(searchUrl)
          .then((res) => res.json())
          .then(function (data) {
            // get the user data for each user
            return Promise.all(
              data.items.map((item: User) => {
                return fetch(`${userDetailsURL}${item.login}`)
                  .then((res) => res.json())
                  .then((data) => {
                    item.extra_data = data
                    return item
                  })
              })
            )
          })
          .then((data) => {
            foundUsers = data
            isOverlayOpen = true
            console.log(foundUsers)
          })
      } else if (usernameQuery === "" && foundUsers.length > 0) {
        foundUsers = []
      }
    }, 1000)
  }

  async function handleSubmit(login: string) {
    console.log(login)
    hasSubmitted = true

    if ($userList.some((user) => user.login === login)) {
      console.log("User already exists in list")
      setCurrentUser(login)
      foundUsers = []
      isOverlayOpen = false
      return
    }

    const foundUserObj = foundUsers.find(
      (foundUser) => foundUser.login === login
    )
    if (foundUserObj !== undefined) {
      getRepos(login, foundUserObj)
    } else {
      console.log("found user object is undefined")
    }
  }

  function handleOverlayClick() {
    isOverlayOpen = false
    foundUsers = []
    usernameQuery = ""
  }

  async function getRepos(
    login: string,
    foundUserObj: {
      login: string
      avatar_url: string
      name: string
      location: string
      bio: string
      html_url: string
    }
  ) {
    const repoSearchURL = `https://api.github.com/users/${login}/repos?sort=updated&per_page=10`
    let repoData: {
      name: string
      description: string
      html_url: string
      language: string
    }[] = []
    const response = await fetch(repoSearchURL)
    repoData = await response.json()
    const combinedData = { ...foundUserObj, repoData }
    userList.update((userList) => (userList = [combinedData, ...userList]))
    usernameQuery = ""
    foundUsers = []
    isOverlayOpen = false
  }

  function setCurrentUser(usernameQuery: string) {
    if (usernameQuery) {
      const foundUserIndex = $userList.findIndex(
        (user) => user.login === usernameQuery
      )
      if (foundUserIndex > 0) {
        clickedProfile = $userList.splice(foundUserIndex, 1)
        console.log("this should be the found profile", clickedProfile[0])
        $userList = [clickedProfile[0], ...$userList]
      }
    }

    if (this !== undefined) {
      if (this.id) {
        console.log(`the id is: ${this.id}`)
        const clickedUserIndex = $userList.findIndex(
          (user) => user.login === this.id
        )
        if (clickedUserIndex > 0) {
          clickedProfile = $userList.splice(clickedUserIndex, 1)
          $userList = [clickedProfile[0], ...$userList]
        }
      }
    }
    console.log(currentUser)
  }

  function removeUser(event: Event) {
    event.stopPropagation()
    if (event.target && event.target instanceof HTMLElement) {
      const buttonId = event.target.id
      const removeProfileIndex = parseInt(buttonId.split("_")[0])
      if (!isNaN(removeProfileIndex)) {
        console.log(`remove user: ${removeProfileIndex}`)
        deleteUser = true
        $userList.splice(removeProfileIndex, 1)
        $userList = $userList
      } else {
        console.log("Failed to convert profile index to a number")
      }
    }
  }

  checkLocalStorage()
  onDestroy(unsubscribeUserList)
</script>

<div class="main-container">
  {#if isOverlayOpen}
    <div
      class="overlay"
      tabindex="0"
      role="button"
      on:click={handleOverlayClick}
      aria-label="Close overlay"
    ></div>
  {/if}
  <main>
    <form class="form" on:submit|preventDefault>
      <label class="form__label" for="username"
        >Search to view user profile:</label
      >
      <input
        required
        type="text"
        name="username"
        id="username"
        class="form__input--username"
        autocomplete="off"
        bind:value={usernameQuery}
        on:input={handleInputChange}
        placeholder="Please enter a GitHub username"
      />
      <!-- {#await foundUsers} -->
      <!-- <p>Searching for users...</p> -->
      {#if foundUsers.length > 0}
        <div class="found-user__results">
          {#each foundUsers as user}
            <button
              class="form__submit"
              on:click={() => handleSubmit(user.login)}
              id={user.login}
            >
              <img
                class="found-user__avatar"
                src={user.avatar_url}
                alt={user.login}
              />
              <div class="found-user__info">
                <span class="found-user__type">{user.type}</span>
                <span>{user.login}</span>
              </div>
              {#if user.extra_data.bio}
                <p class="found-user__bio">{user.extra_data.bio}</p>
              {/if}
            </button>
          {/each}
        </div>
      {/if}
      <!-- {/if} -->
    </form>
    {#if usernameQuery !== "" && currentUser === null && hasSubmitted}
      <p class="user--not-found">
        Sorry, no user was found for {usernameQuery}, please try again.
      </p>
    {/if}
    {#if $userList.length > 0}
      <RecentlyViewed {setCurrentUser} {userList} {removeUser} />
    {/if}
    <div class="content__container">
      <div class="content">
        {#if $userList.length !== 0 && currentUser && Object.values(currentUser).length !== 0}
          <img
            class="user__avatar"
            src={currentUser?.avatar_url}
            alt={currentUser?.name}
          />
          {#if currentUser?.name}
            <h1 class="user__fullname">{currentUser.name}</h1>
          {/if}
          <ul class="user__demographics">
            {#if currentUser?.location}
              <li>
                <span class="user__text-logo-row"
                  ><Compass />{currentUser.location}</span
                >
              </li>
            {/if}
            {#if currentUser?.bio}
              <li>
                <p class="user__text-logo-row">
                  <DocumentIcon />{currentUser.bio}
                </p>
              </li>
            {/if}
            <li>
              <a
                class="user__text-logo-row link--brand"
                href={currentUser?.html_url}><GithubIcon />GitHub profile</a
              >
            </li>
          </ul>
          {#if currentUser?.repoData !== undefined && currentUser.repoData.length > 0}
            <div class="repos__container">
              <h2>Recent Repositories</h2>
              <ul class="repo__list">
                {#each currentUser.repoData as { name, description, html_url, language }}
                  <li class="repo__details">
                    <h3 class="repo__name">{name}</h3>
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
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
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
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .form__label {
    font-size: 0.9rem;
    font-weight: bold;
    grid-column: 1/-1;
  }
  .form__input--username {
    grid-column: 1/-1;
    border: 1px solid var(--submarine);
  }
  .form__submit {
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr 4fr;
    padding: 0.5rem;
    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid var(--submarine);
  }
  .found-user__results {
    position: absolute;
    top: 100%;
    z-index: 1;
    width: 100%;
  }
  .found-user__avatar {
    border-radius: 50%;
    width: 50px;
  }
  .content__container {
    margin-top: 1rem;
    border-top: 1px solid var(--submarine);
    padding-top: 1rem;
  }
  .content {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .user__avatar {
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
  .repo__name {
    overflow-wrap: break-word;
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
  .found-user__info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .found-user__bio {
    text-align: left;
  }
  .repo__language,
  .found-user__type {
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
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    .repo__details {
      margin-top: 0;
    }
  }
</style>
