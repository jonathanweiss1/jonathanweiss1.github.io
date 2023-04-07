<template>
  <main>
    <article class="prose p-16 max-w-3xl m-auto">
      <ContentDoc>
        <template v-slot="{ doc }">
            <div v-if="doc.image"><nuxt-img :src="doc.image" class="h-44"></nuxt-img></div>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          <div>
            <h1>Document not found 😔</h1>
            <p>We couldn't find the page you are looking for.</p>
            <NuxtLink
              to="/"
              class="bg-slate-400 rounded px-10 py-2 no-underline shadow-lg text-slate-50 font-bold"
              >Home</NuxtLink
            >
          </div>
        </template>
      </ContentDoc>
    </article>
  </main>
</template>
