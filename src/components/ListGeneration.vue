<template>
  <div>
    <nav class="navbar">
      <ul>
        <li v-for="p in pokemon" :key="p.name">
          <router-link :to="{ name: 'Generation', params: { link: p.url, generationname: p.name } }">
            {{ p.name.toUpperCase() }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ListGeneration',
  data () {
    return {
      pokemon: []
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': 'https://pokeapi.co/api/v2/generation' })
      .then(result => {
        this.pokemon = result.data.results
      }, error => {
        console.error(error)
      })
  }
}
</script>

<style>

*{
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
}

.navbar{
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0;
  background: #E53935;
  font-size: 25px;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  line-height: 65px;
}

.navbar li a {
  color: white;
}
</style>
