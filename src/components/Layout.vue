<template>
  <div class=" flex justify-between items-center py-3 bg-blue-400 px-10 rounded-t-lg">
    <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/317742048_138669532307614_7369569818320890056_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFbtaqcmjqlyDvOTPLnx70KmcGUx5054kaZwZTHnTniRkqP7SvgoUYvrTqA-pbH5W_KX9e4vVIJLYGhSdDbsvNL&_nc_ohc=dGlMejJjPtYAX9NuIB8&_nc_oc=AQk62pb1dlankrCQUEaMa0M-vQd-4QbZfsolYd4rR60NYDMWFl5DelZf4OKSV63T752sczMgyPL-U7E-v5wstqEY&_nc_ht=scontent-sin6-3.xx&oh=00_AfBWYh078cLzqqWb4KveHwMa9nCY8-XFl0vK9HT0Kj-QUQ&oe=6443BCA4" class="mr-2 w-14 border-2 rounded-full" alt="">
      <div class="flex justify-between items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
        <div class=" flex justify-center items-center space-x-2" >
            <router-link to="/" class=" py-[0.3rem] sm:py-2 px-[0.9rem] sm:px-[1.1rem] border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">1</router-link>
            <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Select Date</p>
          </div>
          <div class=" flex justify-center items-center space-x-2" >
            <router-link to="/time" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">2</router-link>
            <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Select Time</p>
          </div>
    
          <div class=" flex justify-center items-center space-x-2">
            <router-link to="/enterInfo" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">3</router-link>
            <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Enter Info</p>
          </div> 
        <div class=" flex justify-center items-center space-x-2">
          <router-link to="/payment" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">4</router-link>
          <p class=" text-gray-600 hidden sm:hidden md:hidden lg:hidden xl:block">Select Payment</p>
        </div> 
        <div class=" flex justify-center items-center space-x-2">
          <router-link to="/detail" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">5</router-link>
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
