<template>
  <div class="  ">
      <div class=" grid grid-cols-3 my-10 px-0 sm:px-0 md:px-10 lg:px-10 ">
          <div class="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2">
              <!-- booking form -->
              <div class=" w-full ">
                  <div class=" ">
                      <div class=" mx-auto  rounded-2xl shadow-md p-6 space-y-5 w-full">
                          <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <!-- <div class=" space-y-4">
                                <p>Name</p>
                                <input type="text" name="" placeholder="Enter your name" id="" class=" bg-indigo-100 bg-opacity-50  border  rounded-lg focus:ring-0 focus:border-transparent focus:outline-none  w-full p-2" v-model="name">
                            </div> -->
                            <div class="relative z-0">
                                <input type="text" id="floating_standard" v-model="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>
                            
                            <!-- <div class=" space-y-4">
                                <p>Email</p>
                                <input type="email" name="" placeholder="Enter your email" id="" class="  border bg-indigo-100 bg-opacity-50 rounded-lg focus:ring-0 focus:border-transparent focus:outline-none w-full p-2" v-model="email">
                            </div> -->
                            <div class="relative z-0">
                                <input type="email" id="floating_standard" v-model="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                          </div>
                          <!-- <div class=" space-y-4">
                              <p>Phone</p>
                              <input type="number" name="" placeholder="Enter your phone" id="" class="  border bg-indigo-100 bg-opacity-50 rounded-lg focus:ring-0 focus:border-transparent focus:outline-none w-full p-2" v-model="phone">
                          </div> -->
                          <div class="relative z-0 ">
                              <input type="number" id="floating_standard" v-model="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                              <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                          </div>
                          <div class="space-y-4">
                              <p class=" text-md">Booking date</p>
                          </div>
                          <div class=" w-full overflow-y-hidden h-full">
                            <FullCalendar v-bind:options="calendarOptions" ref="calendar" @select="handleSelect"/> 
                          </div>
                          <!-- <FullCalendar :options="calendarOptions" /> -->
                          <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div class=" ">
                                <p class=" text-sm">Time</p>
                                <input type="time" name="" placeholder="enter your phone" id="" class=" border-b border-gray-400 w-full p-2 " v-model="bookingTime">
                            </div>
                            <!-- <div class="space-y-4">
                              <div class="relative z-0">
                                  <input type="time" id="floating_standard" v-model="bookingTime" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                  <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time</label>
                              </div> 
                            </div> -->
                            <div class=" ">
                                <p class=" text-sm">Payment</p>
                                <!-- <input type="number" name="" placeholder="enter your phone" id="" class="  border  rounded-lg focus:ring-0 focus:border-transparent focus:outline-none w-full p-2"> -->
                                <select name="" v-model="payment" id="" class=" border-b border-gray-400 w-full p-2">
                                  <option value="">Choose Payment</option>
                                  <option value="K Pay">K Pay</option>
                                  <option value="Wave Pay">Wave Pay</option>
                                  <option value="CB Pay">CB Pay</option>
                                  <option value="Banking">Banking</option>
                                </select>
                            </div>
                            <!-- <div>
                              <label for="underline_select" class="">Choose Payment</label>
                              <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" v-model="payment">
                                  <option selected>Choose Payment</option>
                                  <option value="K pay">K pay</option>
                                  <option value="Wave pay">Wave pay</option>
                                  <option value="CB pay">CB pay</option>
                                  <option value="Banking">Banking</option>
                              </select>
                            </div> -->
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 pt-3 sm:pt-3 md:pt-3 lg:pt-0 pl-0 sm:pl-0 md:pl-0 lg:pl-5">
              <div class="sticky top-8 flex justify-center items-center w-full">
                  <div class=" mx-auto  border border-white rounded-2xl shadow-md p-6 w-full space-y-5">
                      <div class=" border border-gray-300 rounded-3xl ">
                          <div class=" flex justify-start items-center space-x-4 p-4 border-b ">
                              <div>
                                  <!-- icon -->
                                  <!-- <i class="fa-regular fa-calendar text-[26px] text-gray-400"></i> -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-400">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>


                              </div>
                              <div>
                                  <p class=" font-medium">{{ name }}</p>
                                  <p class=" font-light text-sm text-gray-400">Name</p>
                                
                              </div>
                          </div>

                          <!-- next part -->
                          <div class=" flex justify-start items-center space-x-4 p-4 border-b ">
                              <div>
                                  <!-- icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-400">
                                  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>


                              </div>
                              <div>
                                  <p class=" font-medium">{{ email }}</p>
                                  <p class=" font-light text-sm text-gray-400">Email</p>
                              </div>
                          </div>
                          <!-- next part -->
                          <div class=" flex justify-start items-center space-x-4 p-4 border-b ">
                              <div>
                                  <!-- icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-400">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>

                              </div>
                              <div>
                                  <p class=" font-medium">{{ phone }}</p>
                                  <p class=" font-light text-sm text-gray-400">Phone</p>
                              </div>
                          </div>
                          <!-- next part -->
                          <div class=" flex justify-start items-center space-x-4 p-4 border-b ">
                              <div>
                                  <!-- icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-400">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>

                              </div>
                              <div>
                                  <p class=" font-medium">{{ bookingDate }}</p>
                                  <p class=" font-light text-sm text-gray-400">Booking Date</p>
                              </div>
                          </div>
                          <!-- next part -->
                          <div class=" flex justify-start items-center space-x-4 p-4 border-b ">
                              <div>
                                  <!-- icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-400">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                              </div>
                              <div>
                                  <p class=" font-medium">{{ bookingTime }}</p>
                                  <p class=" font-light text-sm text-gray-400">Time</p>
                              </div>
                              
                          </div>
                        <!-- next part -->
                        <div class=" flex justify-start items-center space-x-4 p-4 ">
                            <div>
                                <!-- icon -->
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                              </svg>

                            </div>
                            <div>
                                <p class=" font-medium">{{ payment }}</p>
                                <p class=" font-light text-sm text-gray-400">Payment</p>
                            </div>
                              
                        </div>
                      </div>

                      <!-- price -->
                      <div class=" space-y-5 border-b  pb-5">
                          <div class=" flex justify-between items-center">
                              <p>$119 x 3 night</p>
                              <p>$357</p>
                          </div>
                          <div class=" flex justify-between items-center">
                              <p>Service charge</p>
                              <p>$0</p>
                          </div>
                      </div>

                      <!-- total -->
                      <div>
                          <div class=" flex justify-between items-center">
                              <p>Total</p>
                              <p>$199</p>
                          </div>
                      </div>

                      <!-- button -->
                      <button class=" text-white w-full py-3 rounded-full bg-blue-700 hover:bg-blue-600">
                          Reserve
                      </button>
                  </div>
              </div>
          </div>
      </div>
    <!-- <FullCalendar v-bind:options="calendarOptions" ref="calendar"/>  -->
  </div>
