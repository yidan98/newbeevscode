<template>
  <div class="g-layout_head">
    <h1>クレジットカードの変更・登録</h1>
    <div id="g-error_js" class="g-error veritrans-error" hidden="true">
      <p class="g-error_h">入力内容をご確認ください。</p>
      <ul class="g-list g-list-disc g-font-sm">
        <li id="veritrans_message"></li>
      </ul>
    </div>
  </div>
  <section class="g-block">
    <h2 class="g-h-2">新しいクレジットカードを登録</h2>
  </section>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item
      label="カード番号"
      prop="number"
      :rules="[
        { required: true, message: '入力必須項目です。' },
        { type: 'number', message: '数字で入力してください。' },
        {
          min: 14,
          max: 16,
          message: '14桁以上16桁以内の数字で入力してください。',
          trigger: 'blur',
        },
      ]"
    >
      <el-input v-model.number="form.number" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="有効期限" prop="monthAndYear">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-select-v2
            v-model="form.month"
            :options="options"
            placeholder="月
      "
          />
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-select v-model="form.year" placeholder="年">
              <el-option
                v-for="year in op"
                :key="year"
                :label="year.label"
                :value="year.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const formRef = ref<FormInstance>();
//获取最近十年的年份
const getYear = () => {
  let yearArr = [];

  for (
    let i = new Date().getFullYear();
    i < new Date().getFullYear() + 10;
    i++
  ) {
    yearArr.push({
      label: i.toString(),

      value: i.toString(),
    });
  }

  return yearArr;
};
const form = reactive({
  number: "",
  month: "",
  year: getYear(),
});
// const option = reactive([{ value: "this year", label: "2022" }]);
const op = form.year;

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const options = Array.from({ length: 12 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
const rules = reactive<FormRules>({
  monthAndYear: [
    {
      required: true,
      message: "Please select month",
      trigger: "change",
    },
  ],
});
</script>
<style scoped>
.g-layout_head {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}

.g-block {
  margin-top: 40px;
}
.g-h-2 {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
</style>
