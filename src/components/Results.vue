<template>
  <p data-testid="result">Reaction Time: {{ score }} ms</p>
  <p class="rank"> {{ rank}}</p>
</template>

<script>
export default {
props:['score'],
data (){
    return {
        rank: null
    }
},
mounted (){
    if(this.score < 200){
        this.rank = 'fire fingers'
    }
    else if (this.score < 400){
        this.rank = 'medium'
    }
    else{
        this.rank = 'slow'
    }
}
}
</script>

<style>
  .rank {
      font-size: 1.4em;
      color: #0faf87;
      font-weight: bold;
  }
</style>