<template>
  <div>
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style >
.animate__fadeIn{
  --animate-duration: 0.5s;
}
  .animate__fadeOut{
    --animate-duration: 0.5s;
  }
</style>
