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
import NftBlindBox from '@/page/NftBlindBox.vue';
import NftIllustrated from '@/page/NftIllustrated.vue';
import Invite from '@/page/Invite.vue';
import Venus from '@/page/Venus.vue';
import Ido from '@/page/Ido.vue';
import findPair from '@/page/childrens/findPair.vue';


const menu = '/dynamic/menu-swap.png'
const blackhold = '/dynamic/menu-blackhold.png';
const book = '/dynamic/menu-book.png';
const city = '/dynamic/menu-city.png';
const ifo = '/dynamic/menu-ifo.png';
const invite = '/dynamic/menu-invite.png';
const market = '/dynamic/menu-market.png';
const nft = '/dynamic/menu-nft.png';
const planet = '/dynamic/menu-planet.png';
const star = '/dynamic/menu-star.png';
const home = '/dynamic/menu-home.png';
const ido = '/dynamic/menu-ido.png';

export const routes = [{
    path: '/',
    component: Home,
    name: "Home",
    meta: {
        name: 'router.page',
        isVisiable: true,
        icon: home
    }
},
{
    path: '/Ido',
    component: Ido,
    name: 'Ido',
    meta: {
        name: 'home.ido',
        isVisiable: true,
        icon: ido
    }
},
{
    path: '/Swap',
    component: Swap,
    name: 'Swap',
    meta: {
        name: 'home.swap',
        isVisiable: true,
        icon: menu
    }
},
{
    path: '/Pool',
    component: Pool,
    name: 'Pool',
    meta: {
        name: 'home.PlanetPool',
        isVisiable: true,
        icon: planet
    }
},
{
    path: '/Blackhole',
    name: 'Blackhole',
    redirect: '/',
    meta: {
        name: 'home.blackhole',
        isVisiable: true,
        chickEvent: 'notice',
        icon: blackhold
    }
},
{
    path: '/NFT',
    redirect: '/BlindBox',
    // component: NFT,
    name: 'NFT',
    meta: {
        name: 'home.nft',
        isVisiable: true,
        icon: nft
    },
    children: [{
        path: '/BlindBox',
        component: NftBlindBox,
        name: 'BlindBox',
        meta: {
            name: 'home.BlindBox',
            isVisiable: true
        }
    },
    {
        path: '/Illustrated',
        component: NftIllustrated,
        name: 'Illustrated',
        meta: {
            name: 'home.Illustrated',
            isVisiable: true
        }
    }
    ]
},
{
    path: '/Market',
    name: 'Market',
    redirect: '/',
    meta: {
        name: 'home.Market',
        isVisiable: true,
        chickEvent: 'notice',
        icon: market
    }
},
{
    path: '/UCity',
    name: 'UCity',
    redirect: '/',
    meta: {
        name: 'home.UndergroundCity',
        isVisiable: true,
        chickEvent: 'notice',
        icon: city
    }
},
{
    path: '/Ifo',
    name: 'Ifo',
    redirect: '/IFO',
    meta: {
        name: 'home.ifo',
        isVisiable: true,
        icon: ifo
    },
    children: [
        {
            path: '/IFO',
            name:'IFO',
            redirect: '/',
            meta: {
                name: 'home.ifo',
                chickEvent: 'notice',
                isVisiable: true,
            }
        },
        {
            path: '/StarLeague',
            name: 'StarLeague',
            redirect: '/',
            meta: {
                name: 'home.StarLeague',
                isVisiable: true,
                chickEvent: 'notice',
                // icon: star
            }
        },
    ]
},

{
    path: '/whilePaper',
    name: 'whilePaper',
    redirect: '/',
    meta: {
        name: 'home.whilePaper',
        isVisiable: true,
        chickEvent: 'open',
        url: 'https://ji-nasorganization-1.gitbook.io/untitled/',
        icon: book
    }
},
{
    path: '/Invite',
    component: Invite,
    name: 'Invite',
    meta: {
        name: 'home.Invite',
        isVisiable: false,
        icon: invite
    }
},
{
    path: '/Venus',
    component: Venus,
    name: 'Venus',
    meta: {
        isVisiable: false,
    }
},
{
    path: '/Find',
    component: findPair,
    name: 'findPair',
    meta: {
        isVisiable: false,
    }
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
    redirect: "/",
    meta: {
        isVisiable: false
    }
}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router;