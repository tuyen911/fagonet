<template>
  <ContentHome/>
  <Slider/>
  <ContentServices/>
  <ContentSolution/>
</template>

<script>
import ContentHome from './ContentHome.vue'
import Slider from './Slider.vue'
import ContentServices from './ContentServices.vue'
import ContentSolution from './ContentSolution.vue'
export default {
    name: 'Home',
    components: {
       ContentHome, Slider, ContentServices, ContentSolution
    }
}
</script>

<style>

</style>