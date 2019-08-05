<template>
  <div>
    <el-form :model="form">
      <el-form-item>
        <el-input type="text" v-model="form.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="textarea" v-model="form.desc" :autosize='autosize' placeholder="摘要"></el-input>
      </el-form-item>
      <el-form-item>
        <MarkDown ref="markdownContent" :height="markdownHeight" :theme="theme" :initial-value="form.content"></MarkDown>
      </el-form-item>
      <el-form-item style="display: flex; justify-content: center">
        <el-button :round="round" v-on:click="clickParent" style="background-color: rgb(9, 19, 230); color: white;">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import MarkDown from '../../../../markdown/index'

    export default {
        name: "index",
        data: function() {
            return {
                form: {
                    title: '',
                    desc: '',
                    content: '',
                },
                markdownHeight : 600,
                theme: 'OneDark',
                initialValue: '',
                autosize: { minRows: 2, maxRows: 6 },
                round: true,
            }
        },
        methods: {
            clickParent: function () {
                this.form.content = this.$refs.markdownContent.value;
                this.$axios.post('/api/v1/articles').then(
                    function (res) {
                        console.log(res.data)
                    }.bind(this)
                ).catch(function (error) {
                    console.log(error)
                })
            }
        },
        watch: {
            mark: function () {

            }
        },
        components: {MarkDown}
    }
</script>

<style scoped>

</style>
