<template>
  <section id="projects" class="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-blue-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-3">Key Projects</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4 animate-line-grow" data-aos="fade-right" data-aos-delay="200"></div>
      </div>

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(project, i) in projects" :key="project.name"
          data-aos="fade-up" :data-aos-delay="i * 70"
          class="bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-300 shadow-sm dark:shadow-none group flex flex-col hover-lift">

          <!-- Header row -->
          <div class="flex items-start justify-between mb-4">
            <div class="p-2.5 rounded-xl border transition-all duration-300"
              :class="[project.iconBg, project.iconBorder, 'group-hover:scale-110']">
              <svg class="w-5 h-5" :class="project.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
            </div>
            <span class="text-xs px-2.5 py-1 rounded-full font-medium border" :class="project.typeClass">
              {{ project.type }}
            </span>
          </div>

          <!-- Name -->
          <h3 class="text-gray-900 dark:text-white font-bold text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
            {{ project.name }}
          </h3>

          <!-- Description -->
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
            {{ project.description }}
          </p>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-1.5">
            <span v-for="tech in project.tech" :key="tech"
              class="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600/40">
              {{ tech }}
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Workstager — HR Management SaaS',
    type: 'SaaS',
    typeClass: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    description: 'Laravel + Node.js HR SaaS with payroll, attendance, and leave modules for 1,000+ employees. 20+ REST APIs, live Socket.IO/Pusher notifications, and exportable reporting dashboards; query tuning cut page load by 30%.',
    tech: ['Laravel', 'Node.js', 'Vue.js', 'MySQL', 'Redis', 'Socket.IO', 'Pusher'],
  },
  {
    name: 'CRYO — Multi-Tenant SaaS',
    type: 'Multi-Tenant',
    typeClass: 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    description: 'Multi-tenant architecture supporting isolated client environments with 40+ REST APIs, Stripe subscription billing, DomPDF/PDFKit invoicing, and Redis-backed queue workers (Laravel Queues + BullMQ) for async notifications.',
    tech: ['Laravel', 'Node.js', 'Multi-Tenant', 'Stripe', 'Redis', 'BullMQ', 'Laravel Queues'],
  },
  {
    name: 'EcoHome API — Service Marketplace',
    type: 'API Backend',
    typeClass: 'bg-green-50 text-green-600 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20',
    iconBg: 'bg-green-500/10',
    iconBorder: 'border-green-500/20',
    iconColor: 'text-green-400',
    description: 'Stateless RESTful backend (Express.js + Laravel Sanctum hybrid) with JWT auth, RBAC, Socket.IO/Pusher chat, Firebase push alerts, and AWS S3 storage. Load-tested to sub-150ms median response time.',
    tech: ['Express.js', 'Laravel', 'JWT', 'RBAC', 'Socket.IO', 'Firebase', 'AWS S3'],
  },
  {
    name: 'RVPNL — Power Grid Dashboard',
    type: 'Government',
    typeClass: 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20',
    iconBg: 'bg-orange-500/10',
    iconBorder: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    description: 'Government utility portal integrating SCADA data streams with OAuth 2.0 login, role-based views, server-side pagination of 100K+ records, and a 50% improvement in data-load speed.',
    tech: ['Laravel', 'OAuth 2.0', 'RBAC', 'PostgreSQL', 'SCADA'],
  },
  {
    name: 'Sunrise Hospital Management System',
    type: 'Healthcare',
    typeClass: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/20',
    iconBg: 'bg-red-500/10',
    iconBorder: 'border-red-500/20',
    iconColor: 'text-red-400',
    description: 'Centralized platform for multi-branch hospital operations: appointment scheduling, referral workflows, REST APIs, and RBAC. Appointment processing time shortened by 50%.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'RBAC', 'REST APIs'],
  },
  {
    name: 'Binary MLM Platform',
    type: 'FinTech',
    typeClass: 'bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20',
    iconBg: 'bg-yellow-500/10',
    iconBorder: 'border-yellow-500/20',
    iconColor: 'text-yellow-400',
    description: 'High-concurrency MLM system with a visual genealogy tree, tiered commission engine, e-wallet ledger, and Laravel Queue/BullMQ workers managing payouts for 10,000+ members.',
    tech: ['Laravel', 'Node.js', 'BullMQ', 'MySQL', 'Vue.js', 'E-Wallet'],
  },
  {
    name: 'Oushadhi — E-commerce Store',
    type: 'E-Commerce',
    typeClass: 'bg-teal-50 text-teal-600 border-teal-200 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/20',
    iconBg: 'bg-teal-500/10',
    iconBorder: 'border-teal-500/20',
    iconColor: 'text-teal-400',
    description: 'Full-stack storefront (Laravel + Vue.js, with Node.js microservices) with OTP auth, Razorpay checkout, multilingual content (English/Malayalam), and Redis page caching.',
    tech: ['Laravel', 'Node.js', 'Vue.js', 'Razorpay', 'Redis', 'Multilingual'],
  },
  {
    name: 'Campus Abroad — Student Portal',
    type: 'EdTech',
    typeClass: 'bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20',
    iconBg: 'bg-indigo-500/10',
    iconBorder: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    description: 'Study-abroad management system: JWT-secured Laravel/Express.js API consumed by a React SPA, including registration, loan tracking, and application-status workflows with RBAC.',
    tech: ['Laravel', 'Express.js', 'React', 'JWT', 'RBAC', 'REST APIs'],
  },
]
</script>
