export default defineNuxtConfig({
    telemetry: false,
    components: true,
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    images: {
        dir: 'public'
    },
    app: {
        pageTransition: false,
        layoutTransition: false
    }
});