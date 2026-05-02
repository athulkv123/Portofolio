<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/50 to-slate-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 pt-16 transition-colors duration-300">

    <!-- Background glows (pulsing) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-glow-pulse animation-delay-1000"></div>
      <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/6 rounded-full blur-3xl animate-glow-pulse animation-delay-500"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
      <div class="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

        <!-- Left: Text (staggered entrance) -->
        <div class="space-y-7 order-2 lg:order-1">

          <!-- Available badge -->
          <div class="animate-badge-pop animation-delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for new opportunities
          </div>

          <!-- Name -->
          <div class="animate-fade-in-up animation-delay-200">
            <p class="text-gray-500 dark:text-gray-400 text-lg mb-2">Hello, I'm</p>
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Athul <span class="gradient-shimmer">KV</span>
            </h1>
          </div>

          <!-- Title tags (each pops in) -->
          <div class="flex flex-wrap gap-2">
            <span class="animate-badge-pop animation-delay-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-lg">Senior Laravel Developer</span>
            <span class="animate-badge-pop animation-delay-400 px-3 py-1.5 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-medium rounded-lg">Full-Stack Engineer</span>
            <span class="animate-badge-pop animation-delay-500 px-3 py-1.5 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 text-sm font-medium rounded-lg">PHP & JS Specialist</span>
          </div>

          <!-- Description -->
          <p class="animate-fade-in-up animation-delay-500 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            6+ years building robust, scalable web applications. Expert in multi-tenant SaaS, RESTful APIs, and database optimization. Recognized twice for outstanding performance.
          </p>

          <!-- CTAs -->
          <div class="animate-fade-in-up animation-delay-600 flex flex-wrap gap-4">
            <a href="#projects" @click.prevent="scrollTo('#projects')"
              class="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 text-sm">
              View Projects
            </a>
            <a href="#contact" @click.prevent="scrollTo('#contact')"
              class="px-8 py-3.5 border border-blue-400 dark:border-blue-500/40 text-blue-600 dark:text-blue-300 font-semibold rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 active:scale-95 text-sm">
              Get In Touch
            </a>
          </div>

          <!-- Social links -->
          <div class="animate-fade-in-up animation-delay-700 flex items-center gap-3">
            <a :href="social.github" target="_blank"
              class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 hover:bg-blue-600 hover:border-blue-500 text-gray-500 dark:text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a :href="social.linkedin" target="_blank"
              class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 hover:bg-blue-600 hover:border-blue-500 text-gray-500 dark:text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a :href="social.email"
              class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 hover:bg-blue-600 hover:border-blue-500 text-gray-500 dark:text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>

        </div>

        <!-- Right: Photo (slides in from right) -->
        <div class="animate-scale-in animation-delay-200 flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="relative">
            <!-- Outer glow -->
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-15 animate-glow-pulse"></div>
            <!-- Gradient border -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-40"></div>
            <!-- Photo container -->
            <div class="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[340px] lg:h-[420px] rounded-3xl overflow-hidden">
              <img src="/user/person.png" alt="Athul KV" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 dark:from-gray-950/60 to-transparent"></div>
            </div>
            <!-- Floating role card (floats up/down) -->
            <div class="animate-float absolute -bottom-5 -left-5 bg-white dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-lg dark:shadow-2xl backdrop-blur-sm">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
                <div>
                  <div class="text-xs text-gray-500 dark:text-gray-400 leading-none mb-1">Currently at</div>
                  <div class="text-sm font-bold text-gray-900 dark:text-white leading-none">Netstager Technologies</div>
                </div>
              </div>
            </div>
            <!-- Floating tech badge (floats down/up) -->
            <div class="animate-float-alt absolute -top-4 -right-4 bg-white dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-lg dark:shadow-2xl">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></div>
                <span class="text-xs text-gray-700 dark:text-gray-200 font-medium">Laravel · Vue.js · PHP</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { social } from '../data/profile.js'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
