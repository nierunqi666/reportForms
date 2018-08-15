
import React from 'react';
import echarts from 'echarts';


export default class Chart extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '项目预算柱状图' },
            color: ['#5b9aff', '#4d7ecc', '#42c7c3', '#f3b93f'],
            legend: {
                right:0,
                bottom:0,
                data: ['未使用', '已使用', '审批中','待审核']
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: false},
                    data: ['1月', '2月', '3月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    data: ['1000', '2000', '3000','4000']
                }
            ],
            series: [
                {
                    name: '未使用',
                    type: 'bar',
                    barGap: 0.2,
                    data: [1800, 1900, 200],
                    itemStyle:{
                        normal: {
                            barBorderRadius:[5, 5, 0, 0]
                        }
                    }
                },
                {
                    name: '已使用',
                    type: 'bar',
                    stack:'已使用',
                    data: [2100, 2900,2100],
                    itemStyle:{
                        normal: {
                            barBorderRadius:[5, 5, 0, 0],
                        }
                    }
                },
                
                {
                    name: '审批中',
                    type: 'bar',
                    data: [1000, 3600, 2500],
                    itemStyle:{
                        normal: {
                            barBorderRadius:[5, 5, 0, 0],
                        }
                    }
                },
                {
                    name: '待审核',
                    type: 'bar',
                    stack:'已使用',
                    data: [0, 1000, 0],
                    itemStyle:{
                        normal: {
                            barBorderRadius:[5, 5, 0, 0],
                        }
                    }
                }
            ]
        });
    }

    render(){
        return (
            <div className="reportChart">
               <div className="top">
                    <div id="main" style={{ width: 400, height: 300 }}></div>
                   <input type="text" placeholder='请选择'/>
               </div>
               <div className="reportList">

               </div>
            </div>
        );
    }
}