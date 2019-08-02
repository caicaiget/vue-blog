<template>
<div>
  <div style="background-color: #9A5334; width: 500px; height: 500px"></div>
  <router-link to="/back">后台</router-link>
  <router-view></router-view>
</div>
</template>

<script>
    export default {
        name: "blog"
    }
</script>

<style scoped>

</style>
