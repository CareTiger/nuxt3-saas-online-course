// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Sampyl",
            meta: [
                {
                    charset: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
            link: [
                {
                    href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
                    rel: "stylesheet",
                },
                {
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
                    rel: "stylesheet",
                },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    modules: [
        "@nuxt/content",
        "@nuxtjs/supabase",
        "@formkit/nuxt",
        "@vueuse/nuxt",
    ],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
