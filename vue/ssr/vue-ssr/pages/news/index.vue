<template>
  <div>
    <h2>news index page</h2>
    <p>newId: {{$route.params.newId}}</p>
    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/news/123">news-1</a></li>
      <li><a href="/news/456">news-2</a></li>
      <li><a href="/news/abc">news-3</a></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>