<template>
  <section class="src-components-examen">
    <input v-model="message" placeholder="Mensaje...">
    <p>Cantidad: {{ messageLength }}</p>
    <p>{{message | encoded}} (codificado)</p>
    <p>{{message | upperCase}} (Mayúscula)</p>
    <p>{{message | lowerCase}} (Minúscula)</p>
    <p>{{message | upperLowerCase}} (Mayúscula/Minúscula)</p>
    <p>{{message | lowerUpperCase}} (Minúscula/Mayúscula)</p>

    <hr>

    <p>Respuestas: 1:b - 2:b - 3:c - 4:b - 5:b</p>
  </section>
</template>

<script>
export default {
  name: 'src-components-examen',
  props: {
    message: String
  },
  computed: {
    messageLength() {
      return this.message ? this.message.length : 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
