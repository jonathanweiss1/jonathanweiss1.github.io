<template>
  <h1>
    <article class="prose max-w-3xl m-auto">
      <ContentList path="/blog" v-slot="{ list }"
        ><NuxtLink :to="article._path"
          v-for="article in list"
          :key="article._path"
          class="flex flex-col border-0 shadow-md p-4 rounded my-3 bg-slate-50 no-underline"
        >
          <div class="w-full flex justify-center">
            <nuxt-img :src="article.image" class="h-52" />
          </div>
          <h2 class="">{{ article.title }}</h2>
          <p class="text-justify leading-normal">{{ article.description }}</p>
        </NuxtLink></ContentList
      >
    </article>
  </h1>
</template>
