<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- 命名路由跳转 -->
      <router-link :to="{name: 'Home'}">Home</router-link>  |
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
    <transition-group name="router">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>

<style lang="less">
.router-enter,.router-leave-to {
  opacity: 0;
}
.router-enter-to,.router-leave {
  opacity: 1;
}
.router-enter-active,.router-leave-active {
  transition: all 1s ease;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
