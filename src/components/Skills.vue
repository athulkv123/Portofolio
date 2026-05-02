<template>
  <section id="skills" class="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-blue-400 text-sm font-semibold uppercase tracking-widest">Technical Stack</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-3">Skills & Expertise</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4 animate-line-grow" data-aos="fade-right" data-aos-delay="200"></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(category, i) in skillCategories" :key="category.name"
          data-aos="fade-up" :data-aos-delay="i * 80"
          class="bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/60 shadow-sm dark:shadow-none group hover-lift"
          :class="`hover:border-${category.color}-400/70 dark:hover:border-${category.color}-500/50`">

          <!-- Category header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="p-2.5 rounded-xl border" :class="[category.iconBg, category.iconBorder]">
              <span v-html="category.icon"></span>
            </div>
            <h3 class="text-gray-900 dark:text-white font-semibold">{{ category.name }}</h3>
          </div>

          <!-- Skill tags -->
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in category.skills" :key="skill"
              class="text-xs px-3 py-1.5 rounded-full font-medium border transition-colors duration-200"
              :class="category.badgeClass">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    name: 'Languages',
    color: 'blue',
    iconBg: 'bg-blue-500/15',
    iconBorder: 'border-blue-500/20',
    badgeClass: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20 dark:hover:bg-blue-500/20',
    icon: '<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
    skills: ['PHP 8.x', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3', 'Bash'],
  },
  {
    name: 'Frameworks & Libraries',
    color: 'purple',
    iconBg: 'bg-purple-500/15',
    iconBorder: 'border-purple-500/20',
    badgeClass: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20 dark:hover:bg-purple-500/20',
    icon: '<svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',
    skills: ['Laravel', 'CodeIgniter', 'Vue.js 3', 'React.js', 'Livewire', 'Inertia.js', 'Bootstrap 5', 'Tailwind CSS', 'jQuery'],
  },
  {
    name: 'Databases & Caching',
    color: 'green',
    iconBg: 'bg-green-500/15',
    iconBorder: 'border-green-500/20',
    badgeClass: 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20 dark:hover:bg-green-500/20',
    icon: '<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis'],
  },
  {
    name: 'APIs & Authentication',
    color: 'yellow',
    iconBg: 'bg-yellow-500/15',
    iconBorder: 'border-yellow-500/20',
    badgeClass: 'bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100 dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20 dark:hover:bg-yellow-500/20',
    icon: '<svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
    skills: ['REST APIs', 'OAuth 2.0', 'JWT', 'Laravel Sanctum', 'Laravel Passport', 'Webhook Integration'],
  },
  {
    name: 'DevOps & Cloud',
    color: 'cyan',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/20',
    badgeClass: 'bg-cyan-50 text-cyan-600 border-cyan-200 hover:bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20 dark:hover:bg-cyan-500/20',
    icon: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'AWS S3', 'Firebase', 'Pusher', 'Sentry', 'Composer', 'NPM'],
  },
  {
    name: 'Architecture & Process',
    color: 'rose',
    iconBg: 'bg-rose-500/15',
    iconBorder: 'border-rose-500/20',
    badgeClass: 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/20 dark:hover:bg-rose-500/20',
    icon: '<svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>',
    skills: ['OOP', 'SOLID Principles', 'MVC', 'Repository Pattern', 'Service Layer', 'Observer Pattern', 'Multi-Tenant', 'Queue Workers', 'WebSockets', 'Microservices', 'PHPUnit', 'TDD', 'Agile', 'Scrum', 'CI/CD'],
  },
]
</script>
