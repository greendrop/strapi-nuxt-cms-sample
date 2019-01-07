import apiUrl from "~/lib/api-url"
import changeCaseObject from "~/lib/change-case-object"

export const state = () => ({
  articles: [],
  article: null
})

export const actions = {
  async getArticles({ commit }, params = {}) {
    const url = `${apiUrl.getApiBaseUrl()}/articles`
    const response = await this.$axios
      .get(url, { params: params })
      .then(response => {
        return {
          articles: changeCaseObject.camelCase(response.data)
        }
      })
      .catch(() => {
        return {
          articles: []
        }
      })
    commit("setArticles", response.articles)
  },
  async getArticleById({ commit }, id) {
    const url = `${apiUrl.getApiBaseUrl()}/articles/${id}`
    const response = await this.$axios
      .get(url)
      .then(response => {
        return {
          article: changeCaseObject.camelCase(response.data)
        }
      })
      .catch(() => {
        return {
          article: null
        }
      })
    commit("setArticle", response.article)
  }
}

export const mutations = {
  setArticles(state, data) {
    state.articles = data
  },
  setArticle(state, data) {
    state.article = data
  }
}

export const getters = {
  articles(state) {
    return state.articles
  },
  article(state) {
    return state.article
  }
}
