<template>
  <div class="mx-auto max-w-[1000px]">
    <div class=" h-screen md:h-auto grid grid-cols-1 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-2 sm:my-5 md:my-8 lg:my-10 bg-white shadow-0 md:shadow-2xl rounded-2xl border-t border-gray-100
        ">
        <div class=" col-span-1">
          <LayoutVue/>
        </div>
        <div class=" col-span-1">
          
          
          <div class=" flex justify-center items-center mx-auto max-w-[600px] md:max-w-[500px] px-2 sm:px-2 md:px-2 lg:px-4">
            <div class="  md:h-auto px-4 py-5 my-2 sm:my-2 md:my-6 lg:my-6  w-full border  rounded md:rounded-2xl ">
              <div class=" ">
                  <p class="text-sm sm:text-md  md:text-lg font-medium text-gray-600 flex justify-start item-center">  Please, Fill this Form</p>
              </div>
              <div class=" space-y-5 mb-5 mt-5">
                <div class="relative">
                    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full " placeholder=" " v-model="namen"/>
                    <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" >Name</label>
                    <span class=" text-sm text-red-500 px-2 my-2" v-if="nameerror">! Name field need to fill</span>
                </div>
                <div class="relative">
                    <input type="email" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full" placeholder=" " v-model="emailn"/>
                    <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                  <span class=" text-sm text-red-500 px-2 my-2" v-if="emailerror">! Email field need to fill</span>

                </div>
                <div class="relative">
                    <input type="number" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full" placeholder=" " v-model="phonen"/>
                    <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Phone</label>
                  <span class=" text-sm text-red-500 px-2 my-2" v-if="phoneerror">! Phone field need to fill</span>

                </div>
                <div class="relative">
                    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full " placeholder=" " v-model="personn"/>
                    <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" >Person</label>
                  <span class=" text-sm text-red-500 px-2 my-2" v-if="personerr">! Person field need to fill</span> 
                </div>
                <div class="relative">
                    <textarea  id="floating_filled" class="h-[300px] sm:h-[300px] md:h-auto block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer w-full" placeholder=" " v-model="addressn"></textarea>
                    <label for="floating_filled" class="absolute text-sm text-orange-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">To</label>
                  <span class=" text-sm text-red-500 px-2 my-2" v-if="addresserror">! Address field need to fill</span>
                </div>
                
                
              </div>
            
            </div>
          </div>
        </div>
      <div class=" col-span-1 ">
        <div class=" flex justify-between items-center p-5 border-t-2">
          <div  class=" cursor-pointer " @click="prePage()"><i class="fa-solid fa-arrow-left mr-2"></i>back</div>
          <div></div>
          <div >
          
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-4 sm:px-5 md:px-10 lg:px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded text-sm sm:text-sm md:text-md lg:text-md cursor-pointer disabled hover:shadow-lg" @click="continueClick()" >Next<i class="fa-solid fa-angles-right ml-2"></i></button>
            
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
        personn : '',
        emailn : '',
        phonen : '',
        addressn : '',
        nameerror : false,
        emailerror : false,
        phoneerror : false,
        addresserror : false,
        personerr : false,
      }
    },
    computed: {
      ...mapGetters({
        name : 'name',
        email : 'email',
        phone : 'phone',
        address : 'address',
        person : 'person'
      }),
      
    },
    methods: {
      ...mapActions({
        nameAction : 'nameAction',
        emailAction : 'emailAction',
        phoneAction : 'phoneAction',
        addressAction : 'addressAction',
        personAction : 'personAction'
      }),
      continueClick(){
        if(this.namen != null && this.emailn != null && this.phonen != null && this.addressn != null && this.personn != null){
          this.$router.push({
            name : 'payment'
          });
          this.nameAction(this.namen);
          this.emailAction(this.emailn);
          this.phoneAction(this.phonen);
          this.addressAction(this.addressn);
          this.personAction(this.personn)
        }else{
          console.log(this.personn);
          if(this.namen == null){
            this.nameerror = true
          }
          if(this.emailn == null){
            this.emailerror = true
          }
          if(this.phonen == null){
            this.phoneerror = true
          }
          if(this.addressn == null){
            this.addresserror = true
          }
          if(this.personn == null){
            this.personerr = true
          }
        }
      },
      prePage(){
        this.$router.push({
          name : 'time'
        })
      },
    },
    mounted () {
      this.namen = this.name;
      this.emailn = this.email;
      this.phonen = this.phone;
      this.addressn = this.address;
      this.personn = this.person;
      console.log(this.namen);
    }
  }
</script>
