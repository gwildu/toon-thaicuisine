<template>
  <section class="container">
    <div>
      <h1 class="title">
        toon's thaicuisine
      </h1>
      <h2 class="subtitle">
        a food blog
      </h2>
      <p>comming soon...</p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
.container {
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
  font-weight: 300;
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
