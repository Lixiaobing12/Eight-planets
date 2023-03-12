import { Web3Provider } from '@/utils/web3'
import BigNumber from 'bignumber.js';
import { STC, MINER, snailIdo } from '@/utils/Coins'
import i18n from '@/utils/i18n/setUpI18n.js';
import { snailInv } from '../../utils/Coins';



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
    async isActive(context) {
        const web3 = context.state.web3;
        const { isActive } = new web3.eth.Contract(snailIdo.abi, snailIdo.address).methods;
        return isActive().call();
    },
    async balanceOf(context) {
        const web3 = context.state.web3;
        const { balanceOf } = new web3.eth.Contract(snailIdo.abi, snailIdo.address).methods;
        return balanceOf(context.state.defaultAccount).call();
    },
    async buy(context, amount) {
        const defaultAccount = context.state.defaultAccount;
        const web3 = context.state.web3;
        if (defaultAccount) {
            const { purchase } = new web3.eth.Contract(snailIdo.abi, snailIdo.address).methods;

            return purchase(amount.toFixed(0)).send({ from: defaultAccount, value: amount.toFixed(0) })
        } else {
            window.$message.warning(i18n.global.t('home.placeConnect'))
            return Promise.reject()
        }
    },
    async getInviter(context) {
        const defaultAccount = context.state.defaultAccount;
        const web3 = context.state.web3;
        if (defaultAccount) {
            const { getInviter } = new web3.eth.Contract(snailInv.abi, snailInv.address).methods;
            return getInviter(defaultAccount).call();
        }
        return ''
    },
    async invite(context, parent) {
        const defaultAccount = context.state.defaultAccount;
        const web3 = context.state.web3;
        const { invite } = new web3.eth.Contract(snailInv.abi, snailInv.address).methods;
        return invite(defaultAccount, parent).send({ from: defaultAccount });
    },
    async getInviterSunSize(context) {
        const defaultAccount = context.state.defaultAccount;
        const web3 = context.state.web3;
        const { getInviterSunSize } = new web3.eth.Contract(snailInv.abi, snailInv.address).methods;
        return getInviterSunSize(defaultAccount).call();
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