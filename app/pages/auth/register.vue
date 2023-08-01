<template>
    <div class="relative h-[calc(100vh-120px)]">
        <div class="hidden md:block md:absolute md:inset-0">
            <div class="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                <img class="h-56 w-full object-fit object-cover md:absolute md:h-full"
                    src="https://images.unsplash.com/photo-1611872687047-5e5cabc8e1bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    alt="">
            </div>
        </div>
        <div class="md:absolute grid place-items-center h-full md:w-1/2">
            <AuthSignup />
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
definePageMeta({
    layout: 'footerless',
});
</script>