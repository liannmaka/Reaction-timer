<template>
  <h1>Reaction Timer</h1>
  <button @click="playGame" :disabled="startGame">Play</button>
  <Block v-if="startGame" :delay="delay" @end="endGame" :chips="chips" />
  <Results v-if="showResults" :score="score"/>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Block, Results
  },
  data (){
    return {
      startGame: false,
      delay: null,
      score: null,
      showResults: false,
      chips:"Game on"
    }
  },
  methods:{
    playGame (){
      this.startGame = true
      this.delay = 2000 + Math.random() * 5000
      this.showResults = false
  },
  endGame (reactionTime){
      this.score = reactionTime 
      this.startGame = false
      this.showResults = true
  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
