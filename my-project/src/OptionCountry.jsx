import React from 'react'


  
const OptionCountry = ({ onCountryChange }) => {
    const handleCountryChange = (e) => {
        onCountryChange(e.target.value);
    };
    
  
    return (
    <div>




<label
    htmlFor="countries"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    select country
  </label>
  <select
    id="countries"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onChange={handleCountryChange}
  >
    <option value="">Choose a country</option>
    <option value="PA">Palestine</option>
    <option value="JO">Jordan</option>
    <option value="US">United States</option>
    {/* <option value="">Germany</option> */}
  </select>
    </div>
  )
}

export default OptionCountry