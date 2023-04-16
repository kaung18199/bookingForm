<template>
  <div class=" flex justify-between items-center py-3 bg-gradient-to-r from-blue-500 px-10 rounded-lg">
    <img src="https://scontent.fmdl4-4.fna.fbcdn.net/v/t39.30808-6/317742048_138669532307614_7369569818320890056_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFbtaqcmjqlyDvOTPLnx70KmcGUx5054kaZwZTHnTniRkqP7SvgoUYvrTqA-pbH5W_KX9e4vVIJLYGhSdDbsvNL&_nc_ohc=UDu04bRM3McAX8ehMS5&_nc_oc=AQkD2UXHxat06kxt9ufq48UYfiy_fzHVy4oFQRqib8iKLTX-5opQH5KNRdmJnSQUaQjYEhr31f8jRSK5WbL1dXeQ&_nc_ht=scontent.fmdl4-4.fna&oh=00_AfDgHQx4uIx28JWdkwh02a6WwJ2oDZsq_In6rAgwOZhHeg&oe=643DCDE4" class="mr-2 w-14 border-2 rounded-full" alt="">
      <div class="flex justify-between items-center space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-4">
        <div class=" flex justify-center items-center space-x-2" >
            <router-link to="/" class=" py-2 px-[1.1rem] border-2 border-gray-100 rounded-full" active-class=" bg-indigo-400 text-white animate-pulse">1</router-link>
            <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Select Date & Time</p>
          </div>
    
    
          <div class=" flex justify-center items-center space-x-2">
            <router-link to="/enterInfo" class=" py-2 px-4 border-2 border-gray-100 rounded-full" active-class=" bg-indigo-400 text-white animate-pulse">2</router-link>
            <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Enter Info</p>
          </div> 
        <div class=" flex justify-center items-center space-x-2">
          <router-link to="/payment" class=" py-2 px-4 border-2 border-gray-100 rounded-full" active-class=" bg-indigo-400 text-white animate-pulse">3</router-link>
          <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Select Payment</p>
        </div> 
        <div class=" flex justify-center items-center space-x-2">
          <router-link to="/detail" class=" py-2 px-4 border-2 border-gray-100 rounded-full" active-class=" bg-indigo-400 text-white animate-pulse">4</router-link>
          <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Detail & Booking</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name : 'LayoutVue'
  }
</script>
