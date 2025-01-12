import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarketChart } from '@/State/Coin/Action';


const timeSeries = [
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key:"Time series (Daily)",
        label:"1 Day",
        value:1,
    },
    {
        keyword:"DIGITAL_CURRENCY_WEEKLY",
        key:"Time series (Weekly)",
        label:"1 Week",
        value:7,
    },{
        keyword:"DIGITAL_CURRENCY_MONTHLY",
        key:"Monthly Time series ",
        label:"1 Month",
        value:30,
    },{
        keyword:"DIGITAL_CURRENCY_YEARLY",
        key:"Yearly Time series ",
        label:"1 Year",
        value:365,
    }
]


const StockChart = ({coinId}) => {

    // console.log("Printing coin Id",coinId);
    
    

    const dispatch = useDispatch();
    const {coin} = useSelector(store=>store)
    // console.log(coin.marketChart.data);
  
    const [activeLabel,setActiveLabel] =useState(timeSeries[0]);


    const series = [
        {
            data: coin.marketChart.data,
        }
    ]

    const options = {
        chart:{
            id:"area-datetime",
            type:"area",
            height:450,
            zoom:{
                autoScaleYaxis:true
            }
        },
        dataLabels:{enabled:false},
        xaxis:{type:"datetime",tickAmount:6},
        colors:["#758AA2"],
        markers:{colors: ["#fff"],strokeColor:'#fff',strokeWidth:1,strokeOpacity:0.2,fillOpacity:1,size:0,style:"hollow"},
        tooltip:{
            theme:"dark"
        },
        fill:{
            type:"gradient",
            gradient:{
                shadeIntensity:1,
                opacityForm:0.8,
                opacityTo:0.9,
                stops:[0,100]
            }
        },
        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true 
        }
    }
    
    const handleActiveLabel = (value)=>{
        setActiveLabel(value);
    }

    useEffect(()=>{
        dispatch(fetchMarketChart({coinId,days:activeLabel.value,jwt:localStorage.getItem("jwt")}));
    },[dispatch,coinId,activeLabel])

    return (
    <div>
        <div className='space-x-3 items-start'>

            {timeSeries.map((item)=>
                <Button key={item.label} variant={activeLabel.label===item.label?"default":"outline"} onClick={() => handleActiveLabel(item)}
>
                    {item.label}
               </Button>
        )}
            
        </div>
        <div id='chart-timelines'>
            <ReactApexChart options={options} series={series} type='area'></ReactApexChart>
            
        </div>
    </div>
  )
}

export default StockChart
