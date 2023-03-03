import { useFetch } from "@/utils/request.js";

const state = {
    userGet: {},
    userReward: {},
    depositList: [],
}
const actions = {
    init({ commit }) {},
    clear() {
        clearInterval(debounce);
    }
}
const mutations = {
    SETTER(state, payload) {
        Object.entries(payload).forEach(([key, value]) => {
            state[key] = value;
        })
    },
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}