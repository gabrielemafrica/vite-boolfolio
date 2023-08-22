<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  },
}
</script>

<template>

  <AppHeader />
  <router-view></router-view>
  <AppFooter id="footer"/>

</template>

<style lang="scss">
@use './styles/general.scss' as *;


#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0; 
}
</style>
