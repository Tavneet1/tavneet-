"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import img from "../../public/Assets/img.jpg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
import Link from "next/link";
import formdata from "@/formdata";
import { generateAgeOptions } from "@/helpers/generateInputOptions";

export default function FrontImage() {
    const [selectOption, setSelectOption] = useState({
        gender: null,
        denomination: null,
        minimumAge: null,
        maximumAge: null,
        motherTongue: null,
    });

    const [optionOpen, setOptionOpen] = useState({
        gender: false,
        denomination: false,
        minimumAge: false,
        maximumAge: false,
        motherTongue: false,
    });

    const genderOptions = ["Man", "Woman"];
    const denomination = [
        "Anglicanism",
        "Methodist",
        "Orthodox",
        "African Methodist Episcopal Church",
        "Baptist churches",
        "Catholic",
        "Lutheranism",
        "Oriental Orthodox Churches",
        "Pentecostalism",
        "Protestant",
        "Anglican Catholic Church",
        "Baptist",
        "Non-denominational Christianity",
        "Plymouth Brethren",
        "Anabaptism",
        "Andhra Evangelical Lutheran Church",
        "Apostolic",
        "Assemblies of God",
        "Bible Presbyterian Church",
        "China Gospel Fellowship",
        "Church of Greece",
        "Latter-day Saints",
        "Judaism",
        "Methodism",
    ];
    const motherTongue = [
        "English",
        "Hindi",
        "Arabic",
        "Malayalam",
        "Tamil",
        "Telugu",
        "Marathi",
        "Punjabi",
        "Kannada",
        "Odia",
        "Gujarati",
        "Sindhi",
        "Assamese",
        "Kashmiri",
        "Konkani",
        "Nepali",
        "Spanish",
        "Bengali",
        "Portuguese",
        "Russian",
        "French",
        "German",
        "Italian",
        "Polish",
        "Tagalog",
        "Ukrainian",
        "Romanian",
        "Dutch",
        "Greek",
        "Hungarian",
        "Swedish",
        "Czech",
        "Norwegian",
        "Bulgarian",
        "Danish",
        "Finnish",
        "Slovak",
        "Serbian",
        "Croatian",
        "Lithuanian",
        "Latvian",
        "Burmese",
        "Amharic",
        "Chichewa",
        "Akan",
        "Kinyarwanda",
        "Kongo",
        "Lingala",
        "Shona",
        "Swahili",
        "Tswana",
        "Yoruba",
        "Zulu",
        "Uzbek",
        "Kirundi",
        "Afrikaans",
        "Hausa",
        "Igbo",
        "Kinyarwanda",
        "Kirundi",
        "Kinyarwanda",
        "Kikuyu",
        "Kinyarwanda",
        "Sesotho",
        "Somali",
        "Tigrinya",
        "Wolof",
        "Xhosa",
        "Zulu",
        "Fijian",
        "Hawaiian",
        "Maori",
        "Samoan",
        "Tongan",
    ];
    const ages = [];
    for (let i = 20; i <= 60; i++) {
        ages.push(i);
    }
    const ageOptions = generateAgeOptions();
    const [maxAgeOptions, setMaxAgeOptions] = useState([]);

    useEffect(() => {
        const minAge = parseInt(selectOption.minimumAge);

        if (Number.isInteger(minAge)) {
            setMaxAgeOptions(ageOptions.filter((age) => age > minAge));
        } else {
            setMaxAgeOptions(ageOptions);
        }
    }, [selectOption.minimumAge]);

    const toggleGenderDropdown = () => {
        setOptionOpen((prevState) => ({
            ...prevState,
            gender: !prevState.gender,
            denomination: false,
            minimumAge: false,
            maximumAge: false,
            motherTongue: false,
        }));
    };

    const toggleDomination = () => {
        setOptionOpen((prevState) => ({
            ...prevState,
            denomination: !prevState.denomination,
            gender: false,
            minimumAge: false,
            maximumAge: false,
            motherTongue: false,
        }));
    };

    const toggleManimumAge = () => {
        setOptionOpen((prevState) => ({
            ...prevState,
            minimumAge: !prevState.minimumAge,
            gender: false,
            denomination: false,
            maximumAge: false,
            motherTongue: false,
        }));
    };

    const toggleMaximumAge = () => {
        setOptionOpen((prevState) => ({
            ...prevState,
            maximumAge: !prevState.maximumAge,
            gender: false,
            denomination: false,
            minimumAge: false,
            motherTongue: false,
        }));
    };

    const togglemotherTongue = () => {
        setOptionOpen((prevState) => ({
            ...prevState,
            motherTongue: !prevState.motherTongue,
            gender: false,
            denomination: false,
            minimumAge: false,
            maximumAge: false,
        }));
    };

    const selectGenderOption = (option) => {
        setSelectOption((prevState) => ({
            ...prevState,
            gender: option,
        }));
        setOptionOpen((prevState) => ({
            ...prevState,
            gender: false,
        }));
    };

    const selectDenominationOption = (option) => {
        setSelectOption((prevState) => ({
            ...prevState,
            denomination: option,
        }));
        setOptionOpen((prevState) => ({
            ...prevState,
            denomination: false,
        }));
    };

    const selectedMotherTongue = (option) => {
        setSelectOption((prevState) => ({
            ...prevState,
            motherTongue: option,
        }));
        setOptionOpen((prevState) => ({
            ...prevState,
            motherTongue: false,
        }));
    };

    const selectedMinmumAge = (option) => {
        setSelectOption((prevState) => ({
            ...prevState,
            minimumAge: option,
        }));
        setOptionOpen((prevState) => ({
            ...prevState,
            minimumAge: false,
        }));
    };

    const selectedMiximumAge = (option) => {
        setSelectOption((prevState) => ({
            ...prevState,
            maximumAge: option,
        }));
        setOptionOpen((prevState) => ({
            ...prevState,
            maximumAge: false,
        }));
    };

    const [selectOptions, setselectOption] = useState({
        denominations: "",
        MaxAge: "",
        MinAge: "",
        gender: "",
    });

    const inputHandler = () => {};
    const submit = (event) => {
        event.preventDefault();
        setselectOption({
            gender: null,
            religion: null,
            minimumAge: null,
            maximumAge: null,
            motherTongue: null,
        });
    };

    return (
        <div>
            <Image
                src={img}
                className="w-full h-[600px] object-cover"
                alt="img"
                priority
            ></Image>
            <section className="absolute mx-0 md:mx-12  lg:mx-28  top-[6.5%] md:top-[13%] lg:top-[14%]  rounded-[1rem]  ">
                <h1 className="text-white text-2xl md:text-3xl lg:text-6xl text-center py-6  px-1 md:px-4 lg:px-12 [text-shadow:2px_3px_2px_black] z-0">
                    Find your Christian Life Partner
                </h1>

                <form
                    className=" rounded-b-lg flex-col md:flex-row  flex flex-wrap gap-2 gap-y-3 py-3 md:py-5 px-3 bg-black/60 z-0"
                    onSubmit={submit}
                >
                    <div className="flex-1 flex flex-col lg:flex-row gap-2 gap-y-3 ">
                        <div className="flex-1 flex flex-row gap-2  flex-wrap">
                            <div className="flex-1 flex">
                                <div className="relative">
                                    <label
                                        htmlFor="gender"
                                        className="text-white text-base md:text-lg"
                                    >
                                        I'm looking for
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={selectOption.gender || ""}
                                            placeholder="Select an option"
                                            readOnly
                                            name="gender"
                                            onClick={toggleGenderDropdown}
                                            className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            {optionOpen.gender ? (
                                                <FaAngleUp
                                                    className="w-5 h-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaAngleDown
                                                    className="w-5 h-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {optionOpen.gender && (
                                        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                            {genderOptions.map(
                                                (option, index) => (
                                                    <div
                                                        key={index}
                                                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                                        onClick={() =>
                                                            selectGenderOption(
                                                                option
                                                            )
                                                        }
                                                    >
                                                        {option}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 flex">
                                <div className="relative">
                                    <label
                                        htmlFor="religion"
                                        className="text-white text-base md:text-lg"
                                    >
                                        of Denomination
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={
                                                selectOption.denomination || ""
                                            }
                                            placeholder="Select an option"
                                            readOnly
                                            name="denomination"
                                            onClick={toggleDomination}
                                            className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            {optionOpen.denomination ? (
                                                <FaAngleUp
                                                    className="w-5 h-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaAngleDown
                                                    className="w-5 h-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {optionOpen.denomination && (
                                        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 h-60 overflow-scroll scrollbar-hide">
                                            {denomination.map(
                                                (option, index) => (
                                                    <div
                                                        key={index}
                                                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                                        onClick={() =>
                                                            selectDenominationOption(
                                                                option
                                                            )
                                                        }
                                                    >
                                                        {option}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex-row  gap-2 flex">
                            <div className="flex-1  flex">
                                <div className="relative">
                                    <label
                                        htmlFor="motherTongue"
                                        className="text-white text-base md:text-lg"
                                    >
                                        Age
                                    </label>
                                    <div className="flex flex-row items-center">
                                        <div className="relative flex-1">
                                            <input
                                                type="text"
                                                value={
                                                    selectOption.minimumAge ||
                                                    ""
                                                }
                                                placeholder="Select"
                                                readOnly
                                                name="minimumAge"
                                                onClick={toggleManimumAge}
                                                className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                {optionOpen.minimumAge ? (
                                                    <FaAngleUp
                                                        className="w-5 h-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <FaAngleDown
                                                        className="w-5 h-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </div>
                                            {optionOpen.minimumAge && (
                                                <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 h-60 overflow-scroll scrollbar-hide">
                                                    {ageOptions.map(
                                                        (age, index) => (
                                                            <div
                                                                key={index}
                                                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                                                onClick={() =>
                                                                    selectedMinmumAge(
                                                                        age
                                                                    )
                                                                }
                                                            >
                                                                {age}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-base md:text-lg text-white px-1 md:px-2">
                                            to
                                        </p>

                                        <div className="relative flex-1">
                                            <input
                                                type="text"
                                                value={
                                                    selectOption.maximumAge ||
                                                    ""
                                                }
                                                placeholder="Select"
                                                readOnly
                                                name="motherTongue"
                                                onClick={toggleMaximumAge}
                                                className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                {optionOpen.maximumAge ? (
                                                    <FaAngleUp
                                                        className="w-5 h-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <FaAngleDown
                                                        className="w-5 h-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </div>
                                            {optionOpen.maximumAge && (
                                                <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 h-60 overflow-scroll scrollbar-hide">
                                                    {maxAgeOptions.map(
                                                        (age, index) => (
                                                            <div
                                                                key={index}
                                                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                                                onClick={() =>
                                                                    selectedMiximumAge(
                                                                        age
                                                                    )
                                                                }
                                                            >
                                                                {age}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex">
                                <div className="relative">
                                    <label
                                        htmlFor="motherTongue"
                                        className="text-white text-base md:text-lg"
                                    >
                                        Mother Tongue
                                    </label>
                                    <div className="relative">
                                        <input
                                            value={
                                                selectOption.motherTongue || ""
                                            }
                                            placeholder="Select an option"
                                            readOnly
                                            name="motherTongue"
                                            onClick={togglemotherTongue}
                                            type="text"
                                            className="block w-full py-1 pl-3 pr-10 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            {optionOpen.motherTongue ? (
                                                <FaAngleUp
                                                    className="w-5 h-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaAngleDown
                                                    className="w-5 h-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {optionOpen.motherTongue && (
                                        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 h-60 overflow-scroll scrollbar-hide">
                                            {motherTongue.map(
                                                (option, index) => (
                                                    <div
                                                        key={index}
                                                        className="cursor-pointer px-4 py-2 hover:bg-gray-100 "
                                                        onClick={() =>
                                                            selectedMotherTongue(
                                                                option
                                                            )
                                                        }
                                                    >
                                                        {option}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  md:w-fit  md:mt-0 ">
                        <div className="flex flex-col">
                            <label htmlFor="" className="hidden md:flex">
                                hi
                            </label>
                            <Link
                                href="/sign-up"
                                className="py-2 mt-1 rounded-lg font-semibold bg-[#FF9A8A] px-7 flex justify-center"
                            >
                                <h1> Let's Begin </h1>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
