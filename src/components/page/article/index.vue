<template>
  <el-card class="box-card">
    <div class="articles">
      <div v-for="(item, index) in articles" :key="index" class="text item">
        <div >
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
                title: 'title'
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
    margin: 0 auto;
    width: 500px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
  }
</style>
