<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar/>
    <Content :info="info"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      info: null
    }
  },
  components: {
    Navbar,
    Content,
    Footer
  },
   mounted () {
    axios
      .get('https://covid19.mathdro.id/api/countries/mx/')
      .then(response => (this.info = response))
  }
}
</script>

