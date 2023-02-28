import BigNumber from "bignumber.js"
import moment from "moment";

export const formatter_BigNumber = (bignumber, toFixed = 4) => {
    if (BigNumber.isBigNumber(bignumber)) {
        return bignumber.div(1e18).toFixed(toFixed);
    }
    return BigNumber(bignumber).div(1e18).toFixed(toFixed)
}

export const formatter_monent = (unix) => {
    return moment.unix(unix).format('YYYY-MM-DD HH:mm:ss')
}
export const FORMATTER_ADDRS = (address) => {
    return address.substring(0, 6) + '...' + address.substring(38)
}