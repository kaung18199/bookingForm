<template>
  <div>
    <div class=" grid grid-cols-4 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-2 sm:my-5 md:my-8 lg:my-10 bg-white  rounded-2xl shadow-xl border-t border-gray-100
        ">
        <div class=" col-span-4">
          <LayoutVue/>
        </div>
        <div class=" col-span-4 ">
          
          
          <div class=" flex justify-center items-center mx-auto w-[300px] sm:w-[500px] md:w-[500px] lg:w-[500px]">
            <div class=" px-4 py-5 my-6 space-y-8 w-full border rounded-2xl shadow">
              <div class=" ">
                  <p class="text-sm sm:text-md  md:text-lg font-medium text-gray-600"><i class="fa-regular fa-face-smile-beam mr-2 text-orange-400"></i>Please, Fill this Form</p>
              </div>
              <div class="relative">
                  <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-orange-50 dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full " placeholder=" " v-model="namen"/>
                  <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
              </div>
              <div class="relative">
                  <input type="email" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-orange-50 dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full" placeholder=" " v-model="emailn"/>
                  <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
              </div>
              <div class="relative">
                  <input type="number" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-orange-50 dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full" placeholder=" " v-model="phonen"/>
                  <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Phone</label>
              </div>
              <div class="relative">
                  <textarea  id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-orange-50 dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full" placeholder=" " v-model="addressn"></textarea>
                  <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Address</label>
                  
              </div>
            
            </div>
          </div>
        </div>
      <div class=" col-span-4">
        <div class=" flex justify-between items-center p-5 border-t-2">
          <div  class=" cursor-pointer " @click="prePage()"><i class="fa-solid fa-arrow-left mr-2"></i>back</div>
          <div></div>
          <div >
          
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded cursor-pointer disabled hover:shadow-lg" @click="continueClick()" v-if="namen != null && emailn != null && phonen != null && addressn != null">Next<i class="fa-solid fa-angles-right ml-2"></i></button>
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded cursor-pointer disabled hover:shadow-lg" v-if="namen == null || emailn == null || phonen == null || addressn == null">Next<i class="fa-solid fa-angles-right ml-2"></i></button>
          </div> 
          <!-- button -->
          <!-- <button class=" bg-indigo-500 px-10 py-2 text-white rounded cursor-pointer hover:bg-blue-600" @click="bookingNow" v-if="!timeDateSelect">
              Booking
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LayoutVue from '../components/Layout.vue'
import { mapActions,mapGetters } from 'vuex'

  export default {
    name : 'EnterInfo',
    components: {
      LayoutVue
    },
    data () {
      return {
        namen: '',
        emailn : '',
        phonen : '',
        addressn : ''
      }
    },
    computed: {
      ...mapGetters({
        name : 'name',
        email : 'email',
        phone : 'phone',
        address : 'address',
      }),
      
    },
    methods: {
      ...mapActions({
        nameAction : 'nameAction',
        emailAction : 'emailAction',
        phoneAction : 'phoneAction',
        addressAction : 'addressAction',
      }),
      continueClick(){
        this.$router.push({
          name : 'payment'
        });
        this.nameAction(this.namen);
        this.emailAction(this.emailn);
        this.phoneAction(this.phonen);
        this.addressAction(this.addressn);
      },
      prePage(){
        this.$router.push({
          name : 'home'
        })
      },
    },
    mounted () {
      this.namen = this.name;
      this.emailn = this.email;
      this.phonen = this.phone;
      this.addressn = this.address;
      console.log(this.namen);
    }
  }
</script>
