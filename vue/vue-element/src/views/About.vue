<template>
  <div class="about">
    <ul>
      <li>
        <router-link :to="{name: 'Detail', params: {username: '张三'}}">张三</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Detail', params: {username: '李四'}}">李四</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Detail', params: {username: '王五'}}">王五</router-link>
      </li>
      <!-- <li>
        <router-link to="/Detail王五">王五</router-link>
      </li> -->
      <!-- <li>
        <router-link to="/hello">王五</router-link>
      </li> -->
    </ul>
    <verify-code></verify-code>
  </div>
</template>

<script>
import verifyCode from '../../../verify-code/src/verify-code.vue'
export default {
  components: { verifyCode },

}
</script>

<style>

</style>