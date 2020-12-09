<template>
  <div class="count">
    <h3>{{$store.state.a.count}}</h3>
    <!-- <h3>{{$store.state.count}}</h3> -->
    <!-- <h2>{{newCount}}</h2> -->
    <h2>{{count}}</h2>
    <h2>{{newCount}}</h2>
    <p>
      <!-- <button @click="$store.commit('add', 10)">add</button> -->
      <button @click="add(10)">add</button>
      <!-- <button @click="addAction(5)">add</button> -->
      <!-- <button @click="$store.commit('reduce')">reduce</button> -->
      <button @click="reduce">reduce</button>
      </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  // computed: {
  //   newCount () {
  //     return this.$store.state.count * 2
  //   }
  // }
  data () {
    return {
      msg: ''
    }
  },
  // computed: mapState({
  //   newCount: state => state.count * 3
  // })
  // computed: mapState(['count']),
  // 组件传值：eventbars、vuex
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  // methods: mapMutations(['add', 'reduce'])
  methods: {
    test () {},
    // ...mapMutations(['reduce'])
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>