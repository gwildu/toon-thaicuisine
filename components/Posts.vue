<template>
  <div class="container">
    <ul class="posts">
      <li v-for="(post, key) in posts" :key="key">
        <Post :post="post"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Post from './Post.vue'

  export default {
    name: "posts",
    components: {
      Post
    },
    computed: {
      ...mapGetters({
        posts: 'posts'
      })
    },
    methods: {
      ...mapActions({
        bindFlamelink: 'bindPosts'
      })
    },
    mounted() {
      this.bindFlamelink()
    }
  }
</script>

<style scoped>
  .posts {
    max-width: 600px;
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
    text-align: left;
  }
</style>
