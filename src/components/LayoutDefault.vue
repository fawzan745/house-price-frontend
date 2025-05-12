<script setup>
import BaseNavbar from './BaseNavbar.vue'
import BaseFooter from './BaseFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <BaseNavbar />

    <main class="flex-1 flex mx-auto px-0 py-0">
      <slot />
    </main>

    <BaseFooter />
  </div>
</template>
