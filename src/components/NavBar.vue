<template>
  <header class="animate-slide-down fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">

      <!-- Logo -->
      <a href="#home" @click.prevent="scrollToSection('#home')"
        class="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Athul KV
      </a>

      <!-- Hamburger (mobile only) -->
      <div class="md:hidden z-30">
        <button
          type="button"
          class="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300"
          @click="isMenuOpen = !isMenuOpen"
        >
          <div class="relative w-6 h-5 cursor-pointer">
            <span :class="['absolute left-0 w-6 h-0.5 bg-blue-500 dark:bg-blue-200 transition-all duration-300', isMenuOpen ? 'rotate-45 top-2.5' : 'top-0']"></span>
            <span :class="['absolute left-0 w-6 h-0.5 bg-blue-500 dark:bg-blue-200 transition-all duration-300', isMenuOpen ? 'opacity-0' : 'top-2']"></span>
            <span :class="['absolute left-0 w-6 h-0.5 bg-blue-500 dark:bg-blue-200 transition-all duration-300', isMenuOpen ? '-rotate-45 top-2.5' : 'top-4']"></span>
          </div>
        </button>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6">
        <a v-for="item in menu" :key="item.name"
          :href="item.href"
          @click.prevent="scrollToSection(item.href)"
          class="relative text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group">
          {{ item.name }}
          <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </a>

        <!-- Theme toggle -->
        <button @click="toggleTheme"
          class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-200"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>

        <a href="mailto:athulkv.dev@gmail.com"
          class="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
          Hire Me
        </a>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div v-if="isMenuOpen"
        class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-white/98 dark:bg-gray-950/98 backdrop-blur-sm md:hidden">
        <nav class="flex flex-col items-center gap-8">
          <a v-for="item in menu" :key="item.name"
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            class="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
            {{ item.name }}
          </a>

          <!-- Mobile theme toggle -->
          <button @click="toggleTheme"
            class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-lg">
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>

          <a href="mailto:athulkv.dev@gmail.com"
            class="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full">
            Hire Me
          </a>
        </nav>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const { isDark, toggleTheme } = useTheme()

const menu = ref([
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
])

const isMenuOpen = ref(false)

const scrollToSection = (href) => {
  isMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
