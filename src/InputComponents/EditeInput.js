import { FaAngleDown } from "react-icons/fa";
export function EditOptionsInput({
    name,
    options,
    inputHandler,
    label,
    value = "",
}) {
    return (
        <>
            <div
                className={`grid  items-center ${
                    label ? "grid-cols-2" : "grid-cols-1"
                }`}
            >
                <label className="text-sm md:text-base peer-focus:text-black ">
                    {label}
                </label>
                <div className="relative w-full ">
                    <select
                        name={name}
                        onChange={inputHandler}
                        value={value}
                        placeholder="select"
                        className="w-full peer bg-white rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                        required
                    >
                        <option value="">select</option>
                        {options.map((item, index) => (
                            <option value={item} key={index} className="my-3">
                                {item}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                        <FaAngleDown
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export function EditTextinput({
    id,
    name,
    value,
    onChange,
    placeholder,
    label,
}) {
    return (
        <>
            <div className="grid grid-cols-2   items-center ">
                <label className=" text-sm md:text-base peer-focus:text-black">
                    {label}
                </label>
                <div className="relative w-full">
                    <input
                        type="text"
                        id={id}
                        name={name}
                        onChange={onChange}
                        value={value}
                        className="w-full peer block rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </>
    );
}
