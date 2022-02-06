<template>
  <div class="about">
    <h1>This is an about page123</h1>
    <router-link to="/provide">ProvideInjectPage</router-link>
    <router-link to="/test2">Test2</router-link>
    <router-link to="/test3">Test3</router-link>
    <router-link to="/test3">ProvideInjectPage</router-link>

    <div class="mt-5">123</div>
    <input
      id="file-upload"
      type="file"
      @change="fileChange($event)"
      ref="inputFile"
    />
    <button class="mr-3" @click="uploadFile">upload</button>
  </div>
</template>
<script>
import { inject, ref, defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    const currentFile = ref("");
    function fileChange(e) {
      // console.log("e", e.target.files[0]);
      currentFile.value = e.target.files[0];
    }
    async function uploadFile() {
      // console.log("e", e);
      let form = new FormData();
      form.append("input", currentFile.value);
      const res = await axios.post("FileManagment/DocUploadFile", form);
    }
    return { currentFile, fileChange, uploadFile };
  },
});
</script>
