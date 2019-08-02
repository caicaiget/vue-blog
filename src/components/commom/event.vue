<template>
    <div class="event">
      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
      <h3>site: {{site}}</h3>
      <ol>
        <li v-on:click="getInfo(index)" v-for="(site, index) in sites">
          {{site.name}}
        </li>
      </ol>
      <ul>
        <li v-for="value, key in object">
          {{key}}: {{ value }}
        </li>
      </ul>
      <template v-if="use">
        <h3>url: {{url}}</h3>
      </template>
      <h3>{{details()}}</h3>
      <div v-html="alexa"></div>
      <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
      <br><br>
      <div v-bind:class="{'class1': use}">v-bind:class 指令{{use}}</div>
      {{ok ? 'yes' : 'no'}}<br>
      <div v-bind:id="'list-' + id">菜鸟教程</div>
      <p v-if="seen">现在你看到我了</p>
      <pre><a v-bind:href="url">菜鸟教程</a></pre>
      <label for="r2">输入值</label><input v-model="message" id="r2">
      <p>{{message}}</p>
      <button v-on:click="reverseMessage">反转字符串</button>
      <router-link :to="{ path: '/login' }">login</router-link>
      <br>
      <button v-on:click = "show = !show">点我</button>
      <!--      animate.css-->
      <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      >
      <p v-if="show">菜鸟教程 -- 学的不仅是技术，更是梦想！！！</p>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "event",
      data () {
        return {
          site: "菜鸟教程",
          url: "www.runoob.com",
          alexa: "<h3> caicai is cool<h3/>",
          use: false,
          ok: true,
          id: 1,
          seen: true,
          message: "cai",
          show: true,
          sites: [
            { name: 'Runoob' },
            { name: 'Google' },
            { name: 'Taobao' }
          ],
          object: {
            name: '菜鸟教程',
            url: 'http://www.runoob.com',
            slogan: '学的不仅是技术，更是梦想！'
          }
        }
      },
      methods: {
        details: function () {
          return this.site + "- 学的不仅是技术，更是梦想"
        },
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        },
        getInfo(data) {
          console.log(this.sites[data].name)
        }
      }
    }
</script>

<style scoped>
  .class1{
    background: #444;
    color: #eee;
  }
  #list-1 {
    background: #123;
    color: #eee;
  }
</style>
