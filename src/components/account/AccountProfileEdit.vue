<template>
  <div class="common-layout" style="margin-left: 50px">
    <el-container>
      <el-header><h1>お客様情報の確認・変更</h1></el-header>
      <p class="g-align-tr">
        <b class="g-sm-display-b">最終ログイン：</b>
        <span style="font-weight: 100"> 2022/07/05 08:31:27</span>
      </p>
      <div class="g-pane g-pane-border g-pane-sm g-unit">
        <dl class="g-flex-h g-flex-wrap">
          <div style="display: flex">
            <div>
              <dt class="g-weight-b g-mr-30" id="p-mag">メールマガジン</dt>
            </div>
            <div>
              <dd style="font-weight: 100">
                <label class="g-checkable">
                  <input
                    type="checkbox"
                    name="emailMagazineDeliveryPreference"
                    value="1"
                    aria-labelledby="p-mag"
                  />
                  <span
                    ><i
                      class="g-s g-s-checkbox2-on g-checkable_on"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="g-s g-s-checkbox2-off g-checkable_off"
                      aria-hidden="true"
                    ></i
                    ><span class="g-checkable_label">配信を希望する</span></span
                  >
                </label>
              </dd>
            </div>
          </div>
          <dd class="g-fw g-unit" style="font-weight: 100; margin-left: -1px">
            お得なキャンペーンや新製品情報などをお届けします。
          </dd>
        </dl>
      </div>

      <el-main>
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
          <el-form-item label="会員種別">
            <el-col>個人</el-col>
          </el-form-item>

          <el-form-item label="氏名" prop="name1">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input
                  @input="handleNameInput"
                  id="name"
                  v-model="p.name1"
                  label="First Name"
                  placeholder="姓"
                />
              </el-col>
              <p style="margin-top: -2px">{{ p.name2 }}</p>
            </el-row>
          </el-form-item>
          <el-form-item label="氏名(カナ)" prop="furigana">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input
                  id="furigana"
                  v-model="p.nameKANA1"
                  label="First Name"
                  placeholder="セイ"
                />
              </el-col>
              <p style="margin-top: -0.4px">{{ p.nameKANA2 }}</p>
            </el-row>
          </el-form-item>

          <el-form-item
            label="電話番号1"
            prop="telephonenumber1"
            style="padding: 0px 0px 20px 0px"
          >
            <el-row :gutter="5">
              <el-col :span="5">
                <el-input v-model="p.telephonenumber1" placeholder="03" />
              </el-col>
              <el-col class="text-center" :span="2">
                <span class="text-gray-500">--</span>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="telephonenumber2">
                  <el-input
                    v-model="p.telephonenumber2"
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
                    v-model="p.telephonenumber3"
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
          <el-form-item label="性別" prop="gender">
            <el-radio-group v-model="p.gender">
              <el-radio label="男" />
              <el-radio label="女" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生年月日" prop="workplace">
            <el-col>{{ p.birthday }}</el-col>
          </el-form-item>

          <el-form-item
            label="郵便番号"
            prop="postCode"
            style="display: flex; width: 400px"
            ><el-row :gutter="20">
              <el-col :span="12"
                ><el-input
                  v-model="p.postCode"
                  placeholder="1234567"
                  @change="searchAddress"
                />
              </el-col>
              <el-col :span="12" style="width: 300px">
                <p
                  class="g-inputGroup_static"
                  style="margin-top: 0px; width: 300px"
                >
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
          <el-form-item label="都道府県" prop="city">
            <el-input v-model="p.city" :disabled="true" />
          </el-form-item>
          <el-form-item label="市区町村" prop="village">
            <el-input v-model="p.village" :disabled="true" />
          </el-form-item>
          <el-form-item label="町名" prop="town">
            <el-input v-model="p.town" placeholder="北区新琴似七条" />
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
            <el-radio-group v-model="p.buildingType">
              <el-radio label="戸建て" />
              <el-radio label="集合住宅" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="エレベータ" prop="elevator">
            <el-radio-group v-model="p.elevator">
              <el-radio label="なし" />
              <el-radio label="あり" />
            </el-radio-group>
          </el-form-item>
          <h1>パスワード変更</h1>

          <el-form-item label="新しいパスワード" prop="pass">
            <el-input
              show-password
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="新しいパスワード（確認用）" prop="checkPass">
            <el-input
              show-password
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <el-form-item style="display: flex; justify-content: center">
          <el-button
            type="primary"
            @click="submitForm(ruleFormRef)"
            style="
              border-color: #eb6157;
              background-color: #eb6157;
              width: 200px;
              padding: 24px;
              margin-top: 30px;
            "
            ><span style="color: #fff; font-size: 1.4rem">
              登録する</span
            ></el-button
          >
        </el-form-item></el-footer
      >
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import * as AutoKana from "vanilla-autokana";
import { reactive, ref, onMounted, nextTick, computed } from "vue";
import { useStore } from "../../store/index";
import type { FormInstance } from "element-plus";
// import { stubFalse } from "lodash";

const userId = 10011;
const store = useStore();
onMounted(() => {
  store.dispatch("setUpdateAccount", userId);
});
const p = computed(() => store.getters.getUpdateAccount);
const formSize = ref("large");
const labelPosition = ref("left");
const ruleFormRef = ref<FormInstance>();
const headers = { Accept: "application/json" };
const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + p.value.postCode;
  const info = await fetch(url, { headers });
  const data = await info.json();
  if (data.status === 400) {
    //エラー時
    ruleForm.error = data.message;
  } else if (data.results === null) {
    ruleForm.error = "郵便番号から住所が見つかりませんでした。";
  } else {
    ruleForm.error = "";
    p.value.city = data.results[0].address1;
    p.value.village = data.results[0].address2;
    p.value.town = data.results[0].address3;
  }
};

let autokana;
onMounted(async () => {
  await nextTick();
  autokana = AutoKana.bind("#name", "#furigana", { katakana: true });
});
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("半角英数字組合せ8～20文字で入力してください。"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("半角英数字組合せ8～20文字で入力してください。"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("入力されたパスワードが一致していません。"));
  } else {
    callback();
  }
};
const ruleForm = reactive({
  workplace: "",
  name1: "孫",
  name2: "",
  kana1: "ソン",
  kana2: "",
  telephonenumber1: "",
  telephonenumber2: "",
  telephonenumber3: "",
  postCode: "",
  town: "",
  number1: "",
  number2: "",
  number3: "",
  mansion: "",
  roomNumber: "",
  buildingType: "",
  elevator: "",
  pass: "",
  checkPass: "",
  furigana: "ソン",
  error: "",
});

const handleNameInput = () => {
  ruleForm.furigana = autokana.getFurigana();
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
const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
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
  kana2: [
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
      trigger: ["change", "blur"],
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
  gender: [
    {
      required: true,

      message: "入力必須項目です。",
      trigger: "blur",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      window.location.href = "http://localhost:8080/account/success";
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
.g-pane-border,
.g-lg-pane-border {
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
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
.g-unit,
.g-lg-unit {
  margin-top: 15px !important;
}
.g-align-tr,
.g-lg-align-tr {
  text-align: right !important;
}
.g-pane-sm,
.g-lg-pane-sm {
  padding: 20px;
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
