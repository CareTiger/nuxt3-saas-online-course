<template>
    <section class="relative overflow-hidden" id="faq">
        <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl sm:text-center">Frequently asked
            questions</h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700 sm:text-center">If you can’t find what you’re looking
            for, email our
            support team and someone will get back to you as soon as possible.
        </p>
        <ul class="mx-auto mt-12 grid grid-cols-1">
            <li v-for="faq in faqs">
                <details class="p-6 border-b border-slate-300 cursor-pointer">
                    <summary class="font-display text-lg leading-6 text-slate-900 font-semibold select-none">
                        <span>{{ faq.question }}</span>
                    </summary>
                    <div>
                        <p class="mt-4 text-sm text-slate-700 tracking-wide">{{ faq.answer }}</p>
                    </div>
                </details>
            </li>
        </ul>
    </section>
</template>
<script setup>
const faqs = [
    {        
        'question': 'Who is Sampyl for?',
        'answer': 'Sampyl is a learning management platform to build professional websites. No matter what level you are at you can learn at your own pace and develop as a fullstack developer.'
    },
    {        
        'question': 'Why use Nuxt?',
        'answer': 'Nuxt allows developers of any level to create elegant websites progressively. Nuxt is based on a powerful modular architecture and allows you to tailor your project to your needs with more than 50 modules — making your development faster and easier.'
    },
    {        
        'question': 'Can I add the course projects to my CV or portfolio?',
        'answer': 'Absolutely. You are more than welcome to take the source code and add it to your portfolio and GitHub. We encourage you to present your source code as your own work when looking for a job.'
    },
    {        
        'question': 'What does a real-world app mean?',
        'answer': 'In most of our courses, we will be building an end-to-end apps complete with authentication, a Postgres/MongoDB database, error-handling to make our apps rock-solid, and more! They are prod-ready app that cover the entire stack from backend to frontend. We’ll also build a landing page so you can share your app with the world.'
    },
    {        
        'question': 'What backend technology will you be using?',
        'answer': 'We’ll be mostly be using Supabase/Firebase for authentication, as well as for providing a Postgres/MongoDB/Firebase database for our backend. We’ll typically access the database through Prisma (an ORM), which makes it a breeze to use TypeScript with our data.'
    },
    {        
        'question': 'How long do I get access to the platform?',
        'answer': 'Your access depends on your subscription plan. You can choose between a monthly or yearly subscription. If you choose the monthly subscription, you will have access to the platform for 30 days. If you choose the yearly subscription, you will have access to the platform for 365 days.'
    },
    {        
        'question': 'Can I get a refund if I don’t like it?',
        'answer': 'Absolutely! We are offering a 14 days 100% money back guarantee if you do not like what Sampyl has to offer. If you aren’t satisfied, please send an email to support@sampyl.com.'
    },
    {        
        'question': 'How can I make the most of Sampyl?',
        'answer': 'We’ve worked hard to make sure our courses have no fluff and are 100% focused on teaching you how to build production-ready Nuxt 3 applications. We get it, your time is valuable, and you want to learn how to get everything you can out of Nuxt 3.'
    },
];
</script>