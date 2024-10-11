(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=450)})({450:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(451);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},451:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Burgas.18.08-07-2012 02:04:20
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Burgas",revision:18,standaloneInit:true,baseWidth:574,baseHeight:567,baseScaleFactor:10,entities:{10:{outlines:[[M,4353,2922,Q,4351,2920,4349,2918,L,4292,2918,Q,4278,2918,4268,2929,4258,2937,4241,2935,L,4124,2935,Q,4096,2935,4083,2947,4067,2962,4057,2965,4013,3036,3974,3076,3950,3127,3937,3137,3934,3138,3900,3194,3871,3229,3856,3250,3828,3285,3821,3315,L,3613,3315,Q,3589,3350,3534,3427,3529,3443,3491,3469,3486,3477,3486,3503,L,3476,3533,3456,3533,3456,3508,3443,3508,Q,3445,3480,3442,3469,3439,3451,3417,3453,L,3417,3420,3347,3312,Q,3334,3280,3324,3256,3303,3212,3283,3212,3275,3212,3270,3217,3262,3224,3262,3245,L,3249,3245,Q,3233,3245,3213,3219,3190,3194,3188,3194,3174,3178,3161,3169,3136,3151,3140,3138,L,3112,3138,3112,3166,3077,3166,3077,3190,3066,3190,3066,3205,3085,3205,3085,3221,3121,3221,Q,3125,3247,3169,3262,L,3169,3318,Q,3179,3333,3190,3341,L,3190,3370,Q,3197,3379,3218,3379,L,3218,3428,Q,3176,3449,3163,3463,3127,3490,3109,3506,3088,3525,3087,3580,3086,3610,3089,3670,3086,3709,3068,3734,3030,3762,3012,3780,2966,3809,2955,3829,2947,3841,2924,3850,2906,3858,2906,3876,L,2910,4098,Q,2929,4121,2967,4156,2993,4189,2988,4231,3008,4240,3008,4260,3009,4282,3025,4292,3033,4298,3034,4385,L,3064,4387,3064,4417,2983,4428,Q,2981,4437,2983,4457,2981,4474,2960,4473,2960,4513,2959,4516,2949,4533,2939,4541,L,2941,4562,Q,2948,4564,2955,4566,2994,4579,3002,4605,3042,4623,3058,4648,3065,4663,3112,4664,3119,4663,3152,4665,3180,4660,3180,4631,L,3212,4631,3212,4607,3250,4607,Q,3262,4620,3283,4652,3304,4677,3331,4686,L,3331,4712,3354,4712,3354,4686,3395,4686,Q,3391,4662,3399,4659,3402,4656,3426,4656,3434,4656,3467,4680,3499,4702,3499,4721,L,3496,4739,3532,4741,3532,4767,3558,4767,3558,4732,Q,3560,4732,3622,4733,3656,4734,3657,4709,L,3867,4709,Q,3871,4720,3864,4762,3864,4795,3888,4786,3885,4805,3902,4808,L,4077,4808,Q,4070,4786,4102,4779,L,4102,4745,Q,4136,4748,4136,4719,4136,4679,4146,4671,4154,4663,4154,4652,4158,4647,4173,4643,4172,4629,4172,4622,4172,4609,4181,4605,4167,4590,4158,4579,4097,4504,4077,4482,L,4077,4459,Q,4076,4452,4047,4423,L,4047,4165,Q,4125,4155,4130,4151,L,4169,4148,Q,4174,4146,4200,4126,L,4322,4081,Q,4376,4058,4378,4055,4387,4041,4425,4031,4465,4030,4477,4003,4521,3998,4512,3969,L,4546,3969,4556,4e3,4630,4e3,4630,3974,4655,3974,Q,4655,3954,4652,3948,4694,3944,4686,3902,L,4732,3901,Q,4732,3896,4736,3877,4782,3877,4798,3873,4792,3853,4815,3852,4838,3849,4829,3821,4892,3838,4879,3801,L,4910,3801,4910,3776,Q,4911,3754,4923,3749,4934,3745,4934,3730,4934,3718,4927,3713,4911,3702,4910,3696,L,4910,3567,Q,4906,3558,4905,3548,4902,3515,4893,3501,L,4895,3477,Q,4893,3445,4898,3408,4906,3342,4846,3287,4786,3232,4690,3165,4595,3097,4571,3084,4548,3071,4454,2985,Q,4380,2945,4353,2922,Z]],label:"Sozopol",shortLabel:"SO",labelPosition:[392,369.1],labelAlignment:[CEN,MID]},11:{outlines:[[M,3082,3345,Q,3075,3372,3006,3426,L,2886,3426,Q,2841,3389,2820,3389,2778,3367,2738,3371,2606,3381,2544,3341,2517,3324,2507,3323,2486,3300,2472,3299,2442,3299,2428,3299,2400,3298,2390,3286,2377,3271,2347,3270,2314,3271,2303,3269,2268,3235,2234,3242,2125,3236,2124,3236,2109,3188,2104,3168,2101,3159,2101,3090,L,1793,3090,1793,3116,1684,3116,1684,3149,Q,1640,3147,1617,3147,1575,3146,1584,3173,L,1378,3173,Q,1384,3202,1355,3212,1324,3223,1324,3245,1310,3248,1292,3275,1277,3300,1260,3300,1239,3300,1205,3222,1176,3157,1171,3128,L,1125,3128,1125,3149,Q,1090,3185,1056,3170,1057,3183,1048,3186,1037,3188,1029,3194,1029,3246,1032,3254,1033,3258,1045,3271,1057,3283,1064,3334,1072,3385,1086,3418,1074,3438,1094,3474,1112,3509,1113,3528,1113,3530,1134,3582,1139,3597,1141,3642,1146,3676,1131,3697,1114,3720,1091,3742,1068,3764,1042,3790,1015,3816,986,3838,L,986,3868,Q,1015,3887,1037,3936,1048,3963,1086,4022,1133,4123,1257,4107,1260,4134,1260,4186,1260,4213,1274,4218,1287,4225,1287,4248,1287,4272,1274,4288,1263,4306,1263,4335,1263,4378,1244,4430,1244,4456,1279,4492,1312,4523,1314,4549,L,1314,4750,Q,1287,4775,1275,4796,1263,4818,1228,4855,1193,4891,1192,4906,1190,4920,1229,4971,1230,4972,1231,4973,1265,5017,1317,5079,1369,5143,1390,5175,1411,5206,1460,5262,1473,5272,1501,5286,1502,5287,1555,5291,1587,5292,1612,5302,1633,5312,1664,5310,1699,5306,1725,5319,1738,5326,1770,5343,1819,5360,1825,5419,L,1889,5419,1889,5390,1912,5390,1912,5419,1979,5419,1979,5433,2052,5433,Q,2048,5441,2061,5465,2093,5458,2112,5472,2115,5474,2144,5508,2173,5540,2177,5541,2211,5550,2208,5574,L,2248,5574,2248,5539,2405,5539,2405,5565,2428,5565,2428,5622,2528,5622,2528,5596,2547,5596,2547,5530,Q,2541,5527,2528,5527,L,2528,5497,Q,2530,5489,2530,5468,L,2580,5468,2580,5451,2604,5451,Q,2602,5431,2604,5422,2605,5403,2623,5411,L,2625,5373,Q,2639,5372,2650,5343,L,2786,5344,Q,2807,5344,2813,5323,L,2862,5323,2862,5293,2881,5293,2881,5237,Q,2896,5209,2901,5191,2905,5171,2905,5075,L,2905,5003,Q,2905,4961,2882,4958,L,2881,4917,Q,2881,4914,2858,4891,2859,4866,2855,4853,2839,4838,2832,4832,L,2832,4800,Q,2813,4783,2812,4771,2815,4741,2808,4736,2778,4715,2783,4667,L,2762,4667,2762,4651,Q,2767,4649,2781,4651,2792,4648,2791,4632,2805,4637,2815,4618,2826,4595,2838,4595,2846,4595,2859,4576,2877,4567,2881,4557,L,2897,4557,Q,2919,4556,2941,4562,L,2939,4541,Q,2949,4533,2959,4516,2960,4513,2960,4473,2981,4474,2983,4457,2981,4437,2983,4428,L,3064,4417,3064,4387,3034,4385,Q,3033,4298,3025,4292,3009,4282,3008,4260,3008,4240,2988,4231,2993,4189,2967,4156,2929,4121,2910,4098,L,2906,3876,Q,2906,3858,2924,3850,2947,3841,2955,3829,2966,3809,3012,3780,3030,3762,3068,3734,3086,3709,3089,3670,3086,3610,3087,3580,3088,3525,3109,3506,3127,3490,3163,3463,3176,3449,3218,3428,L,3218,3379,Q,3197,3379,3190,3370,L,3190,3341,Q,3179,3333,3169,3318,3141,3326,3123,3341,Q,3109,3352,3082,3345,Z]],label:"Sredets",shortLabel:"SR",labelPosition:[210.2,435.6],labelAlignment:[CEN,MID]},12:{outlines:[[M,1210,79,Q,1155,82,1129,79,1106,77,1097,63,1090,49,1075,49,1059,49,1038,64,1016,79,996,79,L,800,79,Q,780,77,753,88,723,102,710,103,646,101,616,103,607,103,586,134,560,141,551,148,511,172,490,191,466,246,433,250,432,250,431,250,L,365,250,365,283,Q,250,277,242,288,233,298,180,298,136,304,143,307,L,121,320,Q,123,417,105,435,108,461,78,551,82,648,62,670,48,685,48,809,L,48,901,Q,48,937,76,963,L,78,1176,Q,94,1192,116,1216,127,1222,151,1247,222,1317,227,1320,230,1350,230,1416,230,1507,216,1518,L,216,1554,Q,240,1574,293,1617,335,1660,334,1713,333,1717,352,1768,353,1770,354,1780,L,385,1780,385,1750,414,1750,414,1722,435,1722,435,1745,Q,456,1745,474,1756,L,474,1776,495,1776,Q,494,1751,497,1742,502,1727,528,1735,L,528,1694,603,1694,603,1731,637,1731,637,1781,657,1781,657,1836,679,1836,679,1860,694,1860,Q,680,1821,734,1828,L,734,1795,Q,761,1802,760,1741,757,1678,782,1676,L,782,1635,758,1630,758,1603,Q,742,1603,734,1602,L,734,1513,Q,754,1518,755,1468,L,788,1467,788,1445,836,1445,Q,835,1431,838,1425,L,877,1425,Q,881,1403,881,1391,L,915,1391,Q,916,1379,920,1370,L,975,1370,976,1389,Q,1014,1380,1023,1421,1053,1408,1058,1431,1064,1454,1082,1446,L,1086,1472,1115,1472,1113,1357,Q,1111,1335,1121,1330,1139,1318,1142,1269,L,1142,1236,Q,1142,1231,1161,1212,1163,1210,1163,1172,1164,1144,1185,1153,L,1185,1099,1276,1099,1276,1125,Q,1277,1125,1328,1124,1353,1122,1359,1144,L,1392,1144,1392,938,1574,938,Q,1574,923,1577,913,L,1670,912,1670,903,Q,1670,878,1693,878,1692,859,1693,849,1694,832,1715,842,L,1717,806,1735,806,1735,779,1774,779,1775,813,1868,813,1869,823,1904,823,Q,1909,803,1922,794,1921,780,1952,772,L,1952,739,Q,1938,747,1930,709,1888,714,1873,689,1851,680,1844,673,1836,666,1826,664,1817,661,1809,651,1800,640,1786,641,1771,641,1771,631,L,1745,603,1745,591,Q,1744,553,1741,548,1714,527,1715,523,1721,493,1721,480,1721,477,1702,454,1698,423,1685,414,1664,408,1653,400,1639,385,1629,380,1591,347,1574,336,1556,321,1545,314,L,1518,299,1518,232,1501,220,Q,1470,197,1450,178,1430,159,1398,146,1360,131,1344,117,1343,116,1264,110,Q,1233,83,1210,79,Z]],label:"Sungurlare",shortLabel:"SU",labelPosition:[80.4,70.9],labelAlignment:[CEN,MID]},13:{outlines:[[M,5285,4175,L,5238,4175,Q,5226,4174,5223,4186,5218,4197,5211,4198,L,5116,4198,Q,5094,4198,5084,4210,5075,4220,5051,4220,L,5051,4240,Q,5058,4245,5073,4248,5086,4251,5085,4269,5081,4312,5108,4312,L,5108,4356,Q,5068,4403,5035,4468,5004,4518,4996,4522,4986,4528,4980,4550,4975,4572,4966,4579,4904,4619,4842,4646,4732,4689,4719,4703,4701,4702,4688,4715,4672,4732,4650,4732,4636,4732,4616,4752,4589,4756,4581,4764,4541,4784,4525,4801,4494,4804,4487,4818,4473,4837,4437,4836,4441,4862,4433,4882,4425,4903,4425,4918,4421,4994,4413,4996,4412,4996,4359,5046,4350,5053,4326,5066,L,4326,5115,Q,4326,5158,4329,5164,4337,5188,4351,5204,4351,5219,4346,5226,L,4346,5248,Q,4368,5255,4449,5245,4516,5243,4504,5293,4528,5307,4522,5338,L,4707,5338,Q,4710,5348,4722,5367,4732,5384,4727,5402,4782,5402,4761,5441,4779,5444,4810,5444,L,4812,5467,4866,5467,Q,4887,5493,4967,5493,5044,5492,5140,5493,5409,5496,5476,5498,5497,5499,5497,5500,5520,5500,5564,5501,5592,5502,5592,5481,5592,5464,5601,5457,5610,5450,5615,5439,5620,5428,5627,5401,L,5627,5287,Q,5625,5268,5636,5239,5645,5217,5644,5200,5644,5194,5643,5190,5645,5163,5645,5113,5645,5028,5629,5008,5617,4995,5612,4967,5607,4937,5593,4918,5592,4916,5586,4866,5568,4839,5569,4822,5570,4796,5560,4771,5545,4732,5543,4722,5509,4677,5508,4626,5508,4574,5482,4535,5463,4466,5450,4445,5444,4384,5422,4353,L,5422,4336,Q,5421,4313,5404,4278,5402,4222,5393,4208,5379,4186,5371,4170,Q,5315,4174,5285,4175,Z]],label:"Tsarevo",shortLabel:"CA",labelPosition:[505.9,498.2],labelAlignment:[CEN,MID]},"09":{outlines:[[M,3226,234,Q,3197,193,3193,191,L,3126,136,Q,3095,84,3060,79,L,3006,69,Q,2988,78,2935,51,L,2144,51,Q,1995,77,1909,77,1823,75,1732,151,1638,228,1572,228,1536,228,1518,232,L,1518,299,1545,314,Q,1556,321,1574,336,1591,347,1629,380,1639,385,1653,400,1664,408,1685,414,1698,423,1702,454,1721,477,1721,480,1721,493,1715,523,1714,527,1741,548,1744,553,1745,591,L,1745,603,1771,631,Q,1771,641,1786,641,1800,640,1809,651,1817,661,1826,664,1836,666,1844,673,1851,680,1873,689,1888,714,1930,709,1938,747,1952,739,L,1952,772,Q,1921,780,1922,794,1909,803,1904,823,L,1869,823,1868,813,1775,813,1774,779,1735,779,1735,806,1717,806,1715,842,Q,1694,832,1693,849,1692,859,1693,878,1670,878,1670,903,L,1670,904,Q,1670,908,1671,912,1673,922,1679,928,1698,947,1698,953,1698,977,1712,985,1718,988,1718,1015,L,1756,1015,1758,1038,1808,1038,1808,1013,1871,1013,1871,989,1922,990,1922,964,1955,964,1955,990,Q,1972,982,1979,1e3,1985,1020,2002,1019,2017,1016,2042,1053,2050,1064,2067,1071,2077,1078,2083,1093,2093,1100,2108,1107,2113,1115,2132,1125,2149,1143,2155,1144,2167,1145,2179,1158,2187,1172,2199,1173,2223,1173,2229,1177,2239,1182,2255,1198,L,2290,1198,Q,2347,1193,2347,1226,L,2359,1226,2359,1210,2381,1210,2381,1182,2400,1179,2400,1145,2427,1145,2428,1119,2749,1120,Q,2760,1120,2762,1107,2764,1095,2770,1095,L,3135,1092,3135,1063,Q,3151,1063,3157,1062,L,3157,1035,3178,1035,3179,1007,3198,1007,3202,1025,Q,3223,1015,3231,1033,3238,1050,3260,1043,L,3261,1072,Q,3298,1074,3295,1088,3361,1092,3369,1095,L,3390,1095,3390,1081,3414,1081,3414,1052,Q,3430,1052,3434,1050,L,3433,1011,Q,3442,1011,3453,983,L,3499,983,Q,3498,1010,3550,1013,3553,1020,3561,1039,L,3596,1039,Q,3611,1047,3625,1062,L,3651,1062,3651,1039,3685,1039,3687,1019,Q,3733,1028,3722,975,3723,904,3720,885,3717,867,3710,855,3701,843,3695,836,3683,803,3667,786,L,3623,737,Q,3619,713,3615,707,3599,705,3599,689,3599,680,3623,656,3646,632,3646,590,3646,555,3643,552,3630,547,3625,519,L,3625,449,3606,449,Q,3513,367,3455,335,3401,298,3375,282,3327,252,3280,254,Q,3241,254,3226,234,Z]],label:"Ruen",shortLabel:"RU",labelPosition:[262.1,56.5],labelAlignment:[CEN,MID]},"07":{outlines:[[M,4063,384,Q,4039,385,4025,395,4007,409,3992,413,3984,437,3971,446,3955,455,3935,455,3910,455,3886,419,3837,410,3851,381,L,3826,381,3826,406,3737,406,Q,3739,437,3700,436,3637,434,3636,435,L,3633,449,3625,449,3625,519,Q,3630,547,3643,552,3646,555,3646,590,3646,632,3623,656,3599,680,3599,689,3599,705,3615,707,3619,713,3623,737,L,3667,786,Q,3683,803,3695,836,3701,843,3710,855,3717,867,3720,885,3723,904,3722,975,3733,1028,3687,1019,L,3685,1039,3651,1039,3651,1062,3625,1062,Q,3611,1047,3596,1039,L,3561,1039,Q,3557,1074,3525,1088,3496,1101,3496,1133,3496,1150,3507,1159,3515,1168,3514,1205,3513,1216,3532,1230,3546,1240,3546,1263,3546,1288,3529,1308,3512,1327,3512,1384,3511,1442,3515,1446,3522,1455,3572,1497,3582,1513,3610,1549,L,3671,1549,3670,1517,3716,1517,Q,3726,1583,3777,1649,3779,1651,3781,1654,3790,1671,3811,1698,3822,1711,3826,1759,3831,1806,3792,1800,L,3795,1856,3767,1856,3767,1905,Q,3747,1907,3748,1916,3749,1924,3747,1934,3744,1944,3768,1967,3769,1979,3772,2027,3796,2057,3795,2076,3794,2086,3810,2098,3826,2108,3818,2128,3847,2118,3849,2157,3905,2151,3900,2180,L,3900,2210,Q,3912,2223,3919,2251,3926,2278,3942,2294,4002,2354,4016,2357,4030,2400,4043,2419,4048,2426,4050,2456,4051,2471,4074,2487,4079,2524,4081,2525,4097,2538,4096,2559,4093,2584,4109,2597,4125,2612,4127,2633,4146,2633,4157,2648,4167,2662,4179,2662,4206,2661,4235,2686,4247,2684,4280,2719,L,4318,2719,Q,4334,2716,4340,2716,L,4392,2716,Q,4404,2716,4427,2691,4450,2665,4538,2686,4551,2684,4557,2673,4564,2662,4579,2662,L,4638,2662,Q,4652,2661,4656,2646,4660,2631,4669,2631,4714,2625,4718,2621,4728,2285,4728,2148,4700,2126,4684,2129,4664,2132,4627,2129,4575,2090,4533,2103,L,4531,2050,Q,4531,2031,4532,2031,4535,2028,4551,2018,L,4551,1976,4523,1976,Q,4522,1971,4468,1923,4459,1914,4432,1905,4421,1880,4415,1873,4364,1790,4327,1746,L,4327,1639,Q,4326,1609,4264,1535,4255,1506,4250,1499,4227,1483,4226,1475,4211,1417,4203,1413,4199,1383,4179,1348,4158,1313,4153,1301,4110,1202,4095,1192,L,4095,1128,Q,4101,1095,4071,1052,4065,1044,4067,1007,4068,976,4049,972,L,4049,908,4125,908,Q,4116,880,4150,889,4161,838,4240,776,4293,734,4298,722,4303,711,4303,646,4303,561,4275,550,L,4275,503,4296,503,Q,4301,489,4301,480,L,4327,480,4327,449,4301,433,4301,417,Q,4300,390,4283,373,L,4283,356,4230,356,Q,4158,356,4146,368,Q,4137,375,4063,384,Z]],label:"Pomorie",shortLabel:"PO",labelPosition:[401.4,153.7],labelAlignment:[CEN,MID]},"06":{outlines:[[M,5464,839,Q,5462,857,5428,856,5373,854,5366,856,5348,854,5339,854,5323,854,5320,867,5315,883,5282,884,L,5282,903,5252,903,Q,5239,878,5219,865,5180,839,5173,839,5152,839,5124,822,5089,799,5072,794,4997,760,4970,747,4913,720,4872,695,4867,691,4837,688,4836,688,4812,666,4776,657,4760,650,4751,634,4747,628,4736,618,4733,605,4729,593,4709,562,4670,500,4657,467,4637,420,4588,408,4582,407,4575,406,L,4492,406,Q,4480,405,4463,392,4445,378,4416,378,4325,378,4315,375,4303,356,4283,356,L,4283,373,Q,4300,390,4301,417,L,4301,433,4327,449,4327,480,4301,480,Q,4301,489,4296,503,L,4275,503,4275,550,Q,4303,561,4303,646,4303,711,4298,722,4293,734,4240,776,4161,838,4150,889,4116,880,4125,908,L,4049,908,4049,972,Q,4068,976,4067,1007,4065,1044,4071,1052,4101,1095,4095,1128,L,4095,1192,Q,4110,1202,4153,1301,4158,1313,4179,1348,4199,1383,4203,1413,4211,1417,4226,1475,4227,1483,4250,1499,4255,1506,4264,1535,4326,1609,4327,1639,L,4327,1746,Q,4364,1790,4415,1873,4421,1880,4432,1905,4459,1914,4468,1923,4522,1971,4523,1976,L,4551,1976,4551,2018,Q,4535,2028,4532,2031,4531,2031,4531,2050,L,4533,2103,Q,4575,2090,4627,2129,4664,2132,4684,2129,4700,2126,4728,2148,L,4877,2148,Q,4879,2149,4888,2168,4893,2178,4910,2179,L,4970,2179,Q,5018,2188,5022,2196,5025,2204,5065,2202,5104,2200,5123,2175,5141,2151,5173,2125,5204,2100,5224,2077,5226,2075,5228,2073,5346,1945,5414,1876,5483,1806,5519,1779,5554,1752,5611,1710,5668,1668,5673,1625,L,5673,1537,Q,5672,1441,5662,1419,5651,1396,5649,1374,5646,1351,5646,1310,5646,1250,5655,1236,5670,1207,5670,1185,5671,1178,5670,1173,5670,1162,5670,1147,5670,1109,5670,1106,5668,1098,5646,1076,5637,1067,5637,1034,5636,1001,5632,995,5613,969,5613,959,L,5613,913,Q,5585,880,5594,839,Z]],label:"Nesebar",shortLabel:"NE",labelPosition:[486.1,140.2],labelAlignment:[CEN,MID]},"04":{outlines:[[M,1392,1144,L,1359,1144,Q,1353,1122,1328,1124,1277,1125,1276,1125,L,1276,1099,1185,1099,1185,1153,Q,1164,1144,1163,1172,1163,1210,1161,1212,1142,1231,1142,1236,L,1142,1269,Q,1139,1318,1121,1330,1111,1335,1113,1357,L,1115,1472,1086,1472,1082,1446,Q,1064,1454,1058,1431,1053,1408,1023,1421,1014,1380,976,1389,L,975,1370,920,1370,Q,916,1379,915,1391,L,881,1391,Q,881,1403,877,1425,L,838,1425,Q,835,1431,836,1445,L,788,1445,788,1467,755,1468,Q,754,1518,734,1513,L,734,1602,Q,742,1603,758,1603,L,758,1630,782,1635,782,1676,Q,757,1678,760,1741,761,1802,734,1795,L,734,1828,Q,680,1821,694,1860,L,679,1860,679,1836,657,1836,657,1781,637,1781,637,1731,603,1731,603,1694,528,1694,528,1735,Q,502,1727,497,1742,494,1751,495,1776,L,474,1776,474,1756,Q,456,1745,435,1745,L,435,1722,414,1722,414,1750,385,1750,385,1780,354,1780,Q,355,1796,355,1831,L,356,2026,Q,379,2052,413,2099,433,2127,435,2143,434,2194,440,2203,450,2221,454,2319,454,2343,475,2359,483,2364,483,2383,484,2402,494,2411,509,2425,508,2463,535,2493,535,2506,535,2524,551,2550,561,2567,570,2598,605,2658,608,2691,610,2725,656,2787,L,656,2813,Q,663,2816,681,2840,686,2847,689,2878,701,2885,720,2911,739,2930,762,2917,763,2947,767,3044,784,3075,784,3161,810,3153,831,3169,853,3186,866,3185,906,3180,944,3218,L,1006,3218,1006,3194,1029,3194,Q,1037,3188,1048,3186,1057,3183,1056,3170,1090,3185,1125,3149,L,1125,3128,1171,3128,Q,1176,3157,1205,3222,1239,3300,1260,3300,1277,3300,1292,3275,1310,3248,1324,3245,1324,3223,1355,3212,1384,3202,1378,3173,L,1584,3173,Q,1575,3146,1617,3147,1640,3147,1684,3149,L,1684,3116,1793,3116,1793,3090,2101,3090,Q,2105,3080,2120,3073,L,2120,3050,Q,2099,3054,2101,3017,2082,3017,2072,2997,2061,2975,2050,2972,2050,2947,2047,2940,L,2047,2910,2077,2910,2077,2867,2101,2864,Q,2101,2820,2124,2825,L,2124,2782,Q,2124,2726,2119,2720,2094,2692,2096,2674,2098,2651,2086,2643,2075,2634,2075,2622,2065,2577,2064,2563,2043,2563,2034,2562,2019,2562,2012,2549,2e3,2528,1964,2528,1942,2511,1941,2511,1918,2511,1914,2510,1904,2482,1875,2482,L,1875,2368,1893,2362,Q,1902,2358,1902,2344,L,1899,2297,Q,1902,2297,1917,2294,L,1917,2192,1945,2192,1945,2109,Q,1972,2103,2058,2112,2130,2110,2119,2056,L,2143,2056,2146,2028,Q,2144,1990,2142,1984,2110,1981,2100,1980,2089,1963,2067,1956,2047,1947,2038,1936,2008,1932,1999,1924,1970,1900,1967,1900,1948,1899,1945,1874,1941,1846,1923,1841,L,1923,1678,1951,1674,1951,1596,Q,1928,1588,1926,1564,1924,1545,1900,1548,1895,1532,1870,1502,1847,1477,1847,1450,1847,1417,1868,1419,1862,1389,1897,1383,1891,1358,1903,1345,1909,1337,1924,1321,1918,1296,1942,1283,1948,1278,1948,1249,1948,1224,1946,1214,L,1913,1214,Q,1913,1198,1911,1192,L,1873,1192,1873,1254,1844,1254,1845,1300,1766,1300,1766,1190,Q,1752,1195,1742,1182,1731,1167,1730,1167,L,1665,1167,1665,1153,1649,1153,Q,1645,1133,1647,1123,L,1670,1123,1670,1099,Q,1666,1085,1680,1077,1698,1066,1696,1058,1703,1049,1718,1047,L,1718,1018,Q,1718,1016,1718,1015,1718,988,1712,985,1698,977,1698,953,1698,947,1679,928,1673,922,1671,912,L,1577,913,Q,1574,923,1574,938,L,1392,938,Z]],label:"Karnobat",shortLabel:"KR",labelPosition:[125,222.9],labelAlignment:[CEN,MID]},"01":{outlines:[[M,3231,1033,Q,3223,1015,3202,1025,L,3198,1007,3179,1007,3178,1035,3157,1035,3157,1062,Q,3151,1063,3135,1063,L,3135,1092,2770,1095,Q,2764,1095,2762,1107,2760,1120,2749,1120,L,2428,1119,2427,1145,2400,1145,2400,1179,2381,1182,2381,1210,2359,1210,2359,1226,2347,1226,Q,2347,1193,2290,1198,L,2255,1198,Q,2239,1182,2229,1177,2223,1173,2199,1173,2187,1172,2179,1158,2167,1145,2155,1144,2149,1143,2132,1125,2113,1115,2108,1107,2093,1100,2083,1093,2077,1078,2067,1071,2050,1064,2042,1053,2017,1016,2002,1019,1985,1020,1979,1e3,1972,982,1955,990,L,1955,964,1922,964,1922,990,1871,989,1871,1013,1808,1013,1808,1038,1758,1038,1756,1015,1718,1015,Q,1718,1016,1718,1018,L,1718,1047,Q,1703,1049,1696,1058,1698,1066,1680,1077,1666,1085,1670,1099,L,1670,1123,1647,1123,Q,1645,1133,1649,1153,L,1665,1153,1665,1167,1730,1167,Q,1731,1167,1742,1182,1752,1195,1766,1190,L,1766,1300,1845,1300,1844,1254,1873,1254,1873,1192,1911,1192,Q,1913,1198,1913,1214,L,1946,1214,Q,1948,1224,1948,1249,1948,1278,1942,1283,1918,1296,1924,1321,1909,1337,1903,1345,1891,1358,1897,1383,1862,1389,1868,1419,1847,1417,1847,1450,1847,1477,1870,1502,1895,1532,1900,1548,1924,1545,1926,1564,1928,1588,1951,1596,L,1951,1674,1923,1678,1923,1841,Q,1941,1846,1945,1874,1948,1899,1967,1900,1970,1900,1999,1924,2008,1932,2038,1936,2047,1947,2067,1956,2089,1963,2100,1980,2110,1981,2142,1984,2144,1990,2146,2028,2147,2025,2166,2026,2192,2025,2252,2081,2273,2081,2298,2065,2323,2047,2318,2028,L,2482,2028,2552,2103,2564,2103,2569,2136,2586,2136,2586,2109,2600,2109,2600,2077,Q,2635,2082,2633,2057,2630,2028,2653,2028,2669,2028,2690,2048,L,2702,2046,Q,2705,2036,2705,2017,L,2726,2017,2726,1999,2792,1999,Q,2778,1966,2811,1966,2829,1965,2859,1971,L,2949,1971,Q,2953,1956,2953,1953,2963,1952,2988,1952,3008,1949,3003,1929,3031,1934,3030,1898,3027,1861,3054,1865,3054,1819,3071,1817,3098,1812,3099,1795,3095,1776,3096,1769,L,3174,1769,Q,3207,1774,3230,1754,3233,1753,3305,1759,3347,1762,3359,1746,3388,1700,3424,1666,3447,1642,3480,1633,3495,1628,3495,1596,3495,1569,3488,1563,3479,1555,3476,1520,3449,1516,3447,1515,3444,1513,3445,1498,3444,1489,3470,1469,3498,1446,3515,1446,3511,1442,3512,1384,3512,1327,3529,1308,3546,1288,3546,1263,3546,1240,3532,1230,3513,1216,3514,1205,3515,1168,3507,1159,3496,1150,3496,1133,3496,1101,3525,1088,3557,1074,3561,1039,3553,1020,3550,1013,3498,1010,3499,983,L,3453,983,Q,3442,1011,3433,1011,L,3434,1050,Q,3430,1052,3414,1052,L,3414,1081,3390,1081,3390,1095,3369,1095,Q,3361,1092,3295,1088,3298,1074,3261,1072,L,3260,1043,Q,3238,1050,3231,1033,Z]],label:"Aytos",shortLabel:"AI",labelPosition:[260.3,155],labelAlignment:[CEN,MID]},"03":{outlines:[[M,2862,2105,Q,2832,2105,2824,2091,2818,2081,2805,2081,2787,2081,2786,2081,2770,2053,2758,2053,2740,2043,2724,2043,L,2690,2048,Q,2669,2028,2653,2028,2630,2028,2633,2057,2635,2082,2600,2077,L,2600,2109,2586,2109,2586,2136,2569,2136,2564,2103,2552,2103,2482,2028,2318,2028,Q,2323,2047,2298,2065,2273,2081,2252,2081,2192,2025,2166,2026,2147,2025,2146,2028,L,2143,2056,2119,2056,Q,2130,2110,2058,2112,1972,2103,1945,2109,L,1945,2192,1917,2192,1917,2294,Q,1902,2297,1899,2297,L,1902,2344,Q,1902,2358,1893,2362,L,1875,2368,1875,2482,Q,1904,2482,1914,2510,1918,2511,1941,2511,1942,2511,1964,2528,2e3,2528,2012,2549,2019,2562,2034,2562,2043,2563,2064,2563,2065,2577,2075,2622,2075,2634,2086,2643,2098,2651,2096,2674,2094,2692,2119,2720,2124,2726,2124,2782,L,2124,2825,Q,2101,2820,2101,2864,L,2077,2867,2077,2910,2047,2910,2047,2940,Q,2050,2947,2050,2972,2061,2975,2072,2997,2082,3017,2101,3017,2099,3054,2120,3050,L,2120,3073,Q,2105,3080,2101,3090,2101,3159,2104,3168,2109,3188,2124,3236,2125,3236,2234,3242,2268,3235,2303,3269,2314,3271,2347,3270,2377,3271,2390,3286,2400,3298,2428,3299,2442,3299,2472,3299,2486,3300,2507,3323,2517,3324,2544,3341,2606,3381,2738,3371,2778,3367,2820,3389,2841,3389,2886,3426,L,3006,3426,Q,3075,3372,3082,3345,3109,3352,3123,3341,3141,3326,3169,3318,L,3169,3262,Q,3125,3247,3121,3221,L,3085,3221,3085,3205,3066,3205,3066,3190,3077,3190,3077,3166,3112,3166,3112,3138,3140,3138,Q,3136,3151,3161,3169,3174,3178,3188,3194,3190,3194,3213,3219,3233,3245,3249,3245,L,3262,3245,Q,3262,3224,3270,3217,L,3268,3044,3237,3044,3228,3011,3139,3011,3139,2974,3112,2974,Q,3112,2940,3092,2937,3073,2917,3054,2915,3039,2885,3015,2889,2988,2893,2970,2865,L,2886,2865,2886,2889,2846,2889,2846,2915,2824,2915,2824,2937,2800,2937,2800,2954,2784,2954,2784,2969,2750,2969,Q,2757,2947,2740,2940,2716,2928,2712,2922,2701,2903,2678,2873,2603,2817,2580,2793,2557,2785,2554,2770,2551,2759,2554,2734,2558,2678,2542,2667,2524,2654,2525,2607,2525,2541,2523,2529,L,2599,2529,Q,2624,2529,2650,2516,2716,2516,2753,2535,2757,2538,2772,2568,2799,2568,2812,2581,2823,2591,2888,2612,2899,2625,2908,2645,2937,2659,2937,2662,L,3027,2662,Q,3035,2632,3079,2636,3135,2639,3146,2633,3181,2610,3223,2573,L,3245,2573,3245,2553,Q,3235,2555,3225,2547,3214,2535,3211,2535,3175,2535,3166,2531,L,3166,2481,Q,3173,2476,3183,2452,3209,2452,3203,2429,L,3262,2429,Q,3267,2439,3309,2481,L,3361,2481,3361,2421,Q,3381,2395,3386,2377,3388,2372,3386,2342,3385,2321,3397,2314,3428,2290,3426,2262,3420,2219,3442,2203,L,3442,2081,3384,2081,Q,3387,2049,3331,2050,3331,2030,3324,2020,L,3300,2020,3300,2052,Q,3271,2057,3264,2074,3243,2081,3226,2095,3194,2115,3190,2122,3170,2156,3174,2165,L,3154,2165,Q,3143,2116,3103,2103,3052,2085,3041,2046,L,2996,2046,Q,2998,2081,2936,2081,2942,2100,2911,2105,2880,2110,2893,2133,L,2870,2133,Q,2856,2118,2862,2105,Z]],label:"Kameno",shortLabel:"KM",labelPosition:[231.6,272.3],labelAlignment:[CEN,MID]},"02":{outlines:[[M,3610,1549,Q,3582,1513,3572,1497,3522,1455,3515,1446,3498,1446,3470,1469,3444,1489,3445,1498,3444,1513,3447,1515,3449,1516,3476,1520,3479,1555,3488,1563,3495,1569,3495,1596,3495,1628,3480,1633,3447,1642,3424,1666,3388,1700,3359,1746,3347,1762,3305,1759,3233,1753,3230,1754,3207,1774,3174,1769,L,3096,1769,Q,3095,1776,3099,1795,3098,1812,3071,1817,3054,1819,3054,1865,3027,1861,3030,1898,3031,1934,3003,1929,3008,1949,2988,1952,2963,1952,2953,1953,2953,1956,2949,1971,L,2859,1971,Q,2829,1965,2811,1966,2778,1966,2792,1999,L,2726,1999,2726,2017,2705,2017,Q,2705,2036,2702,2046,L,2724,2043,Q,2740,2043,2758,2053,2770,2053,2786,2081,2787,2081,2805,2081,2818,2081,2824,2091,2832,2105,2862,2105,2856,2118,2870,2133,L,2893,2133,Q,2880,2110,2911,2105,2942,2100,2936,2081,2998,2081,2996,2046,L,3041,2046,Q,3052,2085,3103,2103,3143,2116,3154,2165,L,3174,2165,Q,3170,2156,3190,2122,3194,2115,3226,2095,3243,2081,3264,2074,3271,2057,3300,2052,L,3300,2020,3324,2020,Q,3331,2030,3331,2050,3387,2049,3384,2081,L,3442,2081,3442,2203,Q,3420,2219,3426,2262,3428,2290,3397,2314,3385,2321,3386,2342,3388,2372,3386,2377,3381,2395,3361,2421,L,3361,2481,3309,2481,Q,3267,2439,3262,2429,L,3203,2429,Q,3209,2452,3183,2452,3173,2476,3166,2481,L,3166,2531,Q,3175,2535,3211,2535,3214,2535,3225,2547,3235,2555,3245,2553,L,3245,2573,3223,2573,Q,3181,2610,3146,2633,3135,2639,3079,2636,3035,2632,3027,2662,L,2937,2662,Q,2937,2659,2908,2645,2899,2625,2888,2612,2823,2591,2812,2581,2799,2568,2772,2568,2757,2538,2753,2535,2716,2516,2650,2516,2624,2529,2599,2529,L,2523,2529,Q,2525,2541,2525,2607,2524,2654,2542,2667,2558,2678,2554,2734,2551,2759,2554,2770,2557,2785,2580,2793,2603,2817,2678,2873,2701,2903,2712,2922,2716,2928,2740,2940,2757,2947,2750,2969,L,2784,2969,2784,2954,2800,2954,2800,2937,2824,2937,2824,2915,2846,2915,2846,2889,2886,2889,2886,2865,2970,2865,Q,2988,2893,3015,2889,3039,2885,3054,2915,3073,2917,3092,2937,3112,2940,3112,2974,L,3139,2974,3139,3011,3228,3011,3237,3044,3268,3044,3270,3217,Q,3275,3212,3283,3212,3303,3212,3324,3256,3334,3280,3347,3312,L,3417,3420,3417,3453,Q,3439,3451,3442,3469,3445,3480,3443,3508,L,3456,3508,3456,3533,3476,3533,3486,3503,Q,3486,3477,3491,3469,3529,3443,3534,3427,3589,3350,3613,3315,L,3821,3315,Q,3828,3285,3856,3250,3871,3229,3900,3194,3934,3138,3937,3137,3950,3127,3974,3076,4013,3036,4057,2965,4067,2962,4083,2947,4096,2935,4124,2935,L,4241,2935,Q,4258,2937,4268,2929,4278,2918,4292,2918,L,4349,2918,Q,4325,2893,4327,2824,4329,2748,4328,2734,4327,2719,4318,2719,L,4280,2719,Q,4247,2684,4235,2686,4206,2661,4179,2662,4167,2662,4157,2648,4146,2633,4127,2633,4125,2612,4109,2597,4093,2584,4096,2559,4097,2538,4081,2525,4079,2524,4074,2487,4051,2471,4050,2456,4048,2426,4043,2419,4030,2400,4016,2357,4002,2354,3942,2294,3926,2278,3919,2251,3912,2223,3900,2210,L,3900,2180,Q,3905,2151,3849,2157,3847,2118,3818,2128,3826,2108,3810,2098,3794,2086,3795,2076,3796,2057,3772,2027,3769,1979,3768,1967,3744,1944,3747,1934,3749,1924,3748,1916,3747,1907,3767,1905,L,3767,1856,3795,1856,3792,1800,Q,3831,1806,3826,1759,3822,1711,3811,1698,3790,1671,3781,1654,3779,1651,3777,1649,3726,1583,3716,1517,L,3670,1517,3671,1549,Z]],label:"Burgas",shortLabel:"BU",labelPosition:[355.8,273.5],labelAlignment:[CEN,MID]},"08":{outlines:[[M,4934,3730,Q,4934,3745,4923,3749,4911,3754,4910,3776,L,4910,3801,4879,3801,Q,4892,3838,4829,3821,4838,3849,4815,3852,4792,3853,4798,3873,4782,3877,4736,3877,4732,3896,4732,3901,L,4686,3902,Q,4694,3944,4652,3948,4655,3954,4655,3974,L,4630,3974,4630,4e3,4556,4e3,4546,3969,4512,3969,Q,4521,3998,4477,4003,4465,4030,4425,4031,4387,4041,4378,4055,4376,4058,4322,4081,L,4200,4126,Q,4174,4146,4169,4148,L,4130,4151,Q,4125,4155,4047,4165,L,4047,4423,Q,4076,4452,4077,4459,L,4077,4482,Q,4097,4504,4158,4579,4167,4590,4181,4605,4203,4632,4235,4671,4250,4686,4277,4721,4304,4752,4332,4765,4352,4774,4378,4807,4394,4820,4437,4836,4473,4837,4487,4818,4494,4804,4525,4801,4541,4784,4581,4764,4589,4756,4616,4752,4636,4732,4650,4732,4672,4732,4688,4715,4701,4702,4719,4703,4732,4689,4842,4646,4904,4619,4966,4579,4975,4572,4980,4550,4986,4528,4996,4522,5004,4518,5035,4468,5068,4403,5108,4356,L,5108,4312,Q,5081,4312,5085,4269,5086,4251,5073,4248,5058,4245,5051,4240,L,5051,4220,Q,5075,4220,5084,4210,5094,4198,5116,4198,L,5211,4198,Q,5218,4197,5223,4186,5226,4174,5238,4175,L,5285,4175,Q,5315,4174,5371,4170,5362,4150,5363,4140,5365,4121,5357,4107,5346,4092,5347,4077,5345,4051,5325,4021,5291,3972,5290,3968,5249,3888,5228,3863,5199,3830,5039,3684,4978,3633,4947,3601,4920,3587,4910,3567,L,4910,3696,Q,4911,3702,4927,3713,Q,4934,3718,4934,3730,Z]],label:"Primorsko",shortLabel:"PR",labelPosition:[461.1,429.9],labelAlignment:[CEN,MID]},"05":{outlines:[[M,4181,4605,Q,4172,4609,4172,4622,4172,4629,4173,4643,4158,4647,4154,4652,4154,4663,4146,4671,4136,4679,4136,4719,4136,4748,4102,4745,L,4102,4779,Q,4070,4786,4077,4808,L,3902,4808,Q,3885,4805,3888,4786,3864,4795,3864,4762,3871,4720,3867,4709,L,3657,4709,Q,3656,4734,3622,4733,3560,4732,3558,4732,L,3558,4767,3532,4767,3532,4741,3496,4739,3499,4721,Q,3499,4702,3467,4680,3434,4656,3426,4656,3402,4656,3399,4659,3391,4662,3395,4686,L,3354,4686,3354,4712,3331,4712,3331,4686,Q,3304,4677,3283,4652,3262,4620,3250,4607,L,3212,4607,3212,4631,3180,4631,Q,3180,4660,3152,4665,3119,4663,3112,4664,3065,4663,3058,4648,3042,4623,3002,4605,2994,4579,2955,4566,2948,4564,2941,4562,2919,4556,2897,4557,L,2881,4557,Q,2877,4567,2859,4576,2846,4595,2838,4595,2826,4595,2815,4618,2805,4637,2791,4632,2792,4648,2781,4651,2767,4649,2762,4651,L,2762,4667,2783,4667,Q,2778,4715,2808,4736,2815,4741,2812,4771,2813,4783,2832,4800,L,2832,4832,Q,2839,4838,2855,4853,2859,4866,2858,4891,2881,4914,2881,4917,L,2882,4958,Q,2905,4961,2905,5003,L,2905,5075,Q,2905,5171,2901,5191,2896,5209,2881,5237,L,2881,5293,2894,5293,Q,2898,5310,2922,5316,2945,5321,2946,5339,L,2984,5339,Q,2989,5344,2992,5360,2997,5373,3017,5367,3039,5392,3060,5448,3068,5466,3131,5467,3176,5467,3174,5436,L,3199,5436,Q,3226,5495,3278,5546,3410,5545,3509,5541,L,3509,5540,3515,5540,Q,3512,5540,3509,5541,3514,5546,3677,5540,3748,5540,3777,5513,L,4321,5513,Q,4335,5502,4340,5497,L,4812,5496,4810,5444,Q,4779,5444,4761,5441,4782,5402,4727,5402,4732,5384,4722,5367,4710,5348,4707,5338,L,4522,5338,Q,4528,5307,4504,5293,4516,5243,4449,5245,4368,5255,4346,5248,L,4346,5226,Q,4351,5219,4351,5204,4337,5188,4329,5164,4326,5158,4326,5115,L,4326,5066,Q,4350,5053,4359,5046,4412,4996,4413,4996,4421,4994,4425,4918,4425,4903,4433,4882,4441,4862,4437,4836,4394,4820,4378,4807,4352,4774,4332,4765,4304,4752,4277,4721,4250,4686,4235,4671,Q,4203,4632,4181,4605,Z]],label:"Malko Tarnovo",shortLabel:"MT",labelPosition:[364,517.4],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"burgas",type:"maps"}}})});