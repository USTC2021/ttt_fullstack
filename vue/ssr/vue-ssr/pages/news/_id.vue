<!--- 下划线为 _id 的表示动态路由，可以用来接收参数 -->

<template>
  <div>
    <h2>news-contant</h2>
    <p>newsId: {{$route.params.newsId}}</p>
    <ul>
      <li>
        <a href="/">home</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 校验
  validate ({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>