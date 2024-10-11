(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=496)})({496:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(497);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},497:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.FrenchGuiana.1.09-25-2017 11:37:32
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"FrenchGuiana",revision:1,creditLabel:false,standaloneInit:false,baseWidth:408,baseHeight:500,baseScaleFactor:10,firstEntity:"FR.FG.FG",entities:{"FR.FG.FG":{outlines:[[M,2176,381,Q,2161,379,2157,392,2155,401,2158,408,2161,410,2161,412,2162,414,2163,416,2166,421,2173,425,2176,427,2179,428,2181,428,2186,428,2190,427,2190,430,2190,433,2192,434,2193,436,2195,443,2196,446,2200,449,2202,451,2205,452,2213,454,2217,461,2219,462,2220,465,2220,468,2218,468,2213,468,2209,471,2206,473,2205,473,2198,474,2194,475,2185,475,2181,470,2180,468,2181,465,2180,455,2173,451,2171,449,2169,449,2161,446,2153,446,2152,445,2150,445,2148,444,2145,441,2140,436,2135,436,2129,437,2127,434,2125,432,2123,432,2120,429,2117,425,2113,422,2109,421,2108,420,2108,419,2106,411,2103,409,2101,406,2099,405,2095,403,2092,398,2091,394,2088,393,2078,389,2073,381,2072,379,2071,379,2067,377,2067,371,2067,364,2060,365,2055,367,2050,364,2048,363,2048,362,2046,361,2043,359,2042,356,2041,354,2040,352,2039,349,2038,347,2035,346,2030,344,2025,344,2016,344,2011,338,L,2010,337,Q,2008,332,2003,331,2e3,331,1997,331,1994,331,1991,331,1964,330,1935,330,1917,330,1897,331,1891,331,1889,328,1888,326,1887,324,1885,322,1885,320,1884,318,1883,315,1880,311,1873,307,1872,306,1871,307,1864,306,1859,306,1855,306,1855,307,1848,314,1851,326,1851,330,1850,335,1850,338,1850,340,1846,351,1837,349,1834,348,1831,348,1821,343,1819,337,1816,332,1812,332,1800,331,1789,331,1787,331,1786,331,1779,324,1771,318,1770,316,1769,316,1746,315,1724,315,1709,315,1693,316,1685,316,1680,314,1672,310,1668,303,1667,300,1665,302,1644,299,1626,299,1587,299,1550,298,1546,298,1543,296,1537,292,1536,287,1536,286,1536,284,1529,282,1523,277,1522,275,1521,274,1519,273,1518,272,1511,264,1501,266,1498,266,1497,265,1494,264,1489,262,1487,261,1485,256,1481,247,1471,247,1457,247,1456,235,L,1455,233,Q,1448,231,1440,232,1431,233,1427,230,1424,229,1422,227,1420,226,1419,224,1414,218,1407,220,1399,220,1392,216,1382,210,1376,202,1375,200,1375,199,1375,188,1371,182,1368,181,1367,181,1365,180,1362,178,1359,177,1355,176,1351,175,1348,175,1341,175,1335,175,1328,174,1323,173,1318,172,1314,173,1303,173,1300,165,1299,163,1298,163,1297,159,1294,157,1287,155,1283,149,1282,147,1279,145,1267,144,1254,142,1252,141,1250,140,1242,134,1238,131,1235,127,1233,125,1229,121,1226,121,1216,120,1210,115,1205,110,1199,107,1196,105,1195,104,1192,103,1187,103,1185,102,1184,101,1176,94,1167,91,1164,90,1163,91,1144,92,1131,80,1130,79,1129,79,1114,78,1098,79,L,1097,78,Q,1094,72,1086,75,1073,77,1067,68,1065,64,1061,62,L,1059,61,Q,1048,60,1037,61,L,1034,60,Q,1028,52,1023,50,1021,48,1018,48,L,1016,47,Q,1007,44,1001,50,998,54,994,58,993,59,991,59,984,60,978,61,973,61,969,59,963,52,960,44,959,43,958,43,948,37,937,43,936,43,935,43,925,47,916,55,911,60,911,68,911,71,910,72,907,76,901,83,899,85,894,87,892,88,892,91,887,95,888,105,890,111,885,113,880,115,880,118,879,125,879,133,879,134,879,135,878,137,877,139,872,143,868,145,862,148,862,156,863,166,853,172,852,173,852,174,851,198,851,223,851,259,851,297,851,300,850,303,849,310,844,313,843,313,841,314,833,319,835,331,835,340,831,347,830,348,829,349,827,351,826,352,819,356,820,368,820,377,812,380,807,383,804,385,800,387,796,392,790,396,789,404,L,788,406,Q,782,409,778,408,765,405,763,414,762,416,761,416,755,417,753,422,752,425,750,427,747,436,736,434,730,434,729,437,721,450,711,457,709,457,709,458,705,458,699,460,696,469,691,473,690,474,689,475,L,689,476,687,479,Q,678,482,678,491,678,492,676,494,673,501,667,506,662,508,659,516,659,517,658,519,658,523,657,525,656,535,656,547,656,548,654,549,639,558,633,573,L,631,575,Q,622,577,615,584,614,584,614,585,611,587,610,589,607,591,607,597,607,598,605,599,590,606,585,622,585,624,585,625,576,631,570,634,569,637,568,638,559,652,537,649,535,649,535,650,529,655,524,658,513,663,502,670,493,674,487,681,485,682,483,684,479,686,477,688,472,695,472,701,471,711,459,711,456,711,455,712,453,713,452,715,451,720,448,723,446,727,444,730,442,733,440,733,429,735,430,746,430,748,429,750,426,753,420,756,419,756,419,759,418,769,418,779,418,782,416,783,415,784,415,786,413,788,411,790,406,793,405,800,405,802,404,807,404,809,403,812,400,816,397,818,386,825,386,837,385,839,385,840,381,845,375,850,374,852,374,855,367,861,364,868,361,874,356,876,L,355,877,Q,350,877,350,882,349,885,349,889,348,892,346,893,334,900,332,910,331,914,329,916,325,920,320,918,306,916,299,925,298,927,297,930,296,940,289,945,286,945,285,946,285,956,280,961,274,965,274,973,274,977,273,979,271,989,261,995,253,999,255,1011,255,1047,255,1085,255,1093,256,1103,257,1113,248,1121,243,1124,240,1128,234,1132,234,1138,234,1140,232,1141,224,1144,218,1151,217,1151,217,1152,217,1163,211,1170,209,1173,209,1175,204,1189,206,1205,206,1240,208,1277,208,1287,207,1296,207,1308,212,1314,214,1316,215,1317,216,1320,217,1323,218,1354,218,1387,218,1389,219,1391,221,1396,220,1404,220,1405,221,1406,225,1413,233,1420,234,1421,236,1422,245,1423,256,1422,269,1421,271,1434,271,1436,272,1437,272,1438,273,1441,275,1443,277,1443,283,1445,284,1455,284,1456,284,1459,286,1468,281,1474,275,1478,271,1484,268,1485,266,1486,258,1486,259,1496,259,1501,259,1507,258,1515,265,1519,272,1526,277,1533,280,1534,280,1535,281,1555,281,1574,281,1577,280,1581,280,1583,278,1584,277,1606,277,1626,277,1635,276,1642,275,1643,275,1646,275,1655,268,1661,266,1662,264,1663,260,1666,259,1669,257,1669,257,1671,256,1675,255,1681,255,1683,253,1684,250,1686,245,1690,243,1691,242,1694,241,1699,241,1706,240,1716,248,1723,250,1726,251,1728,253,1731,258,1734,259,1735,259,1737,261,1767,261,1796,261,1834,261,1871,261,1879,265,1885,264,1887,266,1890,268,1892,271,1895,274,1898,277,1902,281,1905,283,1906,286,1907,286,1910,286,1915,290,1916,293,1915,294,1917,296,1918,297,1920,299,1924,301,1926,302,1927,305,1927,314,1930,324,1928,324,1932,324,1934,323,1972,323,2009,323,2016,326,2019,331,2022,336,2027,339,2029,339,2036,338,2046,339,2056,339,2064,334,2068,332,2070,330,2071,328,2072,325,2073,317,2076,314,2081,313,2082,313,2085,312,2107,312,2130,312,2133,313,2135,316,2142,324,2147,330,2151,331,2156,330,2160,332,2161,336,2163,338,2163,348,2164,353,2169,355,2172,356,2176,357,2177,358,2177,364,2178,369,2179,370,2179,371,2180,379,2184,383,2191,387,2195,393,2199,L,393,2200,Q,397,2210,396,2223,396,2226,395,2229,393,2237,394,2248,394,2253,393,2256,385,2264,378,2268,375,2270,372,2272,369,2273,369,2277,369,2298,369,2318,369,2326,372,2334,373,2342,383,2346,394,2348,395,2357,395,2358,396,2359,397,2362,402,2367,404,2370,405,2373,406,2374,406,2378,406,2396,419,2406,421,2407,422,2410,428,2419,427,2434,427,2436,428,2438,429,2445,428,2456,428,2457,428,2460,427,2470,427,2481,426,2498,440,2500,446,2498,453,2500,455,2500,456,2502,457,2503,459,2504,460,2506,461,2509,467,2516,473,2524,476,2525,478,2528,481,2530,484,2536,487,2538,489,2541,493,2545,496,2553,497,2554,500,2555,504,2560,507,2566,510,2571,510,2578,510,2585,512,2592,511,2594,512,2594,525,2595,537,2597,542,2595,549,2595,558,2594,562,2600,564,2601,565,2602,565,2605,566,2607,565,2612,571,2612,573,2612,574,2614,578,2617,581,2620,586,2627,587,2635,589,2636,589,2639,590,2647,591,2654,590,2659,591,2666,591,2668,592,2668,609,2674,628,2673,636,2672,644,2672,666,2669,675,2687,676,2688,676,2689,678,2695,678,2699,678,2707,676,2716,676,2722,681,2723,683,2723,687,2724,696,2726,700,2732,704,2736,705,2742,704,2745,705,2747,707,2753,712,2758,715,2760,716,2763,716,2768,717,2773,717,2776,717,2777,719,2781,720,2784,723,2790,723,2801,722,2806,717,2813,716,2813,716,2814,715,2828,715,2842,715,2844,716,2847,716,2850,720,2850,727,2853,733,2853,746,2854,758,2860,L,760,2861,Q,763,2864,763,2867,763,2870,766,2872,770,2872,772,2874,779,2872,780,2879,781,2885,784,2888,792,2901,803,2895,805,2894,805,2893,805,2888,807,2885,809,2878,813,2879,822,2878,833,2879,835,2879,836,2882,841,2892,847,2899,849,2901,850,2903,851,2910,852,2917,852,2920,854,2920,860,2923,863,2929,864,2932,866,2933,867,2933,868,2934,869,2940,868,2947,868,2953,863,2955,849,2957,850,2973,850,2981,846,2984,843,2988,839,2993,836,3e3,836,3008,836,3045,837,3082,836,3100,836,3120,835,3127,826,3132,819,3135,819,3140,817,3151,822,3159,823,3161,826,3162,835,3165,831,3175,830,3183,822,3187,818,3188,813,3189,811,3191,812,3192,812,3203,802,3204,800,3203,797,3204,789,3206,789,3214,788,3225,779,3228,777,3228,776,3229,769,3237,771,3252,770,3253,770,3254,763,3260,758,3268,757,3269,757,3270,754,3277,760,3281,760,3305,760,3327,760,3332,754,3333,748,3335,748,3342,748,3350,741,3349,722,3348,706,3354,704,3354,703,3355,701,3356,700,3357,698,3358,697,3359,684,3367,680,3377,679,3379,678,3381,675,3383,675,3385,673,3390,668,3391,659,3391,654,3397,651,3400,651,3403,650,3414,644,3422,642,3425,640,3426,631,3432,632,3444,632,3449,628,3456,L,627,3457,Q,611,3460,597,3460,593,3460,594,3461,591,3468,587,3474,586,3477,585,3479,583,3481,579,3483,575,3487,573,3493,570,3497,567,3501,560,3513,561,3528,562,3543,564,3559,L,564,3560,Q,565,3563,566,3566,567,3571,573,3579,575,3582,581,3584,584,3585,585,3586,587,3588,591,3591,591,3592,593,3592,599,3593,602,3596,606,3598,606,3602,608,3623,608,3643,607,3645,607,3648,600,3662,585,3672,583,3672,582,3674,581,3676,581,3681,579,3691,582,3697,586,3707,595,3713,603,3717,609,3723,611,3724,611,3725,613,3743,613,3761,613,3764,614,3766,617,3776,624,3782,627,3784,627,3788,628,3799,628,3810,628,3812,627,3814,624,3822,618,3827,616,3829,615,3830,606,3833,603,3838,600,3847,601,3857,601,3867,601,3876,600,3877,600,3878,598,3880,595,3883,591,3886,587,3890,586,3890,585,3892,581,3892,582,3898,582,3902,584,3904,584,3906,585,3909,586,3920,590,3929,593,3938,600,3942,601,3943,602,3944,603,3949,605,3954,606,3968,593,3970,591,3970,590,3971,584,3974,581,3979,578,3981,577,3982,571,3985,573,3989,571,4009,573,4028,573,4038,573,4048,571,4051,571,4052,565,4062,554,4072,552,4073,551,4074,540,4081,527,4090,525,4090,525,4092,519,4100,513,4106,508,4113,502,4116,500,4119,496,4120,485,4126,488,4141,487,4142,487,4145,484,4149,476,4156,475,4156,475,4157,473,4166,473,4177,473,4178,472,4180,470,4186,469,4195,469,4197,467,4198,462,4203,455,4207,453,4209,452,4211,446,4217,440,4223,438,4225,438,4227,434,4233,428,4242,L,427,4244,Q,418,4248,414,4254,411,4260,411,4267,412,4286,411,4304,411,4305,410,4307,403,4311,399,4315,397,4317,396,4319,389,4324,391,4333,393,4343,389,4351,388,4353,386,4355,382,4358,379,4361,373,4367,374,4376,375,4385,374,4392,373,4396,372,4397,369,4401,362,4407,359,4407,359,4409,357,4412,356,4412,346,4414,348,4427,347,4430,347,4431,338,4438,337,4448,336,4450,334,4451,330,4457,323,4463,317,4466,318,4471,316,4483,302,4489,300,4490,298,4492,294,4498,289,4500,286,4502,284,4504,278,4513,264,4511,245,4507,228,4508,225,4508,223,4510,215,4511,211,4514,208,4516,206,4523,204,4524,203,4527,202,4529,198,4531,195,4532,193,4533,192,4533,192,4535,190,4536,187,4538,184,4540,184,4543,183,4551,184,4557,184,4563,182,4568,179,4569,178,4571,170,4577,172,4588,172,4590,174,4593,174,4594,175,4595,175,4603,175,4613,175,4616,175,4617,170,4621,170,4627,171,4633,168,4637,167,4638,166,4641,162,4644,158,4646,155,4646,152,4646,143,4646,134,4645,123,4644,117,4638,113,4634,112,4629,109,4622,103,4621,100,4621,97,4621,86,4620,80,4624,78,4625,76,4626,69,4629,68,4636,66,4637,65,4638,60,4645,55,4651,53,4652,52,4654,47,4660,48,4668,81,4666,115,4669,118,4669,119,4671,120,4673,121,4675,121,4676,121,4677,123,4679,125,4683,126,4686,129,4689,131,4690,131,4693,130,4701,131,4708,131,4709,133,4710,139,4711,139,4718,138,4720,138,4723,135,4727,127,4733,125,4733,123,4735,120,4743,128,4747,134,4749,139,4752,149,4757,149,4769,149,4780,159,4781,160,4781,161,4782,163,4783,163,4789,163,4790,164,4790,178,4795,193,4797,198,4798,201,4800,204,4800,206,4803,210,4811,210,4821,209,4825,215,4826,218,4828,221,4831,226,4840,235,4838,240,4838,242,4833,243,4831,244,4830,245,4829,245,4828,247,4825,248,4823,247,4822,248,4821,256,4817,265,4819,278,4817,288,4824,292,4828,298,4837,299,4840,301,4840,314,4841,325,4842,329,4841,330,4841,334,4836,340,4831,342,4829,343,4826,346,4824,348,4823,355,4816,365,4822,369,4823,367,4831,366,4833,366,4836,363,4840,359,4846,358,4847,358,4849,357,4860,358,4869,358,4870,358,4871,357,4879,367,4880,371,4880,373,4881,377,4883,380,4886,382,4888,383,4890,390,4903,406,4902,413,4901,421,4899,430,4898,432,4907,432,4910,434,4911,439,4915,450,4914,483,4914,516,4914,522,4914,530,4915,536,4915,543,4912,544,4910,545,4909,548,4902,550,4896,551,4894,552,4893,560,4891,569,4889,571,4888,571,4887,570,4876,582,4877,584,4877,586,4878,589,4880,592,4882,594,4883,595,4886,599,4893,597,4902,594,4913,603,4915,624,4922,631,4943,631,4945,633,4945,642,4947,651,4947,656,4947,659,4946,660,4946,663,4945,667,4944,672,4942,680,4938,688,4939,698,4938,707,4938,717,4938,717,4927,716,4925,717,4923,720,4921,722,4921,723,4919,725,4918,735,4918,738,4912,739,4910,741,4909,L,741,4906,Q,744,4895,744,4883,L,744,4881,Q,752,4880,758,4877,761,4876,762,4873,768,4863,781,4862,792,4862,802,4861,804,4861,806,4861,818,4861,826,4853,827,4852,828,4850,834,4849,841,4849,851,4848,855,4842,857,4841,855,4840,854,4829,866,4830,869,4830,871,4828,878,4824,882,4815,883,4814,884,4814,895,4813,909,4813,912,4813,916,4813,923,4809,928,4803,928,4800,928,4799,929,4795,931,4790,931,4788,931,4787,929,4772,935,4759,936,4757,939,4754,940,4750,942,4750,945,4749,950,4749,957,4748,959,4756,960,4762,964,4765,964,4767,966,4767,972,4768,975,4764,975,4762,976,4759,974,4747,985,4749,989,4749,993,4748,999,4747,1e3,4739,1001,4731,1013,4730,1014,4730,1015,4728,1016,4727,1017,4724,L,1017,4723,Q,1017,4710,1021,4700,1021,4699,1022,4698,1024,4692,1030,4698,1032,4699,1034,4699,1045,4700,1055,4700,1057,4700,1059,4699,1061,4699,1063,4698,1067,4697,1072,4698,1082,4699,1085,4692,1085,4691,1086,4690,1088,4689,1088,4687,1090,4678,1088,4671,1087,4670,1086,4668,1082,4661,1082,4654,1082,4649,1086,4647,1089,4645,1093,4644,1097,4641,1104,4641,1114,4641,1113,4627,1113,4625,1114,4626,1120,4624,1127,4620,1135,4614,1139,4609,1143,4603,1154,4604,1159,4605,1164,4604,1171,4603,1173,4609,1173,4610,1175,4611,1178,4612,1180,4614,1184,4617,1187,4624,1188,4625,1188,4627,1191,4634,1197,4633,1202,4632,1205,4633,1211,4634,1212,4638,1214,4645,1211,4650,1209,4654,1205,4657,1203,4655,1203,4657,1199,4662,1193,4665,1192,4666,1193,4667,1192,4674,1191,4681,1189,4684,1193,4686,1195,4689,1196,4692,1197,4699,1204,4702,1211,4706,1222,4705,1233,4702,1230,4692,1230,4690,1232,4689,1236,4681,1248,4683,1249,4683,1250,4684,1253,4689,1259,4693,1261,4695,1262,4698,1264,4700,1265,4701,1268,4709,1279,4707,1302,4703,1313,4718,1314,4720,1314,4723,1315,4731,1319,4739,1319,4740,1321,4741,1323,4742,1325,4742,1336,4743,1349,4743,1357,4743,1364,4742,1380,4740,1398,4744,L,1399,4746,Q,1406,4750,1406,4762,1406,4763,1407,4764,1409,4766,1412,4766,1439,4768,1465,4768,1503,4768,1539,4768,1545,4768,1550,4767,1558,4766,1567,4765,1576,4765,1579,4756,1582,4751,1585,4749,1593,4743,1595,4733,1595,4730,1596,4728,1601,4723,1608,4723,1615,4722,1624,4722,1625,4720,1626,4719,1629,4712,1642,4708,1644,4707,1644,4705,1648,4697,1657,4695,1660,4695,1663,4695,1675,4693,1683,4687,1688,4683,1690,4674,1691,4669,1693,4666,1694,4663,1698,4662,1705,4658,1710,4654,1710,4652,1713,4651,1723,4647,1737,4650,1739,4650,1741,4650,1751,4647,1756,4657,1757,4659,1758,4659,1764,4660,1765,4665,1765,4666,1765,4667,1765,4673,1772,4675,1774,4676,1775,4678,1775,4682,1778,4686,L,1778,4687,Q,1778,4690,1779,4692,1781,4695,1789,4698,1795,4699,1802,4701,1803,4702,1805,4705,1807,4707,1810,4710,1812,4714,1818,4714,1829,4714,1836,4720,1837,4722,1837,4723,1840,4731,1850,4728,1856,4726,1859,4731,1859,4732,1860,4733,1862,4741,1873,4739,1880,4736,1885,4740,1886,4743,1887,4747,1889,4752,1889,4762,1889,4763,1887,4765,1886,4769,1881,4771,1875,4771,1876,4777,1877,4783,1873,4784,1871,4784,1869,4784,1857,4784,1848,4790,1846,4791,1845,4793,L,1844,4795,Q,1835,4801,1826,4809,1824,4811,1823,4812,1822,4813,1822,4815,1824,4829,1815,4840,1814,4841,1814,4842,1813,4850,1816,4858,1816,4862,1820,4863,1828,4865,1827,4858,1827,4853,1830,4853,1843,4848,1856,4845,1862,4842,1867,4840,1871,4837,1875,4836,1879,4832,1886,4832,1888,4832,1891,4831,1896,4825,1905,4826,1917,4828,1920,4821,1925,4821,1930,4820,1932,4820,1933,4820,1949,4819,1966,4819,1978,4817,1990,4817,1994,4817,1998,4815,2003,4813,2006,4808,L,2006,4807,Q,2008,4799,2015,4796,2016,4795,2018,4795,2041,4793,2065,4795,2067,4795,2068,4797,2073,4806,2080,4815,2081,4817,2083,4817,2093,4817,2092,4828,2092,4832,2097,4834,2108,4838,2121,4837,2122,4837,2123,4838,2125,4840,2127,4842,2128,4846,2131,4849,2131,4852,2132,4852,2156,4854,2181,4854,2186,4853,2189,4855,2194,4857,2197,4864,2198,4868,2200,4871,2201,4873,2202,4877,2202,4878,2203,4879,2210,4880,2219,4880,2238,4880,2259,4879,2269,4879,2271,4869,2272,4866,2274,4865,2277,4862,2279,4861,2282,4860,2283,4857,2288,4849,2300,4849,2301,4849,2303,4849,2309,4848,2309,4844,2309,4841,2310,4840,2317,4834,2325,4828,2325,4826,2326,4825,2331,4824,2331,4819,2328,4812,2332,4808,2334,4807,2336,4807,2341,4801,2347,4792,2349,4787,2349,4777,L,2349,4776,Q,2353,4774,2357,4773,2361,4773,2366,4772,2368,4771,2371,4771,2378,4766,2382,4759,2384,4751,2397,4749,2398,4749,2399,4748,2405,4741,2406,4733,2406,4731,2407,4728,2409,4725,2415,4726,2418,4725,2422,4725,2426,4725,2431,4723,2433,4719,2435,4716,2438,4712,2440,4710,2441,4708,2443,4709,2450,4709,2456,4705,2457,4702,2461,4700,2472,4695,2487,4698,2489,4697,2490,4697,2497,4692,2504,4686,2512,4681,2518,4673,2521,4666,2520,4658,2519,4653,2522,4653,2537,4652,2553,4652,2569,4653,2570,4634,2570,4633,2571,4632,2576,4630,2579,4629,2581,4627,2584,4626,2586,4625,2587,4622,2588,4621,2589,4619,2588,4617,2591,4616,2600,4612,2612,4612,2622,4612,2633,4614,2641,4614,2645,4611,2648,4609,2649,4608,2652,4597,2651,4586,2651,4580,2651,4576,2648,4562,2660,4560,2661,4560,2662,4560,2661,4548,2670,4543,L,2671,4541,Q,2673,4535,2678,4533,2683,4532,2685,4531,2689,4529,2690,4524,2691,4519,2693,4516,2693,4514,2694,4514,2702,4512,2707,4507,2708,4505,2709,4504,2710,4503,2710,4502,2711,4499,2711,4498,2714,4491,2715,4486,2715,4483,2717,4482,2719,4480,2722,4479,2727,4473,2728,4464,2728,4463,2730,4463,2731,4461,2733,4459,2733,4458,2735,4457,2740,4455,2747,4456,2750,4456,2752,4455,2756,4451,2760,4448,2767,4441,2775,4437,2779,4434,2781,4431,2781,4430,2782,4427,2782,4425,2783,4423,2784,4414,2790,4408,2793,4406,2793,4404,2793,4394,2793,4386,2792,4377,2796,4373,2797,4370,2798,4367,2799,4365,2801,4359,2812,4356,2816,4349,2816,4348,2817,4348,2817,4344,2820,4342,2821,4341,2825,4341,2831,4341,2833,4335,2835,4333,2835,4331,2837,4324,2833,4321,2833,4316,2832,4310,2831,4301,2825,4294,2823,4293,2821,4292,2806,4287,2807,4269,2806,4258,2807,4248,2807,4246,2812,4243,2817,4236,2816,4226,2816,4221,2817,4219,2819,4215,2822,4214,2832,4210,2841,4203,2844,4199,2845,4197,2846,4195,2847,4193,2852,4183,2857,4179,2861,4176,2864,4172,2865,4170,2868,4166,2870,4161,2873,4156,2877,4152,2877,4147,2877,4144,2878,4144,2884,4140,2885,4132,2885,4128,2885,4123,2885,4121,2886,4119,2886,4116,2886,4114,2888,4106,2893,4104,2894,4103,2895,4101,2899,4098,2905,4091,2906,4089,2906,4088,2907,4071,2906,4055,2906,4046,2910,4039,2910,4036,2912,4035,2915,4033,2918,4028,2919,4026,2921,4024,2926,4022,2923,4014,2923,4011,2925,4010,2929,4003,2935,3998,2937,3995,2939,3993,2944,3991,2944,3985,2944,3984,2945,3983,2947,3979,2951,3977,2952,3976,2952,3975,2954,3960,2954,3945,2954,3941,2958,3938,2963,3932,2963,3922,2963,3908,2977,3909,2983,3908,2990,3908,L,2992,3906,Q,2993,3900,2992,3897,2999,3895,3008,3896,3017,3895,3025,3895,3026,3895,3027,3895,3029,3894,3033,3893,3035,3892,3036,3890,3040,3889,3041,3887,3047,3878,3044,3865,3044,3863,3043,3863,3036,3861,3034,3856,3033,3854,3031,3853,3027,3849,3027,3847,3026,3841,3025,3837,3023,3827,3029,3822,3032,3820,3033,3818,3037,3806,3036,3794,3036,3787,3042,3784,3043,3783,3044,3782,3045,3781,3047,3779,3047,3778,3047,3776,3047,3763,3055,3754,3056,3751,3057,3750,3060,3741,3060,3731,L,3060,3729,Q,3074,3729,3074,3716,3074,3715,3075,3713,3078,3707,3084,3699,3086,3696,3091,3692,3093,3690,3094,3689,3097,3686,3098,3684,3099,3678,3099,3674,3099,3665,3098,3657,L,3098,3656,Q,3097,3653,3096,3651,3090,3645,3084,3636,3083,3635,3083,3634,3078,3633,3078,3628,3077,3610,3078,3591,3083,3571,3085,3554,3085,3552,3086,3551,3089,3548,3090,3547,3092,3543,3096,3542,3097,3539,3098,3539,3102,3530,3101,3519,3100,3515,3102,3515,3106,3515,3108,3514,3112,3513,3115,3512,3124,3511,3130,3506,3135,3501,3138,3490,3139,3488,3140,3487,3142,3485,3145,3483,3146,3481,3147,3480,3149,3469,3151,3460,3153,3457,3155,3456,3156,3454,3158,3453,3166,3449,3167,3442,3167,3441,3167,3440,3165,3432,3173,3433,3181,3434,3187,3430,3189,3428,3191,3428,3205,3425,3220,3426,3224,3426,3230,3428,3238,3428,3242,3422,3245,3419,3248,3415,3252,3413,3253,3411,3255,3405,3257,3397,3257,3395,3259,3393,3257,3388,3263,3384,3265,3382,3267,3380,3268,3374,3269,3368,3269,3358,3276,3350,3276,3349,3277,3348,3285,3340,3283,3327,3281,3319,3285,3318,3293,3310,3299,3301,3299,3300,3300,3299,3299,3289,3306,3283,3308,3282,3309,3281,3319,3273,3327,3263,3328,3262,3328,3261,3329,3255,3336,3251,3340,3248,3338,3243,3337,3228,3348,3222,3354,3218,3360,3210,3360,3209,3361,3208,3361,3205,3362,3204,3364,3203,3364,3202,3367,3189,3379,3187,3381,3187,3383,3187,3384,3185,3386,3184,3391,3179,3391,3175,3389,3155,3401,3148,3407,3144,3409,3138,3411,3133,3413,3130,3413,3128,3415,3124,3419,3122,3422,3118,3424,3115,3427,3114,3432,3111,3430,3102,3430,3099,3431,3097,3438,3089,3447,3084,3448,3083,3449,3083,3454,3081,3456,3076,3457,3072,3459,3067,3462,3058,3467,3051,3467,3049,3470,3048,3475,3041,3478,3033,3478,3031,3479,3029,3480,3026,3482,3023,3482,3022,3483,3021,3495,3015,3492,2998,3490,2989,3498,2985,3513,2978,3521,2967,3522,2965,3524,2964,3527,2956,3533,2951,3539,2949,3537,2940,3535,2931,3540,2924,3545,2919,3545,2913,3545,2898,3554,2888,3558,2882,3560,2874,3560,2863,3566,2858,3569,2855,3569,2854,3570,2843,3572,2835,3573,2833,3576,2831,3576,2829,3578,2828,3578,2827,3578,2826,3579,2820,3578,2817,3579,2811,3579,2806,3579,2794,3590,2794,3594,2793,3597,2793,3602,2790,3605,2788,3607,2786,3610,2785,3618,2782,3625,2784,3635,2784,3641,2777,3643,2774,3645,2771,3646,2770,3647,2766,3649,2763,3650,2758,3650,2740,3651,2722,3651,2720,3651,2717,3649,2708,3656,2704,3660,2703,3662,2701,3666,2698,3668,2693,3672,2687,3680,2683,3683,2682,3686,2681,3692,2680,3693,2674,3695,2666,3703,2667,3715,2666,3717,2657,3719,2648,3728,2644,3734,2642,3739,2638,3750,2620,3763,2610,3764,2609,3766,2608,3772,2607,3774,2602,3775,2600,3776,2599,3781,2592,3789,2587,3790,2586,3791,2586,3798,2585,3801,2579,3806,2571,3812,2569,3814,2568,3815,2566,3817,2565,3818,2563,3820,2562,3820,2560,3822,2544,3822,2528,3822,2522,3823,2518,3824,2509,3824,2500,3823,2496,3825,2494,3830,2487,3831,2481,3831,2478,3833,2476,3837,2472,3838,2470,3840,2469,3841,2469,3846,2465,3845,2460,3843,2451,3849,2446,3850,2444,3853,2443,3858,2439,3861,2437,3865,2432,3870,2428,3872,2427,3873,2424,3877,2421,3878,2415,3878,2413,3880,2411,3888,2406,3898,2408,3908,2408,3915,2403,3916,2400,3919,2399,3920,2398,3922,2397,3926,2397,3927,2395,3928,2390,3935,2388,3937,2387,3936,2386,3936,2378,3942,2378,3949,2378,3956,2375,3957,2375,3960,2375,3964,2374,3969,2372,3970,2371,3971,2369,3972,2365,3979,2365,3985,2365,3991,2362,3993,2361,3994,2358,3997,2348,4010,2349,4011,2348,4013,2348,4016,2347,4016,2345,4017,2309,4018,2275,4017,2237,4017,2200,4017,2192,4020,2186,4022,2183,4025,2180,4033,2176,4034,2166,4034,2162,4034,2158,4034,2151,4035,2144,4036,2128,4026,2122,4021,2119,4021,2112,4021,2107,4019,2104,4012,2097,4005,2090,4004,2089,4004,2088,4005,2073,3997,2069,3996,2068,3994,2066,3992,2065,3989,2064,3983,2058,3984,2050,3984,2047,3981,2044,3979,2041,3978,2041,3967,2037,3964,2028,3964,2025,3964,2024,3963,2014,3957,2012,3948,2007,3945,1999,3944,1998,3944,1997,3931,1988,3931,1974,3931,1969,3930,1966,3929,1958,3928,1950,3928,1939,3931,1931,3931,1927,3934,1926,3935,1924,3936,1922,3938,1920,3938,1918,3936,1907,3937,1893,3937,1883,3935,1877,3934,1876,3934,1875,3931,1871,3927,1873,3922,1873,3921,1869,3918,1867,3915,1866,3913,1865,3911,1863,3905,1860,3905,1857,3904,1853,3903,1850,3903,1848,3902,1848,3892,1844,3887,1836,3887,1835,3886,1834,3881,1830,3882,1824,3882,1816,3879,1809,3878,1808,3879,1808,3874,1791,3875,1772,3875,1769,3874,1765,3872,1761,3871,1756,3865,1744,3866,1729,3866,1720,3866,1711,3865,1703,3859,1694,3857,1691,3855,1689,3851,1683,3849,1675,L,3849,1674,Q,3848,1666,3849,1658,3849,1648,3846,1639,3846,1637,3843,1634,3841,1630,3840,1626,3838,1621,3839,1615,3840,1602,3830,1600,3824,1598,3820,1597,3816,1596,3813,1594,3810,1593,3810,1592,3808,1591,3807,1589,3805,1582,3801,1577,3799,1576,3799,1575,3797,1574,3796,1573,3792,1572,3786,1569,3783,1568,3783,1567,3780,1560,3774,1556,3773,1555,3772,1555,L,3771,1551,Q,3752,1551,3741,1537,3739,1535,3737,1534,3735,1532,3734,1531,3726,1523,3717,1525,3715,1525,3714,1524,3708,1520,3706,1517,3694,1500,3671,1504,3669,1504,3668,1505,3666,1507,3662,1508,3654,1510,3654,1520,3654,1523,3654,1525,3653,1537,3654,1550,3654,1560,3651,1568,3650,1569,3649,1569,3644,1570,3642,1573,3637,1574,3637,1577,3634,1600,3634,1622,3634,1659,3634,1698,3634,1735,3634,1772,3634,1776,3635,1780,3636,1781,3636,1787,3636,1788,3637,1791,3637,1793,3638,1795,3638,1803,3638,1812,3638,1817,3639,1824,3641,1833,3636,1837,3634,1840,3633,1841,3629,1843,3627,1849,3623,1857,3626,1868,3626,1874,3621,1877,3618,1878,3615,1879,3609,1881,3610,1887,3611,1899,3602,1898,3592,1898,3584,1899,3582,1899,3581,1900,3580,1905,3579,1909,3579,1910,3578,1911,3576,1912,3572,1914,3571,1914,3569,1914,3560,1914,3560,1918,3557,1920,3557,1922,3556,1924,3554,1926,3550,1931,3541,1928,3540,1928,3538,1927,3531,1923,3535,1912,3535,1910,3535,1909,3533,1903,3537,1903,3541,1903,3548,1903,3549,1903,3552,1903,3554,1901,3555,1901,3557,1900,3560,1899,3561,1898,3560,1893,3560,1891,3561,1892,3568,1887,3577,1885,3582,1884,3587,1885,3601,1885,3601,1874,3601,1873,3602,1871,3604,1867,3606,1866,3606,1863,3607,1862,3609,1846,3609,1830,3609,1827,3610,1824,3611,1821,3611,1819,3615,1808,3615,1796,3615,1757,3617,1721,3617,1703,3614,1688,3613,1686,3613,1684,3605,1679,3605,1674,3605,1672,3603,1669,3599,1666,3599,1663,3599,1656,3599,1650,3599,1647,3601,1642,3602,1630,3593,1626,3592,1625,3590,1625,3582,1622,3584,1614,3584,1607,3580,1602,3578,1599,3576,1597,3573,1596,3573,1593,3573,1582,3572,1573,3571,1570,3570,1569,3565,1565,3566,1560,3565,1551,3562,1542,3562,1531,3561,1519,3561,1505,3560,1493,3560,1486,3561,1482,3562,1471,3555,1470,3553,1469,3552,1469,3539,1464,3539,1452,3538,1444,3533,1437,3531,1435,3530,1434,3520,1433,3512,1430,3509,1429,3509,1428,3507,1422,3503,1420,3492,1415,3485,1409,3483,1406,3482,1404,3480,1396,3471,1393,3468,1393,3465,1393,3457,1393,3456,1389,3455,1387,3452,1386,3449,1379,3440,1377,3431,1373,3430,1368,3428,1363,3425,1360,3423,1355,3421,1356,3417,1354,3414,1354,3410,1354,3409,1352,3405,1348,3401,1344,3399,1341,3398,1340,3394,1334,3389,1331,3387,1330,3386,1331,3370,1330,3354,1330,3352,1329,3350,1329,3343,1327,3341,1317,3340,1315,3338,1314,3336,1312,3333,1308,3329,1305,3324,1300,3321,1298,3319,1296,3317,1293,3317,1290,3312,1280,3305,1270,3302,1267,3301,1264,3300,1260,3300,1259,3292,1256,3284,1254,3281,1252,3280,1250,3269,1241,3257,1241,3252,1240,3247,1240,3239,1239,3235,1243,3232,1244,3232,1246,3231,1247,3231,1249,3232,1258,3223,1259,3221,1259,3221,1260,3219,1262,3218,1264,3215,1265,3215,1271,L,3215,1272,Q,3215,1276,3212,1277,3203,1281,3192,1280,3190,1280,3190,1279,3186,1276,3187,1271,3187,1260,3195,1258,3202,1256,3207,1254,3211,1251,3211,1249,3212,1234,3212,1220,3212,1218,3211,1217,3207,1210,3207,1205,3208,1197,3205,1193,3203,1192,3203,1191,3196,1181,3198,1165,L,3197,1162,Q,3190,1159,3182,1158,3179,1158,3174,1157,3170,1155,3164,1155,3156,1154,3156,1146,3156,1140,3156,1133,3155,1122,3145,1120,3140,1119,3138,1116,3134,1112,3126,1116,3124,1117,3124,1118,3123,1124,3122,1129,3122,1133,3121,1133,3109,1133,3098,1136,3096,1136,3096,1138,3091,1146,3093,1157,3093,1162,3090,1165,3086,1166,3084,1170,3083,1173,3083,1175,3084,1186,3076,1193,3067,1198,3057,1198,L,3055,1197,Q,3048,1191,3049,1179,3050,1170,3048,1162,3047,1160,3043,1157,3037,1149,3033,1142,3032,1140,3031,1138,3029,1130,3023,1126,3019,1124,3017,1121,3015,1119,3012,1114,3011,1112,3011,1111,3006,1102,2995,1098,2988,1095,2987,1091,2986,1088,2987,1086,2986,1084,2986,1080,2985,1075,2983,1072,2980,1071,2979,1071,2977,1070,2976,1069,2968,1062,2958,1054,2955,1053,2954,1053,2947,1052,2939,1051,2930,1049,2930,1039,2929,1034,2926,1030,2925,1028,2922,1027,2917,1023,2912,1013,2911,1011,2910,1010,2906,1003,2903,999,2898,996,2895,994,2882,980,2872,969,2871,967,2870,966,2860,962,2854,956,2853,955,2853,954,2852,951,2850,951,2849,949,2848,946,2837,934,2816,938,2814,938,2813,937,2811,934,2806,934,2804,933,2801,933,2799,932,2798,932,2797,931,2795,929,2793,927,2791,927,2782,923,2778,916,2772,908,2760,904,2751,900,2744,897,2738,892,2735,888,2734,884,2731,881,2728,880,2727,878,2719,874,2718,868,2717,865,2716,862,2713,859,2707,856,2705,855,2703,853,2697,852,2694,847,2689,837,2686,828,2686,826,2683,825,2678,820,2676,818,2675,816,2675,813,2670,809,2666,802,2664,800,2661,798,2653,794,2648,787,2643,782,2635,777,2633,776,2632,776,2629,775,2627,774,2619,768,2614,764,2612,762,2610,759,2609,755,2608,753,2603,746,2596,746,2591,745,2588,742,2581,734,2572,730,L,2570,729,Q,2561,722,2556,718,2554,714,2551,714,2540,713,2536,709,2535,707,2535,706,2526,702,2523,694,2522,691,2521,690,2521,689,2520,688,2519,686,2518,686,2507,680,2502,671,2499,669,2499,665,L,2498,663,Q,2492,655,2487,652,2485,650,2483,650,2477,646,2472,642,2470,640,2469,639,2466,638,2464,639,2455,637,2453,627,2453,624,2453,622,2454,615,2447,616,2443,617,2440,619,2430,619,2425,614,2424,612,2422,609,2420,608,2418,608,2415,604,2410,600,2404,593,2400,591,2399,590,2399,589,2399,582,2397,579,2396,577,2393,577,2390,572,2385,571,2375,565,2371,556,2369,554,2368,552,2368,551,2367,550,2366,541,2361,533,2360,531,2361,530,2360,523,2357,517,2356,514,2356,511,2356,505,2350,502,L,2349,501,Q,2339,500,2331,499,2327,498,2325,495,2319,491,2317,487,2311,483,2306,477,2303,475,2301,474,2298,467,2294,465,2293,462,2292,460,2288,454,2280,454,2279,454,2278,454,2276,453,2275,452,2274,452,2272,452,2269,450,2269,449,2262,441,2250,442,2239,442,2236,434,L,2236,433,Q,2235,430,2235,429,2231,428,2229,428,2222,428,2219,422,2218,421,2217,421,2215,420,2213,419,2210,417,2206,414,2197,404,2194,392,2185,388,2180,383,Q,2178,381,2176,381,Z]],label:"Guyane",shortLabel:"FG",labelPosition:[204.1,249.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"frenchguiana",type:"maps"}}})});