import React from 'react'
import { FaAngleDown } from 'react-icons/fa';



export function SelectInput({ name, options, SearchinputHandler, label }) {
    return (
        <>
            <div className='relative flex bg-white rounded border-2 focus:border-cyan-400 '>
    <select
        name={name}
        onChange={(selectedOption) => SearchinputHandler(selectedOption ? selectedOption.value : '', name)}
        placeholder='select'
        className='peer bg-transparent px-1 py-0 md:py-1 leading-[1.6] outline-none transition-all duration-100 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100  w-full appearance-none'
        required
    >
        <option value=''>select</option>
        {options.map((item, index) => (
            <option value={item} key={index} className='my-3'>{item}</option>
        ))}
    </select>
    <div className="inset-y-0 flex items-center pr-1 pointer-events-none rotate-0 peer-focus:rotate-180">
        <FaAngleDown className= "h-4 md:w-5 h-4 md:h-5 text-gray-400" aria-hidden="true" />
    </div>
</div>
        </>
    )
}


export  function Radioinput({id, name, value, checked, onChange, label}) {
    return (
        <>
            <div className='border-2 px-1 py-1 rounded-full flex items-center'>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    className='h-6 w-6'
                />
                <label htmlFor={id} className='mx-2 text-sm font-medium text-gray-600'>{label}</label>
            
            </div>
        </>
    )
}

