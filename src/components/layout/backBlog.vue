<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
      <a href="/" style="display: flex; justify-content: center; text-decoration: none; color: #9b5524">
        <el-avatar :src="avatar" :size="avatarSize"></el-avatar>
        <div style="line-height: 60px; margin-left: 15px">{{username}}</div>
      </a>
      <el-menu :default-openeds="['1']">
        <el-menu-item>
          <template slot="title"><i class="el-icon-message"></i>
            <router-link to="/mark" style="text-decoration: none;">发布文章</router-link>
          </template>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px; background-color: #2db7f5">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        data: function () {
            return {
                username: "菜菜的博客",
                avatarSize: 60,
                avatar: require('../../assets/img/4.jpeg')
            }
        },
    }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
