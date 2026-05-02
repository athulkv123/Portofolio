<template>
  <section id="about" class="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-blue-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-3">Who I Am</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4 animate-line-grow" data-aos="fade-right" data-aos-delay="200"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

        <!-- Left: Text content -->
        <div class="space-y-6" data-aos="fade-right" data-aos-delay="100">
          <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Senior Software Engineer with over
            <span class="text-blue-500 dark:text-blue-400 font-semibold">6 years of experience</span>
            building robust, scalable web applications with
            <span class="text-blue-500 dark:text-blue-400 font-semibold">Laravel, PHP 8, Vue.js, and React</span>.
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Skilled in object-oriented programming, SOLID principles, multi-tenant SaaS, RESTful API design,
            Redis caching, and relational database optimization. Strong background in guiding engineering teams,
            setting code-quality standards, and shipping production-ready features on schedule within Agile workflows.
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Recognized twice for outstanding performance across two organizations — as
            <span class="text-yellow-500 dark:text-yellow-400 font-medium">Star Performer of the Month</span> at Netstager Technologies (Feb 2024)
            and <span class="text-yellow-500 dark:text-yellow-400 font-medium">Quick Starter of the Month</span> at IOSS (Mar 2022).
          </p>

          <!-- Quick info -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div v-for="(info, i) in quickInfo" :key="info.label" class="flex items-center gap-3" data-aos="fade-up" :data-aos-delay="i * 60">
              <div class="p-2 rounded-lg flex-shrink-0" :class="info.iconBg">
                <span v-html="info.icon"></span>
              </div>
              <div>
                <div class="text-xs text-gray-500 uppercase tracking-wide">{{ info.label }}</div>
                <div class="text-sm text-gray-900 dark:text-white font-medium mt-0.5">{{ info.value }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Stats grid -->
        <div class="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="100">
          <div v-for="(stat, i) in stats" :key="stat.label"
            data-aos="zoom-in-up" :data-aos-delay="100 + i * 80"
            class="bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 text-center hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-gray-800/60 transition-all duration-300 hover-lift">
            <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              <CountUp :target="stat.target" :suffix="stat.suffix" />
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-tight">{{ stat.label }}</div>
          </div>

          <!-- Achievements card -->
          <div class="col-span-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700/30 rounded-2xl p-6" data-aos="fade-up" data-aos-delay="400">
            <div class="flex items-center gap-2 mb-4">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <h3 class="text-gray-900 dark:text-white font-semibold text-sm">Key Achievements</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="achievement in achievements" :key="achievement"
                class="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                <span class="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">•</span>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import CountUp from './CountUp.vue'
import { stats } from '../data/profile.js'

const quickInfo = [
  {
    label: 'Location',
    value: 'Calicut, Kerala, India',
    iconBg: 'bg-rose-500/20',
    icon: '<svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  },
  {
    label: 'Experience',
    value: '6+ Years',
    iconBg: 'bg-blue-500/20',
    icon: '<svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    label: 'Email',
    value: 'athulkv.dev@gmail.com',
    iconBg: 'bg-green-500/20',
    icon: '<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    label: 'Phone',
    value: '+91-8089660475',
    iconBg: 'bg-cyan-500/20',
    icon: '<svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  },
  {
    label: 'Languages',
    value: 'English · Malayalam · Hindi',
    iconBg: 'bg-purple-500/20',
    icon: '<svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>',
  },
  {
    label: 'Education',
    value: 'B.Tech — Computer Science',
    iconBg: 'bg-yellow-500/20',
    icon: '<svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-7-4-7 4V10l7-4 7 4 7-4v7l-7 4z"/></svg>',
  },
]

const achievements = [
  'Star Performer of the Month — Netstager Technologies, February 2024',
  'Quick Starter of the Month — IOSS, March 2022',
  '10+ enterprise projects with zero critical post-launch failures',
  'Improved system response times by 35–40% across multiple client engagements',
]
</script>
