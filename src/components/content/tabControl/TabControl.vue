<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active : index === currentIndex}" @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabcontrol',
  props: {
    titles: {
      type: Array,
      // 当默认值是一个对象或者数组是 default必须是个函数
      default() {
        return []
      }
    }
  },
  components: {},

  directives: {},

  data() {
    return {
      currentIndex: 0
    }
  },

  mounted() {},

  methods: {
    itemclick(index) {
      this.currentIndex = index
      this.$emit('Goodsclick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>