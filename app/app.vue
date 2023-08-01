<template>
    <div>
        <NuxtLayout>
            <AppSpinner v-if="isLoading" />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
const user = useSupabaseUser();
const layout = ref('default');
const isLoading = useShowSpinner();

watchEffect(()=> {
    console.log('watchEffect -> user.value', user.value?.email);
    // if (user.value) {
    //     layout.value = 'footerless';
    // } else {
    //     layout.value = 'default';
    // }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>