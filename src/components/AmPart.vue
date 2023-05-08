<template>
  <div>
    <div class=" p-5 grid grid-cols-3 text-center gap-3 animate__animated animate__flipInY ">
    <div class="" v-for="(time,index) in times" :key="index" @click="bookingTimeGet(time)"><p class="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base px-4 py-2 border rounded-full cursor-pointer hover:bg-orange-400  shadow	 hover:text-white transition ease-in-out duration-700" :class=" bookingTime == time ? ' bg-orange-400 text-white' : ''">{{ time }}</p></div>
  </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex"
  export default {
    name : 'AmPart',
    data () {
      return {
        times : ['24:30','1:00','1:30','2:00','2:30','3:00','3:30','4:00','4:30','5:00','5:30','6:00','6:30','7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00'],
        bookingTime : '',
      }
      
    },
    computed: {
      ...mapGetters({
        time : 'time'
      })
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
    },
    mounted () {
      this.bookingTime = this.time;
    }
  }
</script>

<style >
  .animate__animated {
    --animate-duration: 1s;
  }
</style>

