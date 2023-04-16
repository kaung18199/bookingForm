
<template>

  <div class=" ">
      
      <div class=" grid grid-cols-4 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-2 sm:my-5 md:my-8 lg:my-10 bg-white  rounded-2xl shadow-xl border-t border-gray-100
          ">
          <div class=" col-span-4">
            <LayoutVue/>
          </div>
          
          <div class="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-4 px-5 sm:px-5 md:px-5 lg:px-5 pb-5 " >
              <!-- booking form -->
              
              <div class=" grid grid-cols-2 gap-4 ">
                <div class=" col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
                  <div class=" mt-8 mb-2">
                      <p class=" text-lg font-medium text-gray-600"><i class="fa-solid text-orange-400 fa-calendar-days mr-2"></i>Confirm Date</p>
                  </div>
                  <div class=" w-full col-span-1">
                      
                            <div class="  p-2 sm:p-3 md:p-2 lg:p-4 border shadow">
                              
                          
                              
                                <div class=" w-full overflow-y-hidden h-full">
                                  <FullCalendar v-bind:options="calendarOptions" ref="calendar" @select="handleSelect" /> 
                                </div>
                                <!-- <FullCalendar :options="calendarOptions" /> -->
                                <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                
                            
                                </div>
                            </div>
                      
                    </div>
                </div>
                <div class=" h-full col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
                  <div class=" mt-8 mb-2">
                      <p class=" text-lg font-medium text-gray-600"><i class="fa-solid text-orange-400 fa-clock mr-2"></i>Confirm Time</p>
                  </div>
                  <div class="col-span-1 h-[518px] md:h-[518px] lg:h-[534px] overflow-hidden overflow-y-auto border shadow">

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
            <div v-if="!timeDateSelect" @click="openTimeDate" class=" cursor-pointer "><i class="fa-solid fa-arrow-left mr-2"></i>back</div>
            <div></div>
            <div v-if="timeDateSelect">
            
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded cursor-pointer disabled hover:shadow-lg" @click="continueClick()">Next<i class="fa-solid fa-angles-right ml-2 "></i></button>
            </div> 
            
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>

import Swal from 'sweetalert2'

// import('@fullcalendar/core/vdom');
// import '@fullcalendar/core/main.min.css';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listGridPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

import LayoutVue from '../components/Layout.vue'
import AmPartVue from '../components/AmPart.vue'
import PmPartVue from '../components/PmPart.vue'

import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  data () {
    return {
      timeDateSelect : true,
      amPart : true,
      pmPart : false,
      bookingDate : '',
      date : '',
      startdate : '',
      enddate : '',
      inputBoxHasValue: '',
      times : ['1:00','1:30','2:00','2:30','3:00','3:30','4:00','4:30','5:00','5:30','6:00','6:30','7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30'],

      calendarOptions: {
        plugins: [ dayGridPlugin,timeGridPlugin,listGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        height: '100%',
        contentHeight: 'auto',
        aspectRatio: 2,
        selectable: true,
        selectOverlap: false,
        select: this.handleSelect,
        headerToolbar: {
          
          
          
        },
        
        // selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
      }
      
    };
  },
  computed: {
    
  },
  methods: {
    ...mapActions({
      dateAction : "dateAction"
    }),

    handleDateClick(info) {
      this.date = info.date;


      this.bookingDate = this.date.toLocaleDateString('en-US',{ month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g/ '-')
      this.dateAction(this.bookingDate);
    },

    handleSelect(info) {
      this.startdate = info.start
      this.enddate = info.end
      console.log(`Selected range: ${this.startdate} - ${this.enddate}`)
      // You can use startDate and endDate here to do whatever you need to do

      this.bookingDate =  this.startdate.toLocaleDateString('en-US',{ month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g/ '-') + ' -- ' +  this.enddate.toLocaleDateString('en-US',{ month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g/ '-');
      this.dateAction(this.bookingDate);
    },

    bookingNow(){
      Swal.fire({
        title: 'Pending!',
        text: 'Your Booking is Pending State',
        icon: 'success',
        // confirmButtonText: 'Cool'
      })
    },
    
    continueClick(){
      this.$router.push({
        name : 'enterInfo'
      })
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
  },
  components: {
    FullCalendar,LayoutVue,AmPartVue,PmPartVue
  },



  mounted() {
    const calendarApi = this.$refs.calendar.getApi();
    calendarApi.on('dateClick', this.handleDateClick);
    calendarApi.on('dayCellDidMount', this.handleDayCellDidMount);
  },
  
  
};


</script>
<style >
  .calendar {
    width: 100%!important;
    height: 100%!important;
    overflow: hidden;
  }
  .fc-daygrid-body {
    width: 100%!important;
  }
  .fc-scrollgrid-section-body table{
    width: 100%!important;
  }
  .fc-col-header{
    width: 100%!important;
  }
  .fc .fc-daygrid-day-events {
      
      display: none;
  }
  
  .fc .fc-daygrid-day-number {
      /* padding: 4px; */
      position: relative;
      z-index: 4;
      padding: 22px 20px;
  }
  .fc .fc-daygrid-day-number:hover {
      /* padding: 4px; */
      position: relative;
      z-index: 4;
      padding: 20px 25px;
      background-color: rgb(251, 215, 171);
      border-radius: 100%;
  }
  .fc-theme-standard td, .fc-theme-standard th {
      border: 0px solid var(--fc-border-color);
  }
  .fc-theme-standard .fc-scrollgrid {
      border: 0px solid var(--fc-border-color);
  }
  .fc .fc-daygrid-day-frame {
      min-height: 100%;
      position: relative;
      border-radius: 100px;
      /* border: 1px solid var(--fc-border-color); */
  }
  .fc .fc-daygrid-day-top {
      display: flex;
      justify-content: center;
      /* flex-direction: row-reverse; */
      align-items: center;
  }
  .fc .fc-toolbar-title {
      font-size: 1.3em!important;
      margin: 0;
      font-weight: 500;
  }

  .fc .fc-today-button {
      background-color: var(--fc-button-bg-color);
      border-color: var(--fc-button-border-color);
      color: var(--fc-button-text-color);
      display: none;
  }
  .fc .fc-button-primary {
      background-color: rgb(255, 147, 16);
      /* border-color: var(--fc-button-border-color); */
      border: 1px solid orange;
      color: var(--fc-button-text-color);
      overflow: hidden;
  }
  .fc .fc-button-primary:hover {
      background-color: rgba(255, 166, 0, 0.892);
      /* border-color: none!important; */
      color: var(--fc-button-text-color);
      box-shadow: none;
      border: 1px solid #eabe0f;
  }
  .fc-button-group{
    overflow: hidden;
  }
  .fc .fc-highlight {
      background: rgb(251, 215, 171);
  }
  .fc-button-group{
    border: none;
  }
  @media screen and (max-width: 767px) {
    .fc-toolbar-chunk {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .fc-toolbar-title {
      flex-basis: 100%;
      margin-top: 10px;
    }
    
  }
</style>




