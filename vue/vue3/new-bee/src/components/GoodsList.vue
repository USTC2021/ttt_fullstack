<template>
  <div class="good">
    <header class="good-header">{{myTitle}}</header>
    <div class="good-box">
      <div class="good-item" v-for="item in goods" :key="item.goodsId" @click="goToDetail(item)">
        <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
        <div class="good-desc">
          <div class="title">{{item.goodsName}}</div>
          <div class="price">¥ {{item.sellingPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router' 
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props) {
    const router = useRouter()
    const myTitle = ref(props.title)
    const goosList = reactive({
      goods: props.goods
    })

    // 页面跳转到商品详情页
    const goToDetail = (item) => {
      router.push({ path: `/product/${item.goodsId}` })
    }
    // console.log(props);
    return {
      myTitle,
      ...toRefs(goosList),
      goToDetail
    }
  }
}
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.good {
  .good-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: @primary;
    font-size: 16px;
    font-weight: 500;
  }
  .good-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .good-item {
      box-sizing: border-box;
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 10px;
      img {
        display: block;
        width: 120px;
        margin: 0 auto;
      }
      .good-desc {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        .title {
          color: #222333;
        }
        .price {
          color: @primary;
        }
      }
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}
</style>