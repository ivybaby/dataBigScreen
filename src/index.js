import _ from 'lodash';

import Icon from './images/tri-title-icon.png';
import useStatis from './images/usesta-icon.png';
import companySumIcon from './images/company-sum-icon.png'
import irImgUrl from './images/ir-bg.png'
import conLeft from './images/title-left-set.png'
import conRight from './images/title-right-set.png'
import cloudIcon from './images/cloud-icon.png'
import dayLeftIcon from './images/day-left-tri.png'
import dayRightIcon from './images/day-right-tri.png'
import cornerIcon from './images/corner_fix.png'
import emissionIcon from './images/emission_icon.png'
import reduceIcon1 from './images/discrease_co2.png'
import reduceIcon2 from './images/dismei_icon.png'
import reduceIcon3 from './images/disTree_icon.png'
import triIconTop1 from './images/tri_yellow_top.png'
import triIconBtm1 from './images/tri_yellow_bottom.png'
import triIconTop2 from './images/tri_orange_top.png'
import triIconBtm2 from './images/tri_orange_bottom.png'
import triIconTop3 from './images/tri_blue_top.png'
import triIconBtm3 from './images/tri_blue_bottom.png'

import res from './json/map.json'
import actPower from './json/accountData.Json'

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
import 'echarts/chart/line';
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
    if(rightContent.length>0){

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
    }



    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = title;
    for(var i in classList){
        element.classList.add(classList[i]);
    }
    element.appendChild(myIcon);
    if(rightContent.length>0){
        element.appendChild(eleTime);
    }

    return element;
}

function getPowerData(obj,sum,oVal){
    $(obj).eq(sum).children().remove();
    var oPowerFrag=document.createDocumentFragment();
    var power1=$(obj).get(sum);
    var x=oVal.split('');
    var reg = /^[0-9]*$/;
    for(var i in x){
        var ospan=document.createElement('span');
        ospan.classList.add('hl-footer-item');
        if(reg.test(x[i])){
            ospan.classList.add('hl-footer-item-active');
        }
        ospan.innerHTML=x[i];
        oPowerFrag.appendChild(ospan);
    }
    power1.appendChild(oPowerFrag)
}
getPowerData('.hl-footer-Div',0,actPower.creatElect)
getPowerData('.hl-footer-Div',1,actPower.useElect)
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

/*
*节能减排
* */
var class3=['item-header','text-yellow','clearfix'];
var classTittleIcon3=['item-header-img','item-header-img-icon','item-right'];
var classFlag3=['time-bg','time-bg-init'];//right的样式表
var reduceList=document.getElementById("box-five");

reduceList.insertBefore(component('节能减排','',classTittleIcon3,class3,classFlag3,emissionIcon,true),reduceList.childNodes[0]);

var oFrag=document.createDocumentFragment();
var oAccount=document.createElement('p');//接入节点数
oAccount.innerHTML='接入节点数';
oAccount.classList.add('irregular-sum');

var irDiv=document.createElement("div");
irDiv.classList.add('ir-div','clearfix');
var irImg = new Image();
irImg.src = irImgUrl;
irDiv.appendChild(oAccount);
irDiv.appendChild(irImg);
oFrag.appendChild(irDiv);
var list=document.getElementById("box-three");
list.insertBefore(oFrag,list.childNodes[0]);

/* 时间天气 */
var oFrag=document.createDocumentFragment();
var oTimeTittle=document.createElement('p');//时间
var oInnerIcon1=new Image();
oInnerIcon1.src=conLeft;
oInnerIcon1.classList.add('title-img-em');

var oInnerIcon2=new Image();
oInnerIcon2.src=conRight;
oInnerIcon2.classList.add('title-img-em');
var conTit=document.getElementById("contentTittle");
conTit.insertBefore(oInnerIcon1,conTit.childNodes[0]);
conTit.insertBefore(oInnerIcon2,conTit.childNodes[2]);
var oCloudIcon=new Image();
oCloudIcon.src=cloudIcon;
oCloudIcon.classList.add('cloud-title-img');
conTit.insertBefore(oCloudIcon,conTit.childNodes[3]);

var oDayIcon=new Image();
oDayIcon.src=dayLeftIcon;
document.getElementById('day-left-icon').appendChild(oDayIcon);

var oDayIconRight=new Image();
oDayIconRight.src=dayRightIcon;
document.getElementById('day-right-icon').appendChild(oDayIconRight);

