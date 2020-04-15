<template>
  <div>
    <div class="topo">
      <div class="container">
        <div class="item">
          <img
            alt="Pokemon logo"
            src="../assets/Pokémon_logo.svg.png"
            width="83px"
            height="51px"
          />,
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.topo {
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0;
  background: #E53935;
}

.container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  padding: none;
}

.item {
  margin: 10px;
}

.item img {
  width: 100%;
}
</style>
