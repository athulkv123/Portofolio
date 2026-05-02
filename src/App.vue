<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { useTheme } from './composables/useTheme.js'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

useTheme()
</script>
