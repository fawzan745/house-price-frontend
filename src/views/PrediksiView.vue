<script setup>
import { ref } from 'vue'
import LayoutDefault from '../components/LayoutDefault.vue'

const location = ref('')
const bedroom = ref('')
const bathrooms = ref('')
const view = ref('')
const buildingArea = ref('')

const predictedPrice = ref(0)

const locations = ref([
  { id: 'surabaya', name: 'Surabaya' },
  { id: 'makassar', name: 'Makassar' },
  { id: 'jakarta', name: 'Jakarta' },
])

const predictPrice = () => {
  predictedPrice.value = 1250000000
}
</script>

<template>
  <LayoutDefault>
    <section class="py-2 px-4">
      <div class="container mx-auto mt-7">
        <h1 class="text-3xl md:text-4xl font-bold text-center text-black mb-10">
          Let's Predict House Price
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          <form @submit.prevent="predictPrice" class="grid grid-cols-1 gap-6 text-left w-full">
            <div>
              <label class="block mb-1 font-medium">Location</label>
              <select
                v-model="location"
                class="w-full border border-gray-700 rounded-md p-2"
                required
              >
                <option value="" disabled selected>Select Location</option>
                <option v-for="loc in locations" :key="loc.id" :value="loc.id">
                  {{ loc.name }}
                </option>
              </select>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-1 font-medium">Bedroom</label>
                <input
                  type="number"
                  v-model="bedroom"
                  class="w-full border border-gray-700 rounded-md p-2"
                  placeholder="Number of bedrooms"
                  required
                />
              </div>

              <div>
                <label class="block mb-1 font-medium">Bathrooms</label>
                <input
                  type="number"
                  v-model="bathrooms"
                  class="w-full border border-gray-700 rounded-md p-2"
                  placeholder="Number of bathrooms"
                  required
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-1 font-medium">Land Area</label>
                <input
                  type="number"
                  v-model="view"
                  class="w-full border border-gray-700 rounded-md p-2"
                  placeholder="Value in m²"
                  required
                />
              </div>

              <div>
                <label class="block mb-1 font-medium">Building Area</label>
                <input
                  type="number"
                  v-model="buildingArea"
                  class="w-full border border-gray-700 rounded-md p-2"
                  placeholder="Value in m²"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="bg-blue-200 text-black py-2 px-6 rounded-xl hover:bg-blue-400 transition"
            >
              Predict
            </button>
          </form>

          <div
            class="bg-white h-80 shadow-md rounded-2xl p-6 text-center w-full border border-gray-200"
          >
            <p class="mb-3">Your House Price Prediction</p>

            <div class="bg-blue-50 h-50 py-4 rounded-lg mb-5">
              <p class="text-sm text-gray-700 items-center">Price in Rupiah</p>
              <p class="text-2xl font-bold text-blue-800">
                Rp {{ predictedPrice.toLocaleString('id-ID') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LayoutDefault>
</template>
