<template>
    <div class="relative w-full pt-[56.25%]">
        <iframe class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
            :src="`https://player.vimeo.com/video/${props.videoId}`" title="Video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>

<script setup>
const props = defineProps({
    videoId: {
        type: Number,
        required: true,
    },
});
</script>