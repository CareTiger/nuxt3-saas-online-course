<template>
    <div class="bg-slate-50 flex flex-col h-full min-h-screen">
        <div class="relative">
            <ClientOnly>
                <AppNavBar />
                <AppMobileNavBar class="" :class="[showMobileNavbar ? 'inline-block' : 'hidden']" />
            </ClientOnly>
            <slot />
            <AppFooter />
        </div>
    </div>
</template>

<script setup>
const showMobileNavbar = useShowMobileNavbar();
</script>

<style>
html {
    font-family: 'poppins', sans-serif;
}
</style>