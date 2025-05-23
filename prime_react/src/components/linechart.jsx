import { Chart } from 'primereact/chart';
import React from 'react'

export function Linechart() {
    const chartData = {
     labels:["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY"],
     datasets:[
        {
            label:"First DataSets",
            color:"#42A5F5",
            data: [65, 59, 80, 81, 56, 55,40],
            tension: 0.4,
            //fill: false,
            fill:true,
            borderDash: [5, 5],
            pointStyle: 'star',
        pointRadius: 6
        },
        {
            label:"Second DataSets",
            color:"#66BB6A",
            data: [28, 48, 40, 19, 86, 27,40], 
            tension: 0.4,
           // fill: false, 
           fill:true,
        }
     ]
    };
    const chartOptions = {
    plugins:{
        responsive:true,
        legend:{
            position:"top",
            label:{
            color:"#42A5F5"
          }
        },
          title:{
            display:true,
            Text:"First DataSets VS Second DataSets",
            color: '#1f2937',
             font:{
                size:'16px'
             }
        }
    },
    scales: {
      x: {
        ticks: { color: '#495057' },
        grid: { color: '#ebedef' }
      },
      y: {
        ticks: { color: '#495057' },
        grid: { color: '#ebedef' }
      }
    }
    };

    return (
        <>
            <div>
                <Chart type="line" data={chartData} options={chartOptions} />
            </div>
        </>
    )
}
