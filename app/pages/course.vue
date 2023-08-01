<template>
    <div class="p-4 md:p-12 w-full h-full flex flex-col items-center">
        <div class="mb-6 md:mb-12">
            <h1 class="text-xl">
                <span class="font-medium">
                    <span class="font-bold">{{ course.title }}</span>
                </span>
            </h1>
        </div>

        <div class="flex flex-col justify-center md:grid md:grid-cols-12 w-full">
            <div class="p-2 md:p-6 bg-white rounded-md md:col-span-8">
                <NuxtErrorBoundary>
                    <NuxtPage />
                    <template #error="{error}">
                        <div class="flex flex-col items-center justify-center">
                            <h1 class="text-xl font-bold">Oops! Something went wrong with the lesson.</h1>
                            <code>{{ error }}</code>
                            <p class="text-lg text-slate-600">Please try again later.</p>
                        </div>
                        <UIButtonSecondary class="mt-4" @click="resetError(error)">Reset</UIButtonSecondary>
                    </template>
                </NuxtErrorBoundary>
            </div>

            <div
                class="p-2 md:p-6 md:h-[48rem] overflow-y-auto bg-white rounded-md mt-4 md:mt-0 md:ml-4 md:col-span-4 flex flex-col">
                <!--show for md size screens-->
                <div class="space-y-1 mb-4 md:flex md:flex-col" v-for="chapter in course.chapters" :key="chapter.slug">
                    <h4 class="text-lg">Chapter {{ chapter.number }} - {{ chapter.title }}</h4>
                    <NuxtLink :to="lesson.path" v-for="(lesson, index) in chapter.lessons" :key="lesson.slug"
                        class="flex flex-row space-x-1 text-sm text-slate-600 hover:text-slate-900 cursor-pointer border border-slate-200 p-2 rounded">
                        <span>{{ index + 1 }}.</span>
                        <span>{{ lesson.title }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'footerless',
});

// TODO this will be an api call in the future
const course = useCourse();
const firstLesson = await useFirstLesson();

const resetError = async(error) => {
    await navigateTo(firstLesson.path);
    error.value = null;
};
</script>

<style scoped>
.router-link-active {
    @apply text-sky-500;
}
</style>