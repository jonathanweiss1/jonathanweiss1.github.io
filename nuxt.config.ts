import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    buildModules: ['@nuxt/typescript-build']
}

export default {
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
    config,
    telemetry: false,
    components: true
}