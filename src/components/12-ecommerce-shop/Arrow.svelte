<script>
  export let fillColor = "red"
  export let rotation = "0deg"
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xml:space="preserve"
  viewBox="0 0 330 330"
  style="--rotation:{rotation};--fillColor:{fillColor};"
>
  <path
    d="M154.394 325.606C157.322 328.535 161.161 330 165 330s7.678-1.465 10.607-4.394l75-75c5.858-5.857 5.858-15.355 0-21.213-5.858-5.857-15.356-5.857-21.213 0L180 278.787V15c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l75.001 75z"
  />
</svg>

<style>
  svg {
    width: 50px;
    height: 50px;
    rotate: var(--rotation);
    fill: var(--fillColor);
  }
</style>