var ocorner=new Image();
ocorner.src=cornerIcon;
document.getElementById('especial-corner').appendChild(ocorner);


function allAccount(obj){
    var oBbj=$(obj).find('.text-init');
    var xWid=oBbj.innerWidth();
    var sum=0;

    $(obj).find('.hl-footer-item').each(function () {
        sum=sum+$(this).innerWidth();
    });
    var oWid=$(obj).innerWidth()-$(obj).find('.hl-footer-Div').innerWidth();
    oBbj.css({'padding-left':(oWid-30)+'px'});
}

function getSizeTop(){//算累计用电量的高度
    var winHeight = window.innerHeight?window.innerHeight:document.body.clientHeight;
    var finalHeight=winHeight-$('.hl-footer').innerHeight()-20;
    $('.hl-footer').css({"top":finalHeight+'px'});

    allAccount('.hl-footer-inner-active')
}
getSizeTop();

var reduce1 = new Image();
reduce1.src = reduceIcon1;
var reduceId1=document.getElementById("reduce-item-1");
reduceId1.insertBefore(reduce1,reduceId1.childNodes[0]);

var reduce2 = new Image();
reduce2.src = reduceIcon2;
var reduceId2=document.getElementById("reduce-item-2");
reduceId2.insertBefore(reduce2,reduceId2.childNodes[0]);

var reduce3 = new Image();
reduce3.src = reduceIcon3;
var reduceId3=document.getElementById("reduce-item-3");
reduceId3.insertBefore(reduce3,reduceId3.childNodes[0]);


function getTri(imgSrcTop,imgSrcBtm,obj){
    var triImgTop=new Image();
    triImgTop.src=imgSrcTop;

    var oTop= $(obj).children('.rb-absulte-top');
    oTop.children().remove();
    oTop.prepend(triImgTop);
    var xTop=oTop.innerHeight();
    oTop.css({'top':-xTop+'px'}).children('img').css({'height':xTop+'px'});

    var triImgBottom=new Image();
    triImgBottom.src=imgSrcBtm;

    var oBottom=$(obj).children('.rb-absulte-bottom');
    oBottom.children().remove();
    oBottom.prepend(triImgBottom);
    var  xBtm=oBottom.innerHeight();
    oBottom.css({'bottom':-xBtm+'px'}).children('img').css({'height':xBtm+'px'});
    if(obj=='.rb-3'){
        var xExa=$('.rhombus').innerHeight()+xBtm+5;
        var owid=(($('.rhombus').innerWidth())*0.21).toFixed(2);
       $(obj).css({'top':xExa+'px','left':owid+'px'});
    }
}

getTri(triIconTop1,triIconBtm1,'.rb-1');
getTri(triIconTop2,triIconBtm2,'.rb-2');
getTri(triIconTop3,triIconBtm3,'.rb-3');







// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));


