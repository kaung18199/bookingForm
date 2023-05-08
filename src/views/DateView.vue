
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
                <div class=" col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2">
                  <div class="max-w-[500px] space-y-4 mx-auto mt-8 mb-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1" :class="bookingDate ? 'mb-2' : 'mb-2 sm:mb-2 md:mb-7 lg:mb-2'">
                      <p class="  text-base sm:text-base md:text-md lg:text-lg font-medium text-gray-600 cursor-pointer" @click=" dateActionN"><i class="fa-solid text-orange-400 fa-calendar-days mr-2"></i>Confirm Date</p>
                    <p class=" text-sm text-orange-400 border max-w-[500px] mx-auto py-2 rounded px-4 w-full shadow" v-if="dates" >{{ formattedDates }}</p>
                    <p class=" text-sm text-red-500 px-2 my-2 mb-2" v-if="dateState">! Date field need to fill</p>
                  </div>
                  
                  <div class=" ">

                                <div class=" max-w-[500px] mx-auto shadow mb-5 ">
                                  <VueDatePicker v-model="dates"  :enableTimePicker="false" :partial-range="false"  :inline="true" ></VueDatePicker>
                                </div>
                                <!-- <FullCalendar :options="calendarOptions" /> -->
                                <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                
                            
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
            
            
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-4 sm:px-5 md:px-10 lg:px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white text-sm sm:text-sm md:text-md lg:text-md rounded cursor-pointer disabled hover:shadow-lg" @click="continueClick()" >Next<i class="fa-solid fa-angles-right ml-2 "></i></button>
            
            
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
import LayoutVue from '../components/Layout.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import moment from 'moment';
import {mapActions,mapGetters} from 'vuex'
// import { useRoute } from 'vue-router'

export default {
  // setup() {
  //   const route = useRoute()

  //   return {
  //     form: route.query.form,
  //     city: route.query.city
  //   }
  // },
  name: 'HomeView',
  data () {
    return {
      dates  :null,
      dateState : false,
      formattedDate : '',
      bookingDate : '',
      for_what : '',
      at_id : '',
      messenger_id : '',
      car_index : ''
    };
  },
  computed: {
    ...mapGetters({
      date : 'date'
    }),
    formattedDates() {
      const startDate = moment(this.dates).format('DD-MM-YYYY');
      // const endDate = moment(this.dates[1]).format('DD-MM-YYYY');
      
      return `${startDate}`;
    }
  },
  methods: {
    ...mapActions({
      dateAction : 'dateAction',
      forWhatAction : 'forWhatAction',
      atIdAction : 'atIdAction',
      messengerIdAction : 'messengerIdAction',
      carIndexAction : 'carIndexAction',
      airportIdAction : 'airportIdAction'
    }),
    continueClick(){
      if(this.dates != null ){
        this.dateAction(this.dates);
        this.forWhatAction(this.for_what);
        this.atIdAction(this.at_id);
        this.messengerIdAction(this.messenger_id);
        this.carIndexAction(this.car_index);
        this.airportIdAction(this.airport_id);
        this.$router.push({
          name : 'time'
        })
      }else{
        if(this.dates == null){
          this.dateState = true;
        }
      }
    },
  },
  components: {
    LayoutVue,VueDatePicker 
  },
  mounted() {
    this.dates = this.date
    console.log(this.time);
    this.bookingDate = this.date;
    this.for_what = this.$route.query.for;
    this.at_id = this.$route.query.at_id;
    this.messenger_id = this.$route.query.messenger_id;
    this.car_index = this.$route.query.car_index;
    this.airport_id = this.$route.query.airport_id;
  },
  
  
};


