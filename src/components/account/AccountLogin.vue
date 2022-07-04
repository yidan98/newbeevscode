<template>
  <div class="common-layout">
    <el-container>
      <el-header><h1>配送先住所の変更・登録</h1></el-header>
      <div
        style="background-color: #e9f5f4; padding: 25px 20px 25px 0"
        @click="ruleForm.isShow = !ruleForm.isShow"
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
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="名称" prop="workplace">
            <!-- 「転居先（地名）」、「勤務先」など認識しやすい名称を入力してください。
      「自宅」は会員情報で設定済みのため、入力できません。 -->

            <el-input
              v-model="ruleForm.workplace"
              placeholder="転居先（地名）"
            />
          </el-form-item>

          <el-form-item label="氏名" prop="name1">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input
                  v-model="ruleForm.name1"
                  label="First Name"
                  placeholder="姓"
                />
              </el-col>
              <el-col :span="12" prop="name2">
                <el-form-item prop="name2">
                  <el-input
                    v-model="ruleForm.name2"
                    label="Last Name"
                    placeholder="名"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="氏名(カナ)" prop="kana1">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input
                  v-model="ruleForm.name1"
                  label="First Name"
                  placeholder="セイ"
                />
              </el-col>
              <el-col :span="12">
                <el-form-item prop="kana2">
                  <el-input
                    v-model="ruleForm.name2"
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
            prop="fax"
            style="display: flex; width: 400px"
            ><el-row :gutter="20">
              <el-col :span="12"
                ><el-input v-model="ruleForm.fax" placeholder="1234567" />
              </el-col>
              <el-col :span="12">
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
          </el-form-item>
          <el-form-item label="都道府県" prop="workplace">
            <el-input :disabled="true" />
          </el-form-item>
          <el-form-item label="市区町村" prop="workplace">
            <el-input :disabled="true" />
          </el-form-item>
          <el-form-item label="町名" prop="region">
            <el-input v-model="ruleForm.region" placeholder="北区新琴似七条" />
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
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >登録する</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
// import { stubFalse } from "lodash";

const formSize = ref("large");
const labelPosition = ref("left");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  isShow: true,
  workplace: "",
  name1: "",
  name2: "",
  kana1: "",
  kana2: "",
  telephonenumber1: "",
  telephonenumber2: "",
  telephonenumber3: "",
  fax: "",
  region: "",
  number1: "",
  number2: "",
  number3: "",
  mansion: "",
  roomNumber: "",
  buildingType: "",
  elevator: "",
});

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
  kana1: [
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
  fax: [
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
  region: [
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

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
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
