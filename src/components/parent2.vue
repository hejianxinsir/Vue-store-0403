<template>
  <div>
    <p>我是parent2</p>
    <Son2 :msg="toSon" @handle="getFromSon"></Son2><br>
    这里是来自子组件的信息: {{fromSon}}<br>
    这是 store 里的 num : {{getNum}}<br>
    <button @click="padd">parent add</button><br>
    <button @click="paddaction">decreaseAction</button>
  </div>
</template>

<script>
import Son2 from './son2'

export default {
  name: 'parent2',
  data: function(){
    return {
      toSon: '1000 元',
      fromSon: ''
    }
  },
  components: {
    Son2
  },
  methods: {
    getFromSon: function(value){
      this.fromSon = value
    },
    padd(){
      this.$store.commit('increase')
    },
    paddaction(){
      this.$store.dispatch('decreaseAction')
    }
  },
  computed: {
    getNum: function(){
      // return this.$store.state.num
      return this.$store.getters.getNum
    }
  }
}
</script>

<style scoped>

</style>