<template>
    <NuxtLayout>
        <div class="h-screen p-16 flex flex-col items-center text-center prose">
            <div class="mt-16" v-if="error.statusCode === '404'">
                <h1>404</h1>
                <p>It looks like the page you're looking for doesn't exist.</p>
                <p>Maybe try going back to the <NuxtLink to="/">homepage</NuxtLink>?</p>
            </div>
            <div v-else>
                <h1>Dang</h1>
                <p>It looks like something went wrong!</p>
                <p>Sorry about that.</p>
                <p>
                    <strong>{{ error.statusCode }} - {{ error.message }}</strong>
                </p>
            </div>
        </div>
        <pre>{{ error }}</pre>
    </NuxtLayout>
</template>
<script setup>
const error = useError();
</script>