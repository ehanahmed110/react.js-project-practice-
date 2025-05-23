import { Chart } from 'primereact/chart'
import React from 'react'

export function Barchart() {
    const chartData ={
    labels:['Jan',"Feb","Mar","Apr","May"],
    datasets:[
        {
            label:"Sales",
            backgroundColor:"#42A5F5",
            data: [65, 59, 80, 81, 56]
        },
        {
            label:"Profits",
            backgroundColor:"#66BB6A",
            data: [28, 48, 40, 19, 86]
        }
    ]
    };
    const chartOptions = {
      Plugins:{
        resposive:true,
        legends:{
          position:"Top",
          label:{
            color:"#42A5F5"
          }
        },
        title:{
            display:true,
            Text:"Monthly Sales VS Profit",
            color: '#1f2937',
             font:{
                size:'16px'
             }
        }
      },
      scales: {
      x: {
        stacked: true,
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      }
    }
  };

    

    return (
        <>
             <div>
        <Chart type="bar" data={chartData} options={chartOptions} />
       </div>
        </>
    )
}
