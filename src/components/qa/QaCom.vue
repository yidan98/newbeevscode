<template>
  <div class="zv-cqa">
    <div class="zv-cqa-question">
      <span class="zv-cqa-q-text"
        ><h3>Q.{{ questionContents }}</h3>
      </span>
    </div>
    <div class="zv-cqa-q-info">
      <span class="zv-cqa-q-created-at">投稿日&nbsp;2022年05月06日</span>
    </div>
    <div class="zv-cqa-answers">
      <div class="zv-cqa-answer zv-cqa-answer-first">
        <div class="zv-cqa-a-content">
          <div class="zv-cqa-a-text">
            <span class="zv-space">
              <span id="afont"> A.</span>
              <span class="zv-p">{{ answerContents }}</span>
            </span>
          </div>

          <div class="zv-cqa-a-info">
            <span class="zv-space"></span>

            <span class="zv-cqa-a-created-at"
              >回答日&nbsp;{{ answerDate }}</span
            >
          </div>
          <div class="zv-helpful-form" data-answer-id="258700">
            <span class="zv-space"></span>
            <!-- <span class="zv-error-message" id="ZVLoginErrorHelpful-258700"
              >「参考になった/参考にならなかった」を投稿するにはログインが必要です。</span
            > -->
            <span class="zv-helpful-col">
              <span
                class="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-yes-258700"
                data-count="258700"
                data-clickable=""
                data-answer-id="258700"
              >
                <i class="zv-helpful zv-helpful-yes-i"></i>
                <span
                  class="useful"
                  data-count="258700"
                  id="ZVHelpfulYes-258700"
                  ><img
                    src="../../../src/assets/icons/thumb.svg"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  />&emsp;参考になった
                  <span
                    class="zv-helpful zv-helpful-num zv-helpful-yes-num zv-helpful-yes-num-258700"
                    data-count="258700"
                    id="ZVHelpfulYesNum-258700"
                    >({{ count }}人)</span
                  ></span
                >
              </span>
            </span>
          </div>
          <!-- <div class="zv-cqa-comment">
            <div class="zv-cqa-comment-actions">
              <p class="zv-error-message" id="ZVLoginErrorComment-258700">
                コメントを記入するにはログインが必要です。
              </p>
            </div>
            <div class="zv-cqa-comment-list-body zv-hide"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    questionContents: String,
    questionDate: String,
    answerContents: String,
    answerName: String,
    answerDate: String,
    count: Number,
  },
};
</script>
<style>
.zv-cqa {
  margin: 0 0 15px;
  border-bottom: 1px dashed #dbdbdb;
  padding-bottom: 15px;
}
.zv-cqa-question {
  padding: 15px 0 0;
}
#afont {
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.zv-cqa-q-reviewer,
.zv-cqa-q-created-at {
  font-size: 15px;
  margin-left: 10px;
  color: #555;
  position: relative;
  bottom: 23px;
}
.zv-cqa-a-created-at {
  font-size: 15px;
  margin-left: 10px;
  color: #555;
  position: relative;
  bottom: 8px;
}
.useful {
  cursor: pointer;
}
.useful:hover {
  text-decoration: underline;
}
</style>
