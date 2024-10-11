(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=10)})({10:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(11);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},11:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Haa.1.06-18-2019 09:36:33
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Haa",revision:1,creditLabel:false,standaloneInit:false,baseWidth:412,baseHeight:600,baseScaleFactor:10,firstEntity:"BT.HA.BJ",entities:{"BT.HA.BJ":{outlines:[[M,2797,583,Q,2793,595,2769,609,2740,627,2736,631,2735,632,2711,651,2693,665,2684,680,L,2672,680,Q,2668,670,2656,658,2640,645,2632,638,2625,631,2592,600,L,2591,599,Q,2530,547,2518,539,2507,531,2451,531,2399,529,2371,532,2335,534,2321,540,2308,546,2289,546,2263,546,2260,543,2256,533,2242,516,2232,505,2224,489,2210,464,2207,460,2168,398,2136,344,2124,323,2100,292,2089,274,2082,263,2070,245,2055,245,2050,245,2039,238,2030,232,2023,233,2009,233,1994,227,L,1937,198,Q,1934,197,1932,196,1882,172,1842,157,1799,141,1778,128,1742,105,1732,100,1727,97,1684,63,1653,38,1634,38,1411,161,1320,219,1314,222,1308,226,1307,227,1305,228,1248,265,1220,325,1190,406,1160,452,1145,486,1133,504,1113,537,1085,535,1042,531,1004,542,952,556,939,592,920,645,892,729,867,798,839,852,825,881,797,907,769,930,740,942,682,965,674,972,666,981,661,1050,656,1119,701,1207,747,1294,750,1310,752,1325,729,1342,696,1363,678,1377,606,1432,613,1518,620,1609,587,1677,567,1715,523,1796,523,1799,523,1803,522,1817,521,1836,519,1867,523,1889,525,1907,550,1936,572,1965,572,1980,572,2014,522,2055,473,2095,473,2111,473,2136,507,2154,526,2165,568,2185,594,2204,624,2238,652,2271,659,2288,681,2336,689,2414,693,2460,703,2564,706,2576,711,2615,716,2649,724,2662,735,2679,769,2694,812,2712,823,2721,837,2731,879,2812,925,2900,925,2933,925,2960,891,2974,912,2993,926,3018,929,3023,938,3027,943,3031,954,3035,962,3039,977,3066,997,3100,1017,3123,1033,3142,1066,3171,1122,3221,1181,3258,1191,3264,1210,3267,1227,3269,1235,3277,1239,3281,1262,3293,1271,3301,1288,3307,L,1299,3307,Q,1317,3313,1343,3330,1370,3348,1384,3354,1397,3359,1422,3383,1440,3400,1464,3400,1490,3400,1502,3393,1518,3380,1538,3368,1556,3350,1566,3344,1588,3329,1599,3324,1603,3322,1613,3310,1621,3299,1624,3298,1645,3289,1656,3279,1664,3271,1682,3256,1700,3242,1708,3235,L,1767,3191,Q,1809,3161,1834,3149,1873,3130,1895,3122,1899,3121,1911,3115,1922,3109,1929,3108,1945,3105,1951,3105,1957,3105,1971,3106,2011,3106,2047,3100,2063,3097,2082,3085,2099,3073,2109,3072,2118,3071,2141,3056,2147,3052,2155,3049,2165,3048,2169,3045,2173,3042,2183,3040,2193,3038,2199,3034,2207,3027,2222,3014,L,2222,3013,Q,2221,3011,2221,3009,2216,2973,2245,2939,2249,2933,2264,2904,2268,2894,2268,2865,L,2266,2823,Q,2266,2815,2278,2802,2281,2799,2282,2788,2282,2768,2282,2766,2282,2744,2282,2734,2282,2718,2289,2707,2290,2706,2302,2681,2310,2664,2318,2656,2336,2638,2338,2637,2346,2625,2345,2609,2351,2590,2367,2572,2383,2555,2398,2547,L,2433,2525,Q,2438,2521,2450,2521,L,2471,2521,Q,2471,2521,2472,2520,L,2472,2521,Q,2481,2521,2489,2520,2495,2520,2500,2524,2501,2525,2510,2533,2515,2538,2521,2538,2547,2536,2611,2537,L,2612,2537,Q,2613,2537,2613,2536,2614,2536,2614,2537,2637,2537,2644,2543,2653,2549,2684,2552,2696,2553,2717,2565,2720,2566,2755,2566,2787,2566,2796,2560,2805,2551,2830,2553,2878,2553,2899,2541,2922,2525,2931,2527,2939,2528,2951,2528,2966,2528,2969,2524,2971,2522,2973,2518,2974,2510,2973,2496,2973,2474,2973,2467,2969,2434,2969,2409,2969,2380,2972,2373,2976,2363,3002,2316,3007,2307,3020,2296,3028,2290,3042,2280,3047,2275,3059,2263,3070,2253,3078,2254,3107,2254,3120,2241,L,3178,2236,Q,3187,2229,3198,2228,3206,2227,3210,2220,3212,2217,3214,2212,3224,2202,3223,2195,L,3221,2103,Q,3223,2076,3224,2063,3226,2039,3232,2027,3251,1992,3268,1970,3276,1958,3282,1954,3288,1949,3288,1940,3286,1917,3297,1906,3300,1903,3327,1887,3351,1874,3358,1865,3351,1858,3347,1853,3333,1840,3327,1833,3318,1823,3318,1809,3317,1802,3317,1785,3317,1773,3323,1773,3330,1774,3334,1759,3335,1754,3340,1751,3347,1745,3347,1744,L,3349,1724,Q,3349,1706,3345,1699,3336,1689,3329,1674,3322,1662,3307,1650,3291,1638,3290,1637,3248,1583,3218,1558,3206,1545,3198,1539,3187,1527,3179,1524,3148,1510,3138,1507,3100,1495,3086,1491,3062,1485,3035,1484,L,3035,1465,Q,3035,1460,3042,1387,3043,1373,3043,1354,3043,1330,3035,1301,3033,1293,3024,1277,3017,1264,3017,1252,3016,1245,3009,1227,3002,1205,3e3,1198,2995,1181,2993,1171,2988,1151,2989,1140,2994,1089,2970,1029,2960,1004,2930,947,2929,945,2928,943,2916,923,2909,911,2894,885,2893,872,2892,792,2892,791,L,2893,716,Q,2893,692,2887,685,2859,650,2854,642,2845,628,2826,609,2807,590,2801,583,Z]],label:"Bji Gewog",shortLabel:"BJ",labelPosition:[180.5,171.9],labelAlignment:[CEN,MID],nextId:"BT.HA.GA"},"BT.HA.GA":{outlines:[[M,2831,3824,Q,2832,3851,2820,3871,2799,3899,2796,3911,2784,3947,2783,3973,2781,3998,2779,4005,2776,4011,2771,4022,2765,4032,2765,4041,2765,4046,2764,4053,2750,4082,2749,4085,2740,4112,2738,4115,2733,4119,2727,4130,2720,4143,2721,4149,2724,4176,2714,4184,2695,4197,2649,4223,2623,4237,2617,4243,2613,4247,2604,4255,2595,4261,2589,4262,2573,4264,2562,4272,2556,4278,2538,4296,2529,4303,2505,4315,2486,4323,2481,4333,2477,4340,2467,4365,2458,4380,2449,4383,2445,4384,2442,4383,2431,4385,2423,4388,2403,4402,2393,4402,2387,4402,2373,4409,L,2358,4416,Q,2345,4418,2323,4437,2311,4447,2291,4464,2286,4467,2253,4485,2238,4492,2229,4507,2224,4516,2213,4545,2211,4547,2206,4551,2202,4555,2203,4558,L,2203,4574,Q,2202,4583,2201,4605,2180,4606,2169,4609,2142,4615,2135,4620,2125,4625,2103,4635,2078,4639,2072,4642,2071,4642,2060,4652,2051,4666,2047,4668,2032,4682,2020,4688,2015,4690,1989,4708,1973,4718,1969,4736,1968,4744,1969,4776,L,1969,4777,Q,1969,4780,1968,4808,1968,4823,1976,4832,1980,4838,1991,4857,2e3,4869,2009,4875,2009,4876,2010,4877,2012,4878,2013,4878,2012,4878,2010,4878,2002,4880,2002,4893,2002,4913,2001,4915,1998,4917,1984,4928,1981,4931,1981,4943,1981,4954,1982,4955,1984,4957,1997,4964,2002,4967,2016,4983,2022,4989,2039,5e3,2053,5009,2061,5018,2066,5027,2084,5045,2102,5064,2105,5076,2107,5086,2109,5092,2111,5097,2122,5100,2126,5102,2126,5114,2126,5120,2125,5132,2125,5144,2127,5168,2127,5191,2125,5206,2123,5221,2146,5229,2170,5237,2170,5247,2170,5257,2144,5269,2116,5281,2111,5283,2091,5299,2078,5300,2074,5300,2064,5310,2049,5324,2049,5325,2039,5333,1990,5373,1955,5402,1925,5422,1886,5453,1877,5454,1849,5457,1844,5458,1824,5464,1827,5482,1826,5492,1824,5496,1820,5500,1810,5503,1792,5508,1784,5515,1776,5519,1767,5520,1765,5520,1761,5525,1757,5529,1756,5531,1745,5540,1737,5541,1734,5542,1722,5542,L,1652,5536,Q,1642,5536,1637,5538,1622,5547,1616,5549,L,1601,5554,Q,1598,5555,1596,5561,1594,5566,1590,5566,1573,5566,1568,5564,1565,5562,1562,5559,1558,5554,1556,5552,1550,5545,1540,5545,1525,5547,1514,5547,1511,5547,1510,5547,1484,5545,1472,5547,1463,5548,1458,5551,1456,5553,1450,5562,1444,5571,1428,5576,1410,5580,1399,5584,1399,5584,1399,5585,1404,5599,1424,5615,1435,5623,1455,5635,1464,5642,1478,5658,1496,5677,1502,5682,1514,5693,1533,5706,1550,5718,1560,5728,1592,5760,1616,5766,1634,5769,1654,5791,1673,5814,1688,5821,1702,5828,1749,5871,1796,5914,1802,5914,1812,5914,1848,5886,1885,5856,1893,5851,L,1913,5851,Q,1918,5851,1934,5850,1949,5849,1955,5842,1960,5836,1978,5835,1998,5834,2002,5831,2005,5829,2016,5825,2028,5821,2034,5814,2039,5808,2053,5804,2058,5802,2063,5795,2067,5788,2072,5786,2075,5784,2082,5784,2085,5784,2093,5785,2096,5780,2107,5769,2112,5762,2123,5757,2136,5751,2141,5747,2146,5742,2160,5741,2170,5740,2175,5728,2177,5722,2184,5711,2191,5701,2192,5693,L,2214,5518,Q,2218,5480,2219,5478,2222,5468,2227,5458,2231,5449,2233,5442,2235,5433,2242,5425,2250,5417,2254,5410,2256,5406,2259,5391,2260,5382,2272,5382,2286,5382,2304,5421,2314,5442,2325,5472,2329,5484,2351,5526,2368,5556,2373,5576,2376,5591,2389,5626,2401,5659,2404,5677,2405,5687,2420,5693,2424,5695,2447,5703,2463,5708,2475,5718,2482,5723,2495,5736,2504,5750,2522,5769,2529,5777,2537,5781,2543,5784,2553,5788,2573,5798,2582,5809,2595,5825,2596,5849,2596,5857,2605,5865,2616,5875,2618,5879,2624,5891,2630,5897,2634,5902,2645,5912,2664,5932,2676,5951,2683,5960,2707,5960,2728,5960,2729,5957,2736,5944,2760,5929,2766,5923,2771,5919,2773,5916,2778,5916,2780,5916,2786,5916,L,2803,5885,2851,5827,Q,2863,5809,2868,5798,2879,5780,2881,5771,L,2881,5701,Q,2880,5688,2887,5664,2894,5641,2894,5633,L,2894,5598,Q,2893,5590,2901,5583,2910,5576,2912,5573,2938,5531,2954,5510,2970,5486,3008,5467,3021,5454,3031,5447,3041,5440,3048,5438,3050,5438,3064,5438,3064,5438,3124,5438,L,3155,5438,Q,3162,5438,3168,5443,3177,5449,3183,5451,L,3184,5451,Q,3193,5455,3211,5454,3231,5453,3241,5455,3249,5457,3265,5464,3277,5470,3289,5470,3326,5469,3377,5472,3380,5472,3384,5472,L,3453,5472,Q,3486,5472,3509,5470,3512,5395,3512,5350,L,3523,5329,Q,3526,5325,3526,5315,3526,5304,3526,5303,3533,5266,3534,5246,3540,5219,3529,5197,3515,5175,3510,5165,3504,5154,3493,5139,3487,5131,3488,5119,L,3488,5096,Q,3488,5092,3483,5083,3479,5075,3479,5071,3479,5063,3485,5049,3490,5035,3490,5025,3489,5013,3495,5006,3499,5002,3514,4992,3567,4956,3585,4945,3612,4929,3674,4895,3681,4891,3696,4883,3707,4877,3711,4871,L,3711,4838,Q,3711,4835,3711,4832,3713,4813,3713,4791,3713,4776,3707,4755,3700,4736,3700,4722,L,3700,4704,Q,3707,4693,3711,4686,3717,4675,3734,4653,3747,4627,3782,4588,3787,4581,3804,4549,3815,4528,3828,4513,3830,4511,3842,4494,3849,4484,3857,4478,3862,4475,3874,4454,3875,4453,3875,4451,3882,4442,3907,4418,3929,4398,3929,4383,3929,4369,3925,4357,3922,4351,3912,4335,3893,4306,3882,4297,3875,4292,3861,4286,3846,4281,3838,4275,3823,4264,3816,4260,3806,4251,3799,4240,3794,4231,3776,4198,3764,4177,3750,4162,3743,4155,3738,4139,3733,4119,3730,4115,3726,4107,3725,4093,3724,4077,3725,4070,3725,4062,3724,4057,3724,4049,3728,4039,3729,4036,3739,4024,L,3739,4014,Q,3722,4014,3594,4010,3486,4007,3455,4010,3431,4012,3405,4002,3373,3987,3351,3980,3338,3975,3309,3959,3278,3941,3260,3934,3255,3932,3242,3920,3228,3907,3221,3904,3215,3901,3202,3891,3189,3882,3179,3877,3166,3869,3159,3866,3148,3860,3140,3859,L,3115,3859,Q,3107,3858,3102,3854,3097,3849,3093,3844,3087,3838,3071,3838,3057,3838,3055,3834,3051,3826,3049,3812,3047,3797,3049,3791,3053,3769,3031,3755,3e3,3740,2986,3729,L,2955,3729,Q,2955,3729,2954,3730,2951,3733,2933,3740,2929,3742,2912,3754,2898,3764,2893,3764,2882,3763,2874,3773,2866,3784,2862,3790,Q,2837,3813,2831,3824,Z]],label:"Gakiling Gewog",shortLabel:"GA",labelPosition:[266.4,484.4],labelAlignment:[CEN,MID],nextId:"BT.HA.KS"},"BT.HA.KS":{outlines:[[M,3438,1934,L,3393,1894,Q,3371,1878,3358,1865,3351,1874,3327,1887,3300,1903,3297,1906,3286,1917,3288,1940,3288,1949,3282,1954,3276,1958,3268,1970,3251,1992,3232,2027,3226,2039,3224,2063,3223,2076,3221,2103,L,3223,2195,Q,3224,2202,3214,2212,3212,2217,3210,2220,3206,2227,3198,2228,3187,2229,3178,2236,L,3120,2241,Q,3107,2254,3078,2254,3070,2253,3059,2263,3047,2275,3042,2280,3028,2290,3020,2296,3007,2307,3002,2316,2976,2363,2972,2373,2969,2380,2969,2409,2969,2434,2973,2467,2973,2474,2973,2496,2974,2510,2973,2518,L,3053,2518,Q,3061,2528,3072,2537,L,3115,2565,Q,3124,2571,3134,2572,3137,2572,3140,2573,3155,2570,3159,2569,3165,2569,3168,2567,3173,2565,3195,2551,3199,2547,3206,2547,3213,2547,3220,2544,L,3293,2510,Q,3296,2508,3306,2506,3315,2504,3319,2502,3322,2500,3329,2490,3330,2488,3340,2488,L,3340,2488,Q,3340,2489,3348,2487,3360,2486,3374,2493,3375,2494,3384,2501,3391,2507,3398,2508,3420,2508,3430,2516,3435,2520,3456,2520,3457,2520,3468,2520,3480,2520,3489,2518,3500,2516,3516,2501,3522,2496,3545,2488,3557,2481,3564,2479,3571,2477,3580,2476,3589,2476,3595,2478,3600,2480,3604,2483,3613,2489,3622,2490,3627,2491,3638,2499,3648,2505,3658,2505,3678,2505,3692,2494,3706,2482,3715,2481,L,3684,2422,Q,3642,2339,3624,2307,3605,2264,3595,2247,3586,2233,3579,2223,3569,2208,3568,2201,3562,2190,3556,2176,3551,2158,3547,2147,3544,2137,3533,2119,3523,2100,3521,2093,3502,2046,3491,2035,3486,2030,3478,2010,3472,1991,3473,1980,3474,1965,3460,1952,Q,3443,1940,3438,1934,Z]],label:"Katsho Gewog",shortLabel:"KS",labelPosition:[334.2,227.4],labelAlignment:[CEN,MID],nextId:"BT.HA.SA"},"BT.HA.SA":{outlines:[[M,3072,2537,Q,3061,2528,3053,2518,L,2973,2518,Q,2971,2522,2969,2524,2966,2528,2951,2528,2939,2528,2931,2527,2922,2525,2899,2541,2878,2553,2830,2553,2805,2551,2796,2560,2787,2566,2755,2566,2720,2566,2717,2565,2696,2553,2684,2552,2653,2549,2644,2543,2637,2537,2614,2537,2613,2537,2612,2537,L,2611,2537,Q,2547,2536,2521,2538,2515,2538,2510,2533,2501,2525,2500,2524,2495,2520,2489,2520,2481,2521,2472,2521,L,2450,2521,Q,2438,2521,2433,2525,L,2398,2547,Q,2383,2555,2367,2572,2351,2590,2345,2609,2346,2625,2338,2637,2336,2638,2318,2656,2310,2664,2302,2681,2290,2706,2289,2707,2282,2718,2282,2734,2282,2744,2282,2766,2282,2768,2282,2788,2281,2799,2278,2802,2266,2815,2266,2823,L,2268,2865,Q,2268,2894,2264,2904,2249,2933,2245,2939,2216,2973,2221,3009,2221,3011,2222,3013,L,2222,3014,Q,2227,3024,2238,3029,2245,3033,2265,3042,2270,3045,2291,3057,2306,3066,2315,3074,2329,3087,2361,3124,L,2382,3145,Q,2385,3147,2388,3157,2391,3166,2394,3169,2402,3178,2433,3205,2460,3235,2454,3264,2450,3283,2457,3293,2462,3300,2481,3318,2482,3320,2502,3339,2515,3351,2525,3365,2532,3373,2546,3391,2559,3407,2573,3413,2585,3417,2604,3433,2620,3446,2630,3448,2638,3449,2663,3448,2682,3447,2696,3451,2714,3456,2726,3465,2733,3471,2748,3486,2759,3497,2776,3506,2778,3507,2806,3518,2814,3522,2835,3533,2856,3542,2873,3541,2882,3540,2889,3548,2893,3553,2900,3562,L,2922,3580,Q,2925,3591,2932,3612,2936,3626,2937,3638,2937,3642,2938,3645,2939,3662,2948,3677,2958,3694,2958,3711,2958,3723,2955,3729,L,2986,3729,Q,3e3,3740,3031,3755,3053,3769,3049,3791,3047,3797,3049,3812,3051,3826,3055,3834,3057,3838,3071,3838,3087,3838,3093,3844,3097,3849,3102,3854,3107,3858,3115,3859,L,3140,3859,Q,3148,3860,3159,3866,3166,3869,3179,3877,3189,3882,3202,3891,3215,3901,3221,3904,3228,3907,3242,3920,3255,3932,3260,3934,3278,3941,3309,3959,3338,3975,3351,3980,3373,3987,3405,4002,3431,4012,3455,4010,3486,4007,3594,4010,3722,4014,3739,4014,L,3739,4007,Q,3739,3989,3737,3986,3730,3977,3718,3961,3694,3926,3686,3912,3660,3878,3650,3863,3649,3860,3648,3849,3648,3836,3647,3831,3645,3807,3645,3805,3645,3794,3649,3785,L,3656,3769,Q,3656,3763,3659,3750,3662,3736,3659,3725,3656,3712,3660,3688,3663,3664,3661,3644,3667,3558,3658,3540,3649,3521,3649,3501,3648,3482,3646,3471,3644,3460,3644,3455,3644,3443,3641,3421,3637,3398,3638,3377,3638,3356,3644,3342,3649,3327,3673,3307,3686,3294,3704,3279,3713,3270,3716,3267,3723,3263,3736,3260,L,3814,3259,Q,3820,3258,3826,3254,3832,3250,3839,3249,3877,3238,3937,3202,3938,3202,3940,3200,3938,3198,3937,3195,3933,3189,3931,3187,3929,3185,3918,3180,3897,3168,3887,3169,L,3813,3169,Q,3813,3168,3806,3168,3797,3167,3777,3168,3732,3169,3722,3169,3717,3168,3711,3173,3704,3180,3701,3180,3692,3182,3675,3182,3659,3182,3653,3182,L,3629,3180,Q,3620,3180,3615,3176,3611,3170,3608,3167,3595,3155,3591,3150,3589,3146,3580,3126,3575,3118,3565,3105,3552,3091,3547,3084,3522,3046,3520,3042,L,3500,3035,Q,3487,3026,3485,3024,3480,3021,3461,3021,3444,3021,3432,3023,3417,3024,3402,3015,3398,3013,3381,3e3,3366,2984,3361,2981,3355,2977,3340,2977,L,3337,2978,Q,3334,2978,3327,2978,3314,2979,3310,2979,3293,2978,3246,2948,3243,2946,3211,2929,3184,2917,3175,2906,3173,2904,3170,2889,3167,2873,3166,2871,3163,2865,3161,2860,3156,2849,3155,2843,3152,2824,3147,2805,3144,2794,3144,2775,3144,2736,3154,2725,3162,2714,3162,2704,3162,2689,3162,2674,3163,2600,3159,2569,3155,2570,3140,2573,3137,2572,3134,2572,3124,2571,3115,2565,Z]],label:"Sama Gewog",shortLabel:"SA",labelPosition:[299.8,326.6],labelAlignment:[CEN,MID],nextId:"BT.HA.SB"},"BT.HA.SB":{outlines:[[M,2394,3169,Q,2391,3166,2388,3157,2385,3147,2382,3145,L,2361,3124,Q,2329,3087,2315,3074,2306,3066,2291,3057,2270,3045,2265,3042,2245,3033,2238,3029,2227,3024,2222,3014,2207,3027,2199,3034,2193,3038,2183,3040,2173,3042,2169,3045,2165,3048,2155,3049,2147,3052,2141,3056,2118,3071,2109,3072,2099,3073,2082,3085,2063,3097,2047,3100,2011,3106,1971,3106,1957,3105,1951,3105,1945,3105,1929,3108,1922,3109,1911,3115,1899,3121,1895,3122,1873,3130,1834,3149,1809,3161,1767,3191,L,1708,3235,Q,1700,3242,1682,3256,1664,3271,1656,3279,1645,3289,1624,3298,1621,3299,1613,3310,1603,3322,1599,3324,1588,3329,1566,3344,1556,3350,1538,3368,1518,3380,1502,3393,1490,3400,1464,3400,1440,3400,1422,3383,1397,3359,1384,3354,1370,3348,1343,3330,1317,3313,1299,3307,L,1288,3307,Q,1271,3301,1262,3293,1239,3281,1235,3277,1227,3269,1210,3267,1191,3264,1181,3258,1122,3221,1066,3171,1033,3142,1017,3123,997,3100,977,3066,962,3039,954,3035,943,3031,938,3027,929,3023,926,3018,912,2993,891,2974,873,2981,846,2985,761,2989,749,2991,719,2998,682,3067,648,3131,598,3131,545,3131,504,3087,479,3060,442,2991,404,2921,381,2896,342,2852,290,2852,242,2852,182,2976,154,3033,122,3110,120,3113,119,3117,115,3122,114,3128,112,3133,111,3138,111,3141,111,3168,110,3176,103,3197,99,3215,99,3227,L,102,3276,Q,102,3296,97,3302,92,3307,71,3327,62,3336,53,3353,45,3370,45,3383,45,3391,59,3402,72,3412,82,3412,114,3412,140,3420,163,3428,170,3430,184,3433,202,3432,211,3431,228,3438,251,3446,256,3447,318,3459,356,3477,402,3499,443,3540,468,3576,481,3606,492,3632,502,3671,510,3704,536,3740,550,3760,581,3802,598,3827,670,3928,722,4e3,751,4052,752,4054,754,4056,768,4100,783,4151,806,4231,806,4260,806,4266,791,4318,775,4369,775,4372,775,4377,762,4396,751,4413,758,4431,756,4445,741,4458,L,739,4493,Q,739,4498,751,4500,762,4503,762,4515,762,4524,754,4533,747,4542,747,4550,747,4580,737,4596,724,4604,717,4614,712,4622,708,4636,703,4653,701,4698,699,4704,690,4724,682,4744,682,4755,682,4776,689,4827,L,690,4846,Q,692,4857,701,4864,702,4865,719,4875,733,4884,736,4889,753,4920,818,4922,853,4922,909,4917,912,4934,915,4940,922,4955,938,4962,947,4967,957,4980,966,4995,977,5e3,998,5011,1003,5039,1005,5053,1009,5079,1009,5084,1009,5089,1009,5102,1009,5122,1009,5147,1014,5164,1016,5172,1042,5201,1065,5227,1065,5242,L,1061,5284,Q,1061,5305,1088,5320,1103,5329,1133,5343,1155,5358,1180,5368,1216,5382,1230,5389,1276,5411,1311,5448,1336,5473,1377,5529,1379,5530,1380,5533,1387,5541,1391,5555,1394,5563,1399,5584,1410,5580,1428,5576,1444,5571,1450,5562,1456,5553,1458,5551,1463,5548,1472,5547,1484,5545,1510,5547,1511,5547,1514,5547,1525,5547,1540,5545,1550,5545,1556,5552,1558,5554,1562,5559,1565,5562,1568,5564,1573,5566,1590,5566,1594,5566,1596,5561,1598,5555,1601,5554,L,1616,5549,Q,1622,5547,1637,5538,1642,5536,1652,5536,L,1722,5542,Q,1734,5542,1737,5541,1745,5540,1756,5531,1757,5529,1761,5525,1765,5520,1767,5520,1776,5519,1784,5515,1792,5508,1810,5503,1820,5500,1824,5496,1826,5492,1827,5482,1824,5464,1844,5458,1849,5457,1877,5454,1886,5453,1925,5422,1955,5402,1990,5373,2039,5333,2049,5325,2049,5324,2064,5310,2074,5300,2078,5300,2091,5299,2111,5283,2116,5281,2144,5269,2170,5257,2170,5247,2170,5237,2146,5229,2123,5221,2125,5206,2127,5191,2127,5168,2125,5144,2125,5132,2126,5120,2126,5114,2126,5102,2122,5100,2111,5097,2109,5092,2107,5086,2105,5076,2102,5064,2084,5045,2066,5027,2061,5018,2053,5009,2039,5e3,2022,4989,2016,4983,2002,4967,1997,4964,1984,4957,1982,4955,1981,4954,1981,4943,1981,4931,1984,4928,1998,4917,2001,4915,2002,4913,2002,4893,2002,4880,2010,4878,2012,4878,2013,4878,2012,4878,2010,4877,2009,4876,2009,4875,2e3,4869,1991,4857,1980,4838,1976,4832,1968,4823,1968,4808,1969,4780,1969,4777,L,1969,4776,Q,1968,4744,1969,4736,1973,4718,1989,4708,2015,4690,2020,4688,2032,4682,2047,4668,2051,4666,2060,4652,2071,4642,2072,4642,2078,4639,2103,4635,2125,4625,2135,4620,2142,4615,2169,4609,2180,4606,2201,4605,2202,4583,2203,4574,L,2203,4558,Q,2202,4555,2206,4551,2211,4547,2213,4545,2224,4516,2229,4507,2238,4492,2253,4485,2286,4467,2291,4464,2311,4447,2323,4437,2345,4418,2358,4416,L,2373,4409,Q,2387,4402,2393,4402,2403,4402,2423,4388,2431,4385,2442,4383,2445,4384,2449,4383,2458,4380,2467,4365,2477,4340,2481,4333,2486,4323,2505,4315,2529,4303,2538,4296,2556,4278,2562,4272,2573,4264,2589,4262,2595,4261,2604,4255,2613,4247,2617,4243,2623,4237,2649,4223,2695,4197,2714,4184,2724,4176,2721,4149,2720,4143,2727,4130,2733,4119,2738,4115,2740,4112,2749,4085,2750,4082,2764,4053,2765,4046,2765,4041,2765,4032,2771,4022,2776,4011,2779,4005,2781,3998,2783,3973,2784,3947,2796,3911,2799,3899,2820,3871,2832,3851,2831,3824,2837,3813,2862,3790,2866,3784,2874,3773,2882,3763,2893,3764,2898,3764,2912,3754,2929,3742,2933,3740,2951,3733,2954,3730,2955,3729,2955,3729,2958,3723,2958,3711,2958,3694,2948,3677,2939,3662,2938,3645,2937,3642,2937,3638,2936,3626,2932,3612,2925,3591,2922,3580,L,2900,3562,Q,2893,3553,2889,3548,2882,3540,2873,3541,2856,3542,2835,3533,2814,3522,2806,3518,2778,3507,2776,3506,2759,3497,2748,3486,2733,3471,2726,3465,2714,3456,2696,3451,2682,3447,2663,3448,2638,3449,2630,3448,2620,3446,2604,3433,2585,3417,2573,3413,2559,3407,2546,3391,2532,3373,2525,3365,2515,3351,2502,3339,2482,3320,2481,3318,2462,3300,2457,3293,2450,3283,2454,3264,2460,3235,2433,3205,Q,2402,3178,2394,3169,Z]],label:"Sangbay Gewog",shortLabel:"SB",labelPosition:[150.1,421.8],labelAlignment:[CEN,MID],nextId:"BT.HA.UE"},"BT.HA.UE":{outlines:[[M,3622,2490,Q,3613,2489,3604,2483,3600,2480,3595,2478,3589,2476,3580,2476,3571,2477,3564,2479,3557,2481,3545,2488,3522,2496,3516,2501,3500,2516,3489,2518,3480,2520,3468,2520,3457,2520,3456,2520,3435,2520,3430,2516,3420,2508,3398,2508,3391,2507,3384,2501,3375,2494,3374,2493,3360,2486,3348,2487,3340,2489,3340,2488,L,3340,2488,Q,3330,2488,3329,2490,3322,2500,3319,2502,3315,2504,3306,2506,3296,2508,3293,2510,L,3220,2544,Q,3213,2547,3206,2547,3199,2547,3195,2551,3173,2565,3168,2567,3165,2569,3159,2569,3163,2600,3162,2674,3162,2689,3162,2704,3162,2714,3154,2725,3144,2736,3144,2775,3144,2794,3147,2805,3152,2824,3155,2843,3156,2849,3161,2860,3163,2865,3166,2871,3167,2873,3170,2889,3173,2904,3175,2906,3184,2917,3211,2929,3243,2946,3246,2948,3293,2978,3310,2979,3314,2979,3327,2978,3334,2978,3337,2978,L,3340,2977,Q,3355,2977,3361,2981,3366,2984,3381,3e3,3398,3013,3402,3015,3417,3024,3432,3023,3444,3021,3461,3021,3480,3021,3485,3024,3487,3026,3500,3035,L,3520,3042,Q,3522,3046,3547,3084,3552,3091,3565,3105,3575,3118,3580,3126,3589,3146,3591,3150,3595,3155,3608,3167,3611,3170,3615,3176,3620,3180,3629,3180,L,3653,3182,Q,3659,3182,3675,3182,3692,3182,3701,3180,3704,3180,3711,3173,3717,3168,3722,3169,3732,3169,3777,3168,3797,3167,3806,3168,3813,3168,3813,3169,L,3887,3169,Q,3897,3168,3918,3180,3929,3185,3931,3187,3933,3189,3937,3195,3938,3198,3940,3200,3951,3191,3977,3159,3988,3144,4009,3124,4026,3107,4053,3086,4072,3069,4072,3042,4072,3025,4066,3011,4060,2999,4058,2988,4054,2962,4035,2939,4007,2911,3992,2890,3958,2848,3949,2832,3946,2827,3929,2809,3915,2795,3914,2784,3912,2774,3911,2758,L,3911,2729,Q,3913,2687,3911,2671,3910,2667,3904,2657,3897,2648,3897,2645,3895,2638,3886,2629,3878,2620,3872,2617,3863,2614,3846,2605,3842,2602,3833,2602,3825,2602,3821,2602,L,3820,2602,Q,3801,2605,3797,2600,L,3778,2577,Q,3750,2544,3742,2529,L,3715,2481,Q,3706,2482,3692,2494,3678,2505,3658,2505,3648,2505,3638,2499,Q,3627,2491,3622,2490,Z]],label:"Uesu Gewog",shortLabel:"UE",labelPosition:[360.8,283.8],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"haa",type:"maps"}}})});