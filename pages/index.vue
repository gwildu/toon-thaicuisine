<template>
  <section class="wide-container">
    <div>
      <Heading
        markup-level="1"
        styling-level="1"
      >toon's thaicuisine</Heading>
      <Heading
        markup-level="2"
        styling-level="4"
      >
        ein Food Blog für Fans der Thailändischen Küche
      </Heading>
      <Posts />
    </div>
  </section>
</template>

<script>
  import Heading from 'gwi-vue-components/GwiHeading/index.vue'
  import Posts from '~/components/Posts.vue'

  export default {
  components: {
    Posts,
    Heading
  }
}
</script>

<style lang="scss" scoped>
.wide-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 100vw;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  //font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 50px;
    margin-bottom: 10px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
}

.links {
  padding-top: 15px;
}
</style>
