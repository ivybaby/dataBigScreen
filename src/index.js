import _ from 'lodash';

import Icon from './images/tri-title-icon.png';
import useStatis from './images/usesta-icon.png';
import companySumIcon from './images/company-sum-icon.png'

import icon_1 from './images/top-left.png';
import icon_2 from './images/top-right.png';
import icon_3 from './images/bottom-left.png';
import icon_4 from './images/bottom-right.png';

import setPosition from './print.js';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/AdminLTE.css'
import './style.css';
import 'bootstrap/dist/js/bootstrap.js'

require('bootstrap');

var echarts = require('echarts');

import 'echarts/chart/map';
import 'echarts/chart/bar';
import 'echarts/chart/pie';
import 'echarts/theme/infographic';


function component(title,rightContent,classTittleList,classList,classFlagList,img,isborder) {
     var element = document.createElement('div');

    // 将图像添加到我们现有的 div
     var myIcon = new Image();
     myIcon.src = img;
    for(var i in classTittleList){
        myIcon.classList.add(classTittleList[i]);
    }


    var oFrag=document.createDocumentFragment();
    var eleTime=document.createElement('span');//当月用电量统计-时间
    eleTime.classList.add('time-block-bg','clearfix');
    var otime=document.createElement('span');

    for(var i in classFlagList){
        otime.classList.add(classFlagList[i]);
    }
    otime.innerHTML=rightContent;
    oFrag.appendChild(otime);


    if(isborder){
        eleTime.appendChild(setPosition());
    }else{
        var spanUnit=document.createElement('span');
        spanUnit.innerHTML='kwh';
        spanUnit.classList.add('text-red','span-unit');
        otime.appendChild(spanUnit);
    }
    eleTime.appendChild(oFrag);
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = title;
    for(var i in classList){
        element.classList.add(classList[i]);
    }


    element.appendChild(myIcon);
    element.appendChild(eleTime);
    return element;
}
/*
* 当月用电量统计
* */
var class1=['item-header','text-blue','clearfix'];
var classTittle=['item-header-img','item-right'];
var classFlag=['time-bg'];//right的样式表
document.getElementById("box-one").appendChild(component('当月用电量统计','2017-12',classTittle,class1,classFlag,Icon,true));

/*
*当月用电统计
* */
var class2=['item-header','text-yellow','clearfix'];
var classTittleIcon=['item-header-img','item-header-img-icon','item-right'];
var classFlag1=['time-bg','time-bg-blue','clearfix'];//right的样式表
document.getElementById("box-two").appendChild(component('当月用电统计','158829',classTittleIcon,class2,classFlag1,useStatis,false));
/*
*接入企业数
* */
var class2=['item-header','text-blue','clearfix'];
var classTittleIcon=['item-header-img','item-header-company-icon','item-right'];
var classFlag2=['time-bg','time-bg-init'];//right的样式表
document.getElementById("box-for").appendChild(component('接入企业数','16848',classTittleIcon,class1,classFlag2,companySumIcon,true));



// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();
myChart.hideLoading();
var placeList = [
    {name:'海门', geoCoord:[121.15, 31.89]},
    {name:'鄂尔多斯', geoCoord:[109.781327, 39.608266]},
    {name:'招远', geoCoord:[120.38, 37.35]},
    {name:'舟山', geoCoord:[122.207216, 29.985295]},
    {name:'齐齐哈尔', geoCoord:[123.97, 47.33]},
    {name:'盐城', geoCoord:[120.13, 33.38]},
    {name:'赤峰', geoCoord:[118.87, 42.28]},
    {name:'青岛', geoCoord:[120.33, 36.07]},
    {name:'乳山', geoCoord:[121.52, 36.89]},
    {name:'金昌', geoCoord:[102.188043, 38.520089]},
    {name:'泉州', geoCoord:[118.58, 24.93]},
    {name:'莱西', geoCoord:[120.53, 36.86]},
    {name:'日照', geoCoord:[119.46, 35.42]},
    {name:'胶南', geoCoord:[119.97, 35.88]},
    {name:'南通', geoCoord:[121.05, 32.08]},
    {name:'拉萨', geoCoord:[91.11, 29.97]},
    {name:'云浮', geoCoord:[112.02, 22.93]},
    {name:'梅州', geoCoord:[116.1, 24.55]},
    {name:'文登', geoCoord:[122.05, 37.2]},
    {name:'上海', geoCoord:[121.48, 31.22]},
    {name:'攀枝花', geoCoord:[101.718637, 26.582347]},
    {name:'威海', geoCoord:[122.1, 37.5]},
    {name:'承德', geoCoord:[117.93, 40.97]},
    {name:'厦门', geoCoord:[118.1, 24.46]},
    {name:'汕尾', geoCoord:[115.375279, 22.786211]},
    {name:'潮州', geoCoord:[116.63, 23.68]},
    {name:'丹东', geoCoord:[124.37, 40.13]},
    {name:'太仓', geoCoord:[121.1, 31.45]},
    {name:'曲靖', geoCoord:[103.79, 25.51]},
    {name:'烟台', geoCoord:[121.39, 37.52]},
    {name:'福州', geoCoord:[119.3, 26.08]},
    {name:'瓦房店', geoCoord:[121.979603, 39.627114]},
    {name:'即墨', geoCoord:[120.45, 36.38]},
    {name:'抚顺', geoCoord:[123.97, 41.97]},
    {name:'玉溪', geoCoord:[102.52, 24.35]},
    {name:'张家口', geoCoord:[114.87, 40.82]},
    {name:'阳泉', geoCoord:[113.57, 37.85]},
    {name:'莱州', geoCoord:[119.942327, 37.177017]},
    {name:'湖州', geoCoord:[120.1, 30.86]},
    {name:'汕头', geoCoord:[116.69, 23.39]},
    {name:'昆山', geoCoord:[120.95, 31.39]},
    {name:'宁波', geoCoord:[121.56, 29.86]},
    {name:'湛江', geoCoord:[110.359377, 21.270708]},
    {name:'揭阳', geoCoord:[116.35, 23.55]},
    {name:'荣成', geoCoord:[122.41, 37.16]},
    {name:'连云港', geoCoord:[119.16, 34.59]},
    {name:'葫芦岛', geoCoord:[120.836932, 40.711052]},
    {name:'常熟', geoCoord:[120.74, 31.64]},
    {name:'东莞', geoCoord:[113.75, 23.04]},
    {name:'河源', geoCoord:[114.68, 23.73]},
    {name:'淮安', geoCoord:[119.15, 33.5]},
    {name:'泰州', geoCoord:[119.9, 32.49]},
    {name:'南宁', geoCoord:[108.33, 22.84]},
    {name:'营口', geoCoord:[122.18, 40.65]},
    {name:'惠州', geoCoord:[114.4, 23.09]},
    {name:'江阴', geoCoord:[120.26, 31.91]},
    {name:'蓬莱', geoCoord:[120.75, 37.8]},
    {name:'韶关', geoCoord:[113.62, 24.84]},
    {name:'嘉峪关', geoCoord:[98.289152, 39.77313]},
    {name:'广州', geoCoord:[113.23, 23.16]},
    {name:'延安', geoCoord:[109.47, 36.6]},
    {name:'太原', geoCoord:[112.53, 37.87]},
    {name:'清远', geoCoord:[113.01, 23.7]},
    {name:'中山', geoCoord:[113.38, 22.52]},
    {name:'昆明', geoCoord:[102.73, 25.04]},
    {name:'寿光', geoCoord:[118.73, 36.86]},
    {name:'盘锦', geoCoord:[122.070714, 41.119997]},
    {name:'长治', geoCoord:[113.08, 36.18]},
    {name:'深圳', geoCoord:[114.07, 22.62]},
    {name:'珠海', geoCoord:[113.52, 22.3]},
    {name:'宿迁', geoCoord:[118.3, 33.96]},
    {name:'咸阳', geoCoord:[108.72, 34.36]},
    {name:'铜川', geoCoord:[109.11, 35.09]},
    {name:'平度', geoCoord:[119.97, 36.77]},
    {name:'佛山', geoCoord:[113.11, 23.05]},
    {name:'海口', geoCoord:[110.35, 20.02]},
    {name:'江门', geoCoord:[113.06, 22.61]},
    {name:'章丘', geoCoord:[117.53, 36.72]},
    {name:'肇庆', geoCoord:[112.44, 23.05]},
    {name:'大连', geoCoord:[121.62, 38.92]},
    {name:'临汾', geoCoord:[111.5, 36.08]},
    {name:'吴江', geoCoord:[120.63, 31.16]},
    {name:'石嘴山', geoCoord:[106.39, 39.04]},
    {name:'沈阳', geoCoord:[123.38, 41.8]},
    {name:'苏州', geoCoord:[120.62, 31.32]},
    {name:'茂名', geoCoord:[110.88, 21.68]},
    {name:'嘉兴', geoCoord:[120.76, 30.77]},
    {name:'长春', geoCoord:[125.35, 43.88]},
    {name:'胶州', geoCoord:[120.03336, 36.264622]},
    {name:'银川', geoCoord:[106.27, 38.47]},
    {name:'张家港', geoCoord:[120.555821, 31.875428]},
    {name:'三门峡', geoCoord:[111.19, 34.76]},
    {name:'锦州', geoCoord:[121.15, 41.13]},
    {name:'南昌', geoCoord:[115.89, 28.68]},
    {name:'柳州', geoCoord:[109.4, 24.33]},
    {name:'三亚', geoCoord:[109.511909, 18.252847]},
    {name:'自贡', geoCoord:[104.778442, 29.33903]},
    {name:'吉林', geoCoord:[126.57, 43.87]},
    {name:'阳江', geoCoord:[111.95, 21.85]},
    {name:'泸州', geoCoord:[105.39, 28.91]},
    {name:'西宁', geoCoord:[101.74, 36.56]},
    {name:'宜宾', geoCoord:[104.56, 29.77]},
    {name:'呼和浩特', geoCoord:[111.65, 40.82]},
    {name:'成都', geoCoord:[104.06, 30.67]},
    {name:'大同', geoCoord:[113.3, 40.12]},
    {name:'镇江', geoCoord:[119.44, 32.2]},
    {name:'桂林', geoCoord:[110.28, 25.29]},
    {name:'张家界', geoCoord:[110.479191, 29.117096]},
    {name:'宜兴', geoCoord:[119.82, 31.36]},
    {name:'北海', geoCoord:[109.12, 21.49]},
    {name:'西安', geoCoord:[108.95, 34.27]},
    {name:'金坛', geoCoord:[119.56, 31.74]},
    {name:'东营', geoCoord:[118.49, 37.46]},
    {name:'牡丹江', geoCoord:[129.58, 44.6]},
    {name:'遵义', geoCoord:[106.9, 27.7]},
    {name:'绍兴', geoCoord:[120.58, 30.01]},
    {name:'扬州', geoCoord:[119.42, 32.39]},
    {name:'常州', geoCoord:[119.95, 31.79]},
    {name:'潍坊', geoCoord:[119.1, 36.62]},
    {name:'重庆', geoCoord:[106.54, 29.59]},
    {name:'台州', geoCoord:[121.420757, 28.656386]},
    {name:'南京', geoCoord:[118.78, 32.04]},
    {name:'滨州', geoCoord:[118.03, 37.36]},
    {name:'贵阳', geoCoord:[106.71, 26.57]},
    {name:'无锡', geoCoord:[120.29, 31.59]},
    {name:'本溪', geoCoord:[123.73, 41.3]},
    {name:'克拉玛依', geoCoord:[84.77, 45.59]},
    {name:'渭南', geoCoord:[109.5, 34.52]},
    {name:'马鞍山', geoCoord:[118.48, 31.56]},
    {name:'宝鸡', geoCoord:[107.15, 34.38]},
    {name:'焦作', geoCoord:[113.21, 35.24]},
    {name:'句容', geoCoord:[119.16, 31.95]},
    {name:'北京', geoCoord:[116.46, 39.92]},
    {name:'徐州', geoCoord:[117.2, 34.26]},
    {name:'衡水', geoCoord:[115.72, 37.72]},
    {name:'包头', geoCoord:[110, 40.58]},
    {name:'绵阳', geoCoord:[104.73, 31.48]},
    {name:'乌鲁木齐', geoCoord:[87.68, 43.77]},
    {name:'枣庄', geoCoord:[117.57, 34.86]},
    {name:'杭州', geoCoord:[120.19, 30.26]},
    {name:'淄博', geoCoord:[118.05, 36.78]},
    {name:'鞍山', geoCoord:[122.85, 41.12]},
    {name:'溧阳', geoCoord:[119.48, 31.43]},
    {name:'库尔勒', geoCoord:[86.06, 41.68]},
    {name:'安阳', geoCoord:[114.35, 36.1]},
    {name:'开封', geoCoord:[114.35, 34.79]},
    {name:'济南', geoCoord:[117, 36.65]},
    {name:'德阳', geoCoord:[104.37, 31.13]},
    {name:'温州', geoCoord:[120.65, 28.01]},
    {name:'九江', geoCoord:[115.97, 29.71]},
    {name:'邯郸', geoCoord:[114.47, 36.6]},
    {name:'临安', geoCoord:[119.72, 30.23]},
    {name:'兰州', geoCoord:[103.73, 36.03]},
    {name:'沧州', geoCoord:[116.83, 38.33]},
    {name:'临沂', geoCoord:[118.35, 35.05]},
    {name:'南充', geoCoord:[106.110698, 30.837793]},
    {name:'天津', geoCoord:[117.2, 39.13]},
    {name:'富阳', geoCoord:[119.95, 30.07]},
    {name:'泰安', geoCoord:[117.13, 36.18]},
    {name:'诸暨', geoCoord:[120.23, 29.71]},
    {name:'郑州', geoCoord:[113.65, 34.76]},
    {name:'哈尔滨', geoCoord:[126.63, 45.75]},
    {name:'聊城', geoCoord:[115.97, 36.45]},
    {name:'芜湖', geoCoord:[118.38, 31.33]},
    {name:'唐山', geoCoord:[118.02, 39.63]},
    {name:'平顶山', geoCoord:[113.29, 33.75]},
    {name:'邢台', geoCoord:[114.48, 37.05]},
    {name:'德州', geoCoord:[116.29, 37.45]},
    {name:'济宁', geoCoord:[116.59, 35.38]},
    {name:'荆州', geoCoord:[112.239741, 30.335165]},
    {name:'宜昌', geoCoord:[111.3, 30.7]},
    {name:'义乌', geoCoord:[120.06, 29.32]},
    {name:'丽水', geoCoord:[119.92, 28.45]},
    {name:'洛阳', geoCoord:[112.44, 34.7]},
    {name:'秦皇岛', geoCoord:[119.57, 39.95]},
    {name:'株洲', geoCoord:[113.16, 27.83]},
    {name:'石家庄', geoCoord:[114.48, 38.03]},
    {name:'莱芜', geoCoord:[117.67, 36.19]},
    {name:'常德', geoCoord:[111.69, 29.05]},
    {name:'保定', geoCoord:[115.48, 38.85]},
    {name:'湘潭', geoCoord:[112.91, 27.87]},
    {name:'金华', geoCoord:[119.64, 29.12]},
    {name:'岳阳', geoCoord:[113.09, 29.37]},
    {name:'长沙', geoCoord:[113, 28.21]},
    {name:'衢州', geoCoord:[118.88, 28.97]},
    {name:'廊坊', geoCoord:[116.7, 39.53]},
    {name:'菏泽', geoCoord:[115.480656, 35.23375]},
    {name:'合肥', geoCoord:[117.27, 31.86]},
    {name:'武汉', geoCoord:[114.31, 30.52]},
    {name:'大庆', geoCoord:[125.03, 46.58]}
]

