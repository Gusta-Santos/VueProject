<template>
  <modal-factory />
  <router-view />
</template>

<script setup>
  import { watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  import ModalFactory from './components/ModalFactory/index.vue'
  import services from './services';
  components: { ModalFactory }

  const router = useRouter()
  const route = useRoute()
  route.path

  watch(() => route.path,  async () => {
    if(route.meta.hasAuth) {
      const token = window.localStorage.getItem('token')

      if(!token) {
        router.push({ name : 'Home' })
        return 
      }

      const { data } = await services.users.getMe()
      console.log('data', data)
    }
  })
</script>