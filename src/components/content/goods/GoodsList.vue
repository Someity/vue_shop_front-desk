<template>
  <div class="goods">
    <goods-listitem v-for=" item in goods" :key="item.length" :item="item" />
  </div>
</template>

<script>
import GoodsListitem from './GoodsListitem.vue'
export default {
  name: 'Goodslist',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },

  components: { GoodsListitem },

  directives: {},

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>