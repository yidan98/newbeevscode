<template>
  <div id="js-reviewList">
    <ul class="g-reviewList">
      <li class="g-reviewList_item" style="width: 300px">
        <div class="g-lg-flow-sm">
          <p class="g-score">
            <span style="display: inline-flex">
              <star-rating
                :starSize="20"
                :rating="review.rating"
                :read-only="true"
                :increment="0.01"
                :show-rating="false"
              ></star-rating>
              <p class="g-reviewList_user">
                <b>&emsp;{{ review.nickName }}</b
                >さん {{ review.reviewDate }}
              </p>
            </span>
          </p>
        </div>
        <p class="g-reviewList_info">購入商品:{{ review.goodsName }}</p>
        <h2 class="g-reviewList_h">{{ review.title }}</h2>
        <p>
          {{ review.content }}
        </p>
        <ul class="g-sm-flow-sm g-lg-flow g-reviewList_pics">
          <template v-if="review.photo1 !== null">
            <div>
              <viewer
                :images="images"
                @inited="inited"
                class="viewer"
                ref="viewer"
              >
                <template #default="scope">
                  <img
                    v-for="src in scope.images"
                    :src="src"
                    :key="src"
                    class="image"
                  />

                  {{ scope.options }}
                </template>
              </viewer>
            </div>
          </template>
        </ul>
        <p class="g-reviewList_like">
          <a
            ><i class="g-s g-s-like-g" aria-hidden="true"></i>

            <span class="useful" onclick="alert('你已经点过赞了')"
              ><img
                src="../../../src/assets/icons/thumb.svg"
                width="20"
                height="20"
                aria-hidden="true"
              />
              &emsp;参考になった（{{ review.count }}人）</span
            ></a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import "viewerjs/dist/viewer.css";
import { directive as viewer } from "v-viewer";

export default {
  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  props: {
    review: {
      rating: Number,
      nickName: Number,
      goodsName: String,
      count: Number,
      title: String,
      content: String,
      reviewDate: String,

      photo1: String,
      photo2: String,
      photo3: String,
      photo4: String,
      photo5: String,
    },
  },
  components: {
    StarRating,
  },
  data() {
    return {
      images: [this.photo1, this.photo2, this.photo3, this.photo4, this.photo5],
      isShow: false,
    };
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
    },
  },
};

window.alert = alert;

function alert(data) {
  var a = document.createElement("div"),
    p = document.createElement("p"),
    btn = document.createElement("div"),
    textNode = document.createTextNode(data ? data : ""),
    btnText = document.createTextNode("确定");

  // 控制样式

  css(a, {
    position: "fixed",

    left: "0",

    right: "0",

    top: "0",

    width: "300px",

    margin: "0 auto",

    "border-color": "#a8bb8d",
    "border-style": "solid",
    " color": " #009e96",
    background: "white",

    "font-size": "20px",

    "text-align": "center",
  });

  css(btn, {
    background: "#1b8873",
    cursor: "pointer",
    " color": "white",
  });

  // 内部结构套入

  p.appendChild(textNode);

  btn.appendChild(btnText);

  a.appendChild(p);

  a.appendChild(btn);

  // 整体显示到页面内

  document.getElementsByTagName("body")[0].appendChild(a);

  // 确定绑定点击事件删除标签

  btn.onclick = function () {
    a.parentNode.removeChild(a);
  };
}

function css(targetObj, cssObj) {
  var str = targetObj.getAttribute("style")
    ? targetObj.getAttribute("style")
    : "";

  for (var i in cssObj) {
    str += i + ":" + cssObj[i] + ";";
  }

  targetObj.style.cssText = str;
}
</script>

<style scoped>
#js-reviewList {
  margin: 0 0 15px;
  border-bottom: 1px dashed #dbdbdb;
  padding-bottom: 15px;
  list-style-type: none;
}
.g-reviewList {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.useful {
  cursor: pointer;
}
.g-reviewList_user {
  width: max-content;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.images {
  height: 100%;
}
.image {
  width: 100px;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}
</style>
