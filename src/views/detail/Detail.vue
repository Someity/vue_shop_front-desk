<template>
  <div id="detail">
    <detail-navbar ref="nav" class="detail-navbar" @itemClick="itemClick" />
    <b-scroll :probeType="3" class="center" ref="scroll" @scroll="scroll">
      <detail-swiper :topImages="topImages" />
      <datail-base-info :goods="goods" />
      <!-- 商家信息 -->
      <detail-shop-info :shop="shop" />
      <detail-goods-info @imageLoad="imageLoad" :detail-info="detailInfo" />
      <detail-params-info :param-info="paramInfo" ref="params" />
      <!-- 商品评论 -->
      <detail-comment-info v-if="commentInfo" :commentInfo="commentInfo" ref="comment" />
      <!-- 推荐商品 -->
      <goods-list :goods="recommend" ref="recommend" />
    </b-scroll>

    <detail-bottom-bar />
    <back-top @click.native="bancktop" v-show="isShowBack" />
  </div>
</template>

<script>
import DetailNavbar from './childComps/DetailNavbar'
import DetailSwiper from './childComps/DetailSwiper'
import DatailBaseInfo from './childComps/DataBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import GoodsList from 'components/content/goods/GoodsList.vue'
import BScroll from 'components/common/bscroll/BScroll'

import { backTopMixin } from 'common/mixin'

import { getDetail, GoodInfo, Shop, GoodsParam, getRecommend } from 'network/detail'
export default {
  name: 'Detail',
  components: {
    DetailBottomBar,
    GoodsList,
    DetailParamsInfo,
    DetailGoodsInfo,
    BScroll,
    DetailNavbar,
    DetailSwiper,
    DatailBaseInfo,
    DetailShopInfo,
    DetailCommentInfo
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      itemtop: [],
      currentIndex: 0
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new GoodInfo(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
      // DOM渲染了但是图片还是没有出来
      // this.$nextTick(() => {
      //   this.itemtop.push('0')
      //   this.itemtop.push(this.$refs.params.$el.offsetTop)
      //   this.itemtop.push(this.$refs.comment.$el.offsetTop)
      //   this.itemtop.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.itemtop)
      // })
    })
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  methods: {
    imageLoad() {
      console.log('---')
      this.itemtop.push('0')
      this.itemtop.push(this.$refs.params.$el.offsetTop)
      this.itemtop.push(this.$refs.comment.$el.offsetTop)
      this.itemtop.push(this.$refs.recommend.$el.offsetTop)
      this.itemtop.push(Number.MAX_VALUE)
    },
    itemClick(index) {
      this.itemindex = index
      this.$refs.scroll.backtop(0, -this.itemtop[index])
    },
    scroll(position) {
      this.isShowBack = -position.y > 1000
      // console.log(position)
      const positionY = -position.y
      // console.log(position)
      let length = this.itemtop.length // 4

      // for 循环四次
      for (let i = 0; i < length - 1; i++) {
        // i 小于 3
        // 并且实时的Y值 >= 已经获取的Y值
        // 并且实时的Y值 < 获取到的Y值+I（循环一次加一）
        //
        // console.log(positionY , this.themeTopYs[1],'第一');
        // console.log(positionY , this.themeTopYs[2],'第二');
        // console.log(positionY , this.themeTopYs[3],'第三');
        //  console.log(i < length - 1 , i);

        // if (
        //   this.currentIndex !== i && // 防止赋值过于频繁
        //   ((i < length - 1 && positionY >= this.itemtop[i] && positionY < this.itemtop[i + 1]) || (i === length - 1 && positionY >= this.itemtop[i]))
        // ) {
        //   console.log(i)
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex = i
        //   // console.log(this.currentIndex);
        // }
        if (this.creeentIndex !== i && positionY >= this.itemtop[i] && positionY < this.itemtop[i + 1]) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex = i
        }
      }
    }
  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-navbar {
  position: relative;
  z-index: 9;
  top: 0;
  left: 0;
  background-color: #fff;
}
.center {
  height: calc(100% - 44px - 49px);
}
</style>