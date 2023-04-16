<template>
  <div>
    <div class=" p-5 grid grid-cols-3 text-center gap-3 animate__animated animate__flipInY ">
    <div class="" v-for="(time,index) in times" :key="index" @click="bookingTimeGet(time)"><p class=" px-4 py-2 border rounded-full cursor-pointer hover:bg-indigo-400 hover:animate-pulse shadow	 hover:text-white transition ease-in-out duration-700" :class=" bookingTime == time ? 'animate-pulse bg-indigo-400 text-white' : ''">{{ time }}</p></div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name : 'PmPart',
    data () {
      return {
        times : ['12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00'],
        bookingTime : ''
      }
    },
    methods: {
      ...mapActions({
        timeAction : 'timeAction'
      }),
      bookingTimeGet(time){
        console.log(time);
        this.bookingTime = time;
        this.timeAction(time);
      },
    }
  }
</script>

<style >
  
</style>