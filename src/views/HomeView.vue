<script setup>
import LayoutDefault from '../components/LayoutDefault.vue'
</script>

<template>
  <LayoutDefault>
    <section class="flex items-center justify-between px-10 py-20">
      <div class="flex flex-col justify-between h-full">
        <div>
          <h1 class="text-3xl font-bold mb-6">Cari tau harga rumah anda</h1>
        </div>
        <button class="mt-10 bg-[#138fac] text-white py-2 px-6 rounded-xl hover:bg-yellow-500">
          <!-- <button class="mt-10 bg-primary text-white py-2 px-6 rounded-xl hover:bg-yellow-500"> -->
          <!-- <button class="mt-10 bg-red-500 text-white py-2 px-6 rounded-xl hover:bg-yellow-500"> -->
          Coba Sekarang
        </button>
      </div>

      <div class="bg-[#138fac] w-[400px] h-[250px] rounded-2xl"></div>
      <!-- <div class="bg-primary w-[400px] h-[250px] rounded-2xl"></div> -->
      <!-- <div class="bg-red-500 w-[400px] h-[250px] rounded-2xl"></div> -->
    </section>
  </LayoutDefault>
</template>