// 绘制图表
myChart.setOption( {
    backgroundColor: 'transparent',
    color: [
        'rgba(255, 255, 255, 0.8)',
        'rgba(14, 241, 242, 0.8)',
        'rgba(37, 140, 249, 0.8)'
    ],
    title : {
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    legend: {
        orient: 'horizontal',
        x:'center',
        y:'bottom',
        data:['强','中','弱'],
        textStyle : {
            color: '#fff'
        }
    },
    series : [
        {
            name: '弱',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1,
                    areaStyle:{
                        color: 'rgba(4,63,138,0.6)'
                    }
                }
            },
            data : [],
            markPoint : {
                symbolSize: 2,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = 3000;
                    var geoCoord
                    while(len--) {
                        geoCoord = placeList[len % placeList.length].geoCoord;
                        data.push({
                            name : placeList[len % placeList.length].name + len,
                            value : 10,
                            geoCoord : [
                                geoCoord[0] + Math.random() * 5 - 2.5,
                                geoCoord[1] + Math.random() * 3 - 1.5
                            ]
                        })
                    }
                    return data;
                })()
            }
        },
        {
            name: '中',
            type: 'map',
            mapType: 'china',
            data : [],
            markPoint : {
                symbolSize: 3,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = 1000;
                    var geoCoord;
                    while(len--) {
                        geoCoord = placeList[len % placeList.length].geoCoord;
                        data.push({
                            name : placeList[len % placeList.length].name + len,
                            value : 50,
                            geoCoord : [
                                geoCoord[0] + Math.random() * 5 - 2.5,
                                geoCoord[1] + Math.random() * 3 - 1.5
                            ]
                        })
                    }
                    return data;
                })()
            }
        },
        {
            name: '强',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam:true,
            data : [],
            markPoint : {
                symbol : 'diamond',
                symbolSize: 6,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = placeList.length;
                    while(len--) {
                        data.push({
                            name : placeList[len].name,
                            value : 90,
                            geoCoord : placeList[len].geoCoord
                        })
                    }
                    return data;
                })()
            }
        }
    ]
});
function setChart(chartId,appendId){
    var obarDiv=document.createElement("div");
    obarDiv.id=chartId;
    var oFrag=document.createDocumentFragment();
    oFrag.appendChild(obarDiv);

    document.getElementById(appendId).append(oFrag);
    return obarDiv;
}
var obarDiv=setChart('barUseDiv','box-one');

