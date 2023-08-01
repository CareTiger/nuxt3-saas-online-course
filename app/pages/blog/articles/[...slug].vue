<template>
    <div class="md:mt-16">
        <article class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                class="flex flex-col-reverse md:grid md:grid-cols-12 md:grid-rows-6 gap-8">
                <div class="md:col-span-9 md:row-span-6 w-full">
                    <ContentDoc
                        class="prose prose-img:rounded-xl prose-img:w-full prose-headings:text-slate-900 prose-headings:no-underline prose-a:text-blue-600 prose-blockquote:text-slate-500 prose-blockquote:border-sky-500 prose-blockquote:font-light max-w-none" />
                    <!-- <ContentRenderer class="w-full" :value="data">
                            <ContentRendererMarkdown
                                class="border border-red-500 w-full"
                                :value="data" />
                        </ContentRenderer> -->
                </div>
                <div
                    class="md:col-span-3 md:row-span-1 md:h-96 bg-slate-200 rounded-xl p-4">
                    <div class="flex items-center">
                        <img
                            class="h-12 w-12 rounded-full shadow-lg object-cover ring-2 ring-offset-2 ring-slate-600"
                            :src="data.author_img"
                            alt="author image" />
                        <p
                            class="ml-4 text-base md:text-xl font-bold text-slate-800">
                            {{ data.author_name }}
                        </p>
                    </div>
                    <div class="text-slate-700 mt-6 space-y-6">
                        <p
                            class="text-sm flex flex-row items-center justify-start">
                            <span class="material-icons-round"> today </span>
                            <span class="ml-2">{{
                                formatDate(data.updatedAt)
                            }}</span>
                        </p>
                        <p
                            class="text-sm flex flex-row items-center justify-start">
                            <span class="material-icons-round"> schedule </span>
                            <span class="ml-2"
                                >{{ data.reading_time }} min read</span
                            >
                        </p>
                        <p
                            class="text-sm flex flex-row items-center justify-start">
                            <span class="material-icons-round"> share </span>
                            <span class="ml-2">Share</span>
                        </p>
                        <div class="border-t border-slate-300 py-4">
                            <h3 class="text-xl font-bold text-slate-800">
                                Tags
                            </h3>
                            <div
                                class="flex flex-row space-x-2 md:space-x-0 md:flex-col mt-2 md:space-y-2">
                                <p class="text-sm" v-for="tag in data.tags">
                                    #{{ tag }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-gb", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "utc",
    });
};
</script>
<style>
h2 > a {
    text-decoration: none !important;
    color: #0f172a !important;
}

h3 > a {
    text-decoration: none !important;
    color: #0f172a !important;
}
</style>
