import React from 'react'
import { FaAngleDown } from 'react-icons/fa';

export function OptionsInput({ name, options, inputHandler, label }) {
    return (
        <>
            <div className='relative w-full '>
                <select
                    name={name}
                    onChange={inputHandler}
                    placeholder='select'
                    className='w-full peer bg-white rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'
                    required>
                    <option value=''>select</option>
                    {options.map((item, index) => (
                        <option value={item} key={index} className='my-3'>{item}</option>
                    ))}
                </select>
                <label
                    htmlFor={name}
                    className={`pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8] motion-reduce:transition-none  px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] bg-${label ? 'white' : 'transparent'}`}
                >
                    {label}
                </label>
                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                    <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
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



export  function Textinput({ id, name, value, onChange, placeholder, label }) {
    return (
        <>
            <div className='relative w-full'>
                <input
                    type="text"
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    className='w-full peer block rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden'
                    placeholder={placeholder}
                />
                <label
                    htmlFor={id}
                    className={`pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8] motion-reduce:transition-none bg-${label ? 'white' : 'transparent'} px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem]`}
                >
                    {label}
                </label>
            </div>
        </>
    )
}
