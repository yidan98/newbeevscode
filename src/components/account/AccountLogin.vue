<template>
  <div class="common-layout">
    <el-container>
      <el-header><h1>配送先住所の変更・登録</h1></el-header>
      <div
        @click="ruleForm.isShow = !ruleForm.isShow"
        :class="ruleForm.isShow ? 'blue' : 'white'"
      >
        <label>
          <input type="radio" />
        </label>
        <label>&nbsp;新しい配送先住所を登録</label>
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
          <el-form-item label="名称" prop="listName">
            <!-- 「転居先（地名）」、「勤務先」など認識しやすい名称を入力してください。
      「自宅」は会員情報で設定済みのため、入力できません。 -->

            <el-input
              v-model="ruleForm.listName"
              placeholder="転居先（地名）"
            />
          </el-form-item>

          <el-form-item label="氏名" prop="name1">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input
                  @input="handleNameInput"
                  id="name"
                  v-model="ruleForm.name1"
                  label="First Name"
                  placeholder="姓"
                />
              </el-col>
              <el-col :span="12" prop="name2">
                <el-form-item prop="name2">
                  <el-input
                    id="name2"
                    @input="handleNameInput"
                    v-model="ruleForm.name2"
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
                  v-model="ruleForm.furigana"
                  label="First Name"
                  placeholder="セイ"
                />
              </el-col>
              <el-col :span="12">
                <el-form-item prop="furigana2">
                  <el-input
                    id="furigana2"
                    v-model="ruleForm.furigana2"
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
                <el-input
                  v-model="ruleForm.telephonenumber1"
                  placeholder="03"
                />
              </el-col>
              <el-col class="text-center" :span="2">
                <span class="text-gray-500">--</span>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="telephonenumber2">
                  <el-input
                    v-model="ruleForm.telephonenumber2"
                    placeholder="0000"
                    style="margin-left: -30px"
                /></el-form-item>
              </el-col>
              <el-col class="text-center" :span="2" style="margin-left: -30px">
                <span class="text-gray-500">--</span>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="telephonenumber3">
                  <el-input
                    v-model="ruleForm.telephonenumber3"
                    placeholder="0000"
                    style="margin-left: -30px"
                /></el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="電話番号2">
            <el-row :gutter="5">
              <el-col :span="5">
                <el-input
                  v-model="ruleForm.telephonenumber1"
                  placeholder="03"
                />
              </el-col>
              <el-col class="text-center" :span="2">
                <span class="text-gray-500">--</span>
              </el-col>
              <el-col :span="5">
                <el-input
                  v-model="ruleForm.telephonenumber2"
                  placeholder="0000"
                  style="margin-left: -30px"
                />
              </el-col>
              <el-col class="text-center" :span="2" style="margin-left: -30px">
                <span class="text-gray-500">--</span>
              </el-col>
              <el-col :span="5">
                <el-input
                  v-model="ruleForm.telephonenumber3"
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
                  v-model="ruleForm.postCode"
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
              {{ ruleForm.error }}</el-col
            >
          </el-form-item>
          <el-form-item label="都道府県">
            <el-input v-model="ruleForm.city" :disabled="true" />
          </el-form-item>
          <el-form-item label="市区町村">
            <el-input v-model="ruleForm.village" :disabled="true" />
          </el-form-item>
          <el-form-item label="町名" prop="town">
            <el-input v-model="ruleForm.town" placeholder="北区新琴似七条" />
          </el-form-item>

          <el-form-item label="丁目番地" prop="number1">
            <el-row :gutter="5">
              <el-col :span="5">
                <el-input v-model="ruleForm.number1" placeholder="1" />
              </el-col>
              <el-col class="text-center" :span="2">
                <span class="text-gray-500">--</span>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="number2">
                  <el-input
                    v-model="ruleForm.number2"
                    style="margin-left: -30px"
                /></el-form-item>
              </el-col>
              <el-col class="text-center" :span="2" style="margin-left: -30px">
                <span class="text-gray-500">--</span>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="number3">
                  <el-input
                    v-model="ruleForm.number3"
                    style="margin-left: -30px"
                /></el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="建物名称" prop="mansion">
            <el-input v-model="ruleForm.mansion" placeholder="ニトリビル" />
          </el-form-item>

          <el-form-item label="部屋番号" prop="roomNumber">
            <el-input v-model="ruleForm.roomNumber" placeholder="101" />
          </el-form-item>
          <el-form-item label="建物種別" prop="buildingType">
            <el-radio-group v-model="ruleForm.buildingType">
              <el-radio label="戸建て" />
              <el-radio label="集合住宅" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="エレベータ" prop="elevator">
            <el-radio-group v-model="ruleForm.elevator">
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
                登録する~</span
              ></el-button
            >
          </el-form-item>
        </el-form>
      </el-main>

      <el-main><AccountLogin2></AccountLogin2></el-main>

      <GDialog v-model="isShow01">
        <div class="modal">
          <div class="g-modal_el">
            <header class="g-modal_head">
              <p class="g-modal_h" id="p-messageModal_h">配送先を登録</p>
              <button
                @click="isShow01 = false"
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
              <p id="modalMessage">登録しました</p>
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
import { reactive, ref, onMounted, nextTick } from "vue";
import { FormInstance, FormRules } from "element-plus";
import AccountLogin2 from "./AccountLogin2.vue";
import { useStore } from "../../store/index";
// import { stubFalse } from "lodash";

const formSize = ref("large");
const labelPosition = ref("left");

const ruleFormRef = ref<FormInstance>();
let autokana;
let autokana2;
/** 文字列内のひらがなをカタカナに変換します。 */
onMounted(async () => {
  await nextTick();
  autokana = AutoKana.bind("#name", "#furigana", { katakana: true });
  autokana2 = AutoKana.bind("#name2", "#furigana2", { katakana: true });
});

const ruleForm = reactive({
  isShow: true,
  workplace: "",
  listName: "",
  nameKANA1: "",
  nameKANA2: "",
  userId: 10011,

  email: "syd@gmail.com",
  gender: "",
  name1: "",
  name2: "",
  kana1: "",
  kana2: "",
  telephonenumber1: "",
  telephonenumber2: "",
  telephonenumber3: "",
  postCode: "",
  city: "",
  village: "",
  town: "",

  number1: "",
  number2: "",
  number3: "",
  mansion: "",
  roomNumber: "",
  buildingType: "",
  elevator: "",
  furigana: "",
  furigana2: "",
  error: "",
  date: new Date(),
});
let isShow01 = ref(false);
//邮编 自动索引
const handleNameInput = () => {
  ruleForm.furigana = autokana.getFurigana();
  ruleForm.furigana2 = autokana2.getFurigana();
  console.log("autokana.getFurigana()", autokana.getFurigana());
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
const rules = reactive<FormRules>({
  workplace: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 20, message: "20文字以内で入力してください。", trigger: "blur" },
  ],
  listName: [
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
  number1: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 5, message: "5桁以内の数字で入力してください。", trigger: "blur" },
  ],
  number2: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
    { max: 5, message: "5桁以内の数字で入力してください。", trigger: "blur" },
  ],
  number3: [
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
// const userId = 10011;
const store = useStore();
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // window.location.href = "http://localhost:8080/account/success";
      isShow01.value = true;
      console.log("ruleForm", ruleForm);

      store.dispatch("addAddress", ruleForm);

      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.resetFields();
// };

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }));
</script>
<style scoped>
.blue {
  background-color: #e9f5f4;
  padding: 25px 20px 25px 0;
  width: 1080px;
}
.white {
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 25px 20px 25px 0;
  width: 1080px;
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
