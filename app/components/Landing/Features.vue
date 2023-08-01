<template>
    <section id="features" class="relative overflow-hidden">
        <div>
            <h2 class="text-4xl font-bold text-slate-900 text-center">Everything you need to master fullstack
                development</h2>
            <p class="text-lg text-slate-900 text-center mt-6">We aim to provide you with a true understanding of
                how
                Nuxt 3 works and how you can apply those principles to your own
                projects.</p>
        </div>
        <ul class="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
            <li v-for="feature in features"
                class="flex flex-col justify-center items-center space-y-2 bg-white text-slate-900 rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:text-sky-500">
                <span class="material-icons-round text-6xl p-4">
                    {{ feature.icon }}
                </span>
                <p class="text-lg text-center">{{ feature.title }}</p>
            </li>
        </ul>
    </section>
</template>
<script setup>
const features = [
    {
        'icon': 'description',
        'title': 'File-based routing',
    },
    {
        'icon': 'public',
        'title': 'Universal and Hybrid rendering',
    },
    {
        'icon': 'view_agenda',
        'title': 'Architecture for large projects',
    },
    {
        'icon': 'javascript',
        'title': 'Javascript and Typescript support',
    },
    {
        'icon': 'report_problem',
        'title': 'Error handling',
    },
    {
        'icon': 'api',
        'title': 'Type safe APIs',
    },
    {
        'icon': 'login',
        'title': 'User authentication and permissions',
    },
    {
        'icon': 'storage',
        'title': 'Postgres database',
    },
    {
        'icon': 'search',
        'title': 'SEO optimization',
    },
    {
        'icon': 'speed',
        'title': 'Performance optimization',
    },
    {
        'icon': 'fork_right',
        'title': 'Route and Server middleware',
    },
    {
        'icon': 'camera_indoor',
        'title': 'Nuxt internals: Nitro and h3',
    },
    {
        'icon': 'generating_tokens',
        'title': 'Composition API and Composables',
    },
    {
        'icon': 'grid_view',
        'title': 'Reusable components',
    },
    {
        'icon': 'route',
        'title': 'Nested routes',
    },
    {
        'icon': 'file_upload',
        'title': 'State management and Pinia',
    },
    {
        'icon': 'cloud_done',
        'title': 'Deploying and Hosting',
    },
    {
        'icon': 'image',
        'title': 'Managing static assets',
    },
    {
        'icon': 'webhook',
        'title': 'Webhooks ',
    },
    {
        'icon': 'css',
        'title': 'Tailwind CSS ',
    },
]
</script>