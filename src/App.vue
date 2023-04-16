<template>
  <div>
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>

</style>
