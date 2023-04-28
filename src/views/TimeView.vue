
<template>

  <div class="mx-auto max-w-[1000px]">
      
      <div class=" grid grid-cols-4 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-2 sm:my-5 md:my-8 lg:my-10 bg-white  rounded-2xl shadow-xl border-t border-gray-100
          ">
          <div class=" col-span-4">
            <LayoutVue/>
          </div>
          
          <div class="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 px-2 sm:px-2 md:px-5 lg:px-5 pb-5 " >
              <!-- booking form -->
              
              <div class=" grid grid-cols-2 gap-4 ">
                
                <div class="  h-full col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2">
                  <div class="max-w-[500px] mx-auto mt-8 mb-2 sm:mb-2 md:mb-7 lg:mb-2">
                      <p class=" text-base sm:text-base md:text-md cursor-pointer lg:text-lg font-medium text-gray-600" @click=" timeAction "><i class="fa-solid text-orange-400 fa-clock mr-2"></i>Confirm Time</p>
                    
                  </div>
                  <p class=" text-sm text-orange-400 border max-w-[500px] mx-auto py-2 rounded px-4" v-if="time">{{time}}</p>
                  <p class="max-w-[500px] mx-auto text-sm text-red-500 px-2 my-2 mb-2" v-if="timeState">! Time field need to fill</p>
                  <div class="col-span-1 max-w-[500px] mx-auto h-[518px] md:h-[518px] lg:h-[534px] overflow-hidden overflow-y-auto border shadow mb-5" >
                    
                    
                    <div class="w-full flex justify-center items-center py-4 border-b space-x-2">
                      <div class=" border px-4 py-2 rounded font-medium cursor-pointer hover:bg-orange-400 hover:text-white transition ease-in-out duration-700 shadow" :class="amPart == true ? 'bg-orange-400 text-white' : ''" @click="amPartAction()">AM</div>
                      <i class="fa-solid fa-arrows-left-right"></i>
                      <div class=" border px-4 py-2 rounded font-medium cursor-pointer hover:bg-orange-400 hover:text-white transition ease-in-out duration-700 shadow" :class="pmPart == true ? 'bg-orange-400 text-white' : ''" @click="pmPartAction()">PM</div>
                      
                    </div>
                    <div class=" p-5 grid grid-cols-1 text-center gap-3" v-if="amPart">
                      <!-- part change -->
                      
                        <AmPartVue/>
                    </div>
                    <div class=" p-5 grid grid-cols-1 text-center gap-3" v-if="pmPart">
                      <!-- part change -->
                      
                        <PmPartVue/>
                    </div>
                  </div>
                  
                </div>
              </div>
            
          </div>

        <!-- this is form -->

        <div class=" col-span-4 ">
          <div class=" flex justify-between items-center p-5 border-t-2">
            <div  class=" cursor-pointer " @click="prePage()"><i class="fa-solid fa-arrow-left mr-2"></i>back</div>
            <div></div>
            <div v-if="timeDateSelect">
            
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-4 sm:px-5 md:px-10 lg:px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded text-sm sm:text-sm md:text-md lg:text-md cursor-pointer disabled hover:shadow-lg" @click="continueClick()" >Next<i class="fa-solid fa-angles-right ml-2 "></i></button>
            </div> 
            
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>

import LayoutVue from '../components/Layout.vue'
import AmPartVue from '../components/AmPart.vue'
import PmPartVue from '../components/PmPart.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  data () {
    return {
      timeState : false,
      timeSelect : false,
      timeDateSelect : true,
      amPart : true,
      pmPart : false,

      event : '',
      daten : '',
    };
  },
  computed: {
    ...mapGetters({
      time : 'time'
    })
  },
  methods: {
    
    continueClick(){
      if( this.time != null){
        this.$router.push({
          name : 'enterInfo'
        })
      }else{
        if(this.time == null){
          this.timeState = true;
        }
      }
    },
    openTimeDate(){
      this.timeDateSelect = true;
    },
    amPartAction(){
      this.amPart = true;
      this.pmPart = false;
    },
    pmPartAction(){
      this.amPart = false;
      this.pmPart = true;
    },
    prePage(){
      this.$router.push({
        name : 'home'
      })
    },
    
  },
  components: {
    LayoutVue,AmPartVue,PmPartVue
  },



  mounted() {

    console.log(this.time);
    this.bookingDate = this.date;
  },
  
  
};


</script>
