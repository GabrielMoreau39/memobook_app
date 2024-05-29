<script setup lang="ts">
  import { RouterView, useRoute } from 'vue-router'
  import HeaderPage from './components/HeaderPage.vue' 
  import FooterPage from './components/FooterPage.vue'
  import { computed } from 'vue';

  const route = useRoute()
  const hideOnRoutes = ['/connexion']
  const hide = computed(() => !hideOnRoutes.some(path => route.path.sartsWith(path)))
</script>

<template>
  <HeaderPage v-if="hide"/>
  <main class="pt-header mb-footer">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </RouterView>
  </main>
  <FooterPage v-if="hide" />
</template>

