<script>
  export let classes
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" class={classes}>
  <path fill="#fff" d="M12 18.00002h6v6h-6z" />
  <path
    d="M18 6h6v6h-6zM12 6h6v6h-6zM24 12.00002h6v6h-6zM30 12.00002h6v6h-6zM36 6h6v6h-6zM42 6h6v6h-6zM48 6h6v6h-6zM54 12.00002h6v6h-6zM54 18.00002h6v6h-6zM6 6h6v6H6zM0 12.00002h6v6H0zM0 18.00002h6v6H0zM0 24.00002h6v6H0zM54 24.00002h6v6h-6zM6 30.00002h6v6H6zM12 36.00002h6v6h-6zM18 42.00002h6v6h-6zM24 48.00002h6v6h-6zM30 48.00002h6v6h-6zM36 42.00002h6v6h-6zM42 36.00002h6v6h-6zM48 30.00002h6v6h-6z"
  />
  <path fill="#9d0000" d="M6 12.00002h6v6H6z" />
  <path fill="red" d="M12 12.00002h6v6h-6zM18 12.00002h6v6h-6z" />
  <path fill="#9d0000" d="M6 18.00002h6v6H6z" />
  <path fill="red" d="M12 18.00002h6v6h-6zM18 18.00002h6v6h-6z" />
  <path fill="#9d0000" d="M6 24.00002h6v6H6z" />
  <path fill="red" d="M12 24.00002h6v6h-6zM18 24.00002h6v6h-6z" />
  <path fill="#9d0000" d="M12 30.00002h6v6h-6z" />
  <path fill="red" d="M18 30.00002h6v6h-6z" />
  <path fill="#9d0000" d="M18 36.00002h6v6h-6z" />
  <path fill="red" d="M24 36.00002h6v6h-6z" />
  <path fill="#9d0000" d="M24 42.00002h6v6h-6z" />
  <path
    fill="red"
    d="M30 42.00002h6v6h-6zM30 36.00002h6v6h-6zM24 30.00002h6v6h-6zM30 30.00002h6v6h-6zM30 24.00002h6v6h-6zM24 24.00002h6v6h-6zM24 18.00002h6v6h-6zM30 18.00002h6v6h-6zM36 24.00002h6v6h-6zM42 30.00002h6v6h-6zM36 30.00002h6v6h-6zM36 36.00002h6v6h-6zM42 24.00002h6v6h-6z"
  />
  <path fill="#ff5757" d="M48 24.00002h6v6h-6z" />
  <path fill="red" d="M36 18.00002h6v6h-6zM42 18.00002h6v6h-6z" />
  <path
    fill="#ff5757"
    d="M48 18.00002h6v6h-6zM48 12.00002h6v6h-6zM42 12.00002h6v6h-6zM36 12.00002h6v6h-6z"
  />
</svg>

<style>
  .heart--50 {
    height: 50px;
  }
  .heart {
    position: absolute;
    right: 0;
    animation:
      fade-out 10s linear infinite,
      float 5s linear infinite;
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
      display: block;
      bottom: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
      bottom: 75%;
    }
  }
  @keyframes float {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(20px);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
