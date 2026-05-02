<template>
  <Transition name="scroll-top">
    <button v-if="visible" @click="scrollToTop" aria-label="Scroll to top"
      class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all duration-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const onScroll = () => { visible.value = window.scrollY > 300 }
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scroll-top-enter-active,
.scroll-top-leave-active { transition: opacity 0.3s, transform 0.3s; }
.scroll-top-enter-from,
.scroll-top-leave-to { opacity: 0; transform: translateY(12px); }
</style>
