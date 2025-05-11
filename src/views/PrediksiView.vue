<script setup>
import { ref } from 'vue'
import LayoutDefault from '../components/LayoutDefault.vue'

const location = ref('')
const bedroom = ref('')
const bathrooms = ref('')
const view = ref('')
const buildingArea = ref('')

const locations = ref([
  { id: 'surabaya', name: 'Surabaya' },
  { id: 'makassar', name: 'Makassar' },
  { id: 'jakarta', name: 'Jakarta' },
])

const predictPrice = () => {
  console.log({
    location: location.value,
    bedroom: bedroom.value,
    bathrooms: bathrooms.value,
    view: view.value,
    buildingArea: buildingArea.value,
  })
}
</script>

<template>
  <LayoutDefault>
    <section class="py-10 px-4 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-black mb-10">Let's Predict House Price</h1>

      <form
        @submit.prevent="predictPrice"
        class="max-w-xl mx-auto grid grid-cols-1 gap-6 text-left"
      >
        <div>
          <label class="block mb-1 font-medium">Location</label>
          <select v-model="location" class="w-full border border-gray-300 rounded-md p-2" required>
            <option value="" disabled selected>Select Location</option>
            <option v-for="loc in locations" :key="loc.id" :value="loc.id">{{ loc.name }}</option>
          </select>
        </div>

        <div>
          <label class="block mb-1 font-medium">Bedroom</label>
          <input
            type="number"
            v-model="bedroom"
            class="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Bathrooms</label>
          <input
            type="number"
            v-model="bathrooms"
            class="w-full border border-gray-300 rounded-md p-2"
            step="0.5"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Land Area</label>
          <input
            type="number"
            v-model="view"
            min="0"
            max="4"
            class="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Building Area</label>
          <input
            type="number"
            v-model="buildingArea"
            class="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-[#138fac] text-white py-2 px-6 rounded-xl hover:bg-yellow-500 transition"
        >
          Predict
        </button>
      </form>
    </section>
  </LayoutDefault>
</template>
