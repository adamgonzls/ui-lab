<script lang="ts">
  import {gitHubUser} from "../../stores.js"
  import Compass from "$lib/assets/images/compass.svelte"
  import GithubIcon from "$lib/assets/images/github-icon.svelte"
  import DocumentIcon from "$lib/assets/images/document-icon.svelte";

  let gitHubUser_value

  gitHubUser.subscribe((value) => {
    console.log(value)
    gitHubUser_value = value
  })

  let data = ""
  
  async function handleSubmit() {
    const queryInput = document.getElementById('username')
    const queryValue = queryInput.value
    // console.log(queryValue)
    const response = await fetch(`https://api.github.com/users/${queryValue}`)
    data = await response.json()
    gitHubUser.set(data)
    // console.log(gitHubUser)

    getRepos(queryValue)
    // return data
  }

  async function getRepos(queryValue: String) {
    let repoData = ""
    const response = await fetch(`https://api.github.com/users/${queryValue}/repos?sort=updated&per_page=10`)
    repoData = await response.json()
    gitHubUser.update(gitHubUser => gitHubUser = {...gitHubUser, repoData})
    // console.log(repoData)
    // return repoData
  }
  
  // console.log(gitHubUser)
</script>

<div class="main-container">
  <main>
    <form class="form" action="" on:submit|preventDefault={handleSubmit}>
      <label for="username">Enter a username to search for user profile</label>
      <input required type="text" name="username" id="username">
      <button>Submit</button>
    </form>
    <!-- <div class="banner"></div> -->
    <div class="content__container">
      <div class="content">
      {#if (!(Object.keys(gitHubUser_value).length === 0)) }
        <img class="user__avatar" src={gitHubUser_value.avatar_url} alt={gitHubUser_value.name} />
        <h1 class="user__fullname">{gitHubUser_value.name}</h1>
        <ul class="user__demographics">
          <li><span class="user__text-logo-row"><Compass/>{gitHubUser_value.location}</span></li>
          <li><p class="user__text-logo-row"><DocumentIcon/>{gitHubUser_value.bio}</p></li>
          <li><a class="user__text-logo-row" href={gitHubUser_value.html_url}><GithubIcon/>GitHub profile</a></li>
        </ul>
        {#if gitHubUser_value.repoData}
          <div class="repos__container">
            <h2>Recent Repositories</h2>
            <ul class="repo__list">
            {#each gitHubUser_value.repoData as repo}
              <li class="repo__details">
                <h3>{(repo.name).replace("-", " ")}</h3>
                {#if repo.description}
                  <p>{repo.description}</p>
                {/if}
                <span class="repo__language">{repo.language}</span>
              </li>
            {/each}
            </ul>
          </div>
        {/if}
      <!-- {:else} -->
        <!-- <p>Search for a user above</p> -->
      {/if}
      </div>
    </div>
  </main>
</div>

<style>
* {
  --caribbeanGreen: #15D9B6;
}
.main-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #ace5db;
  min-height: 100vh;
}
main {
  /* border: 1px solid red; */
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  background-color: #fff;
  border-radius: 25px;
}
button {
  border-radius: 5px;
  color: #fff;
  background-color: var(--caribbeanGreen);
  border: none;
}
input {
  border-radius: 5px;
  border: none;
  background-color: #f1f4f4;
}
svg {
  display: inline-block;
  background-color: #000;
  padding: .25rem;
}
.form {
  padding: 1rem;
}
.banner {
  background-image: url($lib/assets/images/06-github-background-1200w.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  height: 125px;
}
.content__container {
  /* background-color: #fff; */
}
.content {
  padding: 0 1rem 1rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.user__avatar {
  border: 5px solid #fff;
  border-radius: 50%;
  width: 200px;
}
.user__demographics {
  list-style-type: none;
  padding-left: 0;
}
.user__demographics li {
  padding-top: .25rem;
}
.user__text-logo-row {
  display: flex;
  align-content: center;
  gap: .5rem;
}
.user__fullname {
  padding-top: 1rem;
}
.repos__container {
  margin-top: 1rem;
  border-top: 1px solid #f3f5f5;
  padding-top: 1rem;
}
.repo__list {
  padding-top: 1rem;
  padding-left: 0;
  list-style-type: none;
}
.repo__details {
  border-radius: 5px;
  border: 1px solid black;
  padding: 1rem;
  margin-top: 1rem;
}
@media screen and (min-width: 600px) {
  .repo__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .repo__details {
    margin-top: 0;
  }
}
.repo__language {
  border-radius: 5px;
  padding: .25em .75em;
  background-color: #C1A717;
  color: #fff;
  font-size: .75rem;
}
</style>
