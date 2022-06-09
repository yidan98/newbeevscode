<template>
  <table class="g-table-a js-sku-specs">
    <tbody>
      <tr>
        <th>商品コード</th>
        <td>{{ goodsCode }}</td>
      </tr>
      <tr>
        <th>カラー</th>
        <td>{{ color }}</td>
      </tr>
      <tr>
        <th>サイズ</th>
        <td>{{ size }}</td>
      </tr>
      <tr>
        <th>素材</th>
        <td>{{ material }}</td>
      </tr>
      <tr>
        <th>重量</th>
        <td>{{ weight }}</td>
      </tr>
      <tr>
        <th>保証年数</th>
        <td>{{ guaranteeYear }}</td>
      </tr>
      <tr>
        <th>梱包サイズ</th>
        <td>{{ wrapSize }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
// import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
// const route = useRoute();
// const goodsId = route.params.goodsId;
// const store = useStore();
// onMounted(() => {
//   store.dispatch("setGoodsSize", goodsId);
// });

// const code = computed(() => store.getters.getNew.goodsCode);

// console.log("code", code);
// let color = computed(() => store.getters.getNew.color);
// let size = computed(() => store.getters.getNew.size);
// let material = computed(() => store.getters.getNew.material);
// let weight = computed(() => store.getters.getNew.weight);
// let guaranteeYear = computed(() => store.getters.getNew.guaranteeYear);
// let wrapSize = computed(() => store.getters.getNew.wrapSize);
import { defineProps, toRefs } from "vue";
const props = defineProps({
  goodsCode: Number,
  color: String,
  size: String,
  material: String,
  weight: String,
  guaranteeYear: String,
  wrapSize: String,
});
const { goodsCode, color, size, material, weight, guaranteeYear, wrapSize } =
  toRefs(props);
console.log("code", goodsCode);
</script>
<style>
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.g-table-a th,
.g-lg-table-a th {
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  background-color: #f7f7f7;
}
.g-table-a th,
.g-table-a td,
.g-lg-table-a th,
.g-lg-table-a td {
  padding: 12px 15px;
  vertical-align: top;
  border-bottom: 1px solid #dbdbdb;
}
.g-table-a,
.g-lg-table-a {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #dbdbdb;
}
</style>
