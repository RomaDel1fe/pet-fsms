<template>
  <div class="app common-layout">
    <el-container>
      <el-header class="header">
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main height="100%">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './components/baseComponents/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  * {
    font-family: 'Ubuntu', sans-serif;
  }
  .header{
    display: flex;
    align-items: center;
    min-height: 80px;
    border-bottom: 1px solid #EEF0F3;
  }
</style>
