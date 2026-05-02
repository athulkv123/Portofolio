<template>
  <section id="education" class="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-blue-400 text-sm font-semibold uppercase tracking-widest">Background</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-3">Education & Certifications</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4 animate-line-grow" data-aos="fade-right" data-aos-delay="200"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-10">

        <!-- Education -->
        <div data-aos="fade-right" data-aos-delay="100">
          <h3 class="text-base font-semibold text-blue-500 dark:text-blue-400 mb-6 flex items-center gap-2 uppercase tracking-wide">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-7-4-7 4V10l7-4 7 4 7-4v7l-7 4z"/>
            </svg>
            Education
          </h3>
          <div class="bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all duration-300 shadow-sm dark:shadow-none hover-lift">
            <div class="flex items-start gap-5">
              <div class="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-7-4-7 4V10l7-4 7 4 7-4v7l-7 4z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="text-gray-900 dark:text-white font-bold text-base">B.Tech — Computer Science Engineering</h4>
                <p class="text-blue-500 dark:text-blue-400 text-sm font-medium mt-1">AWH Engineering College</p>
                <p class="text-gray-500 text-sm">Calicut University, Kerala, India</p>
                <span class="inline-block mt-3 text-xs px-3 py-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 rounded-full font-medium">
                  2014 – 2018
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div data-aos="fade-left" data-aos-delay="100">
          <h3 class="text-base font-semibold text-cyan-500 dark:text-cyan-400 mb-6 flex items-center gap-2 uppercase tracking-wide">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            Certifications
          </h3>
          <div class="space-y-3">
            <div v-for="(cert, i) in certifications" :key="cert.name"
              data-aos="fade-up" :data-aos-delay="i * 70"
              class="bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-xl p-4 flex items-center gap-4 hover:border-cyan-400 dark:hover:border-cyan-500/30 transition-all duration-300 shadow-sm dark:shadow-none hover-lift">
              <div class="w-2.5 h-2.5 rounded-full flex-shrink-0"
                :class="cert.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'"></div>
              <div class="flex-1 min-w-0">
                <p class="text-gray-900 dark:text-white text-sm font-medium truncate">{{ cert.name }}</p>
                <p class="text-gray-500 text-xs mt-0.5">{{ cert.issuer }}</p>
              </div>
              <span class="text-xs px-2.5 py-1 rounded-full flex-shrink-0 font-medium"
                :class="cert.status === 'completed'
                  ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20'
                  : 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-500/20'">
                {{ cert.year }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const certifications = [
  { name: 'Advanced Laravel Development', issuer: 'Udemy', year: '2023', status: 'completed' },
  { name: 'PHP OOP and Design Patterns', issuer: 'Online', year: '2022', status: 'completed' },
  { name: 'Docker and Containerization Fundamentals', issuer: 'Online', year: '2023', status: 'completed' },
  { name: 'React — The Complete Developer Guide', issuer: 'Udemy', year: '2022', status: 'completed' },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training', year: 'In Progress', status: 'in-progress' },
  { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', year: 'In Progress', status: 'in-progress' },
]
</script>
