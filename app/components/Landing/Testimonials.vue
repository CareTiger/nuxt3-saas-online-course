<template>
    <section id="testimonials">
        <div class="mx-auto max-w-2xl md:text-center">
            <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Loved by Nuxt developers
                worldwide</h2>
            <p class="mt-4 text-lg tracking-tight text-slate-900">Our learning platform is so effective that people
                can’t help but fall in love with it. It's easy when you focus on job-ready skills.</p>
        </div>
        <ul class="mx-auto mt-16 max-w-2xl grid grid-cols-1 gap-6 sm-gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li v-for="testimonial in testimonials">
                <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/20 h-full">
                    <SVGBlockQuote />
                    <div class="h-full flex flex-col justify-between">
                        <blockquote class="relative">
                            <p class="text-lg text-slate-900">{{ testimonial.quote }}</p>
                        </blockquote>
                        <figcaption
                            class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                                <p class="font-display text-base text-slate-900">{{ testimonial.name }}</p>
                                <p class="mt-1 text-sm text-slate-500">{{ testimonial.title }}</p>
                            </div>
                            <div class="overflow-hidden rounded-full bg-slate-50">
                                <img class="h-14 w-14 object-cover" :src="testimonial.avatar" alt="">
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </li>
        </ul>
    </section>
</template>
<script setup>
const testimonials = [
    {
        name: 'Edmond',
        title: 'Frontend Engineer',
        avatar: 'https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=128&q=75',
        quote: 'Sampyl is an exceptional learning platform that has given me a lot of useful skills for my job search and my resume. I highly recommend Sampyl to anyone who is looking to start their career in frontend engineering/development.'
    },
    {
        name: 'Danny',
        title: 'Vue Developer',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        quote: 'Sampyl is an excellent learning tool. It has made my path clearer then ever. It is obvious they understand what is necessary to help you stand out and get noticed.'
    },
    {
        name: 'Amy',
        title: 'SDE',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
        quote: 'What I wanted to get out of this platform was confidence and direction, and I got exactly that. It was definitely helpful that I know what to expect in the job application process as well.'
    },
    {
        name: 'Frida',
        title: 'Frontend Developer',
        avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        quote: 'I highly recommend Sampyl. I started my membership a year ago with almost no coding knowledge or experience at all (very little html and css). Building real world apps got me an internship which got turned into a paid role and now I got my first pay raise, happily working as a frontend developer. '
    },
    {
        name: 'Christian',
        title: 'Fullstack developer',
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        quote: 'I am absolutely loving my Sampyl membership. The instructor is very methodical, definitely knows what he is doing. All of his explanations are very thorough and he teaches in a fun and friendly environment. With his guidance, my productivity and retention has increased tremendously. I achieved much more in past few weeks which would have taken months otherwise.'
    },
    {
        name: 'Francis',
        title: 'Student',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        quote: 'Sampyl introduces concepts one step at a time, which makes progress achievable. I have a MIS background with tons of bad habits. This type of teaching/learning is what was missing from my degree. If you join Sampyl I strongly encourage you to do so!'
    },
]
</script>