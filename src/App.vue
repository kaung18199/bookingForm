<template>
  <div>
    <transition enter-active-class="animate__animated animate__backInLeft" leave-active-class="animate__animated animate__backInLeft">
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
