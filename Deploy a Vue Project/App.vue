<template>
  <div class="app">
    <Header myTitle="Vue List App"/>
    <TaskList myTitle="Tasks To Do" v-bind:taskList="tasks"/>
  </div>
</template>

<script>
import Header from './Header.vue';
import TaskList from './TaskList.vue';

export default {
  name: 'App',
  components: {
    Header,
    TaskList
  },
  data()
  {
    return {
      tasks:[
        {id:1, title:"Learn HTML and CSS", completed:false},
        {id:2, title:"Learn HTML and CSS", completed:true},
        {id:3, title:"Learn HTML and CSS", completed:false},
      ]
    }
  }
}
</script>
