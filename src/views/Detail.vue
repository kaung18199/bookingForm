<template>
  <div class="mx-auto max-w-[1000px]">
    <div class=" grid grid-cols-4 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-2 sm:my-5 md:my-8 lg:my-10 bg-white  rounded-2xl shadow-xl border-t border-gray-100
        ">
        <div class=" col-span-4">
          <LayoutVue/>
        </div>
        <div class=" col-span-4 ">
          
          
          <div class=" flex justify-center items-center mx-auto ">
            <div class=" px-4 py-5 my-6  w-[500px] ">
              <div class=" border rounded-2xl px-4 py-2 shadow">
                <div class=" flex justify-start items-center space-x-8 border-b py-2">
                  <div>
                    <i class="fa-solid fa-user text-xl text-orange-400"></i>
                  </div>
                  <div class=" space-y-2">
                    <p class=" text-base font-medium ">{{ name }}</p>
                    <p class=" text-xs text-orange-300">Name</p>
                  </div>
                </div>
                <div class=" flex justify-start items-center space-x-8 border-b py-2">
                  <div>
                    <i class="fa-solid fa-at text-xl text-orange-400"></i>
                  </div>
                  <div class=" space-y-2">
                    <p class=" text-base font-medium ">{{ email }}</p>
                    <p class=" text-xs text-orange-300">Email</p>
                  </div>
                </div>
                <div class=" flex justify-start items-center space-x-8 border-b py-2">
                  <div>
                    <i class="fa-solid fa-phone text-xl text-orange-400"></i>
                  </div>
                  <div class=" space-y-2">
                    <p class=" text-sm font-medium ">{{ phone }}</p>
                    <p class=" text-xs text-orange-300">Phone</p>
                  </div>
                </div>
                <div class=" flex justify-start items-center space-x-8 border-b py-2">
                  <div>
                    <i class="fa-solid fa-map-location text-xl text-orange-400"></i>
                  </div>
                  <div class=" space-y-2">
                    <p class=" text-sm font-medium ">{{ address }}</p>
                    <p class=" text-xs text-orange-300">Address</p>
                  </div>
                </div>
                <div class=" flex justify-start items-center space-x-8 border-b py-2">
                  <div>
                    <i class="fa-solid fa-calendar text-xl text-orange-400"></i>
                  </div>
                  <div class=" space-y-2">
                    <h2 class=" text-sm font-medium ">{{ formattedDates }}</h2>
                    <p class=" text-xs text-orange-300">Booking Date</p>
                  </div>
                </div>
                <div class=" flex justify-start items-center space-x-8 border-b py-2">
                  <div>
                    <i class="fa-solid fa-clock text-xl text-orange-400"></i>
                  </div>
                  <div class=" space-y-2">
                    <h2 class=" text-sm font-medium ">{{ time }}</h2>
                    <p class=" text-xs text-orange-300">Booking Time</p>
                  </div>
                  
                </div>
                <div class=" flex justify-start items-center space-x-8  py-2">
                  <div>
                    <i class="fa-solid fa-hand-holding-dollar text-xl text-orange-400"></i>
                  </div>
                  <div class=" space-y-2">
                    <h2 class=" text-sm font-medium ">{{ payment }}</h2>
                    <p class=" text-xs text-orange-300">Payment</p>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      <div class=" col-span-4">
        <div class=" flex justify-between items-center p-5 border-t-2">
          <div  class=" cursor-pointer " @click="prePage()"><i class="fa-solid fa-arrow-left mr-2"></i>back</div>
          <div></div>
          
          <!-- button -->
          <button class=" bg-orange-400 px-4 text-sm sm:text-sm md:text-md lg:text-md sm:px-5 md:px-10 lg:px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded cursor-pointer hover:bg-orange-500 hover:shadow-lg" @click="bookingNow" v-if="name != null && email != null && phone != null && address != null && payment != null && dates != null && time != null">
              Book now !
          </button>
          <button class=" bg-orange-400 px-4 text-sm sm:text-sm md:text-md lg:text-md sm:px-5 md:px-10 lg:px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded cursor-pointer hover:bg-orange-500 hover:shadow-lg" @click="bookingNowError" v-if="name == null && email == null && phone == null && address == null && payment == null && dates == null && time == null">
              Book now !
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LayoutVue from '../components/Layout.vue'
  import Swal from 'sweetalert2'
  import moment from 'moment';

  export default {
    name : 'DetailView',
    data () {
      return {
        dates: ''
      }
    },
    components: {
      LayoutVue
    },
    computed: {
      ...mapGetters({
        name : 'name',
        email : 'email',
        phone : 'phone',
        address : 'address',
        payment : 'payment',
        date : 'date',
        time : 'time',
      }),
      formattedDates() {
        const startDate = moment(this.dates[0]).format('DD-MM-YYYY');
        const endDate = moment(this.dates[1]).format('DD-MM-YYYY');
      
        return `${startDate} to ${endDate}`;
      }
    },
    methods: {
      bookingNow () {
        Swal.fire({
          title: 'Pending!',
          text: 'We will contact you via given phone and email thank you',
          icon: 'success',
          // confirmButtonText: 'Cool'
        })
      },
      bookingNowError () {
        Swal.fire({
          title: 'error!',
          text: 'You need some info for booking',
          icon: 'error',
          // confirmButtonText: 'Cool'
        })
      },
      prePage(){
        this.$router.push({
          name : 'payment'
        })
      }
    },
    mounted () {
      this.dates = this.date
    }
  }
</script>

