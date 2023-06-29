<template>
  <div class="layout-wrapper"></div>
  <header-app :showSidebar="showSidebar" @toggleSidebar="toggleSidebar" />
  <main-app :showSidebar="showSidebar" />
  <sidebar-app :showSidebar="showSidebar" />
</template>

<script>
import SidebarApp from "@/components/layout/SidebarApp.vue"
import HeaderApp from "@/components/layout/HeaderApp.vue"
import MainApp from "@/components/layout/MainApp.vue"
export default {
  components: {
    SidebarApp,
    HeaderApp,
    MainApp,
  },
  data() {
    return {
      showSidebar: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
