import React, { Dispatch, FormEvent, FormEventHandler, SetStateAction } from 'react'


interface BasicFormData{
  name:string,
  email:string;
  phone:string;
}
interface BasicFormProps {
  switchToContact():void;
basicformdata:BasicFormData;
setBasicformdata: Dispatch<SetStateAction<BasicFormData>>;
}


function Basicform({switchToContact,basicformdata,setBasicformdata}:BasicFormProps) {

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access the form input values using event.target
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;

    // Update the basicformdata state with the captured values
    setBasicformdata((prevData) => ({
      ...prevData, // Spread the previous state
      name,
      email,
      phone,
    }));
    switchToContact();
  };
  return (
        
            <form className='flex flex-col' onSubmit={handleFormSubmission}>
  <div className="mb-6 mt-4">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Name*</label>
    <input type="name" id="name" className="border border-gray-200 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Eg. John Doe" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900">Enter Email*</label>
    <input type="email" id="email" className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. John@xyz.com" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-900">Enter Phone*</label>
    <input type="phone" id="phone" className=" border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg.  9123456789" required/>
  </div>
<div className='flex items-end justify-end'>
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Next</button>
</div>
  
</form>



  )
}

export default Basicform