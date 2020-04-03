<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Parent2/>
    <outter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Parent2 from './components/parent2'
import Son2 from './components/son2'
import outter from './components/outter'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Parent2,
    outter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
