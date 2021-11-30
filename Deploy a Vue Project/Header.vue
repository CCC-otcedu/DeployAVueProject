<template>
  <div class="header">
    <h1>{{myTitle}}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {"myTitle"}
}
</script>

<style scoped>
  .header {
    background: black;
    color: white;
    text-align: center;
    margin: 25px;
    padding: 25px;
  }
</style>
