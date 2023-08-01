<template>
    <div class="bg-sky-600">
        <div class="mx-auto max-w-2xl text-center">
            <div class="flex flex-col items-center justify-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span class="block">Build job-ready skills.</span>
                </h2>
                <p class="mt-4 text-lg leading-6 text-sky-200">Take control of your resume or personal portfolio. Build
                    on
                    your personal toolkit by developing real world apps.</p>
                <div class="mt-16 flex items-center justify-center">
                    <UIButtonWhite @click="navigateTo('/auth/register')">Sign up today</UIButtonWhite>
                </div>
            </div>
        </div>
    </div>
</template>