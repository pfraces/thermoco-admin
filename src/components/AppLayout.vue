<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = true">
          <md-icon>menu</md-icon>
        </md-button>
        <h3 class="md-title" style="flex: 1">ThermoCo sensor admin</h3>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar md-elevation="0">
          <h3>Menu</h3>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="menuVisible = false">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item @click="menuVisible = false">
            <router-link to="/login">Login</router-link>
          </md-list-item>
          <md-list-item @click="menuVisible = false">
            <router-link to="/sensors">Sensors</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 250px;
}
</style>

<script>
export default {
  name: 'AppLayout',
  data: () => ({
    menuVisible: false
  })
};
</script>
