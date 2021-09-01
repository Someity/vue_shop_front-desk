<template>
  <div ref="scroll" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveImage from '@better-scroll/observe-image'
BScroll.use(ObserveImage)
BScroll.use(Pullup)
export default {
  name: 'BScroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      click: true,
      observeImage: true
    })
    if (this.probeType === 3 || this.probeType === 2) {
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
        // console.log(position)
      })
    }

    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUps')
      })
    }
  },
  methods: {
    backtop(x, y, time = 300) {
      //  && 逻辑与 前面为true才执行后面的
      console.log('---')
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY() {
      this.scroll ? this.scroll.scrollY : 0
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
</style>