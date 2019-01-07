<template>
  <div id="top" class="layout">
    <AppHeader />
    <nuxt class="layout-content" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader"
import AppFooter from "~/components/AppFooter"

export default {
  name: "Default",
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-content {
  flex: 1;
}

.content-title {
  background-color: #337ab7;
  padding: 1rem 0;
  margin-bottom: 1rem;
  .title {
    color: #ffffff;
  }
}

.content-body {
  word-break: break-all;
}
</style>
