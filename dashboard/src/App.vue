<template>
  <modal-factory/>
  <router-view/>
</template>

<script setup>
  import ModalFactory from './components/ModalFactory/index.vue'
  components: { ModalFactory }
</script>