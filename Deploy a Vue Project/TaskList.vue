<template>
  <div>
    <h1>{{myTitle}}</h1>
    <p v-for="task in taskList" v-bind:key="task.id">
      <Task  v-bind:aTask="task"/>

    </p>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "TaskList",
  props: ['myTitle', 'taskList'],
  components: {
    Task
  }
}
</script>
