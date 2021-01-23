<template>
  <div v-if="info">
    <h1>姓名：{{ info[0].nm }}</h1>
    <h2>主演：{{ info[0].star }}</h2>
    <h2>上映时间：{{ info[0].rt }}</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: 'hello world'
    }
  },
  async asyncData() {
    let { data } = await axios.get('https://m.maoyan.com/ajax/movieOnInfoList')
    console.log(data.movieList)
    return { info: data.movieList }
  }
}
</script>

<style>

</style>