<script setup>
import LayoutDefault from '../components/LayoutDefault.vue'
</script>

<template>
  <LayoutDefault>
    <section
      class="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 md:py-20 gap-6"
    >
      <div class="flex flex-col justify-between w-full md:w-1/2 text-center md:text-left">
        <div>
          <h1 class="items-center text-2xl sm:text-3xl font-bold mb-4">
            Cari tahu harga rumah Anda
          </h1>
        </div>
        <router-link
          to="/prediksi"
          class="inline-block mt-6 bg-[#138fac] text-white py-2 px-6 rounded-xl hover:bg-yellow-500 transition-colors duration-300"
        >
          Coba Sekarang
        </router-link>
      </div>

      <div class="w-full md:w-[400px] h-[200px] md:h-[250px] bg-[#138fac] rounded-2xl"></div>
    </section>
  </LayoutDefault>
</template>
