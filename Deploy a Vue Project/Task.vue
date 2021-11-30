<template>
  <div class="todo-list" v-bind:class="{'is-complete':aTask.completed}">
    <p>
      <input type="checkbox" v-on:click="markComplete">
      {{aTask.title}}

      </p>
  </div>
</template>

<script>
  export default{
    name: "Task",
    props: ['aTask'],
    methods:
      {
        markComplete()
        {
          this.aTask.completed = !task.aTask.completed;
        }
      }
  }
</script>

<style scoped>
  .todo-list
  {
    background: white;
    margin: 10px;
    padding: 10px;
    border-bottom: 1px red dotted;
  }

  .is-completed
  {
    text-decoration: line-through;
  }
</style>
