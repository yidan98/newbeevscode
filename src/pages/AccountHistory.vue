<template>
  <router-link to="/" style="color: cadetblue">home</router-link>|
  <router-link to="/goods/detail/10195" style="color: cadetblue"
    >details</router-link
  >|
  <router-link to="/account" style="color: cadetblue">mypage</router-link
  >|history
  <br />
  <account-history></account-history>
</template>
<script setup lang="ts">
import AccountHistory from "../components/account/AccountHistory.vue";
</script>
<style></style>
