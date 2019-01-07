<template>
  <div>
    <div class="content-title">
      <div class="container">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <h2 class="title is-2">{{ article.title }}</h2>
      </div>
    </div>
    <div class="container">
      <div class="columns is-desktop">
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <div class="column">{{ article.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      article: null
    }
  },
  async asyncData(context) {
    const id = context.route.params.id
    await context.store.dispatch("articles/getArticleById", id)
    const article = context.store.getters["articles/article"]

    const data = {
      article: article
    }

    return data
  }
}
</script>

<style lang="scss" scoped></style>
