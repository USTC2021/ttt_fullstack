<template>
  <div class="publish-note">
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption">
    </quill-editor>

    <div class="note-wrap">
      <div class="note-title">
        <h2>输入标题</h2>
        <van-field v-model="title" placeholder="请输入标题" />
      </div>
      <div class="note-title">
        <h2>上传图片</h2>
        <van-uploader
          multiple
          :max-size="500 * 1024"
          :after-read="onRead"
        />
      </div>
      <div class="note-title">
        <h2>请选择分类</h2>
        <span class="note-type" @click="selectType">选择分类</span>
        <van-action-sheet
          v-model="show"
          :actions="actions"
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
          @select="onSelect"
        />
      </div>
      <div class="publish-btn" @click="publish">发布笔记</div>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: "",
      editorOption: {
        modules: {
          toolbar: [
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "image",
              "clean",
              { color: [] },
              { background: [] },
              { font: [] },
              // { size: ["small", false, "large", "huge"] },
              // { header: [1, 2, 3, 4, 5, 6, false] },
              // { indent: "-1" },
              // { indent: "+1" },
            ], // toggled buttons
            ["blockquote"],
          ],
        },
      },
      title: "",
      show: false,
      actions: [
        { name: '选项' }, 
        { subname: '美食' }, 
        { subname: '旅行' },
        { subname: '汽车' },
        { subname: '时尚' },
        { subname: '科技' },
      ],
      preImg: '',
      selectCon: ''
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    selectType () {
      this.show = true
    },
    onCancel () {
      this.show = false
    },
    onRead (file) {
      console.log(file)
      this.preImg = file.content
    },
    onSelect (item) {
      console.log(item)
      this.selectCon = item.subname
    },
    publish () {
      let curUserId = JSON.parse(sessionStorage.getItem('userinfo')).id
      let nickname = JSON.parse(sessionStorage.getItem('userinfo')).nickname

      this.$http({
        method: 'post',
        url: this.$util.baseUrl + 'users/insertNote',
        data: {
          note_content: this.content,
          head_img: this.preImg,
          title: this.title,
          node_type: this.selectCon,
          userId: curUserId,
          nickname: nickname
        }
      }).then (res => {
        console.log(res)
        if (res.data.code === '80000') {
          this.$toast(res.data.mess)
        }
      })
    }
  }
};
</script>

<style lang="less">
.van-uploader {
  padding: 10px 15px;
  display: flex;
  align-items: center;
}
.ql-container {
  height: 6.666667rem;
  overflow-y: scroll;
}
.note-wrap {
  margin-top: 20px;
  h2 {
    font-weight: 400;
    font-size: 0.373333rem;
    color: rgba(69, 90, 100, 0.6);
    padding: 10px;
    background: #f5f5f5;
  }
  .preImg {
    width: 100px;
    height: 100px;
    margin-left: 15px;
  }
  .note-type {
    width: 100%;
    display: inline-block;
    font-size: 0.373333rem;
    color: #333;
    line-height: 24px;
    padding: 10px 15px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #ccc;
      width: 200%;
      height: 1px;
      transform: scale(0.5);
      transform-origin: left bottom;
    }
  }
  .publish-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 44px;
    margin: 40px auto;
    font-size: 0.453333rem;
    border-radius: 6px;
    background-color: rgba(139, 195, 74, 1);
    color: #fff;
  }
}
</style>