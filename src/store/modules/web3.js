import { Web3Provider } from '@/utils/web3'
import BigNumber from 'bignumber.js';
import { STC, MINER } from '@/utils/Coins'
import i18n from '@/utils/i18n/setUpI18n.js';



const max = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
const state = () => ({
    web3: null,
    defaultAccount: '',
    stcBalance: BigNumber(0),
})
const actions = {
    async connect({ commit }) {
        const provide = await Web3Provider.build();
        commit('setWeb3', provide);
        this.dispatch('res/init');
    },
    async getAccount(context) {
        // window.$message.success(i18n.global.t('home.approveSuccess'))
        return context.state.defaultAccount;
    },
    async buy(context, type) {
        const defaultAccount = context.state.defaultAccount;
        const web3 = context.state.web3;
        if (defaultAccount) {
            const { deposit, owner } = new web3.eth.Contract(MINER.abi, MINER.address).methods;
            const { approve, allowance } = new web3.eth.Contract(STC.abi, STC.address).methods;
            const value = await allowance(defaultAccount, MINER.address).call();
            if (!Number(value)) {
                await approve(MINER.address, max).send({ from: defaultAccount })
                window.$message.success(i18n.global.t('home.approveSuccess'))
            }
            return deposit(BigNumber(type).times(1e18).toFixed(0)).send({ from: defaultAccount })
        } else {
            console.log(i18n.global)
            window.$message.warning(i18n.global.t('home.placeConnect'))
            return Promise.reject()
        }
    }
}
const mutations = {
    setWeb3(state, payload) {
        state.web3 = payload.web3;
        state.defaultAccount = payload.defaultAccount;
    },

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}