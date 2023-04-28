<template>
  <div class="mx-auto max-w-[1000px]">
    <div class=" grid grid-cols-4 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-2 sm:my-5 md:my-8 lg:my-10 bg-white  rounded-2xl shadow-xl border-t border-gray-100
        ">
        <div class=" col-span-4">
          <LayoutVue/>
        </div>
        <div class=" col-span-4 ">
          
          
          <div class=" flex justify-center items-center mx-auto my-10">
            <div class=" px-4  space-y-8">
              <div class=" ">
                  <p class="text-sm sm:text-base md:text-lg pl-4 font-medium text-gray-600 flex justify-start item-center ">Please, Choose the Payment Type</p>
              </div>
              <div class=" grid grid-cols-2 gap-4">
                <div class=" flex justify-between items-center border-2 border-orange-200 rounded-full px-2 sm:px-4 py-2 hover:bg-orange-300 hover:bg-opacity-50 hover:shadow-lg cursor-pointer hover:border-orange-400 transition ease-in-out duration-700" :class="payment == 'KBZ pay' ? 'bg-orange-300 bg-opacity-50 shadow-lg border-orange-400' : ''" @click="Kaction()">
                  <img src="https://play-lh.googleusercontent.com/cnKJYzzHFAE5ZRepCsGVhv7ZnoDfK8Wu5z6lMefeT-45fTNfUblK_gF3JyW5VZsjFc4" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-xs sm:text-sm md:text-md lg:text-lg font-medium text-orange-600 ">KBZ Pay</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-orange-200 rounded-full px-2 sm:px-4 py-2 hover:bg-orange-300 hover:bg-opacity-50 hover:shadow-lg cursor-pointer hover:border-orange-400 transition ease-in-out duration-700" :class="payment == 'Wave pay' ? 'bg-orange-300 bg-opacity-50 shadow-lg border-orange-400' : ''" @click="Waction()">
                  <img src="https://yt3.googleusercontent.com/ytc/AGIKgqOLJcVuCnydxSdEE-SxX3B9-AUwFf84QU8faF1-ng=s900-c-k-c0x00ffffff-no-rj" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-xs sm:text-sm md:text-md lg:text-lg font-medium text-orange-600">Wave Pay</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-orange-200 rounded-full px-2 sm:px-4 py-2 hover:bg-orange-300 hover:bg-opacity-50 hover:shadow-lg cursor-pointer hover:border-orange-400 transition ease-in-out duration-700" :class="payment == 'CB pay' ? 'bg-orange-300 bg-opacity-50 shadow-lg border-orange-400' : ''" @click="Caction()">
                  <img src="https://play-lh.googleusercontent.com/z-wRjDo9L-3c1-39ZH-VyKwofSHsmI79VH3T_pSqlj_fRhZSpc7zbDlFKS4hle0bLOk" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-xs sm:text-sm md:text-md lg:text-lg font-medium text-orange-600">CB Pay</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-orange-200 rounded-full px-2 sm:px-4 py-2 hover:bg-orange-300 hover:bg-opacity-50 hover:shadow-lg cursor-pointer hover:border-orange-400 transition ease-in-out duration-700" :class="payment == 'Paypal' ? 'bg-orange-300 bg-opacity-50 shadow-lg border-orange-400' : ''" @click="Paction()">
                  <img src="https://thumbs.dreamstime.com/b/paypal-logo-printed-paper-chisinau-moldova-september-internet-based-digital-money-transfer-service-128373487.jpg" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-xs sm:text-sm md:text-md lg:text-lg font-medium text-orange-600">Paypal</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-orange-200 rounded-full px-2 sm:px-4 py-2 hover:bg-orange-300 hover:bg-opacity-50 hover:shadow-lg cursor-pointer hover:border-orange-400 transition ease-in-out duration-700" :class="payment == 'Visa pay' ? 'bg-orange-300 bg-opacity-50 shadow-lg border-orange-400' : ''" @click="Vaction()">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGRTcA8FWCLvethhPJ_WppDb9ynlI1-nV8Q&usqp=CAU" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-xs sm:text-sm md:text-md lg:text-lg font-medium text-orange-600">Visa Pay</p>
                </div>
              </div>
              <p class=" text-sm text-red-500 px-2 my-2 mb-2" v-if="paymentState">! Payment need to select</p>
            
            </div>
          </div>
        </div>
      <div class=" col-span-4">
        <div class=" flex justify-between items-center p-5 border-t-2">
          <div  class=" cursor-pointer " @click="prePage()"><i class="fa-solid fa-arrow-left mr-2"></i>back</div>
          <div></div>
          <div >
          
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-4 sm:px-5 md:px-10 lg:px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded text-sm sm:text-sm md:text-md lg:text-md cursor-pointer disabled hover:shadow-lg" @click="continueClick()" v-if="payment != null">Next<i class="fa-solid fa-angles-right ml-2"></i></button>
            <button class="  bg-orange-400 hover:bg-orange-500 hover:animate-none px-4 sm:px-5 md:px-10 lg:px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded text-sm sm:text-sm md:text-md lg:text-md cursor-pointer disabled hover:shadow-lg" v-if="payment == null" @click="paymentState = true">Next<i class="fa-solid fa-angles-right ml-2"></i></button>
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
    name : 'PaymentPage',
    components: {
      LayoutVue
    },
    data () {
      return {
        paymentState : false,
      }
    },
    computed: {
      ...mapGetters({
        payment : 'payment'
      })
    },
    methods: {
      ...mapActions({
        paymentAction : 'paymentAction'
      }),
      continueClick(){
        this.$router.push({
          name : 'detail'
        })
      },
      prePage(){
        this.$router.push({
          name : 'enterInfo'
        })
      },
      Kaction(){
        this.paymentAction('KBZ pay')
      },
      Waction(){
        this.paymentAction('Wave pay')
      },
      Caction(){
        this.paymentAction('CB pay')
      },
      Paction(){
        this.paymentAction('Paypal')
      },
      Vaction(){
        this.paymentAction('Visa pay')
      },
    }
  }
</script>

