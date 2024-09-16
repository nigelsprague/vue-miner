// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'

const cheese = ref(0)
</script>


// HTML
<template>
  <div class="container-fluid">
    <section class="row">
      <h1 class="text-center my-3">Vue Miner</h1>
        <div class="d-flex justify-content-center">
          <img class="image-fluid logo" @click="cheese++" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/The_Criterion_Collection_Logo.svg/1200px-The_Criterion_Collection_Logo.svg.png" alt="Criterion Collection Logo">
        </div>
      <h2 class="text-center my-3">{{ cheese }}</h2>
    </section>
  </div>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

.logo {
  max-width: 30vw;
}
</style>
