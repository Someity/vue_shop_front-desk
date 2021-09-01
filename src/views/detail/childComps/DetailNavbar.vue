<template>
  <div id="Detailnavbar">
    <nav-bar>
      <div slot="left" class="leftimg" @click="goback">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div @click="itemClick(index)" :class="{active : index == currentIndex }" class="title-item" v-for="(item,index) in titles" :key="index">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Detailnavbar',

  components: { NavBar },

  directives: {},

  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },

  mounted() {},

  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    },
    goback() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 15px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.leftimg img {
  vertical-align: middle;
}
</style>