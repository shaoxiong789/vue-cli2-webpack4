<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
  import MySelect from 'components/MySelect.vue'; 
  export default {
    name: 'App',
    components: {
      MySelect
    }
  };
</script>

<style>
  .wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
  }
</style>

