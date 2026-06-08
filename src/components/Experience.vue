<template>
  <section id="experience" class="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-blue-400 text-sm font-semibold uppercase tracking-widest">Career</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-3">Work Experience</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4 animate-line-grow" data-aos="fade-right" data-aos-delay="200"></div>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical line -->
        <div class="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent opacity-30"></div>

        <div class="space-y-10">
          <div v-for="(job, idx) in experience" :key="job.company" class="relative flex gap-8 sm:gap-12" data-aos="fade-up" :data-aos-delay="idx * 100">

            <!-- Timeline dot & line. -->
            <div class="flex flex-col items-center flex-shrink-0">
              <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border-2 flex items-center justify-center z-10 relative flex-shrink-0 transition-colors"
                :class="idx === 0 ? 'border-blue-400 bg-blue-500/10' : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/50'">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" :class="idx === 0 ? 'text-blue-400' : 'text-gray-500 dark:text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>

            <!-- Card -->
            <div class="flex-1 pb-2">
              <div class="bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all duration-300 hover:bg-white dark:hover:bg-gray-800/60 shadow-sm dark:shadow-none hover-lift">

                <!-- Header -->
                <div class="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 class="text-gray-900 dark:text-white font-bold text-lg leading-tight">{{ job.role }}</h3>
                    <p class="text-blue-500 dark:text-blue-400 font-semibold mt-1">{{ job.company }}</p>
                    <p class="text-gray-500 text-sm mt-0.5 flex items-center gap-1.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ job.location }}
                    </p>
                  </div>
                  <span class="text-xs bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                    {{ job.period }}
                  </span>
                </div>

                <!-- Highlights -->
                <ul class="space-y-2.5">
                  <li v-for="bullet in job.highlights" :key="bullet"
                    class="flex gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    <span class="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5 font-bold">›</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>

                <!-- Award badge -->
                <div v-if="job.award"
                  class="mt-5 inline-flex items-center gap-2 px-3 py-2 bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 rounded-xl text-yellow-600 dark:text-yellow-400 text-xs font-semibold">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  {{ job.award }}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Netstager Technologies',
    location: 'Calicut, Kerala',
    period: 'June 2023 – Present',
    award: 'Star Performer of the Month — February 2024',
    highlights: [
      'Architected 3+ enterprise applications across Node.js/Express.js and Laravel stacks serving 10,000+ active users, cutting infrastructure overhead by 20% through modular design and reusable components.',
      'Built and maintained 50+ RESTful APIs secured with OAuth 2.0, JWT, Passport.js, and Laravel Sanctum, sustaining 99.9% uptime and sub-200ms average response time.',
      'Enforced OOP and SOLID principles via Repository, Service, and Observer patterns in TypeScript and PHP, lowering the codebase defect rate by 35%.',
      'Tuned 30+ slow MongoDB, MySQL, and PostgreSQL queries with strategic indexing, aggregation pipelines, eager loading, and Redis caching — average response time improved by 40%.',
      'Launched real-time dashboards and push notifications via Socket.IO, Pusher WebSockets, and Firebase Cloud Messaging.',
      'Integrated Stripe and Razorpay payment gateways alongside AWS S3 for secure transactions and scalable media storage.',
      'Established code-review standards and ESLint/Prettier/PHP-CS-Fixer configs for a 6-person engineering team, cutting pull-request rework cycles by 30%.',
      'Deployed Winston, Laravel Telescope, and Sentry for centralized error tracking, halving mean time to resolution for production incidents.',
      'Onboarded 4 junior engineers through structured pair programming and documentation.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Infinite Open Source Solutions (IOSS)',
    location: 'Calicut, Kerala',
    period: 'December 2021 – May 2023',
    award: 'Quick Starter of the Month — March 2022',
    highlights: [
      'Shipped 2 production e-commerce and B2B platforms with Node.js/Express.js, Laravel, and Vue.js, handling 5,000+ concurrent sessions without downtime.',
      'Authored an automated admin reporting suite that eliminated 15+ hours of manual data compilation per week.',
      'Engineered OTP login, JWT access and refresh token flows, and granular role-based permission management.',
      'Connected 5 external service APIs including payments (PayU, Razorpay), SMS (Twilio), and transactional email (Mailgun, SendGrid).',
      'Applied Redis caching to high-traffic Express and Laravel routes, shrinking database query volume by 45% and lessening average load time by 25%.',
      'Achieved 75%+ test coverage on core modules using Jest and PHPUnit, decreasing regression incidents by 40%.',
      'Collaborated with QA and product owners in two-week Scrum sprints, meeting every committed delivery date.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Primal Codes Technologies',
    location: 'Calicut, Kerala',
    period: 'June 2020 – December 2021',
    award: null,
    highlights: [
      'Produced banking and content management applications with secure, OOP-based Laravel, CodeIgniter, and Node.js backends.',
      'Executed PDF report generation modules (DomPDF, PDFKit, Puppeteer) spanning 10 financial report types, slashing generation time by 70%.',
      'Designed normalized MySQL and MongoDB schemas to manage 50,000+ financial records reliably.',
      'Resolved 100+ defects in inherited legacy systems, boosting overall application stability.',
    ],
  },
  {
    role: 'Backend Trainee',
    company: 'Quest Innovative Solutions',
    location: 'Calicut, Kerala',
    period: 'December 2019 – June 2020',
    award: null,
    highlights: [
      'Helped develop 5+ client web applications using Laravel, CodeIgniter, and Node.js/Express.js, encompassing authentication and CRUD operations.',
      'Gained working proficiency in MVC architecture, OOP, asynchronous JavaScript, and REST API principles within 6 months.',
    ],
  },
]
</script>
