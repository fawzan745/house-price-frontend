<template>
  <section class="">
    <div class="mx-auto max-w-5xl space-y-8 md:space-y-16 lg:space-y-20">
      <div class="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
        <h2 class="text-balance text-3xl font-bold lg:text-5xl">Features</h2>
        <p>
          Lyra is evolving to be more than just the models. It supports an entire set of APIs and
          platforms helping developers and businesses innovate.
        </p>
      </div>

      <div class="grid md:grid-cols-2">
        <div>
          <div v-for="item in items" :key="item.value" class="mb-3 rounded-md border mr-20">
            <button
              @click="toggleItem(item.value)"
              class="w-full text-left py-3 px-4 bg-white rounded-t-md font-semibold text-base flex justify-between items-center"
            >
              <span>{{ item.title }}</span>
              <span>{{ activeItem === item.value ? '-' : '+' }}</span>
            </button>
            <transition name="fade">
              <div v-if="activeItem === item.value" class="p-4 dark:bg-gray-900 rounded-b-md">
                {{ item.content }}
              </div>
            </transition>
          </div>
        </div>

        <div class="bg-background relative flex overflow-hidden rounded-3xl ml-20">
          <div class="w-15 absolute inset-0 right-0 ml-auto"></div>
          <div class="aspect-[76/59] bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
            <Transition name="fade" mode="out-in">
              <div
                :key="activeItem"
                class="w-full h-full relative overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  v-if="images[activeItem]"
                  :src="images[activeItem].image"
                  :alt="images[activeItem].alt"
                  class="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  style="object-position: right"
                />
                <div
                  v-else
                  class="w-full h-full flex items-center justify-center bg-gray-100 rounded-2xl"
                >
                  <p class="text-gray-400">Pilih fitur untuk melihat gambar</p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import logoMu from '../components/icons/logo mu.jpeg'

// Awalnya kosong (tidak ada yang terbuka)
const activeItem = ref('')

const items = [
  {
    value: 'item-1',
    title: 'Database Visualization',
    content:
      'Visualisasi database memudahkan pengguna dalam melihat struktur dan relasi antar tabel secara intuitif.',
  },
  {
    value: 'item-2',
    title: 'Advanced Authentication',
    content:
      'Sistem autentikasi canggih untuk menjaga keamanan aplikasi dan data pengguna dari akses tidak sah.',
  },
  {
    value: 'item-3',
    title: 'Identity Management',
    content:
      'Mengelola identitas pengguna secara efisien dengan fitur registrasi, login, dan kontrol akses.',
  },
  {
    value: 'item-4',
    title: 'Analytics Dashboard',
    content:
      'Dashboard analitik interaktif untuk menyajikan data dan metrik penting secara real-time.',
  },
]

const images = {
  'item-1': {
    image: logoMu,
    alt: 'Database visualization',
  },
  'item-2': {
    image: logoMu,
    alt: 'Security authentication',
  },
  'item-3': {
    image: logoMu,
    alt: 'Identity management',
  },
  'item-4': {
    image: logoMu,
    alt: 'Analytics dashboard',
  },
}

function toggleItem(value) {
  activeItem.value = activeItem.value === value ? '' : value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.98);
}
</style>
