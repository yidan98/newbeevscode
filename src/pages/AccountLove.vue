<template>
  <router-link to="/" style="color: cadetblue">home</router-link>|
  <router-link to="/cart" style="color: cadetblue">cart</router-link>|
  <router-link to="/goods/detail/10195" style="color: cadetblue"
    >details</router-link
  >|

  <router-link to="/account" style="color: cadetblue">mypage</router-link> |
  love
  <br />

  <account-love></account-love>
</template>
<script setup lang="ts">
import AccountLove from "../components/account/AccountLove.vue";
</script>
<style></style>
