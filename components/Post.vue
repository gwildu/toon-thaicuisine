<template>
  <Card level="3" :padding="false">
    <div class="post" v-if="post.published">
      <div class="image-container">
        <img class="main-image" :src="mainImage.url" :title="mainImage.title" :alt="mainImage.description" />
      </div>
      <div class="content-container">
        <h2 class="title">{{post.title}}</h2>
        <button
          class="toggle"
          @click="toggleExpansion"
        >{{expanded ? 'show less' : 'show more'}}</button>
        <div
          class="teaser"
          v-if="!expanded"
          v-html="post.teaser"
        />
        <div
          class="content"
          v-if="expanded"
          v-html="post.postContent"
        />
        <div class="date">{{formatDate(post.publicationDate)}}</div>
      </div>
    </div>
  </Card>
</template>

<script>
  import Card from 'gwi-vue-components/GwiCard/index.vue'
  import {getFlameLinkInstance} from '../flamelink'
  const flamelinkInstance = getFlameLinkInstance()
  const getImageUrl = flamelinkInstance.storage.getURL

  export default {
    name: "post",
    components: {
      Card
    },
    props: ['post'],
    data() {
      return {
        expanded: false,
        mainImageUrl: ''
      }
    },
    computed: {
      mainImage() {
        console.info('computed')
        const mainImage = this.post.imageDeck[0]
        const {title, description} = mainImage
        return {
          url: this.mainImageUrl,
          title,
          description
        }
      }
    },
    watch: {
      post () {
        console.info('watched')
        this.fetchImageUrl()
      }
    },
    methods: {
      toggleExpansion() {
        this.expanded = !this.expanded
      },
      fetchImageUrl() {
        const mainImage = this.post.imageDeck[0]
        getImageUrl(mainImage.image[0])
          .then(url => {
            this.mainImageUrl = url
          })
      },
      formatDate: dateString => {
        return new Intl.DateTimeFormat('de-CH').format(new Date(dateString))
      }
    },
    created() {
      this.fetchImageUrl()
    }
  }
</script>

<style scoped lang="scss">
  .post {
    max-width: 600px;
  }
  .main-image {
    max-width: 100%;
    display: inline-block;
  }
  .image-container {
  }
  .content-container{
    position: relative;
    padding: 20px;
  }
  .toggle {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px 20px 0 0;
  }
  .date {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 20px 20px 0;
  }
  .teaser, .content {
    padding-bottom: 1.5em;
  }
  .title {
  }
</style>
