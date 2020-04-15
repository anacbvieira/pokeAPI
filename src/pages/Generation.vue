<template>
    <div class="listpokes">
      <div>
        <div class="info">
          <span style="font-size: 80px">{{this.generationname.toUpperCase()}}</span>
          <span style="font-size: 60px"> N° de Espécies: {{pokemon.length}}</span>
        </div>
        <ul>
          <li v-for="p in pokemon" :key="p.name">
            <router-link :to="{ name: 'PokeSpecies', params: { link: p.url, pokename: p.name } }">
              {{ p.name.toUpperCase() }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Generation',
  data () {
    return {
      pokemon: [],
      url: this.link
    }
  },
  props: {
    link: {
      required: false
    },
    generationname: {
      required: false
    }
  },
  mounted () {
    axios(this.url)
      .then(result => {
        this.pokemon = result.data.pokemon_species
      }, error => {
        console.error(error)
      })
  }
}
</script>

<style scoped>

.listpokes{
  margin: 0 auto;
  padding: 0;
  color: black;
  font-size: 70px;
}

.info {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 50px;
  color: #039BE5;
}

.listpokes ul{
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  line-height: 70px;
  margin-top: 30px;
  font-size: 25px;
}

.listpokes li {
  flex: 1;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 300px;
  height: 100%;
  padding: 20px;
}

.listpokes li a {
  list-style: none;
  text-decoration: none;
  border-radius: 10px;
  color: #039BE5;
}

</style>
