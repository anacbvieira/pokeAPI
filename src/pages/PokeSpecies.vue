<template>
    <div class="cards" >
      <div class="card" v-if="pokemon" >
          <div class="pokeImage">
                <img :src=pokeimg>
            </div>
            <div class="pokeDetails" >
                <span> Nome: {{pokename.toUpperCase()}} </span>
                <span> n°: {{pokemon.id}} </span>
                <span> Altura: {{pokemon.height}}</span>
                <span> Espécies que evoluem para ele: </span>
                <span> Habilidades: </span>
                <ul>
                  <li v-for="a in abilities" :key="a">
                    {{a}}
                  </li>
                </ul>
                <span> Tipos: </span>
                <ul>
                  <li v-for="t in types" :key="t">
                    {{t}}
                  </li>
                </ul>
            </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'PokeSpecies',
  data () {
    return {
      pokemon: [],
      pokeimg: '',
      types: [],
      abilities: []
    }
  },
  props: {
    link: {
      required: false
    },
    pokename: {
      required: false
    }
  },
  methods: {
    getpokes () {
      axios(`https://pokeapi.co/api/v2/pokemon/${this.pokename}`)
        .then(result => {
          this.pokemon = result.data
          this.pokeimg = this.pokemon.sprites.front_default
          this.pokemon.abilities.map(p => {
            this.abilities.push(p.ability.name)
          })
          this.pokemon.types.map(p => {
            this.types.push(p.type.name)
          })
          this.$forceUpdate()
        }, error => {
          console.error(error)
        })
    }
  },
  mounted () {
    this.getpokes()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.cards {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 10px 0;
}
.card {
  display: flex;
  background-color: white;
  align-items: center;
  width: 950px;
  margin: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.pokeImage {
  margin: 20px;
}
.pokeImage img {
  width: 200px;
  height: 200px;
}
.pokeDetails{
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-family: 'Press Start 2P';
  font-size: 20px;
}

.pokeDetails span {
  padding: 10px;
}

.pokeDetails ul {
  font-size: 17px;
  text-align: center;
}
</style>
