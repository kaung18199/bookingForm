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
        times : ['1:00 pm','1:30 pm','2:00 pm','2:30 pm','3:00 pm','3:30 pm','4:00 pm','4:30 pm','5:00 pm','5:30 pm','6:00 pm','6:30 pm','7:00 pm','7:30 pm','8:00 pm','8:30 pm','9:00 pm','9:30 pm','10:00 pm','10:30 pm','11:00 pm','11:30 pm','12:00 pm','12:30 pm'],
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
  .animate__animated {
    --animate-duration: 2s;
  }
</style>