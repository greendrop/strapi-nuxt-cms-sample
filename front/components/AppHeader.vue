<template>
  <header>
    <div class="section-columns">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">
            <nuxt-link :to="'/'" exact>
              <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              <h1 class="title is-1">strapi-nuxt-cms-sample</h1>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar is-light">
      <div class="container">
        <div class="navbar-brand">
          <div
            :class="{
              'navbar-burger': true,
              burger: true,
              'is-active': navbarActive
            }"
            @click="navbarActive = !navbarActive"
          >
            <span /> <span /> <span />
          </div>
        </div>

        <div :class="{ 'navbar-menu': true, 'is-active': navbarActive }">
          <div class="navbar-start">
            <template v-for="menu of menus">
              <nuxt-link
                v-if="menu.children.length === 0 && isInternalLink(menu.href)"
                :key="menu.id"
                :to="menu.href"
                class="navbar-item"
                exact
                @click.native="navbarActive = false"
              >
                {{ menu.title }}
              </nuxt-link>
              <a
                v-if="menu.children.length === 0 && !isInternalLink(menu.href)"
                :key="menu.id"
                :href="menu.href"
                class="navbar-item"
                target="_blank"
              >
                {{ menu.title }}
              </a>
              <div
                v-if="menu.children.length > 0"
                :key="menu.id"
                :text="menu.title"
                class="navbar-item has-dropdown is-hoverable"
              >
                <nuxt-link
                  v-if="isInternalLink(menu.href)"
                  :key="menu.id"
                  :to="menu.href"
                  class="navbar-link"
                  exact
                  @click.native="navbarActive = false"
                >
                  {{ menu.title }}
                </nuxt-link>
                <a
                  v-if="!isInternalLink(menu.href)"
                  :key="menu.id"
                  :href="menu.href"
                  class="navbar-link"
                  target="_blank"
                >
                  {{ menu.title }}
                </a>
                <div class="navbar-dropdown">
                  <template v-for="child of menu.children">
                    <nuxt-link
                      v-if="isInternalLink(child.href)"
                      :key="child.id"
                      :to="child.href"
                      class="navbar-item"
                      exact
                      @click.native="navbarActive = false"
                    >
                      {{ child.title }}
                    </nuxt-link>
                    <a
                      v-if="!isInternalLink(child.href)"
                      :key="child.id"
                      :href="child.href"
                      class="navbar-item"
                      target="_blank"
                    >
                      {{ child.title }}
                    </a>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data: function() {
    return {
      navbarActive: false
    }
  },
  computed: {
    menus() {
      return [{ id: 1, title: "Articles", href: "/articles", children: [] }]
    }
  },
  methods: {
    isInternalLink(href) {
      if (href.indexOf("//") === 0) {
        return false
      }
      if (href.indexOf("/") === 0) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped></style>
