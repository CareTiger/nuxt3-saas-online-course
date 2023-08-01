<template>
    <div>
        <h1 class="text-4xl border-b border-slate-400 py-10 px-4">
            All Posts
        </h1>
        <ContentQuery path="/blog/articles" :sort="$data" v-slot="{ data }">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 m-10 mx-auto md:px-4">
                <div v-for="article in orderBlogsByDate(data)" :key="article._path">
                    <CardsBlogArticle :article="article" />
                </div>
            </div>
        </ContentQuery>
    </div>
</template>
<script setup>
import _ from 'lodash';

function orderBlogsByDate (data) {
    return _.orderBy(data, ['updatedAt'], ['desc']);
};
</script>