var barUseChart = echarts.init(obarDiv,'infographic');
barUseChart.setOption( {

    dataZoom : {
        show : true,
        realtime : true,
        start : 0,
        end : 35,
        height: 8,
        textStyle: {
            color:"#333"
        },
        backgroundColor:'rgba(51,117,182,0.5)',
        fillerColor:'rgba(240,189,38,1)',
        dataBackgroundColor:{
            lineStyle: {
              color: '#044b8f'
            }
        },
        textStyle: {
            color: '#fff'
        }
       //handleColor:"rgba(240,189,38,1)",

    },
    grid:{
        x:30,
        y:30,
        x2:15,
        y2:35,
        borderColor: '#0b4795'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                "color": "#48b"
            },
            crossStyle:{
                "color": "#48b"
            }
        }
    },
    legend: {
        data:['用电量'],
        orient: 'horizontal',
        x:'right',
        y:'6%',
        textStyle: {
            color:"#d84052"
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',

            data :  function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push('12-'+i);
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            type: 'value',
            name: '单位(/kwh)',
            nameTextStyle: {
                color:'#fff',
                fontSize: 12
            }
        }
    ],
    axis:{
        boundaryGap: true
    },
    series : [
        {
            name:'用电量',
            type:'bar',
            data:function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 40));
                }
                return list;
            }(),
            barGap: '25%',
            barCategoryGap:'40%',
            itemStyle: {
                normal: {
                    color: "#d84052",
                    barBorderRadius: 4,
                    label: {
                        textStyle: {
                            color: 'red'
                        }
                    }
                },
                emphasis: {
                    color: "#bf2c3e",
                    barBorderRadius: 4
               }
            }

        }
    ]
});



