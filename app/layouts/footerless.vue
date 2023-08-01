<template>
    <div class="bg-slate-50 flex flex-col h-full min-h-screen">
        <div class="relative">
            <AppNavBar />
            <AppMobileNavBar class="" :class="[showNav ? 'inline-block' : 'hidden']" />
            <slot />
        </div>
    </div>
</template>
<script setup>
const showNav = useState('showMobileNavbar');
</script>
<style>
html {
    font-family: 'poppins', sans-serif;
}
</style>