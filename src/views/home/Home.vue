<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control ref="tabcontrol2" v-show="rabshowback" class="tan-control1" :titles="['流行','新款','精选']" @Goodsclick="Goodsclick" />

    <b-scroll :probeType="3" :pullUpLoad="true" class="content" ref="scroll" @scroll="istopshow" @pullingUps="pullUpLoadgoods">
      <home-swiper :banners="banners" @showswiperimg="showswiperimg" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control ref="tabcontrol1" :titles="['流行','新款','精选']" @Goodsclick="Goodsclick" />
      <goods-list :goods="goods[currentType].list" />
    </b-scroll>
    <back-top @click.native="bancktop" v-show="isShowBack" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BScroll from 'components/common/bscroll/BScroll'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { backTopMixin } from 'common/mixin'
export default {
  name: 'Home',
  data() {
    return {
      // 轮播图
      banners: [],
      // 广告信息
      recommends: [],
      // 商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      // 当前数据类型
      currentType: 'pop',

      tanoffsettop: 0,
      rabshowback: false,
      scrollY: 0
    }
  },
  mixins: [backTopMixin],
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BScroll
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    this.getHomeGoods('pop')
  },
  // 进入页面触发
  activated() {
    this.$refs.scroll.backtop(0, this.scrollY, 0)
    this.$refs.scroll.refresh()
  },
  // 离开页面触发
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY()
  },
  methods: {
    /**
     * 事件相关
     */

    Goodsclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },

    istopshow(position) {
      this.isShowBack = -position.y > 1000
      this.rabshowback = -position.y > this.tanoffsettop
    },
    pullUpLoadgoods() {
      this.getHomeGoods(this.currentType)
    },
    showswiperimg() {
      this.tanoffsettop = this.$refs.tabcontrol1.$el.offsetTop
    },
    /**
     * 网络请求相关
     *
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const newpage = this.goods[type].page + 1
      getHomeGoods(type, newpage).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tan-control1 {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>