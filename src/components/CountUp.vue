<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  target:     { type: Number, required: true },
  suffix:     { type: String, default: '' },
  duration:   { type: Number, default: 1800 },
  startDelay: { type: Number, default: 0 },
})

const el = ref(null)
const display = ref(`0${props.suffix}`)
let observer = null
let started = false

const runCount = () => {
  const startTime = performance.now()
  const step = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    // easeOutCubic for natural deceleration
    const eased = 1 - Math.pow(1 - progress, 3)
    display.value = `${Math.round(eased * props.target)}${props.suffix}`
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const startCount = () => {
  if (started) return
  started = true
  if (props.startDelay > 0) {
    setTimeout(runCount, props.startDelay)
  } else {
    runCount()
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startCount()
        observer?.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>
