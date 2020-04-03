<template>
  <div>
    outter: {{ getNum }}<br>
    outter 获取的 num : {{getNum}}<br>
    <button @click="odecrease">outter decrease</button><br>
    <button @click="oincreaseAction">outter increaseAction</button>
  </div>
</template>

<script>
export default {
  name: 'outter',
  computed: {
    getNum: function(){
      return this.$store.state.num
    }
  },
  methods: {
    odecrease: function(){
      this.$store.commit('decrease')
    },
    oincreaseAction: function(){
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