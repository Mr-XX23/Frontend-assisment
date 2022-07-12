import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { FilterButton } from "./Button";


const Select = () => {
  let [searched, setSearched] = useState();
  const handleChange = (ev) => {
    let {name, value} = ev.target;
    setSearched((presState) => {
      searched = {
        ...presState,
        [name] : value
      }
      return searched
    });
  };

  const submitForm = (ev) => {

    ev.preventDefault();
    <NavLink to={ `/search/${searched?.min}/${searched?.max}/${searched?.category}`}></NavLink>
  }
  return (
    <>
<form>
<div className="mx-2">
        <select onChange={handleChange} name="category" className="category">
          <option value="laptops">Laptops</option>
          <option value="mobile">Mobile</option>
          <option value="watch">Watches</option>
          <option value="headseat">Headseats</option>
          <option value="keyboard">Keyboards</option>
        </select>
      </div>
      <label
        htmlFor="website"
        className="block text-lg font-bold text-gray-700 mt-3"
      >
        Price
      </label>
      <div className="mx-3">
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            {" "}
            ${" "}
          </span>
          <input
            onChange={handleChange}
            type="text"
            name="Min"
            id="company-website"
            className="input focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
            placeholder="Min"
          />
        </div>

        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            {" "}
            ${" "}
          </span>
          <input
            type="text"
            onChange={handleChange}
            name="Max"
            id="company-website"
            className="input focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
            placeholder="Max"
          />
        </div>
      </div>
      <FilterButton onSubmitCapture={submitForm}>Filter</FilterButton>

</form>

    </>
  );
};

export default Select;

// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
// const category = [
//   { name: 'Laptops' },
//   { name: 'Mobiles' },
//   { name: 'Watches' },
//   { name: 'Keyboards' },
//   { name: 'Headsets' }
// ]

// const [cselected, setcSelected] = useState(category[0])

// {/* <Listbox value={cselected} onChange={setcSelected}>
//                     <div className="relative mt-1 z-10 mx-2">
//                       <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//                         <span className="block truncate">{cselected.name}</span>
//                         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                           <SelectorIcon
//                             className="h-5 w-5 text-gray-400"
//                             aria-hidden="true"
//                           />
//                         </span>
//                       </Listbox.Button>
//                       <Transition
//                         as={Fragment}
//                         leave="transition ease-in duration-100"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                       >
//                         <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                           {category.map((category, categoryIdx) => (
//                             <Listbox.Option
//                               key={categoryIdx}
//                               className={({ active }) =>
//                                 `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#374151] text-white' : 'text-gray-900'
//                                 }`
//                               }
//                               value={category}
//                             >
//                               {({ selected }) => (
//                                 <>
//                                   <span
//                                     className={`block truncate ${selected ? 'font-medium' : 'font-normal'
//                                       }`}
//                                   >
//                                     {category.name}
//                                   </span>
//                                   {selected ? (
//                                     <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
//                                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                                     </span>
//                                   ) : null}
//                                 </>
//                               )}
//                             </Listbox.Option>
//                           ))}
//                         </Listbox.Options>
//                       </Transition>
//                     </div>
//                   </Listbox> */}
