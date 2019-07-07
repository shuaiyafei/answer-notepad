<template>
  <div class="list-wrap">
    <ul class="list-content">
      <li v-for="(todo, key) in todoList" :key="key" @click="updateNote(key)">
        <h4>{{todo.content | getTitle}}</h4>
        <p class="list-info">
          <span>{{todo.time | getTime}}</span>
          <span>{{todo.content | getInfo}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: []
    };
  },
  filters: {
    getTitle(w) {
      return w.substr(0, 20);
    },
    getTime(w) {
        const date = new Date(w);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}/${month}/${day}`;
    },
    getInfo(w) {
      return w.substr(20, 40);
    }
  },
  mounted() {
    this.todoList = JSON.parse(localStorage.todoList);
  },
  methods: {
    updateNote(key) {
      this.$router.push({
        path: "new",
        query: {
          key
        }
      });
    }
  }
};
</script>

<style lang="scss">
.list-content {
  & > li {
    width: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dedede;
    &:last-child {
      border: none;
    }
  }
}
.list-info {
  display: flex;
  justify-content: space-between;
}
</style>