</script>
<style >
  .dp__outer_menu_wrap{
    max-width: 500px;
  }
  .db__button{
    display: none;
  }
  .dp__flex_display {
      display: block;
  }
  .dp__calendar_item {
      text-align: center;
      flex-grow: 1;
      margin: 5px;
      box-sizing: border-box;
      color: var(--dp-text-color);
  }
  .dp__calendar_row {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: var(--dp-row-maring, 16px 16px);
  }
  .dp__month_year_row {
      display: flex;
      align-items: center;
      height: var(--dp-month-year-row-height, 61px);
      color: orange;
      box-sizing: border-box;
    margin-top: 17px;
    max-width: 300px;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .dp__month_year_select {
      width: 50%;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      height: var(--dp-month-year-row-height, 35px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--dp-border-radius, 4px);
      box-sizing: border-box;
  }
  .dp__calendar_header_item {
      text-align: center;
      flex-grow: 1;
      height: var(--dp-cell-size, 35px);
      padding: var(--dp-cell-padding, 4px);
      width: var(--dp-cell-size, 44px);
      box-sizing: border-box;
      margin : 0 4px;
  }
  .dp__range_end, .dp__range_start, .dp__active_date {
      background: var(--dp-primary-color);
      color: var(--dp-primary-text-color);
      border-radius: 100%;
  }
  .dp__calendar_header {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--dp-text-color);
      white-space: nowrap;
      font-weight: 600;
  }
  .dp__select {
      color: #ffbc04;
  }
  .dp__action {
      font-weight: 600;
      cursor: pointer;
      margin: 12px 22px;
      padding: var(--dp-action-buttons-padding, 2px 5px);
      border-radius: var(--dp-border-radius, 4px);
      display: inline-flex;
      align-items: center;
      border: 1px solid orange;
  }
  .dp__month_year_wrap {
      display: flex;
      justify-content: center;

  }
  .dp__month_year_select {
      width: 20%;
      text-align: center;
      font-size: 22px;
      font-weight: 500;
      height: var(--dp-month-year-row-height, 35px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--dp-border-radius, 4px);
      box-sizing: border-box;
      
  }
  .dp__calendar_header_separator {
      width: 100%;
      height: 1px;
      margin-top: 18px;
      background: var(--dp-border-color);
  }
  .dp__month_year_row {
      display: flex;
      align-items: center;
      height: var(--dp-month-year-row-height, 61px);
      color: orange;
      box-sizing: border-box;
      margin-bottom: 10px;
  }
  .dp__month_year_select:hover {
      background: var(--dp-hover-color);
      color: #ffffff;
  }
  .dp__range_between {
      background: var(--dp-hover-color);
      border-radius: 100%;
      border-top: 1px solid var(--dp-hover-color);
      border-bottom: 1px solid var(--dp-hover-color);
  }
  .dp__selection_preview {
      width: 50%;
      color: var(--dp-text-color);
      font-size: var(--dp-preview-font-size, 0.8rem);
      opacity: 0;
  }
  .dp__theme_light {
      --dp-background-color: #fff;
      --dp-text-color: #212121;
      --dp-hover-color: #f8dc8d;
      --dp-hover-text-color: #212121;
      --dp-hover-icon-color: #959595;
      --dp-primary-color: #f8b117;
      --dp-primary-disabled-color: #6bacea;
      --dp-primary-text-color: #f8f5f5;
      --dp-secondary-color: #c0c4cc;
      --dp-border-color: #ddd;
      --dp-menu-border-color: #ddd;
      --dp-border-color-hover: #aaaeb7;
      --dp-disabled-color: #f6f6f6;
      --dp-scroll-bar-background: #f3f3f3;
      --dp-scroll-bar-color: #959595;
      --dp-success-color: #76d275;
      --dp-success-color-disabled: #a3d9b1;
      --dp-icon-color: #959595;
      --dp-danger-color: #ff6f60;
      --dp-marker-color: #ff6f60;
      --dp-tooltip-color: #fafafa;
      --dp-disabled-color-text: #8e8e8e;
      --dp-highlight-color: rgb(25 118 210 / 10%);
  }
  :root {
      /*General*/
      --dp-font-family: 'poppin', sans-serif;
      --dp-border-radius: 4px; /*Configurable border-radius*/
      --dp-cell-border-radius: 4px; /*Specific border radius for the calendar cell*/

      /*Sizing*/
      --dp-button-heigh: 35px; /*Size for buttons in overlays*/
      --dp-month-year-row-height: 35px; /*Height of the month-year select row*/
      --dp-month-year-row-button-size: 35px; /*Specific height for the next/previous buttons*/
      --dp-button-icon-height: 20px; /*Icon sizing in buttons*/
      --dp-cell-size: 35px; /*Width and height of calendar cell*/
      --dp-cell-padding: 5px; /*Padding in the cell*/
      --dp-common-padding: 10px; /*Common padding used*/
      --dp-input-icon-padding: 35px; /*Padding on the left side of the input if icon is present*/
      --dp-input-padding: 6px 30px 6px 12px; /*Padding in the input*/
      --dp-menu-min-width: 260px; /*Adjust the min width of the menu*/
      --dp-action-buttons-padding: 2px 5px; /*Adjust padding for the action buttons in action row*/
      --dp-row-maring:  5px 0; /*Adjust the spacing between rows in the calendar*/
      --dp-calendar-header-cell-padding:  0.5rem; /*Adjust padding in calendar header cells*/
      --dp-two-calendars-spacing:  10px; /*Space between multiple calendars*/
      --dp-overlay-col-padding:  3px; /*Padding in the overlay column*/
      --dp-time-inc-dec-button-size:  32px; /*Sizing for arrow buttons in the time picker*/
    
      /*Font sizes*/
      --dp-font-size: 1rem; /*Default font-size*/
      --dp-preview-font-size: 0.8rem; /*Font size of the date preview in the action row*/
      --dp-time-font-size: 0.8rem; /*Font size in the time picker*/
    
      /*Transitions*/
      --dp-animation-duration: 0.1s; /*Transition duration*/
      --dp-menu-appear-transition-timing: cubic-bezier(.4, 0, 1, 1); /*Timing on menu appear animation*/
      --dp-transition-timing: ease-out; /*Timing on slide animations*/
  }
  element{
    --v-calendar-picker-color: #c4ff3a;
  }
</style>




