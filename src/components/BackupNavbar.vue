<script setup>
import AboutView from '@/views/AboutView.vue'
</script>

<template>
  <div class="navbar shadow bg-[#138fac] text-white">
    <div class="flex-1 flex items-center gap-2">
      <router-link to="/" class="flex items-center gap-2">
        <img src="./icons/logo RO coba.png" alt="Logo" class="w-12 h-12 rounded-full" />
        <span
          class="font-bold text-xl text-white hover:text-yellow-200 transition-colors duration-300"
          >REGO OMAH</span
        >
      </router-link>
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

    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li>
          <router-link to="/about" class="text-white hover:text-yellow-200">About</router-link>
        </li>
        <li><router-link to="/EDA" class="text-white hover:text-yellow-200">EDA</router-link></li>
        <li>
          <router-link to="/algoritma" class="text-white hover:text-yellow-200"
            >Algoritma</router-link
          >
        </li>
        <li>
          <router-link to="/benefit" class="text-white hover:text-yellow-200">Benefit</router-link>
        </li>
        <about-view />
        <a href="#benefit" class="text-white hover:text-yellow-200">benefit</a>
        <li>
          <router-link to="/predict" class="text-white hover:text-yellow-200">Predict</router-link>
        </li>
        <li>
          <router-link to="/profile" class="text-white hover:text-yellow-200">Profile</router-link>
        </li>
      </ul>
    </div>

    <div
      v-if="isOpen"
      class="absolute top-16 right-0 mt-2 w-48 bg-[#138fac] rounded-md shadow-lg lg:hidden z-50"
    >
      <ul class="menu flex flex-col p-2 space-y-1">
        <li>
          <router-link to="/about" class="text-white hover:text-yellow-200">About</router-link>
        </li>
        <li><router-link to="/eda" class="text-white hover:text-yellow-200">EDA</router-link></li>
        <li>
          <router-link to="/algoritma" class="text-white hover:text-yellow-200"
            >Algoritma</router-link
          >
        </li>
        <li>
          <router-link to="/benefit" class="text-white hover:text-yellow-200">Benefit</router-link>
        </li>
        <li>
          <router-link to="/predict" class="text-white hover:text-yellow-200">Predict</router-link>
        </li>
        <li>
          <router-link to="/profile" class="text-white hover:text-yellow-200">Profile</router-link>
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
