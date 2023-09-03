import React from 'react'

function Card() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 my-3 py-3 sm:ml-3 flex flex-col sm:w-56" >
    <div className='ml-3'>
        Symbol
    </div>
    <div className='flex flex-row justify-between items-end ml-3'>
  <div className="rev flex flex-col items-end justify-end my-2 py-2">
    <div className="TotalRevenues w-32 text-black text-sm font-normal">Total Revenues</div>
    <div className="2129430 w-32 text-black text-2xl font-bold">$2,129,430</div>
  </div>
    <div className="LabelText w-12 h-6 text-center text-green-500 text-xs font-semibold tracking-wide bg-emerald-50 rounded-3xl mb-3 pb-3">+2.5%</div>
  
</div>


    </div>
  )
}

export default Card