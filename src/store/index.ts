import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    name : null,
    email : null,
    phone : null,
    address : null,
    payment : null,
    date : null,
    time : null,
    forWhat : null,
    atId : null,
    messengerId : null,
    carIndex : null,
    airportId : null
  },
  getters: {
    name(state){
      return state.name;
    },
    email(state){
      return state.email;
    },
    phone(state){
      return state.phone;
    },
    address(state){
      return state.address;
    },
    payment(state){
      return state.payment;
    },
    date(state){
      return state.date;
    },
    time(state){
      return state.time;
    },
    forWhat(state){
      return state.forWhat
    },
    airportId(state){
      return state.airportId
    },
    atId(state){
      return state.atId
    },
    messengerId(state){
      return state.messengerId
    },
    carIndex(state){
      return state.carIndex
    },
  },
  mutations: {
    setName(state,data){
      state.name = data
    },
    setEmail(state,data){
      state.email = data
    },
    setPhone(state,data){
      state.phone = data
    },
    setAddress(state,data){
      state.address = data
    },
    setPayment(state,data){
      state.payment = data
    },
    setDate(state,data){
      state.date = data
    },
    setTime(state,data){
      state.time = data
    },
    setForWhat(state,data){
      state.forWhat = data
    },
    setAirportId(state,data){
      state.airportId = data
    },
    setAtId(state,data){
      state.atId = data
    },
    setMessengerId(state,data){
      state.messengerId = data
    },
    setCarIndex(state,data){
      state.carIndex = data
    },
  },
  actions: {
    nameAction({commit},data){
      commit('setName',data)
    },
    emailAction({commit},data){
      commit('setEmail',data)
    },
    phoneAction({commit},data){
      commit('setPhone',data)
    },
    addressAction({commit},data){
      commit('setAddress',data)
    },
    paymentAction({commit},data){
      commit('setPayment',data)
    },
    dateAction({commit},data){
      commit('setDate',data)
    },
    timeAction({commit},data){
      commit('setTime',data)
    },
    forWhatAction({commit},data){
      commit('setForWhat',data)
    },
    airportIdAction({commit},data){
      commit('setAirportId',data)
    },
    messengerIdAction({commit},data){
      commit('setMessengerId',data)
    },
    atIdAction({commit},data){
      commit('setAtId',data)
    },
    carIndexAction({commit},data){
      commit('setCarIndex',data)
    },
    async bookingAction({commit},data){
      const res = axios.post('https://chatbot-api.neptunestaging.xyz/api/booking',data);
      console.log(
        res
      );
      
    }
  },
  modules: {
    
  }
})
