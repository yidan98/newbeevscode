<template>
  <div class="g-layout-narrow">
    <div class="g-layout_head">
      <h1>変更項目選択</h1>
      <p class="g-lead">
        メールアドレス、またはメールアドレス以外のご登録情報から変更したい項目を、以下から選択してください。
      </p>
    </div>
    <div class="g-layout_body g-layout_body-narrow" style="margin-top: 80px">
      <section class="g-block">
        <div class="g-foot-v g-mt-0">
          <p class="g-align-tc">
            <a class="g-btn g-btn-cv g-btn-w-md" href="/account/profile/update"
              ><span class="address">メールアドレスの変更</span></a
            >
          </p>
        </div>
      </section>
      <section class="g-block">
        <div class="g-foot-v g-mt-0">
          <p class="g-align-tc">
            <a class="g-btn g-btn-cv g-btn-w-md" href="/account/profile/edit"
              ><span class="address">メールアドレス以外の変更</span></a
            >
          </p>
        </div>
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
<script>
export default {};
</script>
<style scoped>
.g-footer {
  margin-top: 60px;
  padding: 15px 0 20px;
  border-top: 4px solid #009e96;
  background-color: #f7f7f7;
}
.address {
  border-color: #eb6157;
  background-color: #eb6157;
  width: 300px;
}
.address:hover {
  opacity: 0.7;
}
a {
  text-decoration: none;
}
.g-btn-cv,
.g-lg-btn-cv {
  border-color: #eb6157;
  background-color: #eb6157;
}
.g-btn-brand,
.g-btn-cv,
.g-btn-cancel,
.g-lg-btn-brand,
.g-lg-btn-cv,
.g-lg-btn-cancel {
  color: #fff;
}
.g-btn,
.g-lg-btn {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
}
.g-btn > span:only-child,
.g-lg-btn > span:only-child {
  padding: 5px 10px;
  transform: none;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
h1 + .g-lead,
h1 + .g-lg-lead {
  margin-top: 13.33333px;
}
.g-btn,
.g-lg-btn {
  font-size: 1.2rem;
  line-height: 1.5;
}
.g-layout_head {
  display: flex;
  flex-direction: column;

  margin-left: 300px;
}
</style>
