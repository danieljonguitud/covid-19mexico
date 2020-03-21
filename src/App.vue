<template>
  <div id="app">
    <Navbar/>
    <Content :info="info"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  data() {
    return {
      info: null
    }
  },
  components: {
    Navbar,
    Content
  },
   mounted () {
    axios
      .get('https://covid19.mathdro.id/api/countries/mx/')
      .then(response => (this.info = response))
  }
}
</script>

