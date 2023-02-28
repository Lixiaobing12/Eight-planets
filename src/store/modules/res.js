import { useFetch } from "@/utils/request.js";

let debounce;
const getData = (commit) => {
    useFetch('/user/get')
        .then(res => {
            let value = ''
            switch (res.data.level) {
                case 1:
                    value = "mine.Seeker";
                    break;
                case 2:
                    value = "mine.PlanetExplorer";
                    break;
                case 3:
                    value = "mine.StarExplorer";
                    break;
                case 4:
                    value = "mine.SpaceExplorer";
                    break;
                case 5:
                    value = "mine.StarFounder";
                    break;
                case 6:
                    value = "mine.StarMonopoly";
                    break;
            }
            res.data.levelName = value;
            commit('SETTER', { userGet: res.data });
        })
    useFetch('/user/reward')
        .then(res => {
            commit('SETTER', { userReward: res.data });
        })
    useFetch("/deposit/list")
        .then(res => {
            if (!Array.isArray(res.data)) {
                res.data = [];
            }
            res.data.forEach((item) => {
                switch (item.value) {
                    case 10:
                        {
                            item.name = "buyMachine.Silver";
                            item.power = "0.1";
                            break;
                        }
                    case 100:
                        {
                            item.name = "buyMachine.gold";
                            item.power = "1";
                            break;
                        }
                    case 1000:
                        {
                            item.name = "buyMachine.Platinum";
                            item.power = "10";
                            break;
                        }
                    case 10000:
                        {
                            item.name = "buyMachine.Diamond";
                            item.power = "100";
                            break;
                        }
                    case 30000:
                        {
                            item.name = "buyMachine.Meteorite";
                            item.power = "300";
                            break;
                        }
                    case 100000:
                        {
                            item.name = "buyMachine.Interstellar";
                            item.power = "1000";
                            break;
                        }
                }
            });
            commit('SETTER', { depositList: res.data });
        })
}
const state = {
    userGet: {},
    userReward: {},
    depositList: [],
}
const actions = {
    init({ commit }) {
        getData(commit);
        debounce = setInterval(() => {
            getData(commit);
        }, 6000)
    },
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