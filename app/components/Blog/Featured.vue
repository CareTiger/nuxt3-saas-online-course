<template>
    <div>
        <h1 class="text-4xl border-b border-slate-400 py-10 px-4">
            Featured Posts
        </h1>
        <ContentQuery path="/blog/articles" :where="{ featured: true }" v-slot="{ data }">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 mx-auto md:px-4">
                <div v-for="article in data.slice().reverse()" :key="article._path">
                    <CardsBlogArticle :article="article" />
                </div>
            </div>
        </ContentQuery>
    </div>
</template>