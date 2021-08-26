<template>
  <div class="recommendPage">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" @load="imgload" />
        </a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showimg: false,
      swiperOption: {
        // 自动播放
        loop: true,
        autoplay: {
          // 间隔播放时间
          delay: 3000,
          //如果设置为true,当切换到最后一个slide时停止自动切换。
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          // 分页器样式
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    imgload() {
      if (!this.showimg) {
        this.$emit('showswiperimg')
        this.showimg = true
      }
    }
  },
  mouted() {
    this.swiper.slideTo(4, 1000, false)
  }
}
</script>

<style scoped>
.recommendPage {
  position: relative;
  width: 100%;
}
.recommendPage .swiper-slide {
  width: 100%;

  color: #000;
  font-size: 16px;
  text-align: center;
}
.swiper-slide img {
  width: 100%;
}
</style>