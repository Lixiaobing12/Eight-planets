import BigNumber from 'bignumber.js';
import moment from 'moment';
import Web3 from 'web3';

let web3 = null;
const max = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
export class Web3Provider {
    static async build() {
        if (web3) return web3;
        let web3Provider;
        if (window.ethereum) {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    // chainId: '0x38',
                    chainId: '0x61',
                }]
            })
            web3Provider = window.ethereum;
            try {
                await window.ethereum.enable();
            } catch (error) {
                console.error("User denied account access");
            }
        } else if ("web3" in window) {
            web3Provider = Web3.currentProvider;
        } else {
            web3Provider = new Web3.providers.HttpProvider(
                "https://bsc-dataseed1.binance.org/"
            );
        }
        const _web3 = new Web3(web3Provider);
        const [defaultAccount] = await _web3.eth.getAccounts();

        window.ethereum.on("accountsChanged", () => {
            window.location.reload();
        });
        web3 = new Web3Provider(defaultAccount, _web3);
        return web3;
    }

    constructor(defaultAccount, web3) {
        this.defaultAccount = defaultAccount;
        this.web3 = web3;
    }
}