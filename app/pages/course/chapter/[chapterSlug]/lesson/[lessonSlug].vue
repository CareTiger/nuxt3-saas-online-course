<template>
    <div>
        <CourseVideoPlayer :videoId="lesson.videoId" />
        <p class="uppercase font-bold text-slate-400 mt-6 mb-1">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
        <h2 class="font-extrabold text-slate-900 text-2xl">{{ lesson.title }}</h2>
        <div class="flex space-x-4 mt-2 mb-6 text-slate-600 text-sm underline">
            <NuxtLink v-if="lesson.sourceUrl" :href="lesson.sourceUrl" target="_blank" download>Download Source Code
            </NuxtLink>
            <NuxtLink v-if="lesson.downloadUrl" :href="lesson.downloadUrl" target="_blank" download>Download Video
            </NuxtLink>
        </div>
        <p class="text-slate-700">{{ lesson.text }}</p>
        <UIButtonLessonComplete class="mt-6 mb-4" :modelValue="isLessonComplete" @update:model-value="toggleComplete" />
    </div>
</template>
<script setup>
const course = useCourse();
const route = useRoute();
const progress = useProgress();

definePageMeta({
    // validate() {
    //     if(!course.value) {
    //         throw createError({
    //             statusCode: 404,
    //             message: 'Course not found',
    //         });
    //     }
    // },
});

const chapter = computed(() => {
    return course.chapters.find(
        (chapter) => chapter.slug === route.params.chapterSlug
    );
});

if(!chapter.value) {
    throw createError({
        statusCode: 404,
        message: 'Chapter not found',
    });
}

const lesson = computed(() => {
    return chapter.value.lessons.find(
        (lesson) => lesson.slug === route.params.lessonSlug
    );
});

if(!lesson.value) {
    throw createError({
        statusCode: 404,
        message: 'Lesson not found',
    });
}

useHead({
    title: `Sampyl - ${lesson.value.title} - ${course.title}`,
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: lesson.value.text,
        },
    ],
});

const isLessonComplete = computed(() => {
    // guards to check if progress is already in state
    if(!progress.value[chapter.value.number - 1]) return false;
    if(!progress.value[chapter.value.number - 1][lesson.value.number - 1]) return false;
    return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
    if(!progress.value[chapter.value.number - 1]) {
        progress.value[chapter.value.number - 1] = {};
    }
    progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value;
}
</script>