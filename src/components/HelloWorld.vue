<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    这里是 helloworld 获取的 num : {{getNum}}
    <button @click="hadd">helloworld add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    hadd: function(){
      this.$store.commit('increase')
    }
  },
  computed: {
    getNum: function(){
      return this.$store.state.num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
