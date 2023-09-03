import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import the Chart.js library

function DoubleBarGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const api=
  useEffect(() => {
    if (canvasRef.current) {
      // Define your data
      const data = {
        labels: ['Category 1', 'Category 2', 'Category 3','Category 4'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: '#98D89E',
            data: [10, 15, 20,35],
          },
          {
            label: 'Dataset 2',
            backgroundColor: '#EE8484',
            data: [5, 8, 12,9],
          },
        ],
      };

      // Ensure that the previous chart instance is destroyed
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Initialize the chart
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
                align:'start',
                position:'right',
 // Hide <legend></legend>
              },
              // title: {
              //   display: true,
              //   text: 'Donut Chart Example', // Your chart title here
              //   align: 'start', // Align title to the left
              // },
            }
          },
        });
      }
    }
  }, []);

  return (
    <div className='flex-1 w-full'>
      <canvas ref={canvasRef} className='w-full'></canvas>
    </div>
  );
}
function Chartcomp() {
  return (
    <div className='flex-col rounded-2xl shadow border border-neutral-200 w-full'>
      <div className='my-3 mx-3'>
      <div className="Activities w-24 text-black text-lg font-bold">Activities</div>
      <div className='flex flex-row justify-between'>
      <div className="MayJune2021 w-28 text-zinc-500 text-sm font-normal flex-1">May - June 2021</div>
      <div className="container flex flex-row flex-1 justify-end">
        <div className='flex flex-row justify-end items-center'>
        <div className='flex-1 inline-flex items-center mx-2'>
        <div className="Ellipse3 w-2.5 h-2.5 bg-red-300 rounded-full mr-2"/>
        <div className="Guest w-10 text-black text-sm font-normal">Guest</div>
        </div>
        <div className='flex-1 inline-flex items-center mx-2'>
        <div className="Ellipse4 w-2.5 h-2.5 bg-green-300 rounded-full mr-2" />
        <div className="User w-8 text-black text-sm font-normal">User</div>
        </div>
        </div>
      </div>
      </div>
      
      </div>
      <div className="w-full bg-whit flex pr-3 mr-2"> <DoubleBarGraph/></div>
    </div>
     
  )
}

export default Chartcomp