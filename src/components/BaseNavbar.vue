<template>
  <div class="navbar sticky top-0 z-50 shadow bg-blue-200 text-black">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Kiri: Logo -->
      <div class="flex items-center gap-2">
        <router-link to="/" class="flex items-center gap-2">
          <img
            src="./icons/logo RO coba.png"
            alt="Logo"
            class="w-20 h-12 rounded-full transition-transform duration-300 hover:scale-110"
          />
        </router-link>
      </div>

      <div class="hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-2">
          <li>
            <router-link to="/" class="text-black hover:text-blue-700">Home</router-link>
          </li>
          <li><router-link to="/EDA" class="text-black hover:text-blue-700">EDA</router-link></li>
          <li>
            <router-link to="/predict" class="text-black hover:text-blue-700">Predict</router-link>
          </li>
        </ul>
      </div>

      <div class="lg:hidden">
        <button @click="toggleMenu" class="btn btn-ghost" aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="absolute top-16 right-4 mt-2 w-48 bg-[#b1edf9] rounded-md shadow-lg lg:hidden z-50"
    >
      <ul class="menu flex flex-col p-2 space-y-1">
        <li><router-link to="/" class="text-black hover:text-blue-700">Home</router-link></li>
        <li><router-link to="/eda" class="text-black hover:text-blue-700">EDA</router-link></li>
        <li>
          <router-link to="/predict" class="text-black hover:text-blue-700">Predict</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
