<script>
export default {
  name: 'FAQsTwo',
  data() {
    return {
      faqItems: [
        {
          id: 'item-1',
          question: 'How long does shipping take?',
          answer:
            'Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.',
          open: false,
        },
        {
          id: 'item-2',
          question: 'What payment methods do you accept?',
          answer:
            'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.',
          open: false,
        },
        {
          id: 'item-3',
          question: 'Can I change or cancel my order?',
          answer:
            'You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.',
          open: false,
        },
        {
          id: 'item-4',
          question: 'Do you ship internationally?',
          answer:
            "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
          open: false,
        },
      ],
    }
  },
  methods: {
    toggleItem(id, event) {
      if (event.target.open) {
        this.faqItems.forEach((item) => {
          if (item.id !== id) {
            item.open = false
          } else {
            item.open = true
          }
        })
      } else {
        const item = this.faqItems.find((i) => i.id === id)
        if (item) item.open = false
      }
    },
  },
}
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="mx-auto max-w-5xl px-4 md:px-6">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-balance text-3xl font-bold md:text-3xl lg:text-3xl">
          Frequently Asked Questions
        </h2>
        <p class="text-muted-foreground mt-4 text-balance">
          Discover quick and comprehensive answers to common questions about our platform, services,
          and features.
        </p>
      </div>

      <div class="mx-auto mt-10 max-w-xl bg-card ring-muted w-full px-8 py-3">
        <div v-for="item in faqItems" :key="item.id" class="bg-white rounded-2xl mt-4">
          <details
            class="group cursor-pointer"
            :open="item.open"
            @toggle="toggleItem(item.id, $event)"
          >
            <summary class="ml-5 cursor-pointer text-base py-4 hover:no-underline list-none">
              {{ item.question }}
            </summary>
            <div class="px-4 pb-4">
              <p class="text-base">{{ item.answer }}</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- 
<style scoped>
details[open] summary::after {
  content: '▲';
  float: right;
}
summary::after {
  content: '▼';
  float: right;
}
summary {
  list-style: none;
}
</style> -->
