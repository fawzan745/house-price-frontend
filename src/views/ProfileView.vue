<template>
  <section class="py-5 min-h-screen">
    <div class="mx-auto">
      <div class="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
        <div class="sm:w-2/5">
          <h2 class="text-3xl font-bold sm:text-4xl">Our dream team</h2>
        </div>
        <div class="mt-6 sm:mt-0">
          <p>
            During the working process, we perform regular fitting with the client because he is the
            only person who can feel whether a new suit fits or not.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-12">
        <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(member, index) in members" :key="index" class="group overflow-hidden">
            <img
              src="../components/icons/logo mu.jpeg"
              alt="team member"
              width="826"
              height="1239"
              class="h-70 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[20rem] group-hover:rounded-xl"
            />
            <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
              <div class="flex justify-between">
                <h3
                  class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider"
                >
                  {{ member.name }}
                </h3>
                <span class="text-xs">_0{{ index + 1 }}</span>
              </div>
              <div class="mt-1 flex items-center justify-between">
                <span
                  class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {{ member.role }}
                </span>
                <a
                  :href="member.link"
                  class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Linktree
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const members = [
  {
    name: 'GGMU',
    role: 'Founder - CEO',
    avatar: '../components/icons/logo mu.jpeg',
    link: '#',
  },
  {
    name: 'GGMU',
    role: 'Co-Founder - CTO',
    avatar: 'https://alt.tailus.io/images/team/member-two.webp',
    link: '#',
  },
  {
    name: 'GGMU',
    role: 'Sales Manager',
    avatar: 'https://alt.tailus.io/images/team/member-three.webp',
    link: '#',
  },
]
</script>

<!-- notes :src="" -->
