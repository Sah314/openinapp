import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Import the Chart.js library
import axios from 'axios';




function DoubleBarGraph() {
  const [datapoints, setDatapoints] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [selectedDatapoints1, setselectedDatapoints1] = useState([]);
  const [selectedDatapoints2, setselectedDatapoints2] = useState([]);
  
  useEffect(() => {
    const apiUrl=`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3`

  
    axios.get(apiUrl)
    .then((response) => {
      setDatapoints(response.data.objectIDs);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      console.log(err);
      setLoading(false);
    });
  }, [])

  
  
  useEffect(() => {
    if (canvasRef.current &&datapoints) {
      
      const shuffledDatapoints1 = [...datapoints].sort(() => 0.5 - Math.random());
    const shuffledDatapoints2 = [...datapoints].sort(() => 0.5 - Math.random());
    setselectedDatapoints1(shuffledDatapoints1.slice(0, 4));
    setselectedDatapoints2(shuffledDatapoints2.slice(0, 4));
      const data = {
        labels: ['Week 1', 'Week 2', 'Week 3','Week 4'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: '#98D89E',
            data: selectedDatapoints1,
          },
          {
            label: 'Dataset 2',
            backgroundColor: '#EE8484',
            data: selectedDatapoints2,
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
  }, [datapoints]);

  if(loading){
    return (<div>Loading...</div>)
  }
  if(error){
    return(<h1>{error}</h1>);
  }
  return (
    <div className='flex-1 w-full'>
      <canvas ref={canvasRef} className='w-full'></canvas>
    </div>
  );
}
function Chartcomp() {
  return (
    <div className='flex-col rounded-2xl border border-neutral-200 w-full shadow-lg'>
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
      <div className="w-full bg-white flex pr-3 mr-2"> <DoubleBarGraph/></div>
    </div>
     
  )
}

export default Chartcomp