<template>
  <div>
    <p>我是 Son2 </p>
    来自父组件的信息是: {{msg}}<br>
    <button @click="toFather">给父组件</button><br>
    这里是 son2 获取的 num 数据: {{getNum}}<br>
    <button @click="sincreaseAction">son increaseAction</button>
  </div>
</template>

<script>
export default {
  name: 'son2',
  data: function(){
    return {
      toFath: '10000 元'
    }
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    toFather: function(){
      this.$emit('handle', this.toFath)
    },
    sincreaseAction: function(){
      this.$store.dispatch('increaseAction')
    }
  },
  computed: {
    getNum: function(){
      return this.$store.getters.getNum
    }
  }
}
</script>

<style scoped>

</style>