var opieDiv=setChart('pieUseDiv','box-two');

var pieUseChart = echarts.init(opieDiv,'infographic');
pieUseChart.setOption(  {
    // title : {
    //     text: '某站点用户访问来源',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    color: [
        "#00b7ee",
        "#d84052",
        "#009e96",
        "#f0bd26",
        "#aaaaaa"
    ],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['动力','空调','照明','空压','电梯'],
        itemGap:5,
        textStyle: {
            color: 'auto'
        }
    },
    calculable : true,
    series : [
        {
            name:'用电统计',
            type:'pie',
            radius : '60%',
            center: ['55%', '50%'],
            data:[
                {value:32, name:'动力'},
                {value:29, name:'空调'},
                {value:15, name:'照明'},
                {value:15, name:'空压'},
                {value:9, name:'电梯'}
            ]
        }
    ]
});

var opieAreaDiv=setChart('pieSumDiv','box-for');
var pieAreaChart = echarts.init(opieAreaDiv,'infographic');
pieAreaChart.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x : 'left',
        y : 'top',
        data:['抄表监控','能效管理','光伏电效'],
        itemGap:5,
        textStyle: {
           color: 'auto'
        }
    },
    calculable : false,
    series : [

        {
            name:'接入企业数',
            type:'pie',
            radius : ['10%', '80%'],
            center : ['55%', '70%'],
            roseType : 'area',
            // max:5,                // for funnel
            sort : 'ascending',     // for funnel
            itemStyle : {
                normal : {
                    label : {
                        position : 'inner',
                        formatter : function (params) {
                            return (params.percent - 0).toFixed(0) + '%';
                        },
                        // formatter:'{d}%',
                        align: 'right',
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        formatter : "{b}\n{d}%"
                    }
                }

            },
            data:[
                {value:10, name:'抄表监控'},
                {value:5, name:'能效管理'},
                {value:15, name:'光伏电效'}
            ]
        }
    ]
});





/* 初始化表格 */
window.onresize = function () {
    myChart.resize();//地图
    barUseChart.resize();//当月用电量统计
    pieUseChart.resize();//当月用电统计
    pieAreaChart.resize();//接入企业数
}
// $("body").append("<div>hello world</div>")