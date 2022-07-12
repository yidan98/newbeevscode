<template>
  <div class="common-layout">
    <el-container>
      <el-header></el-header>
      <div
        :class="ruleForm.isShow ? 'blue' : 'white'"
        @click="ruleForm.isShow = !ruleForm.isShow"
      >
        <label>
          <input type="radio" />
        </label>
        <label>&nbsp;登録済みの配送先住所を変更</label>
      </div>

      <el-main v-if="ruleForm.isShow">
        <el-form
          :label-position="labelPosition"
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="160px"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <div style="display: flex">
            <div class="g-select g-select-sm">
              <i class="g-i g-i-dropdown" aria-hidden="true"></i>
              <select
                name="selectDestinationName"
                id="selectDestinationName"
                aria-label="配送先住所の選択"
                @change="filterArr"
              >
                <option v-for="(p, index) in arr" :key="index">
                  {{ p.listName }}
                </option>
              </select>
            </div>
            <div>
              <p class="g-inputGroup_static">
                <a
                  class="g-link g-link-gray"
                  href="#p-deleteModal"
                  role="button"
                  aria-expanded="false"
                  aria-controls="p-deleteModal"
                  @click="isShow01 = true"
                  id="delete"
                >
                  <span
                    class="material-symbols-outlined"
                    data-v-3c643552=""
                    data-v-a2a89c46=""
                    style="
                      font-size: 1rem;

                      margin-top: -0.2em;
                      color: rgb(179, 179, 179);
                    "
                  >
                    close
                  </span>
                  <span style="font-weight: 100">配送先を削除</span>
                </a>
              </p>
            </div>
          </div>
          <div>
            <GDialog v-model="isShow01">
              <div class="modal">
                <div class="g-modal_el">
                  <header class="g-modal_head">
                    <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
                    <button
                      @click="isShow01 = false"
                      class="g-modal_close"
                      type="button"
                      aria-label="閉じる"
                    >
                      <span
                        class="material-symbols-outlined"
                        style="cursor: pointer"
                      >
                        close
                      </span>
                    </button>
                  </header>
                  <div class="g-modal_body">
                    <p id="modalMessage">削除しますか？</p>
                    <div class="button-delete-div">
                      <button
                        class="button-delete"
                        :id="id"
                        @click="
                          deleteListName(id);
                          isShow01 = false;
                        "
                      >
                        <span>削除する</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </GDialog>
            <el-form-item label="名称">
              <!-- 「転居先（地名）」、「勤務先」など認識しやすい名称を入力してください。
      「自宅」は会員情報で設定済みのため、入力できません。 -->

              <el-input v-model="f.listName" placeholder="転居先（地名）" />
            </el-form-item>

            <el-form-item label="氏名" prop="name1">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-input
                    @input="handleNameInput"
                    id="name"
                    v-model="f.name1"
                    label="First Name"
                    placeholder="姓"
                  />
                </el-col>
                <el-col :span="12" prop="name2">
                  <el-form-item prop="name2">
                    <el-input
                      id="name2"
                      @input="handleNameInput"
                      v-model="f.name2"
                      label="Last Name"
                      placeholder="名"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="氏名(カナ)" prop="furigana">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-input
                    id="furigana"
                    v-model="f.nameKANA1"
                    label="First Name"
                    placeholder="セイ"
                  />
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="furigana2">
                    <el-input
                      id="furigana2"
                      v-model="f.nameKANA2"
                      label="Last Name"
                      placeholder="メイ"
                  /></el-form-item>
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item
              label="電話番号1"
              prop="telephonenumber1"
              style="padding: 0px 0px 20px 0px"
            >
              <el-row :gutter="5">
                <el-col :span="5">
                  <el-input v-model="f.telephonenumber1" placeholder="03" />
                </el-col>
                <el-col class="text-center" :span="2">
                  <span class="text-gray-500">--</span>
                </el-col>
                <el-col :span="5">
                  <el-form-item prop="telephonenumber2">
                    <el-input
                      v-model="f.telephonenumber2"
                      placeholder="0000"
                      style="margin-left: -30px"
                  /></el-form-item>
                </el-col>
                <el-col
                  class="text-center"
                  :span="2"
                  style="margin-left: -30px"
                >
                  <span class="text-gray-500">--</span>
                </el-col>
                <el-col :span="5">
                  <el-form-item prop="telephonenumber3">
                    <el-input
                      v-model="f.telephonenumber3"
                      placeholder="0000"
                      style="margin-left: -30px"
                  /></el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="電話番号2">
              <el-row :gutter="5">
                <el-col :span="5">
                  <el-input v-model="f.telephonenumber1" placeholder="03" />
                </el-col>
                <el-col class="text-center" :span="2">
                  <span class="text-gray-500">--</span>
                </el-col>
                <el-col :span="5">
                  <el-input
                    v-model="f.telephonenumber2"
                    placeholder="0000"
                    style="margin-left: -30px"
                  />
                </el-col>
                <el-col
                  class="text-center"
                  :span="2"
                  style="margin-left: -30px"
                >
                  <span class="text-gray-500">--</span>
                </el-col>
                <el-col :span="5">
                  <el-input
                    v-model="f.telephonenumber3"
                    placeholder="0000"
                    style="margin-left: -30px"
                  />
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item
              label="郵便番号"
              prop="postCode"
              style="display: flex; width: 400px"
              ><el-row :gutter="20">
                <el-col :span="12"
                  ><el-input
                    v-model="f.postCode"
                    placeholder="1234567"
                    @change="searchAddress"
                  />
                </el-col>
                <el-col :span="12" style="width: 300px">
                  <p class="g-inputGroup_static" style="margin-top: 0px">
                    <a
                      class="g-link"
                      href="http://www.post.japanpost.jp/zipcode"
                      target="_blank"
                      ><span
                        class="material-symbols-outlined"
                        style="color: #009e96"
                      >
                        arrow_forward_ios
                      </span>
                      <span style="width: 300px">郵便番号を調べる</span></a
                    >
                  </p></el-col
                ></el-row
              >
              <el-col style="color: red; font-weight: 100">
                {{ f.error }}</el-col
              >
            </el-form-item>
            <el-form-item label="都道府県" prop="city">
              <el-input v-model="f.city" :disabled="true" />
            </el-form-item>
            <el-form-item label="市区町村" prop="village">
              <el-input v-model="f.village" :disabled="true" />
            </el-form-item>
            <el-form-item label="町名" prop="town">
              <el-input v-model="f.town" placeholder="北区新琴似七条" />
            </el-form-item>

            <el-form-item label="丁目番地" prop="streetname1">
              <el-row :gutter="5">
                <el-col :span="5">
                  <el-input v-model="f.streetname1" placeholder="1" />
                </el-col>
                <el-col class="text-center" :span="2">
                  <span class="text-gray-500">--</span>
                </el-col>
                <el-col :span="5">
                  <el-form-item prop="streetname2">
                    <el-input
                      v-model="f.streetname2"
                      style="margin-left: -30px"
                  /></el-form-item>
                </el-col>
                <el-col
                  class="text-center"
                  :span="2"
                  style="margin-left: -30px"
                >
                  <span class="text-gray-500">--</span>
                </el-col>
                <el-col :span="5">
                  <el-form-item prop="streetname3">
                    <el-input
                      v-model="f.streetname3"
                      style="margin-left: -30px"
                  /></el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="建物名称" prop="mansion">
              <el-input v-model="f.mansion" placeholder="ニトリビル" />
            </el-form-item>

            <el-form-item label="部屋番号" prop="roomNumber">
              <el-input v-model="f.roomNumber" placeholder="101" />
            </el-form-item>
            <el-form-item label="建物種別" prop="buildingType">
              <el-radio-group v-model="f.buildingType">
                <el-radio label="戸建て" />
                <el-radio label="集合住宅" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="エレベータ" prop="elevator">
              <el-radio-group v-model="f.elevator">
                <el-radio label="なし" />
                <el-radio label="あり" />
              </el-radio-group>
            </el-form-item>
            <el-form-item style="display: flex; justify-content: center">
              <el-button
                type="primary"
                @click="submitForm(ruleFormRef)"
                style="
                  border-color: #eb6157;
                  background-color: #eb6157;
                  width: 200px;
                  padding: 24px;
                "
                ><span style="color: #fff; font-size: 1.4rem">
                  変更する</span
                ></el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </el-main>

      <GDialog v-model="isShow2">
        <div class="modal">
          <div class="g-modal_el">
            <header class="g-modal_head">
              <p class="g-modal_h" id="p-messageModal_h">配送先を変更</p>
              <button
                @click="isShow2 = false"
                class="g-modal_close"
                type="button"
                aria-label="閉じる"
              >
                <span class="material-symbols-outlined" style="cursor: pointer">
                  close
                </span>
              </button>
            </header>
            <div class="g-modal_body">
              <p id="modalMessage">変更しました</p>
              <div class="button-delete-div"></div>
            </div>
          </div>
        </div>
      </GDialog>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import * as AutoKana from "vanilla-autokana";
