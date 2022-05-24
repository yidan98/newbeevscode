<template>
  <div id="js-reviewList">
    <ul class="g-reviewList">
      <li class="g-reviewList_item" style="width: 300px">
        <div class="g-lg-flow-sm">
          <p class="g-score">
            <span>
              <star-rating
                :starSize="20"
                :rating="review.rating"
                :read-only="true"
                :increment="0.01"
              ></star-rating>
              <p class="g-reviewList_user">
                <b>{{ review.nickName }}</b
                >さん &emsp;{{ review.reviewDate }}
              </p>
            </span>
          </p>
        </div>
        <p class="g-reviewList_info">購入商品:{{ review.goodsName }}</p>
        <h2 class="g-reviewList_h">{{ review.title }}</h2>
        <p>
          {{ review.content }}
        </p>
        <p class="g-reviewList_like">
          <a
            class="g-link reviewLike0"
            id="js-hitLike"
            data-count="0"
            data="626fd36d2e90a2006100013d"
            data-clickable=""
            ><i class="g-s g-s-like-g" aria-hidden="true"></i
            ><span>参考になった（{{ review.count }}人）</span></a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  props: {
    review: {
      rating: Number,
      nickName: Number,
      goodsName: String,
      count: Number,
      title: String,
      content: String,
      reviewDate: String,
    },
  },
  components: {
    StarRating,
  },
};
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
</style>
