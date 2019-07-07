<template>
  <div class="new-wrap">
    <div class="new-content">
      <textarea v-model="content" v-focus></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "",
      content: ""
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  watch: {
    content(v) {
      let localData = this.getLocalData();
      localData[this.key].content = v;
      localData[this.key].time = +new Date();
      this.setLcalData(localData);
    }
  },
  mounted() {
    const query = this.$route.query;
    if (Object.keys(query).length) {
      this.key = query.key;
      this.content = this.getLocalData()[this.key].content;
    }
  },
  methods: {
    getLocalData() {
      return JSON.parse(localStorage.todoList);
    },
    setLcalData(res) {
        localStorage.setItem('todoList', JSON.stringify(res));
    }
  }
};
</script>

<style lang="scss">
.new-content {
  width: 100vw;
  height: 100vh;
  display: block;
  & > textarea {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: #666464;
    border: 0 none;
    outline: none;
    resize: none;
  }
}
</style>


