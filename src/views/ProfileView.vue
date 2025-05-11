<script setup>
import LayoutDefault from '../components/LayoutDefault.vue'
</script>

<template>
  <LayoutDefault>
    <section class="py-10 px-4 text-center">
      <h2 class="text-2xl font-bold mb-8">About Us</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div class="border bg-[#138fac] rounded-xl p-6 flex flex-col items-center">
          <img
            src="/src/components/icons/logo mu.jpeg"
            alt="Foto 1"
            class="w-40 h-40 rounded-full mb-4 object-cover"
          />
          <p class="text-lg text-white font-bold">Nama : GGMU</p>
        </div>

        <div class="border bg-[#138fac] rounded-xl p-6 flex flex-col items-center">
          <img
            src="/src/components/icons/logo mu.jpeg"
            alt="Foto 2"
            class="w-40 h-40 rounded-full mb-4 object-cover"
          />
          <p class="text-lg text-white font-bold">Nama : GGMU</p>
        </div>

        <div class="border bg-[#138fac] rounded-xl p-6 flex flex-col items-center">
          <img
            src="/src/components/icons/logo mu.jpeg"
            alt="Foto 3"
            class="w-40 h-40 rounded-full mb-4 object-cover"
          />
          <p class="text-lg text-white font-bold">Nama : GGMU</p>
        </div>
      </div>
    </section>
  </LayoutDefault>
</template>
