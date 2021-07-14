<template>
  <div id="app">
    <Examen/>
  </div>
</template>

<script>
import Examen from './components/Examen.vue'

export default {
  name: 'App',
  components: {
    Examen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 20px;
}
</style>
