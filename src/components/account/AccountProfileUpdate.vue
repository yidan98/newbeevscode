<template>
  <div style="margin-left: 300px">
    <div class="g-layout_head">
      <h1>変更後メールアドレス入力</h1>
      <p class="g-lead">
        変更したいメールアドレスを入力のうえ、送信してください。
      </p>
      <p class="g-lead">
        ご入力いただいたメールアドレス宛にニトリネットから送信される確認メールをご確認ください。
      </p>
    </div>
    <div class="ziti">
      <el-form
        :label-position="labelPosition"
        ref="formRef"
        :rules="rules"
        :model="dynamicValidateForm"
        label-width="150px"
        class="demo-dynamic"
      >
        <el-form-item
          prop="email"
          label="メールアドレス"
          :rules="[
            {
              required: true,
              message: '入力必須項目です。',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'メールアドレスの形式が正しくありません。',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>

        <el-form-item prop="checkEmail" label="メールアドレス（確認用）">
          <el-input v-model="dynamicValidateForm.checkEmail" /> </el-form-item
      ></el-form>
      <el-form-item style="margin: 40px 70px">
        <a href="/account/profile">
          <el-button style="width: 200px; padding: 24px">戻る </el-button></a
        >

        <el-button
          type="primary"
          @click="submitForm(formRef)"
          style="width: 200px; padding: 24px; background-color: #eb6157"
          >送信する</el-button
        >
      </el-form-item>

      <section class="g-block">
        <ul class="g-list g-list-note g-unit">
          <li>
            ご利用キャリアのメールソフトによっては、ニトリネットからのメール（info@mail.nitori-net.jp)が、迷惑メールへ分類されている可能性や、受信拒否設定がされている可能性があります。メールが届かない場合は、以下のページの手順にて迷惑メールフォルダおよび設定をご確認ください。<br />メールが受信できない場合：<a
              class="g-link-u"
              href="https://www.nitori.co.jp/customersupport/faq/351/"
              target="_blank"
              >https://www.nitori.co.jp/customersupport/faq/351/</a
            >
          </li>
        </ul>
      </section>
    </div>
  </div>
  <footer class="g-footer g-full">
    <div class="g-footer_inner">
      <div class="g-align-tc g-font-sm">
        <p class="g-mt-5">
          <a class="g-link" href="https://www.nitori.co.jp" target="_blank"
            >企業サイト<i
              class="g-i g-i-blank"
              aria-label="新しいウィンドウで開きます"
            ></i
          ></a>
        </p>
        <div class="g-footer_copyright">
          <p>
            当ホームページに掲載されているあらゆる内容の無許可転載・転用を禁止します。
          </p>
          <p>
            すべての内容は日本の著作権法及び国際条約によって保護を受けています。
          </p>
          <p>Copyright NITORI All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const formRef = ref<FormInstance>();
const labelPosition = ref("left");
const dynamicValidateForm = reactive({
  email: "",
  checkEmail: "",
});
const validateEmail = (rule: any, value: any, callback: any) => {
  console.log("value", value);
  console.log("dynamicValidateForm.email", dynamicValidateForm.email);
  if (value === "") {
    callback(new Error("入力必須項目です。"));
  } else if (value !== dynamicValidateForm.email) {
    callback(new Error("入力されたメールアドレスが一致していません。"));
  } else {
    callback();
  }
};

const rules = reactive<FormRules>({
  checkEmail: [
    {
      validator: validateEmail,
      trigger: "blur",
    },
    {
      required: true,
      message: "メールアドレスを入力してください",
      trigger: "blur",
    },
    {
      type: "email",
      message: "正しいメールアドレスを入力してください",
      trigger: ["blur", "change"],
    },
  ],
});
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      window.location.href = "http://localhost:8080/account/success";
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
<style>
a {
  text-decoration: none;
}
.ziti {
  font-size: 1rem;
  font-weight: bolder;
}

.g-list-note,
.g-lg-list-note {
  font-size: 0.9rem;
  line-height: 1.58333;
  text-indent: -1em;
  color: #808080;
  font-weight: normal;
}
.g-layout_head {
  margin-bottom: 60px;
}
.g-block {
  margin-top: 60px;
}
.g-footer {
  margin-top: 60px;
  padding: 15px 0 20px;
  border-top: 4px solid #009e96;
  background-color: #f7f7f7;
}
.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
}
</style>
