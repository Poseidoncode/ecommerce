<template>
  <main class="main-container">
    <section class="main-input">
      <label class="main-lebel" for="story">Leave a Message Demo App:</label>

      <textarea
        id="story"
        name="story"
        rows="5"
        placeholder=" Leave a comment..."
        v-model="nowComment"
      >
      </textarea>
      <div class="button-area">
        <button type="button" @click="addNewComment(nowComment)">submit</button>
      </div>
    </section>
    <section class="main-reply" v-for="(itemData, i) in allDatas" :key="`itemData${i}`">
      <div class="main-reply-label">Comment {{ +allDatas.length - i }}</div>
      <label class="main-reply-commentData" :for="`itemDataReply${i}`">{{
        itemData.commentData || ""
      }}</label>

      <textarea
        :id="`itemDataReply${i}`"
        :name="`itemDataReply${i}`"
        rows="5"
        placeholder=" Leave a reply..."
        v-model="itemData.nowReply"
      >
      </textarea>

      <div class="button-area">
        <button type="button" class="button-area" @click="addNewReply(itemData)">
          submit
        </button>
      </div>

      <div class="main-reply-label main-reply-title" v-if="itemData.replys.length">
        Reply
      </div>
      <div
        class="main-reply-data"
        v-for="(itemReply, ireply) in itemData.replys"
        :key="`itemReplys${ireply}`"
      >
        {{ itemReply }}
      </div>
    </section>
  </main>
</template>

<script>
import { inject, ref } from "vue";

export default {
  components: {},
  setup() {
    const allDatas = ref([]);
    const nowComment = ref("");

    const addNewComment = (newData) => {
      if (!newData) {
        return;
      }
      allDatas.value.unshift({
        commentData: newData,
        replys: [],
        nowReply: "",
      });
      nowComment.value = "";
    };

    const addNewReply = (item) => {
      if (!item.nowReply) {
        return;
      }
      item.replys.unshift(item.nowReply);
      item.nowReply = "";
    };

    return { allDatas, addNewComment, addNewReply, nowComment };
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 800px;
  margin: 0 auto;
  padding: 50px;
  background: #b6d9ea;
  .button-area {
    display: flex;
    justify-content: flex-end;
  }

  label,
  textarea {
    font-size: 0.8rem;
    letter-spacing: 1px;
    width: 100%;
  }
  textarea {
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    padding: 5px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  .main-input {
    width: 100%;
    display: grid;
    margin-bottom: 20px;
    .main-lebel {
      font-size: 26px;
      color: #042450;
      font-weight: 600;
    }
  }
  .main-reply {
    background: #ffffff;
    padding: 10px;
    margin-bottom: 20px;
    .main-reply-label {
      font-size: 21px;
      color: #042450;
      font-weight: 600;
    }
    .main-reply-title {
      margin-bottom: 20px;
    }
    .main-reply-commentData {
      font-size: 17px;
      margin-top: 5px;
      margin-bottom: 20px;
    }
    .main-reply-data {
      font-size: 17px;
      border-bottom: 1.5px solid #d8d8d8;
      padding-bottom: 5px;
    }
  }
}
</style>
