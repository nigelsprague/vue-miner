// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { resourcesServices } from './services/ResourcesService.js';
import { upgradesService } from './services/UpgradesService.js';

const resource = computed(() => AppState.resource)
const clickUpgrade = computed(() => AppState.clickUpgrade)
const autoUpgrade = computed(() => AppState.autoUpgrade)

function mineResource() {
  resourcesServices.mineResource()
}

function purchaseUpgrade(upgrade) {
  upgradesService.purchaseUpgrade(upgrade)
}
</script>


// HTML
<template>
  <div class="container-fluid">
    <section class="row">
      <h1 class="text-center my-3">Vue Miner</h1>
        <div class="d-flex justify-content-center">
          <img class="image-fluid logo" @click="mineResource()" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/The_Criterion_Collection_Logo.svg/1200px-The_Criterion_Collection_Logo.svg.png" alt="Criterion Collection Logo">
        </div>
      <h2 class="text-center my-3">{{ resource.count }}</h2>
    </section>
    <section class="row">
      <div class="col-md-6">
        <div v-for="upgrade in clickUpgrade" :key="upgrade.id">
          <button @click="purchaseUpgrade(upgrade)" class="btn btn-info w-100 mb-3">{{ upgrade.name }}</button>
        </div>
      </div>
      <div class="col-md-6">
        <div v-for="upgrade in autoUpgrade" :key="upgrade.id">
          <button @click="purchaseUpgrade(upgrade)" class="btn btn-info w-100 mb-3">{{upgrade.name}}</button>
        </div>
      </div>
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
