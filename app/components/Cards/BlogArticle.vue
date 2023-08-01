<template>
    <div class="h-full transition ease-in-out delay-200 hover:scale-105 cursor-pointer">
        <!--article card-->
        <nuxt-link :to="`${article._path}`">
            <div class="flex flex-col justify-between h-full shadow-2xl rounded-2xl bg-slate-100">
                <div class="h-full">
                    <img class="rounded-t-2xl h-48 lg:h-64 w-full object-cover" :src="article.img" alt="" />
                    <div class="p-5 flex flex-col">
                        <h5 class="mb-2 text-normal font-bold tracking-tight text-slate-900">
                            {{ article.title }}
                        </h5>
                        <p class="font-normal text-slate-700 text-xs">
                            {{ article.description }}
                        </p>
                    </div>
                </div>

                <div class="flex flex-row justify-between items-center mx-6 my-2 pb-2">
                    <div class="flex flex-row justify-between items-center">
                        <img class="w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg object-cover ring-2 ring-offset-2 ring-slate-600"
                            :src="article.author_img" alt="Bonnie image" />
                        <p class="ml-4 flex flex-col items-start">
                            <span class="text-lg font-bold text-slate-900">{{ article.author_name }}</span>
                            <span class="text-sm font-extralight text-slate-400">{{ formatDate(article.updatedAt)
                            }}</span>
                        </p>
                    </div>
                    <div>
                        <p class="text-sm text-slate-900">
                            <i
                                class="material-icons-round font-medium border-4 border-slate-500 text-slate-500 rounded-full p-1">arrow_forward</i>
                        </p>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup>
const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-gb', {
        month: 'short',
        day: 'numeric',
        year: "numeric",
        timeZone: 'utc',
    });
};
</script>