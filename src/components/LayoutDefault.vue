<script setup>
import BaseNavbar from './BaseNavbar.vue'
import BaseFooter from './BaseFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <BaseNavbar />

    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>

    <BaseFooter />
  </div>
</template>
