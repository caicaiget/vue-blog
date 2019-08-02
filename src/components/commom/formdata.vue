<template>
    <div>
      <input type="text" v-model="msg">
      <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "formdata",
        data () {
          return {
            msg: 12
          }
        }
    }
</script>

<style scoped>

</style>
