<template>
  <div class="logo">
    <RouterLink to="/dashboards/main">
      <v-img v-if="customizer.mini_sidebar" :src="ezMiniLogo" alt="cover" />
      <v-img v-else :src="ezLogo" alt="cover" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// import { useCustomizerStore } from '@/stores/customizer'
import { useCustomizerStore } from '../../../stores/customizer'
// import ezMiniLogo from '@/assets/images/logos/EZ-mini-logo.png'
// import ezLogo from '@/assets/logo.svg'
import ezMiniLogo from '../../../assets/logo.svg'
import ezLogo from '@/assets/logo.svg'

const customizer = useCustomizerStore()
const primary = ref('rgb(var(--v-theme-primary))')
const secondary = ref('rgb(var(--v-theme-secondary))')
</script>
