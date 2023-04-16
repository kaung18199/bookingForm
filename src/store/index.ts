import { createStore } from 'vuex'

export default createStore({
  state: {
    name : null,
    email : null,
    phone : null,
    address : null,
    payment : null,
    date : null,
    time : null,
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
  },
  modules: {
  }
})
