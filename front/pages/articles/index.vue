<template>
  <div>
    <div class="content-title">
      <div class="container">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <h2 class="title is-2">Articles</h2>
      </div>
    </div>
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          <template v-if="articles.length > 0">
            <article v-for="article in articles" :key="article.id">
              <div class="columns is-desktop">
                <div class="column">
                  <nuxt-link :to="`/articles/${article.id}`">
                    <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                    <h3 class="title is-3">{{ article.title }}</h3>
                  </nuxt-link>
                </div>
              </div>
            </article>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      articles: []
    }
  },
  async asyncData(context) {
    await context.store.dispatch("articles/getArticles")
    const articles = context.store.getters["articles/articles"]

    const data = {
      articles: articles
    }

    return data
  }
}
</script>

<style lang="scss" scoped></style>
