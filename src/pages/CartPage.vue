<template>
  <cart-container></cart-container>
  <br />
  <router-link to="/goods/detail/10195">details</router-link>
</template>
<script setup lang="ts">
import CartContainer from "../components/cart/CartContainer.vue";
</script>
<style>
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #74acb6;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555; 
} */
</style>
