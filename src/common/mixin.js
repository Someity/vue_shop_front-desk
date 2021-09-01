import BackTop from 'components/content/backtop/BackTop.vue'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBack: false
    }
  },
  methods: {
    bancktop() {
      this.$refs.scroll.backtop(0, 0)
    }
  }
}
