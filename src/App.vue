<template>
  <div id="app">
    <Header />
    <ListGeneration />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from '@/components/Header'
import ListGeneration from '@/components/ListGeneration'

export default {
  name: 'App',
  components: { Header, ListGeneration },
  data: () => ({
    //
  })
}
</script>

<style>
body{
  background-color: #FFEE58;
  font-family: 'Montserrat', sans-serif;
}
</style>
