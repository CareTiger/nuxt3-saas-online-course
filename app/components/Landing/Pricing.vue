<template>
    <section id="pricing" class="bg-slate-700">
        <h2 class="text-4xl font-bold text-center text-white">Select a plan to continue</h2>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <li v-for="plan in plans" :key="plan.id" class="flex flex-col h-full">
                <div class="flex flex-col justify-center items-center space-y-8 rounded-t-2xl shadow-4xl"
                    :class="{ 'bg-slate-200': plan.focus === false, 'bg-sky-600': plan.focus === true }">
                    <h3 class="text-2xl font-bold mt-16"
                        :class="{ 'text-slate-900': plan.focus === false, 'text-white': plan.focus === true }">{{
                        plan.name }}</h3>
                    <p class="text-5xl font-bold text-center"
                        :class="{ 'text-slate-900': plan.focus === false, 'text-white': plan.focus === true }">{{
                        plan.price }}</p>
                    <div class="flex flex-col justify-center items-center pb-16">
                        <div v-if="plan.focus">
                            <UIButtonWhite @click="navigateTo({path: '/auth/register', query: { plan: plan.name }})">
                                Get Started
                            </UIButtonWhite>
                        </div>
                        <div v-else>
                            <UIButtonSecondary
                                @click="navigateTo({path: '/auth/register', query: { plan: plan.name }})">
                                Get Started
                            </UIButtonSecondary>
                        </div>
                    </div>
                </div>
                <p class="bg-white rounded-b-xl text-lg text-slate-700 text-center p-6 sm:p-8 tracking-tight h-full">
                    {{ plan.description }}
                </p>
            </li>
        </ul>
    </section>
</template>
<script setup>
const plans = [
    {
        'name': 'MONTHLY',
        'description': 'Level up your career with a monthly plan that can be canceled at any time.',
        'price': '$25',
        'focus': false
    },
    {
        'name': 'YEARLY',
        'description': 'Commit to leveling up your career and save over 30% of the monthly rate.',
        'price': '$225',
        'focus': true
    },
    {
        'name': 'LIFETIME',
        'description': 'Not interested in a monthly expense? Pay once and get lifetime access.',
        'price': '$670',
        'focus': false
    },
]
</script>