</template>

<script>

// import('@fullcalendar/core/vdom');
// import '@fullcalendar/core/main.min.css';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listGridPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'


export default {
  name: 'App',
  data () {
    return {
      name : '',
      email : '',
      phone : '',
      bookingDate : '',
      bookingTime : '',
      payment : '',
      date : '',
      startdate : '',
      enddate : '',
      inputBoxHasValue: '',

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
  methods: {
    handleDateClick(info) {
      this.date = info.date;


      this.bookingDate = this.date.toLocaleDateString('en-US',{ month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g/ '-')
  
    },

    handleSelect(info) {
      this.startdate = info.start
      this.enddate = info.end
      console.log(`Selected range: ${this.startdate} - ${this.enddate}`)
      // You can use startDate and endDate here to do whatever you need to do

      this.bookingDate =  this.startdate.toLocaleDateString('en-US',{ month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g/ '-') + ' -- ' +  this.enddate.toLocaleDateString('en-US',{ month: 'short', day: 'numeric', year: 'numeric' }).replace(/ /g/ '-')
    }
  },
  components: {
    FullCalendar
  },



  mounted() {
    const calendarApi = this.$refs.calendar.getApi();
    calendarApi.on('dateClick', this.handleDateClick);
    calendarApi.on('dayCellDidMount', this.handleDayCellDidMount);
  },
  
  
};


</script>
<style >

  
  .fc .fc-daygrid-day-frame:hover{
    background-color: rgb(231, 225, 225);
  }
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




