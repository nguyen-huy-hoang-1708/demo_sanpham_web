<template>
  <header>
    <h1>My Vue App</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
header {
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
}

h1 {
  display: none; /*Không hiển thị tiêu đề My Vue App*/
}
</style>
