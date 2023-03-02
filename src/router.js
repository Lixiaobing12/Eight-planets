import * as VueRouter from 'vue-router'
import Home from './page/Home.vue';
// import Guess from './page/Guess.vue';
// import Mining from './page/Mining.vue';
// import Mine from './page/Mine.vue';
// import BuyMachine from './page/childrens/BuyMachine.vue'
// import Detail from './page/childrens/Detail.vue'
// import EarningsDetail from './page/childrens/EarningsDetail.vue'
// import Lang from './page/childrens/Lang.vue'
// import MyGuess from './page/childrens/MyGuess.vue'
// import StarTeam from './page/childrens/StarTeam.vue'
// import Wallet from './page/childrens/Wallet.vue'
// import MyPower from './page/childrens/MyPower.vue'
// import i18n from '@/utils/i18n/setUpI18n.js';
import Pool from '@/page/Pool.vue';
import Swap from '@/page/Swap.vue';
import NFT from '@/page/NFT.vue';
import BlindBox from '@/page/BlindBox.vue';
import Illustrated from '@/page/Illustrated.vue';
import Planet from '@/page/Planet.vue';

export const routes = [{
        path: '/',
        component: Home,
        name: "Home",
        meta: {
            name: 'router.home',
            homepage: true
        }
    },
    {
        path: '/Swap',
        component: Swap,
        name: 'Swap',
    },
    {
        path: '/Pool',
        component: Pool,
        name: 'Pool',
    },
    {
        path: '/Planet',
        component: Planet,
        name: 'Planet',
    },
    {
        path: '/NFT',
        // redirect: '/BlindBox',
        component: NFT,
        name: 'NFT'
            // children: [{
            //         path: '/BlindBox',
            //         component: BlindBox,
            //         name: 'BlindBox',
            //     },
            //     {
            //         path: '/Illustrated',
            //         component: Illustrated,
            //         name: 'Illustrated'
            //     }
            // ]
    },
    // {
    //     path: '/Guess',
    //     component: Guess,
    //     name: "Guess",
    //     meta: {
    //         name: 'router.guess',
    //         homepage: true
    //     }
    // },
    // {
    //     path: '/Mining',
    //     component: Mining,
    //     name: "Mining",
    //     meta: {
    //         name: 'router.mining',
    //         homepage: true
    //     }
    // },
    // {
    //     path: '/Mine',
    //     component: Mine,
    //     name: "Mine",
    //     meta: {
    //         name: 'router.mine',
    //         homepage: true
    //     }
    // },
    // {
    //     path: "/BuyMachine",
    //     component: BuyMachine,
    //     name: "buy-machine",
    //     meta: {
    //         name: 'home.buy',
    //         homepage: false
    //     }
    // },
    // {
    //     path: "/Detail/:id",
    //     component: Detail,
    //     name: "detail",
    //     meta: {
    //         name: 'buyMachine.detail',
    //         homepage: false
    //     }
    // },
    // {
    //     path: "/EarningsDetail",
    //     component: EarningsDetail,
    //     name: "EarningsDetail",
    //     meta: {
    //         name: 'router.RevenueDetails',
    //         homepage: false
    //     }
    // },
    // {
    //     path: "/Lang",
    //     component: Lang,
    //     name: "Lang",
    //     meta: {
    //         name: 'router.langChange',
    //         homepage: false
    //     }
    // },
    // {
    //     path: "/MyGuess",
    //     component: MyGuess,
    //     name: "MyGuess",
    //     meta: {
    //         name: 'router.MyGuess',
    //         homepage: false
    //     }
    // },
    // {
    //     path: "/StarTeam",
    //     component: StarTeam,
    //     name: "StarTeam",
    //     meta: {
    //         name: 'home.starTeam',
    //         homepage: false
    //     }
    // },
    // {
    //     path: "/Wallet",
    //     component: Wallet,
    //     name: "Wallet",
    //     meta: {
    //         name: 'mine.wallet',
    //         homepage: false
    //     }
    // },
    // {
    //     path: '/MyPower',
    //     component: MyPower,
    //     name: 'MyPower',
    //     meta: {
    //         name: 'home.computingPower',
    //         homepage: false

    //     }
    // },
    {
        path: "/:pathMatch(.*)",
        redirect: "/"
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
export default router;