// $.ajax({
//     type : "post",
//     async : true,
//     url : "",    //请求发送到TestServlet处
//     data : {},
//     dataType : "json",        //返回数据形式为json
//     success : function(res) {
//         //请求成功时执行该函数内容，result即为服务器返回的json对象
//         if (res) {
//             myChart.hideLoading();    //隐藏加载动画
//             myChart.setOption({        //加载数据图表
//
//                 series: [{
//                     name: '弱',
//                     type: 'map',
//                     mapType: 'china',
//                     itemStyle:{
//                         normal:{
//                             borderColor:'rgba(100,149,237,1)',
//                             borderWidth:1,
//                             areaStyle:{
//                                 color: 'rgba(4,63,138,0.6)'
//                             }
//                         }
//                     },
//                     data : [],
//                     markPoint : {
//                         symbolSize: 2,
//                         large: true,
//                         effect : {
//                             show: true
//                         },
//                         data : (function(){
//                             var data = [];
//                             var len = 3000;
//                             var geoCoord
//                             while(len--) {
//                                 geoCoord = res.placeList[len % res.placeList.length].geoCoord;
//                                 data.push({
//                                     name : res.placeList[len % res.placeList.length].name + len,
//                                     value : 10,
//                                     geoCoord : [
//                                         geoCoord[0] + Math.random() * 5 - 2.5,
//                                         geoCoord[1] + Math.random() * 3 - 1.5
//                                     ]
//                                 })
//                             }
//                             return data;
//                         })()
//                     }
//                 },
//                     {
//                         name: '中',
//                         type: 'map',
//                         mapType: 'china',
//                         data : [],
//                         markPoint : {
//                             symbolSize: 3,
//                             large: true,
//                             effect : {
//                                 show: true
//                             },
//                             data : (function(){
//                                 var data = [];
//                                 var len = 1000;
//                                 var geoCoord;
//                                 while(len--) {
//                                     geoCoord = res.placeList[len % res.placeList.length].geoCoord;
//                                     data.push({
//                                         name : res.placeList[len % res.placeList.length].name + len,
//                                         value : 50,
//                                         geoCoord : [
//                                             geoCoord[0] + Math.random() * 5 - 2.5,
//                                             geoCoord[1] + Math.random() * 3 - 1.5
//                                         ]
//                                     })
//                                 }
//                                 return data;
//                             })()
//                         }
//                     },
//                     {
//                         name: '强',
//                         type: 'map',
//                         mapType: 'china',
//                         hoverable: false,
//                         roam:true,
//                         data : [],
//                         markPoint : {
//                             symbol : 'diamond',
//                             symbolSize: 6,
//                             large: true,
//                             effect : {
//                                 show: true
//                             },
//                             data : (function(){
//                                 var data = [];
//                                 var len = res.placeList.length;
//                                 while(len--) {
//                                     data.push({
//                                         name : res.placeList[len].name,
//                                         value : 90,
//                                         geoCoord : res.placeList[len].geoCoord
//                                     })
//                                 }
//                                 return data;
//                             })()
//                         }
//                     }]
//             });
//
//         }
//
//     },
//     error : function(errorMsg) {
//         //请求失败时执行该函数
//         myChart.hideLoading();
//     }
// })

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
    series: [{
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
                                geoCoord = res.placeList[len % res.placeList.length].geoCoord;
                                data.push({
                                    name : res.placeList[len % res.placeList.length].name + len,
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
                                    geoCoord = res.placeList[len % res.placeList.length].geoCoord;
                                    data.push({
                                        name : res.placeList[len % res.placeList.length].name + len,
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
                                var len = res.placeList.length;
                                while(len--) {
                                    data.push({
                                        name : res.placeList[len].name,
                                        value : 90,
                                        geoCoord : res.placeList[len].geoCoord
                                    })
                                }
                                return data;
                            })()
                        }
                    }]
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
            color:"auto"
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

var creatlineChart = echarts.init(document.getElementById('creatlineDiv'),'infographic');//发电量
creatlineChart.setOption( {

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
        data:['发电量'],
        orient: 'horizontal',
        x:'right',
        y:'6%',
        textStyle: {
            color:"auto"
        }
    },
    // calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
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

    series : [
        {
            name:'发电量',
            type:'line',
            smooth:true,
            showAllSymbol: true, //标注所有数据点
            symbol: 'emptyCircle',
            data:function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 40));
                }
                return list;
            }(),
            itemStyle: {
                normal: {
                    show: true,
                    position: 'top',
                    areaStyle: {type: 'default'}
                }
            }

        }
    ]
});

var oCreatEletricDiv=setChart('creatEletricDiv','creatPowerDiv');

var creatEletricChart = echarts.init(oCreatEletricDiv,'infographic');
creatEletricChart.setOption({

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show:false,
        data: ['2011年']
    },
    grid: {
        x:45,
        y:25,
        x2:25,
        y2:8,
        borderColor: '#0b4795',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position: 'top',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data:['风力','分布式\n光伏','地热']

    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [1303, 3489, 9034],
            barGap: '25%',
            barCategoryGap:'40%',
            itemStyle: {
                normal: {
                    color: "#f0bd26",
                    barBorderRadius: 4,
                    label: {
                        textStyle: {
                            color: '#f0bd26'
                        }
                    }
                }
            }
        }
    ]
});




/* 初始化表格 */
window.onresize = function () {
    myChart.resize();//地图
    barUseChart.resize();//当月用电量统计
    pieUseChart.resize();//当月用电统计
    pieAreaChart.resize();//接入企业数
    creatlineChart.resize();//发电量
    creatEletricChart.resize();
    getSizeTop();
    getTri(triIconTop1,triIconBtm1,'.rb-1');
    getTri(triIconTop2,triIconBtm2,'.rb-2');
    getTri(triIconTop3,triIconBtm3,'.rb-3');
}




// $("body").append("<div>hello world</div>")