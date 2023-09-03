import React, { Dispatch, FormEvent, SetStateAction } from 'react'

interface ContactFormData{
    instagram:string;
    youtube:string;
}
interface ContactFormProps {
  handleCard2Click:()=>void;
  switchToBasic: () => void;
  contactformdata:ContactFormData;
  setContactformdata: Dispatch<SetStateAction<ContactFormData>>;
}
function ContactForm({handleCard2Click,switchToBasic,contactformdata,setContactformdata
}: ContactFormProps) {

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access the form input values using event.target
    const target = e.target as typeof e.target & {
      instagram: { value: string };
      youtube: { value: string };
    };

    const instagram = target.instagram.value;
    const youtube = target.youtube.value;
  

    // Update the basicformdata state with the captured values
    setContactformdata((prevData) => ({
      ...prevData, // Spread the previous state
      instagram,
      youtube,
  
    }));
    setTimeout(() => {
      handleCard2Click();
    }, 1000);
  };
 
  const handleBackButtonClick = () => {
    switchToBasic();
  };
  return (
    <form onSubmit={handleFormSubmission}>
  <div className="mb-6 mt-4">
    <label htmlFor="instagram" className="block mb-2 text-sm font-medium text-gray-900"><p>Instagram Link <span className=' text-gray-400 font-light'>(Optional)</span></p></label>
    <input type="instagram" id="instagram" className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. ..instagram.com/username" defaultValue={""}/>
  </div>
  <div className="mb-6">
    <label htmlFor="youtube" className="block mb-2 text-sm font-medium text-gray-900"><p>Youtube Link <span className=' text-gray-400 font-light'>(Optional)</span></p></label>
    <input type="youtube" id="youtube" className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. ..youtube/username" defaultValue={""}/>
  </div>
 
<div className='flex row justify-end'>
<button className="text-black bg-white border border-neutral-400 hover:bg-slate-400 focus:ring-2 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-6 leading-normal " onClick={handleBackButtonClick}>Back</button>
<button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Done</button>
</div>  
</form>

  )
}

export default ContactForm;