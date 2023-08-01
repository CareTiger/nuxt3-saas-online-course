<template>
    <div class="mx-auto max-w-7xl p-8">
        <div>
            <ul>
                <li class="text-sm">
                    <NuxtLink to="/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3">Course
                        1</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: 'auth',
    layout: 'footerless',
});
</script>