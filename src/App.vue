<template>
  <p class="nav">
    <router-link to="/">ホームページ</router-link> |
    <router-link to="/goods/detail/10195">商品詳細</router-link> |
    <router-link to="/cart">カート</router-link> |
    <router-link to="/account">マイページ</router-link>
  </p>
  <router-view></router-view>
</template>

<script lang="ts">
export default {};
</script>

<style>
.nav {
  background-color: #009e96;
  color: white;
}
.nav a {
  color: white;
}
</style>