import { reactive, ref, onMounted, nextTick, computed } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useStore } from "../../store/index";
// import { stubFalse } from "lodash";
const userId = 10011;
const store = useStore();
onMounted(() => {
  store.dispatch("setUpdate", userId);
});
const arr = computed(() => store.getters.getUpdateArray);
const formSize = ref("large");
const labelPosition = ref("left");
const ruleFormRef = ref<FormInstance>();
//delete module
const isShow01 = ref(false);
let autokana;
let autokana2;
/** 文字列内のひらがなをカタカナに変換します。 */
onMounted(async () => {
  await nextTick();
  autokana = AutoKana.bind("#name", "#furigana", { katakana: true });
  autokana2 = AutoKana.bind("#name2", "#furigana2", { katakana: true });
});
const ruleForm = reactive({
  isShow: false,
  workplace: "",
  name1: "孫",
  name2: "YIDAN",
  kana1: "ソン",
  kana2: "イーダン",
  telephonenumber1: "080",
  telephonenumber2: "4562",
  telephonenumber3: "7893",
  gender: "女",
  birthday: "1998年01月02日",
  postCode: "1240006",
  city: "111",
  village: "111",
  town: "堀切",
  number1: "",
  number2: "",
  number3: "",
  mansion: "",
  roomNumber: "",
  buildingType: "集合住宅",
  elevator: "なし",
  pass: "",
  checkPass: "",
  furigana: "ソン",
  furigana2: "イーダン",
  error: "",
  streetname1: "1",
  streetname2: "2",
  streetname3: "3",
});
const handleNameInput = () => {
  ruleForm.furigana = autokana.getFurigana();
  ruleForm.furigana2 = autokana2.getFurigana();
  console.log("autokana.getFurigana()", autokana.getFurigana());
};
const f = computed(() => store.getters.getFiltered);
const filterArr = (e) => {
  store.commit("filterArr", e.target.value);
};
const id = computed(() => store.getters.getIdd);
const deleteListName = (id: number) => {
  store.dispatch("deleteListName", { id, userId });
};
/** 文字列内のひらがなをカタカナに変換します。 */
// const hiraToKata = (str) => {
//   console.log("hiraToKata", hiraToKata(ruleForm.name1));
//   return str.replace(/[\u3041-\u3096]/g, (ch) =>
//     String.fromCharCode(ch.charCodeAt(0) + 0x60)
//   );
// };
// console.log("hiraToKata", hiraToKata(ruleForm.name1));
const headers = { Accept: "application/json" };
const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + ruleForm.postCode;
  const info = await fetch(url, { headers });
  const data = await info.json();
  if (data.status === 400) {
    //エラー時
    ruleForm.error = data.message;
  } else if (data.results === null) {
    ruleForm.error = "郵便番号から住所が見つかりませんでした。";
  } else {
    ruleForm.error = "";
    ruleForm.city = data.results[0].address1;
    ruleForm.village = data.results[0].address2;
    ruleForm.town = data.results[0].address3;
  }
};
//login module
let isShow2 = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // window.location.href = "http://localhost:8080/account/success";
      isShow2.value = true;

      store.dispatch("newAddress");
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
const rules = reactive<FormRules>({
  workplace: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 20, message: "20文字以内で入力してください。", trigger: "blur" },
  ],
  name1: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 10, message: "10文字以内で入力してください。", trigger: "blur" },
  ],
  name2: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    { max: 10, message: "10文字以内で入力してください。", trigger: "blur" },
  ],
  furigana: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    { max: 10, message: "10文字以内で入力してください。", trigger: "blur" },
  ],
  furigana2: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    { max: 10, message: "10文字以内で入力してください。", trigger: "blur" },
  ],
  telephonenumber1: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    {
      min: 2,
      max: 5,
      message: "2桁以上5桁以内の数字で入力してください。",
      trigger: "blur",
    },
  ],
  telephonenumber2: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    {
      min: 1,
      max: 4,
      message: "2桁以上5桁以内の数字で入力してください。",
      trigger: "blur",
    },
  ],
  telephonenumber3: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    {
      min: 3,
      max: 4,
      message: "2桁以上5桁以内の数字で入力してください。",
      trigger: "blur",
    },
  ],
  postCode: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "blur",
    },
    {
      message: "郵便番号は半角数字7文字で入力してください。",
      trigger: "blur",
    },
  ],
  town: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 10, message: "40文字以内で入力してください。", trigger: "blur" },
  ],
  streetname1: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 5, message: "5桁以内の数字で入力してください。", trigger: "blur" },
  ],
  streetname2: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 5, message: "5桁以内の数字で入力してください。", trigger: "blur" },
  ],
  streetname3: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 5, message: "5桁以内の数字で入力してください。", trigger: "blur" },
  ],
  mansion: [
    {
      required: false,
    },
    { max: 50, message: "50文字以内で入力してください。", trigger: "blur" },
  ],
  roomNumber: [
    {
      required: false,
    },
    {
      max: 5,
      message: "5文字以内の英数字で入力してください。",
      trigger: "blur",
    },
  ],
  buildingType: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
  ],
  elevator: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
  ],
});
</script>
<style scoped>
.blue {
  background-color: #e9f5f4;
  padding: 25px 20px 25px 0;
  margin-left: -20px;
  margin-top: -70px;
  width: 1080px;
}
.white {
  padding: 25px 20px 25px 0;
  margin-left: -20px;
  margin-top: -70px;
  width: 1080px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
.g-select select {
  width: 100%;
  height: 46px;
  padding: 0 39px 0 14px;
  vertical-align: bottom;
  border-width: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #009e96;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #fd7624 !important;
}
.el-radio__input.is-checked .el-radio__inner {
  background: #fd7624 !important;
  border-color: #fd7624 !important;
}

.common-layout {
  font-size: 16px;
  font-weight: bolder;
}
.el-form-item__label {
  height: 40px;
  line-height: 40px;
}
el-form-item {
  padding: 0px 0px 20px;
}
.el-form-item__error {
  padding-top: 2px;
  width: 120px;
}
.g-inputGroup_static:hover {
  text-decoration: underline;
}
.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;

  -webkit-font-smoothing: antialiased;
}
</style>
