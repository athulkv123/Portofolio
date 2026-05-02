<template>
  <section id="contact" class="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-blue-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-3">Let's Work Together</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4 animate-line-grow" data-aos="fade-right" data-aos-delay="200"></div>
        <p class="text-gray-600 dark:text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
          Open to new opportunities, collaborations, and interesting challenges. Feel free to reach out through any channel below.
        </p>
      </div>

      <!-- Contact cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
        <a v-for="(item, i) in contactInfo" :key="item.label"
          :href="item.href" :target="item.target"
          data-aos="fade-up" :data-aos-delay="i * 80"
          class="bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 flex items-center gap-4 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-300 shadow-sm dark:shadow-none group hover-lift">
          <div class="p-3 rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 border"
            :class="[item.iconBg, item.iconBorder]">
            <span v-html="item.icon"></span>
          </div>
          <div class="min-w-0">
            <p class="text-gray-500 text-xs uppercase tracking-wide mb-1">{{ item.label }}</p>
            <p class="text-gray-900 dark:text-white text-sm font-medium truncate group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{{ item.value }}</p>
          </div>
        </a>
      </div>

      <!-- CTA -->
      <div class="text-center" data-aos="zoom-in" data-aos-delay="500">
        <a :href="social.email"
          class="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Send Me an Email
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { social, profile } from '../data/profile.js'

const contactInfo = [
  {
    label: 'Email',
    value: profile.email,
    href: social.email,
    target: '_self',
    iconBg: 'bg-blue-500/15',
    iconBorder: 'border-blue-500/20',
    icon: '<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
    target: '_self',
    iconBg: 'bg-green-500/15',
    iconBorder: 'border-green-500/20',
    icon: '<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  },
  {
    label: 'LinkedIn',
    value: social.linkedin.replace('https://', ''),
    href: social.linkedin,
    target: '_blank',
    iconBg: 'bg-blue-600/15',
    iconBorder: 'border-blue-600/20',
    icon: '<svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
  },
  {
    label: 'GitHub',
    value: social.github.replace('https://', ''),
    href: social.github,
    target: '_blank',
    iconBg: 'bg-gray-200/60 dark:bg-gray-600/30',
    iconBorder: 'border-gray-300 dark:border-gray-600/30',
    icon: '<svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  },
  {
    label: 'Location',
    value: profile.location,
    href: '#',
    target: '_self',
    iconBg: 'bg-rose-500/15',
    iconBorder: 'border-rose-500/20',
    icon: '<svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  },
  {
    label: 'Current Company',
    value: profile.company,
    href: '#',
    target: '_self',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/20',
    icon: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  },
]
</script>
