import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function DonutGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<'doughnut'> | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Define your data
      const data = {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: ['#FF5733', '#33FF49', '#338CFF', '#FF33FF'],
            data: [10, 15, 20, 35],
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
          type: 'doughnut', // Specify the chart type as doughnut
          data: data,
          options: {
            responsive:false, // Disable responsiveness to maintain width and height
            maintainAspectRatio: false,
            
            plugins: {
              legend: {
                display: false,
                align:'center',
                position:'right',
              
              },
              title: {
                display: false,
                text: 'Donut Chart Example', // Your chart title here
                align: 'start', // Align title to the left
              },
            },
            cutout: '85%', // This creates the donut effect (50% cutout)
          },
        });
      }
    }
  }, []);

  return (
    <div className='w-full'>
        <canvas ref={canvasRef} className='block !w-36 !h-36 !box-border'></canvas>
    </div>

  );
}






function Card2() {
  return (
    <div className="relative flex-1 mt-3 pt-3" >
      <div className="w-full bg-white rounded-2xl shadow border border-neutral-200 flex flex-col">
        <div className="title mx-3 flex flex-row justify-between my-3">
        <div className="TopProducts text-black text-lg font-bold">Top products</div>
        <div className="MayJune2021 w-24 text-zinc-500 text-xs font-normal">May - June 2021</div>
        </div>
          <div className="main flex flex-row mx-3">
            <div className="graph_container my-3 py-3">
            <DonutGraph/>
            </div>
          <div className="legend">
            <div className="l1 flex flex-col">
            <div className="Ellipse6 w-2.5 h-2.5 bg-green-300 rounded-full" />
            <div className="cont">
            <div className="BasicTees text-black text-sm font-bold">Basic Tees</div>
            <div className=" text-zinc-500 text-xs font-normal">55%</div>
            </div>
            </div>
            <div className="l2 flex flex-col">
            <div className="Ellipse6 w-2.5 h-2.5 bg-amber-200 rounded-full" />
           <div className="cont">
            <div className="BasicTees text-black text-sm font-bold">Custom Short Pants</div>
            <div className=" text-zinc-500 text-xs font-normal">31%</div>
            </div>
            </div>
            <div className="l3 flex flex-col">
            <div className="Ellipse6 w-2.5 h-2.5 bg-rose-400 rounded-full" /> 
                       <div className="cont">
            <div className="BasicTees text-black text-sm font-bold">Super Hoodies</div>
            <div className=" text-zinc-500 text-xs font-normal">14%</div>
            </div>
            </div>
            
            
          </div>
          </div>
            </div>
    </div>
  );
}

export default Card2;
