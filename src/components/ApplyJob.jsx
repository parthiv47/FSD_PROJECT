/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import { useState } from 'react';
import axios from 'axios';

export default function AppLyJob() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    file: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
  };
   console.log(formData)
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object for sending files
      const formDataForSubmission = new FormData();
      formDataForSubmission.append('name', formData.name);
      formDataForSubmission.append('contactNumber', formData.contactNumber);
      formDataForSubmission.append('email', formData.email);
      formDataForSubmission.append('address', formData.address);
      formDataForSubmission.append('file', formData.file);

      // Replace 'YOUR_BACKEND_API_URL' with the actual endpoint where you want to send the form data
    const response = await axios.post("http://localhost:8090/api/applyjobs", formDataForSubmission);
       

         console.log(response.data)
      // Handle the response as needed
     // c

      // Clear the form data after submission
      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        address: '',
        file: null,
      });
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error:', error);
    }
  };
  return (
    <div className='ml-8 mr-8 mt-5 text-base mb-8 rounded-sm border-solid border-slate-800'>
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
       

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="name"
                  id="name"
                  onChange={handleChange}
                  autoComplete="name"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Number
              </label>
              <div className="mt-2">
                <input
                  id="contactNumber"
                  name="contactNumber"
                  required
                  onChange={handleChange}
                  type="Number"
                  autoComplete="number"
                  className="block w-full rounded-md border-0  px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          
           

            <div className="sm:col-span-4">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  onChange={handleChange}
                  name="address"
                  id="address"
                  autoComplete="address"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="sm:col-span-4">
              <label htmlFor="resume" className="block text-sm font-medium leading-6 text-gray-900">
                Resume/CV
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="file"
                  required
                  id="file"
                  onChange={handleChange}
                  autoComplete="resume"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
            </div>

           
            
          </div>
        </div>


      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-base font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-6   py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Apply
        </button>
      </div>
    </form>
    </div>
  )
}
