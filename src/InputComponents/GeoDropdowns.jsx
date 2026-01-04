import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Country, State, City } from "country-state-city";

export function GeoInputs({
    name,
    label,
    setCountryName,
    setStateName,
    setCityName,
    // selectedCountryValue = null,
}) {
    const [countries, setCountries] = useState([]);
    const [countryStates, setCountryStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            console.log(selectedCountry);
            setCountryStates(
                State.getStatesOfCountry(countries[selectedCountry].isoCode)
            );
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState) {
            setCities(
                City.getCitiesOfState(
                    countries[selectedCountry].isoCode,
                    countryStates[selectedState].isoCode
                )
            );
        }
    }, [selectedState]);

    useEffect(() => {
        if (setCountryName && selectedCountry !== null) {
            setCountryName(countries[selectedCountry].name);
        }
        if (setStateName && selectedState !== null) {
            setStateName(countryStates[selectedState].name);
        }
        if (setCountryName && selectedCity !== null) {
            setCityName(cities[selectedCity].name);
        }
    }, [selectedCountry, selectedState, selectedCity]);

    // useEffect(() => {
    //     if (
    //         selectedCountryValue &&
    //         selectedCountryValue !== null &&
    //         countries.length > 0
    //     ) {
    //         const selectedCountry = countries.findIndex(
    //             (country) => country.name === selectedCountryValue
    //         );
    //         setSelectedCountry(selectedCountry);
    //     }
    // }, [selectedCountryValue, countries]);

    return (
        <>
            <div className="relative w-full ">
                <select
                    name={name + "Country"}
                    onChange={(e) => {
                        setSelectedCountry(e.target.value);
                    }}
                    placeholder="select"
                    className="w-full peer bg-white rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                    required

                >
                    <option value="">select</option>
                    {countries.map((item, index) => (
                        <option key={index} value={index}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <label
                    htmlFor={name + "Country"}
                    className={`pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8] motion-reduce:transition-none  px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] bg-${
                        label ? "white" : "transparent"
                    }`}
                >
                    Country
                </label>
                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                    <FaAngleDown
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                    />
                </div>
            </div>
            <div className="relative w-full ">
                <select
                    // name={name}
                    onChange={(e) => {
                        setSelectedState(e.target.value);
                    }}
                    placeholder="select"
                    className="w-full peer bg-white rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                    required
                >
                    <option value="">select</option>
                    {countryStates.map((item, index) => (
                        <option key={index} value={index}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <label
                    htmlFor={name}
                    className={`pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8] motion-reduce:transition-none  px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] bg-${
                        label ? "white" : "transparent"
                    }`}
                >
                    State
                </label>
                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                    <FaAngleDown
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                    />
                </div>
            </div>
            <div className="relative w-full ">
                <select
                    // name={name}
                    placeholder="select"
                    onChange={(e) => {
                        setSelectedCity(e.target.value);
                    }}
                    className="w-full peer bg-white rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                    required
                >
                    <option value="">select</option>
                    {cities.map((item, index) => (
                        <option key={index} value={index}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <label
                    htmlFor={name}
                    className={`pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8] motion-reduce:transition-none  px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] bg-${
                        label ? "white" : "transparent"
                    }`}
                >
                    City
                </label>
                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                    <FaAngleDown
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </>
    );
}
