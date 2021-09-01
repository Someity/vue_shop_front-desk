<template>
  <div class="swiper-container">
    <swiper class="swiper-wrapper" ref="mySwiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="item in topImages" :key="item.id">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        // 自动播放
        // loop: true,
        autoplay: true,
        speed: 300,
        //如果设置为true,当切换到最后一个slide时停止自动切换。
        autoplayDisableOnInteraction: false,
        // 显示分页
        pagination: {
          // 分页器样式
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 300px;
}

.swiper-slide img {
  width: 100%;
}
</style>