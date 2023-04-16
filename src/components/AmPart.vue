<template>
  <div>
    <div class=" p-5 grid grid-cols-3 text-center gap-3 animate__animated animate__flipInY ">
    <div class="" v-for="(time,index) in times" :key="index" @click="bookingTimeGet(time)"><p class=" px-4 py-2 border rounded-full cursor-pointer hover:bg-indigo-400 hover:animate-pulse shadow	 hover:text-white transition ease-in-out duration-700" :class=" bookingTime == time ? 'animate-pulse bg-indigo-400 text-white' : ''">{{ time }}</p></div>
  </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
  export default {
    name : 'AmPart',
    data () {
      return {
        times : ['1:00 am','1:30 am','2:00 am','2:30 am','3:00 am','3:30 am','4:00 am','4:30 am','5:00 am','5:30 am','6:00 am','6:30 am','7:00 am','7:30 am','8:00 am','8:30 am','9:00 am','9:30 am','10:00 am','10:30 am','11:00 am','11:30 am','12:00 am','12:30 am'],
        bookingTime : '',
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

