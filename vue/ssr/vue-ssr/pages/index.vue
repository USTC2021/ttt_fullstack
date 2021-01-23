<template>
  <div class="container">
    <ul>
      <!-- <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">about</nuxt-link></li>
      <li><nuxt-link to="/news">news</nuxt-link></li> -->
      <li><nuxt-link :to="{name: 'index'}">Home</nuxt-link></li>
      <li><nuxt-link :to="{name: 'about'}">about</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news', params: {newId: 1234}}">news</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
