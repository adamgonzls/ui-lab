<script>
	const handleSubmit = (e) => {
    console.log(e)
  }
  
  const fetchUser = (async () => {
		const response = await fetch(' https://api.github.com/users/adamgonzls')
    console.log(response)
    return await response.json()
	})()
</script>

{#await fetchUser}
	<p>...waiting</p>
{:then data}
	<img src={data.avatar_url} alt={data.name} />
{:catch error}
	<p>An error occurred!</p>
{/await}

<form action="" on:submit|preventDefault={handleSubmit}>
  <input type="text" name="" id="">
  <button>Submit</button>
</form>