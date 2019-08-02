<template>
  <div>
    <ul>
      <li>
        <router-link exact :to="urlData.login">登录</router-link>
<!--        <router-link :to="{path: '/login'}">登录</router-link>-->
      </li>
      <li>
        <router-link exact :to="urlData.event">event</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "navlist",
    data() {
      return {
        urlData:{
          login: '/login',
          event: '/event'
        }
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    text-align: center;
  }

  ul li {
    display: inline-block;
    margin: 0 20px;
  }
</style>
