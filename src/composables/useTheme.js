import { ref, watch } from 'vue'

const isDark = ref(localStorage.getItem('theme') !== 'light')

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
}, { immediate: true })

export function useTheme() {
  return {
    isDark,
    toggleTheme: () => { isDark.value = !isDark.value },
  }
}
