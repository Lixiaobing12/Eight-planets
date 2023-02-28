import axios from 'axios';
import { Web3Provider } from './web3';
import { store } from '@/store';


const baseUrl = '/api'
axios.interceptors.response.use(res => {
    if (res.status === 200) {
        return res.data
    }
})

export const useFetch = async(url, data) => {
    const account = await store.dispatch('web3/getAccount');
    if (account) {
        const newData = Object.assign({}, data, {
            user_addr: account
        })
        return axios.post(baseUrl + url, newData)
    } else {
        return Promise.reject(new Error('Not Account'))
    }
}