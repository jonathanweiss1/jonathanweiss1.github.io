export default defineNuxtConfig({
    target: 'static',
    ssr: true,
    telemetry: false,
    components: true,
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    // generate: {
    //     routes: ['/', '/blog/recombine-split-zips', '/blog/wrong-git-user', '/impressum']
    // },
    image: { provider: 'static', dir: '/images' },
    nitro: {
        prerender: {
            routes: ['/', '/sitemap.xml']
        }
    },
    app: {
        pageTransition: false,
        layoutTransition: false
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        '@/assets/css/main.css',
    ],
});