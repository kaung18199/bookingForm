<template>
  <div>
    <div class=" grid grid-cols-4 mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-2 sm:my-5 md:my-8 lg:my-10 bg-white  rounded-2xl shadow-xl border-t border-gray-100
        ">
        <div class=" col-span-4">
          <LayoutVue/>
        </div>
        <div class=" col-span-4 ">
          
          
          <div class=" flex justify-center items-center mx-auto my-20">
            <div class=" px-4 py-5 my-6 space-y-8">
              <div class=" ">
                  <p class="text-sm sm:text-base md:text-lg font-medium text-gray-600"><i class="fa-regular fa-face-smile-beam mr-2 text-indigo-600"></i>Please, Choose the Payment Type</p>
              </div>
              <div class=" grid grid-cols-2 gap-4">
                <div class=" flex justify-between items-center border-2 border-indigo-200 rounded-full py-2 px-4 hover:bg-indigo-300 hover:bg-opacity-30 hover:shadow-lg cursor-pointer hover:border-indigo-800 transition ease-in-out duration-700" :class="payment == 'KBZ pay' ? 'bg-indigo-300 bg-opacity-30 shadow-lg border-indigo-800' : ''" @click="Kaction()">
                  <img src="https://play-lh.googleusercontent.com/cnKJYzzHFAE5ZRepCsGVhv7ZnoDfK8Wu5z6lMefeT-45fTNfUblK_gF3JyW5VZsjFc4" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-sm sm:text-md md:text-lg lg:text-lg font-medium text-gray-600 ">KBZ Pay</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-indigo-200 rounded-full py-2 px-4 hover:bg-indigo-300 hover:bg-opacity-30 hover:shadow-lg cursor-pointer hover:border-indigo-800 transition ease-in-out duration-700" :class="payment == 'Wave pay' ? 'bg-indigo-300 bg-opacity-30 shadow-lg border-indigo-800' : ''" @click="Waction()">
                  <img src="https://yt3.googleusercontent.com/ytc/AGIKgqOLJcVuCnydxSdEE-SxX3B9-AUwFf84QU8faF1-ng=s900-c-k-c0x00ffffff-no-rj" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-sm sm:text-md md:text-lg lg:text-lg font-medium text-gray-600">Wave Pay</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-indigo-200 rounded-full py-2 px-4 hover:bg-indigo-300 hover:bg-opacity-30 hover:shadow-lg cursor-pointer hover:border-indigo-800 transition ease-in-out duration-700" :class="payment == 'CB pay' ? 'bg-indigo-300 bg-opacity-30 shadow-lg border-indigo-800' : ''" @click="Caction()">
                  <img src="https://play-lh.googleusercontent.com/z-wRjDo9L-3c1-39ZH-VyKwofSHsmI79VH3T_pSqlj_fRhZSpc7zbDlFKS4hle0bLOk" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-sm sm:text-md md:text-lg lg:text-lg font-medium text-gray-600">CB Pay</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-indigo-200 rounded-full py-2 px-4 hover:bg-indigo-300 hover:bg-opacity-30 hover:shadow-lg cursor-pointer hover:border-indigo-800 transition ease-in-out duration-700" :class="payment == 'Paypal' ? 'bg-indigo-300 bg-opacity-30 shadow-lg border-indigo-800' : ''" @click="Paction()">
                  <img src="https://thumbs.dreamstime.com/b/paypal-logo-printed-paper-chisinau-moldova-september-internet-based-digital-money-transfer-service-128373487.jpg" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-sm sm:text-md md:text-lg lg:text-lg font-medium text-gray-600">Paypal</p>
                </div>
                <div class=" flex justify-between items-center border-2 border-indigo-200 rounded-full py-2 px-4 hover:bg-indigo-300 hover:bg-opacity-30 hover:shadow-lg cursor-pointer hover:border-indigo-800 transition ease-in-out duration-700" :class="payment == 'Visa pay' ? 'bg-indigo-300 bg-opacity-30 shadow-lg border-indigo-800' : ''" @click="Vaction()">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGRTcA8FWCLvethhPJ_WppDb9ynlI1-nV8Q&usqp=CAU" class="mr-4 w-8 h-8 rounded-full" alt="">
                  <p class=" text-sm sm:text-md md:text-lg lg:text-lg font-medium text-gray-600">Visa Pay</p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      <div class=" col-span-4">
        <div class=" flex justify-between items-center p-5 border-t-2">
          <div  class=" cursor-pointer " @click="prePage()"><i class="fa-solid fa-arrow-left mr-2"></i>back</div>
          <div></div>
          <div >
          
          <button class=" animate-pulse bg-indigo-500 px-20 mr-1 sm:mr-1 md:mr-1 lg:mr-4 py-2 text-white rounded cursor-pointer disabled " @click="continueClick()">Next<i class="fa-solid fa-angles-right ml-2"></i></button>
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

