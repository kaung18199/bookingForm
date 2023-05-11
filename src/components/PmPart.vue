<template>
  <div>
    <div class=" p-5 grid grid-cols-3 text-center gap-3 animate__animated animate__flipInY ">
    <div class="" v-for="(time,index) in times" :key="index" @click="bookingTimeGet(time)"><p class=" text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base px-2 md:px-4 py-2 border rounded-full cursor-pointer hover:bg-orange-400  shadow	 hover:text-white transition ease-in-out duration-700" :class=" bookingTime == time ? ' bg-orange-400 text-white' : ''">{{ time }}</p></div>
  </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
  export default {
    name : 'PmPart',
    data () {
      return {
        times : ['12:30 pm','1:00 pm','1:30 pm','2:00 pm','2:30 pm','3:00 pm','3:30 pm','4:00 pm','4:30 pm','5:00 pm','5:30 pm','6:00 pm','6:30 pm','7:00 pm','7:30 pm','8:00 pm','8:30 pm','9:00 pm','9:30 pm','10:00 pm','10:30 pm','11:00 pm','11:30 pm','12:00 pm'],
        bookingTime : ''
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
  
</style>