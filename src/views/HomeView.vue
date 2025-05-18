<script setup>
import LayoutDefault from '../components/LayoutDefault.vue'
import BenefitView from './BenefitView.vue'
import ProfileView from './ProfileView.vue'
import FaqView from './FaqView.vue'
import AboutView from './AboutView.vue'
</script>

<template>
  <LayoutDefault>
    <div class="overflow-x-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-7">
        <div class="hero fade-in">
          <div
            class="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-20 lg:-mt-30 lg:ml-40 mt-0"
          >
            <img
              src="../components/icons/rumah_tanpabg.png"
              class="order-2 lg:order-1 hidden lg:ml-20 lg:block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
              alt="Rumah"
            />
            <div class="order-1 lg:-ml-30 lg:order-2 text-center mt-25 mb-30 lg:mt-0 lg:text-left">
              <h1 class="text-5xl sm:text-5xl md:text-5xl font-bold">REGO OMAH</h1>
              <h2 class="text-3xl sm:text-2xl mt-2">Find Your House Price</h2>
              <router-link to="/predict">
                <button class="text-black mt-6 btn btn-primary bg-blue-200 hover:text-blue-700">
                  Try Now!!!
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <section id="about" class="mt-10 min-h-screen">
          <AboutView />
        </section>

        <section id="benefit" class="mt-10 min-h-screen">
          <BenefitView />
        </section>

        <section id="profile" class="mt-10 min-h-screen">
          <ProfileView />
        </section>

        <section id="faq" class="mt-10 min-h-screen">
          <FaqView />
        </section>
      </div>
    </div>
  </LayoutDefault>
</template>
