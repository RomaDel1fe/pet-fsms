<template>
  <div class="header_container">
    <el-row 
      class="header_body" 
      type="flex" 
      justify="space-between"
      align="middle"
    >
      <div class="header_control">
        <el-space :size="20" align="middle">
          <el-button type="primary" size="large" plain circle>
            <el-icon size="large"><Menu/></el-icon>
          </el-button>
          <img alt="Vue logo" src="../../assets/icons/an_logo.svg">
        </el-space>
      </div>
      <div class="header_actions">
        <el-text class="mx-1">User</el-text>
        <HeaderDropdown
          :items="[
            { label: 'Українська' },
            { label: 'English', divided: true },
          ]"
          @opened="handleDropdownOpened"
          @closed="handleDropdownClosed"
        >
          <template #button-icon>
            <Guide />
          </template>
        </HeaderDropdown>
        <HeaderDropdown
          :items="[
            { label: 'Мій профіль' },
            { label: 'Повідомленя', divided: true },
            { label: 'Вийти', divided: true }
          ]"
          @opened="handleDropdownOpened"
          @closed="handleDropdownClosed"
        >
          <template #button-icon>
            <Avatar />
          </template>
        </HeaderDropdown>
        
      </div>
    </el-row>
  </div>
</template>

<script>
import HeaderDropdown from '@/components/uiComponents/Dropdown.vue';
export default {
  data() {
    return {
      dropdownOpened: null
    }
  },
  components:{
    HeaderDropdown
  },
  methods: {
    handleDropdownOpened(name) {
      if (this.dropdownOpened && this.dropdownOpened !== name) {
        this.$refs[this.dropdownOpened].hide();  // Викликати метод hide на іншому дропдауні
      }
      this.dropdownOpened = name;
    },
    handleDropdownClosed(name) {
      if (this.dropdownOpened === name) {
        this.dropdownOpened = null;
      }
    }
  }
}
</script>

<style>
  .header_container{
    width: 100%;
  }
  .header_actions{
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
</style>
