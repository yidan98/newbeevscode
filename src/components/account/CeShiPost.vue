<template>
  <div>
    <el-form-item label="住所">
      <div>
        <el-input type="text" v-model="p.postCode" @keyup="searchAddress" />
        <button @click="searchAddress">住所検索</button>
      </div>
    </el-form-item>
  </div>
  <div>
    <label>都道府県</label>
    <el-input type="text" v-model="prefecture" />
  </div>
  <div>
    <label>市区町村</label>
    <el-input type="text" v-model="city" />
  </div>
  <div>
    <label>地名・番名</label>
    <el-input type="text" v-model="ruleForm.town" />
  </div>
  {{ error }}
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useStore } from "../../store/index";
const headers = { Accept: "application/json" };
// const postCode = ref("");
const prefecture = ref("");
const city = ref("");
// const town = ref("");
const error = ref("");
const ruleForm = reactive({ town: "" });
const store = useStore();
const userId = 10011;
onMounted(() => {
  store.dispatch("setUpdateAccount", userId);
});
const p = computed(() => store.getters.getUpdateAccount);
const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + p.value.postCode;
  const info = await fetch(url, { headers });
  const data = await info.json();
  if (data.status === 400) {
    //エラー時
    error.value = data.message;
  } else if (data.results === null) {
    error.value = "郵便番号から住所が見つかりませんでした。";
  } else {
    prefecture.value = data.results[0].address1;
    city.value = data.results[0].address2;
    ruleForm.town = data.results[0].address3;
  }
};
</script>
