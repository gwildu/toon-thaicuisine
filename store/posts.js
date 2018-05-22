import {bindContentFlamelink} from '../flamelink'

export default {
  state: {
    posts: {},
    images: {}
  },
  getters: {
    posts: state => state.posts
  },
  actions: {
    bindPosts ({commit}) {
      bindContentFlamelink('post', posts => {
        console.info({posts})
        commit('SET_POSTS', posts)
      })
    }
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  }
}
