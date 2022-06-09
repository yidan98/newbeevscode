<template>
  <a
    class="goods-link"
    :href="link"
    @mouseover="show"
    @mouseleave="IsComment = false"
  >
    <div class="info discount">{{ tittle }}</div>
    <img :src="imgSrc" :alt="name" />
    <p class="name">{{ name }}</p>
    <p class="item_price">{{ price }}</p>
    <!-- <p class="counter">{{ counter }}</p> -->
    <!-- <p class="comment">{{comment}}</p>
    <div v-if="showComment" class="comment"></div>
    <div v-if="Iscomment" class="comment"></div> -->

    <transition name="slide-fade">
      <div v-if="IsComment" class="comment">
        <p>{{ comment }}</p>
      </div>
    </transition>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      IsComment: false,
    };
  },
  methods: {
    show() {
      if (this.comment) {
        this.IsComment = true;
      }
    },
  },
  props: {
    link: String,
    tittle: String,
    imgSrc: String,
    name: String,
    price: Number,
    counter: String,
    comment: String,
  },
});
</script>

<style>
.goods-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: none;
  text-decoration: none;
  color: #000;
}
.goods-link img {
  width: 160px;
  height: 160px;
  opacity: 0.8;
  margin: 37px;
}
.comment {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* transform: translateY(101%); */
  transition: transform 0.4s;
  box-sizing: border-box;
  height: 70px;
  padding: 10px 0 0 30px;
  background-color: #1baeae;
  color: #fff;
  text-align: left;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: -translateY(101%);
  opacity: 0;
}
</style>
