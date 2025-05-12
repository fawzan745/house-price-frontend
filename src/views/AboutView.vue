<script setup>
import LayoutDefault from '../components/LayoutDefault.vue'
import BenefitView from './BenefitView.vue'
import AlgoritmaView from './AlgoritmaView.vue'
import ProfileView from './ProfileView.vue'
import FaqView from './FaqView.vue'
</script>

<template>
  <LayoutDefault>
    <div class="overflow-x-hidden">
      <section class="mt-3">
        <h2 class="text-3xl font-bold text-center">About</h2>

        <div class="sm:w-[90%] md:w-[800px] sm:h-[500px] md:h-[400px] bg-[#138fac] rounded-2xl">
          <h3 class="text-white text-justify text-1xl font-medium mt-3 px-9 pt-5">
            Kebutuhan akan rumah yang menjadi kebutuhan primer manusia semakin meningkat, terutama
            di kota besar seperti di Surabaya. DPD Asosiasi Real Estat Broker Indonesia (AREBI)
            Jatim mencatat rata-rata penjualan hunian per bulan mencapai 400 unit pada tahun 2024
            dengan 40 persen berada di wilayah Surabaya Barat. Sebagai salah satu kota metropolitan
            di Indonesia, Surabaya memiliki dinamika pasar yang kompleks, dipengaruhi oleh berbagai
            faktor, seperti banyak nya kamar, kamar mandi, kapasitas garasi, luas area, dan luas
            bangunan. Namun, menentukan harga harga rumah yang tepat seringkali menjadi tantangan,
            baik bagi pembeli maupun penjual. Ketidaksesuaian antara harga pasar dan ekspektasi
            sering terjadi, yang dapat berdampak pada keputusan investasi dan efisiensi transaksi
            properti. Oleh karena itu, diperlukan pendekatan yang lebih sistematis untuk
            memperkirakan harga rumah berdasarkan kondisi tertentu, seperti banyak nya kamar, kamar
            mandi, kapasitas garasi, luas area, dan luas bangunan. Penggunaan model machine learning
            seperti random forest menawarkan solusi potensial dalam memprediksi harga rumah secara
            akurat. Dengan menganalisis data yang ada di internet, metode ini mampu memberikan
            estimasi harga yang lebih objektif dan dapat diandalkan.
          </h3>
        </div>
      </section>

      <section id="benefit" class="mt-2 min-h-screen">
        <BenefitView />
      </section>

      <section id="algortima" class="mt-2 min-h-screen">
        <AlgoritmaView />
      </section>

      <section id="profile" class="mt-2 min-h-screen">
        <ProfileView />
      </section>

      <section id="faq" class="mt-2 min-h-screen">
        <FaqView />
      </section>
    </div>
  </LayoutDefault>
</template>
