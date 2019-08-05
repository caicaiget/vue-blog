<template>
  <el-card class="box-card">
    <div class="articles">
      <div class="input-group">

        <transition name="fade">

          <label v-if="show" for="ser" style="color: #2db7f5;font-size: 1px">回车后搜索</label>
        </transition>
        <input type="text" class="search" id="ser" v-on:focus="show=false"  v-on:blur="show=true"></input>
      </div>
      <div v-for="(item, index) in articles" :key="index" class="text item">
        <div>
          <h3>{{item[title] }}</h3>
          <p>{{item[content]}}</p>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
    export default {
        name: "articles",
        data() {
            return {
                articles: [],
                count: 0,
                content: 'content',
                title: 'title',
                show: true
            }
        },
        methods: {
            getArticle: function () {
                let lists = 'lists';
                let count = 'count';
                this.$axios.get('/api/v1/articles').then(
                    (response) => {
                        let {data} = response;
                        console.log(data);
                        this.articles = data[lists];
                        this.count = data[count];
                        console.log(this.articles)
                    }
                )
            },
        },
        created() {
            this.getArticle()
        }
    }
</script>

<style scoped>
  .articles {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .box-card {
    width: 100%;
  }
  .search {
    height: 40px;
    font-size: 14px;
    /*width: 100%;*/
    /*background:no-repeat 0 0 scroll;*/
    /*border:none;*/
    outline:medium;
    border-bottom: 2px solid #18afe9;
    border-radius: 3px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    width: 50%;
    margin-top: 10px;
  }
  .input-group{

    height: 60px;
    position: relative;
  }
  .input-group label{
    position: absolute;
  }
  /*.fade-enter-active, .fade-leave-active {*/
  /*  transform: scale(1);*/
  /*}*/
  /*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
  /*  !*opacity: 0;*!*/
  /*  transform: scale(0.5);*/
  /*}*/
  .fade-enter-active {
    animation: fade-in .5s;
  }
  .fade-leave-active {
    animation: fade-in .5s reverse;

  }
  @keyframes fade-in {
    0% {
      right: 100px;
      transform: scale(0);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
