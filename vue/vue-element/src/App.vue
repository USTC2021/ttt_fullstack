<template>
  <div class="page">
    <p>
      <router-link to="/">首页</router-link>|
      <router-link to="/about">关于</router-link>
    </p>
    <!-- 路由路口 -->
    <transition name="fade">
      <router-view></router-view>  
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {
  }
}
</script>
  
<style>
  .page {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .fade-enter {
    opacity: 0;
  }
  .face-leave {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .face-leave-active {
    opacity: 0;
    /* transition: opacity 0.5s; */
  }
</style>