<template>
  <div class=" flex justify-between items-center py-3 bg-blue-400 px-2 sm:px-2 md:px-5 lg:px-10 rounded-t-lg">
      <div></div>
      <div class="flex justify-between items-center space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-4">
        <div class=" flex justify-center items-center space-x-2" >
            <router-link to="/" class=" py-[0.3rem] sm:py-2 px-[0.9rem] sm:px-[1.1rem] border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">1</router-link>
            
          </div>
          <div class=" flex justify-center items-center space-x-2" >
            <router-link to="/time" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">2</router-link>
            
          </div>
    
          <div class=" flex justify-center items-center space-x-2">
            <router-link to="/enterInfo" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">3</router-link>
            
          </div> 
        <div class=" flex justify-center items-center space-x-2">
          <router-link to="/payment" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">4</router-link>
          
        </div> 
        <div class=" flex justify-center items-center space-x-2">
          <router-link to="/detail" class=" py-1 sm:py-2 px-3 sm:px-4 border-2 border-gray-100 rounded-full" active-class=" bg-yellow-500 text-white animate-pulse">5</router-link>
          
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name : 'LayoutVue'
  }
</script>
