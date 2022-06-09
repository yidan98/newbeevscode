<template>
  <div id="sub-banner">
    <template v-for="(goods, index) in subBanner" v-bind:key="index">
      <hot-image v-bind:goods="goods"></hot-image>
    </template>
  </div>
</template>
<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
import HotImage from "./HotImage.vue";

export default defineComponent({
  components: { HotImage },
  methods: {
    ...mapActions({ fetchHotGoodses: "setHotGoodses" }),
  },
  computed: {
    ...mapGetters({ subBanner: "getHotGoodses" }),
  },
  mounted() {
    this.fetchHotGoodses();
  },
});

/*新的方法

import { reactive, onMounted } from "vue";



    const state = reactive({
      hotGoods: [],
    });
     onMounted(async () => {
      const url = "http://localhost:3000/hotGoodses";
      const headers = { Accept: "application/json" };
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
     state.hotGoods = [...j]; });
    
    */
</script>

<style>
#sub-banner {
  display: flex;
  margin: 10px 80px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 10px;

  /* flex-shrink: 0;
  width: 1226px;
  justify-content: left;
  height: 295px;
  margin-top: 15px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  font-family: Microsoft Yahei; */
}
</style>
