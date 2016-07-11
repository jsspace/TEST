/**
 * Created by mobvoi on 16-7-6.
 */
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var option = {
    title: {
        text: 'ECharts 入门示例',
        link: 'http://www.baidu.com',
        target: 'blank',
        textStyle: {
            color: 'black',
            fontSize: '24',
            fontStyle: 'normal',
        },
        textAlign: 'left',
        padding: [10,5,5,60],
        shadowBlur: 10,
        z:2,
        top:10
    },
    tooltip: {

    },
    legend: {
        data:[{name:'销量',
                icon: 'rect',
                textStyle:{
                    color:'black'
                }
        }],
        top:10,
        padding:[5,5,5,20]

    },
    grid:{
      show:false
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        name: '衣服种类',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
            fontSize:16,
            letterSpace: 2
        }
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
