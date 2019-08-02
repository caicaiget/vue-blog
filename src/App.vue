<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name: "app",
        data: function () {
            return {
                AppStyle: {
                    width: `${document.documentElement.clientWidth}` + 'px'
                }
            }
        }
    }
</script>
<style>
  @import "./assets/css/main.css";
</style>


