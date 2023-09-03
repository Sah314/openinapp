import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import Basicform from './Basicform';
import ContactForm from './contactForm';

interface UserInfo{
  name:string,
  email:string,
  phone:string,
  instagram:string,
  youtube:string,
}
interface setUserinfoProps{
  handleCard2Click:()=>void;
  userInfo:UserInfo;
    setUserInfo:Dispatch<SetStateAction<UserInfo>>;
}

function Addnew({handleCard2Click,setUserInfo,userInfo}:setUserinfoProps) {
const [value, setValue] = useState(0);
const [basicformdata,setBasicformdata] = useState({ name:"",email:"",phone:""});
const [contactformdata,setContactformdata] = useState({instagram:"",youtube:""}); 
const switchToBasic= () => {
  setValue(0);
};
const switchToContact= () => {
  setValue(1);
};


const handleChange=(event: any,newVal: React.SetStateAction<number>)=>{
    setValue(newVal);
}


useEffect(() => {
  setUserInfo((prevData)=>({
    ...prevData,...basicformdata,...contactformdata
  }))

}, [basicformdata,contactformdata])
    
  return (
    <div className=' rounded-lg'>
        <div className="w-96 h-8 px-6 justify-between items-center inline-flex">
         
  <div className="w-64 self-stretch text-stone-800 text-xl font-semibold leading-loose text-center">Add New Profile</div>
</div>

<div className="w-96 h-96 pt-4 flex-col">
<Tabs value={value} onChange={handleChange} className='w-96 h-10 relative flex-row mr-7 pr-4'>
  <Tab label="Basic" className='text-black text-base font-bold leading-normal text-center flex-1'/>
  <Tab label="Contact" className='text-stone-800 text-base font-bold leading-normal text-center flex-1' />
</Tabs>
 
 {value===0 && <Basicform basicformdata={basicformdata} setBasicformdata={setBasicformdata} switchToContact={switchToContact}/>}
 {value===1 && <ContactForm contactformdata={contactformdata}
  setContactformdata={setContactformdata}
  switchToBasic={switchToBasic} handleCard2Click={handleCard2Click}/>} 
    </div>
    </div>

  )
}   

export default Addnew;