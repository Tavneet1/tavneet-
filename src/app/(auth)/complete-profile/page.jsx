"use client";
import React, { useState, useEffect, Suspense } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
    page1Fields,
    page2Fields,
    page3Fields,
    page4Fields,
} from "@/validationMassage";
import {
    OptionsInput,
    Radioinput,
    Textinput,
} from "@/InputComponents/RegistrationInput";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import formdata from "@/formdata";
import notify from "@/helpers/notify";
import { GeoInputs } from "@/InputComponents/GeoDropdowns";
import {
    generateAgeOptions,
    generateHeightOptions,
    generateSalaryOptions,
} from "@/helpers/generateInputOptions";

const defaultForm = {
    CreatedFor: "",
    Gender: "",
    FirstName: "",
    LastName: "",
    MaritalStatus: "",
    DateOfBirth: "",
    Height: "",
    Disability: "",
    HealthInformation: "",
    Diet: "",
    aboutYourself: "",
    ChurchName: "",
    ChurchAddress: "",
    IsBaptized: "",
    BaptismDate: "",
    FatherStatus: "",
    MotherStatus: "",
    FamilyType: "",
    FamilyTradition: "",
    AffluenceLevel: "",
    NoofSiblings: "",
    Religion: "",
    motherTongue: "",
    EthnicOrigin: "",
    denominations: "",
    NativeCity: "",
    LivingCountry: "",
    LivingState: "",
    LivingCity: "",
    ResidencyStatus: "",
    Qualification: "",
    Degree: "",
    WorkingSector: "",
    WorkingAsRole: "",
    WorkingWith: "",
    Salary: "",
    GamilAddress: "",
    passward: "",
    ReEnterpassward: "",
    number: "",

    lookingforMaxAge: "",
    lookingforMinAge: "",
    lookingforMaxHeight: "",
    lookingforMinHeight: "",
    lookingforMaritalStatus: "",
    lookingforEthnicOrigin: "",
    lookingforReligion: "",
    lookingforDenomination: "",
    lookingforAnnualIncome: "",
    lookingforDiet: "",
    lookingforCountryLiving: "",
    lookingforStateLiving: "",
    lookingforCity: "",
    lookingforQualification: "",
    lookingforDegree: "",
    lookingforWorkingSector: "",
    lookingforWorkingAsRole: "",
};

function CompleteProfilePage() {
    const [registerUser, setRegisterUser] = useState(defaultForm);
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const router = useRouter();

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const [selectedPartnerCountry, setSelectedPartnerCountry] = useState(null);
    const [selectedPartnerState, setSelectedPartnerState] = useState(null);
    const [selectedPartnerCity, setSelectedPartnerCity] = useState(null);

    const today = new Date();
    const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );

    useEffect(() => {
        const newData = { ...registerUser };
        if (selectedCountry) newData.LivingCountry = selectedCountry;
        if (selectedState) newData.LivingState = selectedState;
        if (selectedCity) newData.LivingCity = selectedCity;
        setRegisterUser(newData);
    }, [selectedCountry, selectedState, selectedCity]);

    useEffect(() => {
        const newData = { ...registerUser };
        if (selectedPartnerCountry)
            newData.lookingforCountryLiving = selectedPartnerCountry;
        if (selectedPartnerState)
            newData.lookingforStateLiving = selectedPartnerState;
        if (selectedPartnerCity) newData.lookingforCity = selectedPartnerCity;
        setRegisterUser(newData);
    }, [selectedPartnerCountry, selectedPartnerState, selectedPartnerCity]);

    const inputHandler = (e) => {
        setRegisterUser((currentData) => {
            return { ...currentData, [e.target.name]: e.target.value };
        });
    };

    useEffect(() => {
        if (!email) {
            router.push("/sign-up");
        }
    }, [email]);

    const onRegister = async (e) => {
        e.preventDefault();
        let data = registerUser;
        data["email"] = decodeURIComponent(email);
        try {
            const response = await axios.patch(
                "/api/users/complete-profile/",
                data
            );
            if (response.status === 200) {
                console.log(response.data);
                router.push(`/login`);
                notify("Done!", "success");
            }
            setRegisterUser(defaultForm);
        } catch (error) {
            console.log(error);
        }
    };
    const [maxAgeOptions, setMaxAgeOptions] = useState([]);
    const ageOptions = generateAgeOptions();
    const heightOptions = generateHeightOptions();

    const [maxHeightOptions, setMaxHeightOptions] = useState([]);

    useEffect(() => {
        const heightOption = registerUser.lookingforMinHeight;

        if (heightOption) {
            const filteredOptions = heightOptions.filter((option) =>
                option.startsWith(
                    `${parseInt(heightOption.split(" ")[0]) + 1}ft`
                )
            );

            setMaxHeightOptions(filteredOptions);
        } else {
            setMaxHeightOptions(heightOptions);
        }
    }, [registerUser.lookingforMinHeight]);

    useEffect(() => {
        const minAge = parseInt(registerUser.lookingforMinAge);

        if (Number.isInteger(minAge)) {
            setMaxAgeOptions(ageOptions.filter((age) => age > minAge));
        } else {
            setMaxAgeOptions(ageOptions);
        }
    }, [registerUser.lookingforMinAge]);

    const Salary = generateSalaryOptions();

    const validateFields = () => {
        const fieldValidation = {
            isValid: true,
            missingFields: [],
        };

        switch (currentSlide) {
            case 1:
                Object.keys(page1Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        fieldValidation.isValid = false;
                        fieldValidation.missingFields.push(page1Fields[field]);
                    }
                });
                return fieldValidation;
            case 2:
                Object.keys(page2Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        fieldValidation.isValid = false;
                        fieldValidation.missingFields.push(page2Fields[field]);
                    }
                });
                return fieldValidation;
            case 3:
                Object.keys(page3Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        fieldValidation.isValid = false;
                        fieldValidation.missingFields.push(page3Fields[field]);
                    }
                });
                return fieldValidation;
            case 4:
                Object.keys(page4Fields).forEach((field) => {
                    if (!registerUser[field]) {
                        fieldValidation.isValid = false;
                        fieldValidation.missingFields.push(page4Fields[field]);
                    }
                });
                return fieldValidation;
            default:
                break;
        }
        return fieldValidation;
    };

    const [currentSlide, setCurrentSlide] = useState(1);
    const nextSlide = () => {
        const { isValid, missingFields } = validateFields();
        if (isValid) {
            setCurrentSlide(currentSlide + 1);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            alert(`${missingFields.join("\n")}`);
        }
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };

    return (
        <>
            <div className="flex w-full mp-[4.5rem] justify-center bg-red-400">
                <div className="w-full  px-5  md:px-10 lg:px-20 py-12 my-[3rem] md:w-[75%] lg:w-[55%] bg-white  rounded-lg">
                    <div
                        className="flex flex-col "
                        style={{
                            display: currentSlide === 1 ? "flex" : "none",
                            gridGap: "2rem",
                        }}
                    >
                        {/* Profile Created by */}
                        <div className="flex flex-col  gap-3">
                            <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                Profile Created by{" "}
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                {formdata.CreatedFor.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`CreatedFor-${option}`}
                                        name="CreatedFor"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={
                                            registerUser.CreatedFor === option
                                        }
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Gender */}
                        <div className="flex flex-col gap-3  ">
                            <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                Gender
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                {formdata.Gender.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`Gender-${option}`}
                                        name="Gender"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={registerUser.Gender === option}
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Your Name  */}
                        <div className="flex flex-col gap-5 ">
                            <p className="text-[1.37rem] font-normal text-[#41404d]">
                                Your Name
                            </p>
                            <div className="flex flex-col md:flex-row gap-5">
                                <Textinput
                                    id="FirstName"
                                    name="FirstName"
                                    value={registerUser.FirstName}
                                    onChange={inputHandler}
                                    placeholder="John"
                                    label="First Name"
                                />
                                <Textinput
                                    id="LastName"
                                    name="LastName"
                                    value={registerUser.LastName}
                                    onChange={inputHandler}
                                    placeholder="Snow"
                                    label="Last Name"
                                />
                            </div>
                        </div>
                        {/* Marital Status */}
                        <div className="flex flex-col  gap-3 mb-8">
                            <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                Marital Status
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                {formdata.Status.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`MaritalStatus-${option}`}
                                        name="MaritalStatus"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={
                                            registerUser.MaritalStatus ===
                                            option
                                        }
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* DateOfBirth, AND Height */}
                        <div className="flex flex-col md:flex-row mb-5 gap-6">
                            <div className="relative w-full">
                                <input
                                    type="date"
                                    id="DateOfBirth"
                                    name="DateOfBirth"
                                    value={registerUser.DateOfBirth}
                                    max={
                                        eighteenYearsAgo
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                    onChange={inputHandler}
                                    className="w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                                />

                                <label
                                    htmlFor="Date of Brith"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                >
                                    Date of Brith
                                </label>
                            </div>

                            <div className="relative w-full gap-3">
                                <OptionsInput
                                    name="Height"
                                    options={heightOptions}
                                    inputHandler={inputHandler}
                                    label="Your Height"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Any Disability */}
                        <div className="flex flex-col  gap-3">
                            <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                Any Disability
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                <div className="border-2 px-1 py-1  rounded-full flex items-center">
                                    <input
                                        type="radio"
                                        id="Disability"
                                        name="Disability"
                                        value="None"
                                        onChange={inputHandler}
                                        checked={
                                            registerUser.Disability === "None"
                                        }
                                        className={`h-6 w-6`}
                                    />
                                    <label
                                        htmlFor="Disability"
                                        className="mx-2 text-sm font-medium text-gray-600"
                                    >
                                        None
                                    </label>
                                </div>
                                <div className="border-2  px-1 py-1 rounded-full flex items-center">
                                    <input
                                        type="radio"
                                        id="Disability"
                                        name="Disability"
                                        value="Physical Disability"
                                        onChange={inputHandler}
                                        checked={
                                            registerUser.Disability ===
                                            "Physical Disability"
                                        }
                                        className="h-6 w-6 "
                                    />
                                    <label
                                        htmlFor="Disability"
                                        className="mx-2 text-sm font-medium text-gray-600"
                                    >
                                        Physical Disability
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Health Information */}
                        <div className="flex flex-col  gap-3">
                            <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                {" "}
                                Health Information
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                {formdata.healthOptions.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`HealthInformation-${option.value}`}
                                        name="HealthInformation"
                                        value={option.value}
                                        onChange={inputHandler}
                                        checked={
                                            registerUser.HealthInformation ===
                                            option.value
                                        }
                                        label={option.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Diet */}
                        <div className="flex flex-col  gap-3">
                            <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                Diet
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                {formdata.Diet.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`Diet-${index}`} // You may want to make the ID unique per option
                                        name="Diet"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={registerUser.Diet === option}
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* More about your self, Partner and Family */}
                        <div className="flex flex-col  gap-3">
                            <p className="text-[1.37rem] font-normal text-[#41404d]">
                                More about your self, Partner and Family
                            </p>
                            <div className="relative">
                                <textarea
                                    id="aboutYourself"
                                    name="aboutYourself"
                                    onChange={inputHandler}
                                    value={registerUser.aboutYourself}
                                    cols="30"
                                    rows="6"
                                    maxLength={500}
                                    className="w-full peer block rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden"
                                    placeholder="Tell us more about yourself, your partner, and your family..."
                                ></textarea>
                                <div className="absolute bottom-1 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-sm">
                                    <span id="characterCount">
                                        500 characters max
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={() => nextSlide(page1Fields)}
                                className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500"
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex relative flex-col justify-center"
                        style={{
                            display: currentSlide === 2 ? "flex" : "none",
                            gridGap: "2rem",
                        }}
                    >
                        <button
                            onClick={prevSlide}
                            className="absolute -top-3 left-1 md:-left-3 text-[#41404d] "
                        >
                            <FaArrowLeftLong className="text-base  md:text-2xl" />
                        </button>

                        <div className="flex justify-center  text-[1.37rem] font-normal text-[#41404d]">
                            <p>Family Backround</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
                            <OptionsInput
                                name="FatherStatus"
                                options={formdata.FatherStatus}
                                inputHandler={inputHandler}
                                label="Father's Status"
                            />
                            <OptionsInput
                                name="MotherStatus"
                                options={formdata.MotherStatus}
                                inputHandler={inputHandler}
                                label="Mother's Status"
                            />
                            <OptionsInput
                                name="FamilyType"
                                options={formdata.FamilyType}
                                inputHandler={inputHandler}
                                label="Family Type"
                            />
                            <OptionsInput
                                name="FamilyTradition"
                                options={formdata.FamilyTradition}
                                inputHandler={inputHandler}
                                label="Family Tradition"
                            />
                            <OptionsInput
                                name="AffluenceLevel"
                                options={formdata.AffluenceLevel}
                                inputHandler={inputHandler}
                                label="Affluence Level"
                            />
                            <OptionsInput
                                name="NoofSiblings"
                                options={formdata.NoofSiblings}
                                inputHandler={inputHandler}
                                label="No of Siblings"
                            />
                            <OptionsInput
                                name="motherTongue"
                                options={formdata.motherTongue}
                                inputHandler={inputHandler}
                                label="Your Mother Tongue"
                            />
                            <OptionsInput
                                name="Religion"
                                options={formdata.Religion}
                                inputHandler={inputHandler}
                                label="Religion"
                                defaultValue="Christian"
                            />
                            <OptionsInput
                                name="EthnicOrigin"
                                options={formdata.EthnicOrigin}
                                inputHandler={inputHandler}
                                label="Your Ethnic Origin"
                            />
                            <OptionsInput
                                name="denominations"
                                options={formdata.denominations}
                                inputHandler={inputHandler}
                                label="Your denominations"
                            />

                            {/* NativeCity */}
                            <Textinput
                                id="NativeCity"
                                name="NativeCity"
                                onChange={inputHandler}
                                placeholder="Eg.Delhi"
                                label="NativeCity"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
                            <div className="flex flex-col gap-3 w-full">
                                <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                    Church Name
                                </p>
                                <Textinput
                                    type="text"
                                    id="ChurchName"
                                    name="ChurchName"
                                    onChange={inputHandler}
                                    value={registerUser.ChurchName}
                                    placeholder="Church Name"
                                />
                            </div>
                            <div className="flex flex-col gap-3  w-full">
                                <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                    Church Address
                                </p>
                                <Textinput
                                    type="text"
                                    id="ChurchAddress"
                                    name="ChurchAddress"
                                    onChange={inputHandler}
                                    value={registerUser.ChurchAddress}
                                    placeholder="Church Address"
                                />
                            </div>
                            {/* Is baptized ? */}
                            <div className="flex flex-col gap-3 w-full">
                                <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                    Is baptized ?
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    <div className="border-2 px-1 py-1  rounded-full flex items-center">
                                        <input
                                            type="radio"
                                            id="IsBaptized "
                                            name="IsBaptized"
                                            value="Yes"
                                            onChange={inputHandler}
                                            checked={
                                                registerUser.IsBaptized ===
                                                "Yes"
                                            }
                                            className={`h-6 w-6`}
                                        />
                                        <label
                                            htmlFor="IsBaptized"
                                            className="mx-2 text-sm font-medium text-gray-600"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                    <div className="border-2  px-1 py-1 rounded-full flex items-center">
                                        <input
                                            type="radio"
                                            id="IsBaptized"
                                            name="IsBaptized"
                                            value="NO"
                                            onChange={inputHandler}
                                            checked={
                                                registerUser.IsBaptized === "NO"
                                            }
                                            className="h-6 w-6 "
                                        />
                                        <label
                                            htmlFor="IsBaptized"
                                            className="mx-2 text-sm font-medium text-gray-600"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Baptism Date */}
                            <div className="relative w-full flex-col gap-3">
                                <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                    Baptism Date
                                </p>
                                <input
                                    type="date"
                                    id="BaptismDate"
                                    name="BaptismDate"
                                    value={registerUser.BaptismDate}
                                    max={new Date().toISOString().split("T")[0]}
                                    onChange={inputHandler}
                                    className="w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={nextSlide}
                                className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500"
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex relative flex-col justify-center"
                        style={{
                            display: currentSlide === 3 ? "flex" : "none",
                            gridGap: "2rem",
                        }}
                    >
                        <button
                            onClick={prevSlide}
                            className="absolute -top-3 left-1 md:-left-3 text-[#41404d] "
                        >
                            <FaArrowLeftLong className="text-base  md:text-2xl" />
                        </button>
                        <div className="flex justify-center  text-center text-[1.37rem] font-normal text-[#41404d]">
                            <p> Location, Education & Career Backround</p>
                        </div>
                        {/* Living Location */}
                        <div className="flex flex-col gap-5 ">
                            <p className="text-[1.37rem] font-normal text-[#41404d]">
                                Living Location
                            </p>
                            {/* <div className="flex flex-row gap-3">
                                {formdata.LivingLoactionFields.map(
                                    (field, index) => (
                                        <Textinput
                                            key={index}
                                            id="LivingLoactionFields"
                                            name={field.name}
                                            value={registerUser[field.name]}
                                            onChange={inputHandler}
                                            placeholder={field.label}
                                            label={field.label}
                                        />
                                    )
                                )}
                            </div> */}
                            <div className="grid grid-cols-3 gap-3">
                                <GeoInputs
                                    name={"User"}
                                    label={"User1"}
                                    setCountryName={setSelectedCountry}
                                    setStateName={setSelectedState}
                                    setCityName={setSelectedCity}
                                />
                            </div>
                        </div>

                        {/* ResidencyStatus */}
                        <div className="relative  gap-3">
                            <OptionsInput
                                name="ResidencyStatus"
                                options={formdata.ResidencyStatus}
                                inputHandler={inputHandler}
                                label="Residency Status"
                            />
                        </div>

                        {/* Highest Qualification */}
                        <div className="flex flex-col  gap-6">
                            <p className="text-[1.37rem] font-normal text-[#41404d]">
                                Highest Qualification
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap ">
                                <div className="relative">
                                    <OptionsInput
                                        name="Qualification"
                                        options={formdata.Qualification}
                                        inputHandler={inputHandler}
                                        label="Field"
                                    />
                                </div>
                                {registerUser.Qualification && (
                                    <div className="relative">
                                        <OptionsInput
                                            name="Degree"
                                            options={
                                                formdata.Degree[
                                                    registerUser.Qualification
                                                ]
                                            }
                                            inputHandler={inputHandler}
                                            label="Degree"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Working As */}
                        <div className="flex flex-col  gap-6">
                            <p className="text-[1.37rem] font-normal text-[#41404d]">
                                Working As
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap ">
                                <OptionsInput
                                    name="WorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={inputHandler}
                                    label="WorkingSector"
                                />
                                {registerUser.WorkingSector && (
                                    <div className="relative">
                                        <OptionsInput
                                            name="WorkingAsRole"
                                            options={
                                                formdata.WorkingAsRole[
                                                    registerUser.WorkingSector
                                                ]
                                            }
                                            inputHandler={inputHandler}
                                            label="WorkingAsRole"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row  gap-3">
                            <OptionsInput
                                name="WorkingWith"
                                options={formdata.WorkingWith}
                                inputHandler={inputHandler}
                                label="WorkingWith"
                            />
                            <OptionsInput
                                name="Salary"
                                options={Salary}
                                inputHandler={inputHandler}
                                label="Annual Income"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={nextSlide}
                                className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500"
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex relative flex-col justify-center"
                        style={{
                            display: currentSlide === 4 ? "flex" : "none",
                            gridGap: "1.5rem",
                        }}
                    >
                        <p className="flex justify-center text-[1.37rem] text-center font-normal text-[#41404d]">
                            Partner Looking for (basic info)
                        </p>
                        <button
                            onClick={prevSlide}
                            className="absolute -top-3 left-1 md:-left-3 text-[#41404d] "
                        >
                            <FaArrowLeftLong className="text-base  md:text-2xl" />
                        </button>

                        {/* looking for Marital Status */}
                        <div className="flex flex-col mb-9  gap-3 ">
                            <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                Marital Status
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                {formdata.Status.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`lookingforMaritalStatus-${option}`}
                                        name="lookingforMaritalStatus"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={
                                            registerUser.lookingforMaritalStatus ===
                                            option
                                        }
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2   gap-12">
                            {/* looking for Min Age */}
                            <div className="flex flex-row gap-3 w-full items-center ">
                                <OptionsInput
                                    name="lookingforMinAge"
                                    options={ageOptions}
                                    inputHandler={inputHandler}
                                    label="Min-Age"
                                    className="w-full"
                                />
                                To
                                <OptionsInput
                                    name="lookingforMaxAge"
                                    options={maxAgeOptions}
                                    inputHandler={inputHandler}
                                    label="Max-Age"
                                    className="w-full"
                                />
                            </div>

                            {/* looking for height */}
                            <div className="flex flex-row gap-3 w-full items-center">
                                <OptionsInput
                                    name="lookingforMinHeight"
                                    options={heightOptions}
                                    inputHandler={inputHandler}
                                    label="Min-Height"
                                    className="w-full"
                                />
                                To
                                <OptionsInput
                                    name="lookingforMaxHeight"
                                    // options={heightOptions}
                                    options={maxHeightOptions}
                                    inputHandler={inputHandler}
                                    label="Max-Height"
                                    className="w-full"
                                />
                            </div>

                            {/* looking for Ethnic Origin */}
                            <OptionsInput
                                name="lookingforEthnicOrigin"
                                options={formdata.EthnicOrigin}
                                inputHandler={inputHandler}
                                label="Ethnic Origin"
                            />
                            {/* looking for Denomination */}
                            <OptionsInput
                                name="lookingforDenomination"
                                options={formdata.denominations}
                                inputHandler={inputHandler}
                                label="denominations"
                            />

                            {/* looking for Profile Created by */}
                            {/* <div className="flex flex-col  gap-3">
                                <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                    Profile Created by{" "}
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    {formdata.CreatedFor.map(
                                        (option, index) => (
                                            <Radioinput
                                                key={index}
                                                id={`lookingforProfileCreatedby-${option}`}
                                                name="lookingforProfileCreatedby"
                                                value={option}
                                                onChange={inputHandler}
                                                checked={
                                                    registerUser.lookingforProfileCreatedby ===
                                                    option
                                                }
                                                label={option}
                                            />
                                        )
                                    )}
                                </div>
                            </div> */}

                            {/* looking for Diet */}
                            <div className="flex flex-col  gap-3">
                                <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                    Diet
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    {formdata.Diet.map((option, index) => (
                                        <Radioinput
                                            key={index}
                                            id={`lookingforDiet-${index}`} // You may want to make the ID unique per option
                                            name="lookingforDiet"
                                            value={option}
                                            onChange={inputHandler}
                                            checked={
                                                registerUser.lookingforDiet ===
                                                option
                                            }
                                            label={option}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* looking for Annual Income */}
                            <div className="flex flex-col  gap-5">
                                <p className="text-[1.37rem] font-normal  text-[#41404d]">
                                    Expected Income
                                </p>
                                <OptionsInput
                                    name="lookingforAnnualIncome"
                                    options={Salary}
                                    inputHandler={inputHandler}
                                    label="Annual Income"
                                />
                            </div>

                            {/* looking for Living Loaction Fields */}
                            <div className="flex flex-col gap-5 ">
                                <p className="text-[1.37rem] font-normal text-[#41404d]">
                                    Living Location
                                </p>
                                <div className="grid grid-cols-3 gap-3">
                                    <GeoInputs
                                        name={"Partner"}
                                        label={"Partner"}
                                        setCountryName={
                                            setSelectedPartnerCountry
                                        }
                                        setStateName={setSelectedPartnerState}
                                        setCityName={setSelectedPartnerCity}
                                    />
                                </div>
                                {/* <div className="flex flex-row gap-3">
                                    {formdata.lookingforLivingLoactionFields.map(
                                        (fields, index) => (
                                            <Textinput
                                                key={index}
                                                id="NativeCity"
                                                name={fields.name}
                                                value={
                                                    registerUser[fields.name]
                                                }
                                                onChange={inputHandler}
                                                placeholder="Type Here.."
                                                label={fields.label}
                                            />
                                        )
                                    )}
                                </div> */}
                            </div>
                        </div>

                        {/* looking for Qualification */}
                        <div className="flex flex-col  gap-6">
                            <p className="text-[1.37rem] font-normal text-[#41404d]">
                                Highest Qualification
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap ">
                                <div className="relative">
                                    <OptionsInput
                                        name="lookingforQualification"
                                        options={formdata.Qualification}
                                        inputHandler={inputHandler}
                                        label="Field"
                                    />
                                </div>
                                {registerUser.lookingforQualification && (
                                    <div className="relative">
                                        <OptionsInput
                                            name="lookingforDegree"
                                            options={
                                                formdata.Degree[
                                                    registerUser
                                                        .lookingforQualification
                                                ]
                                            }
                                            inputHandler={inputHandler}
                                            label="Degree"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* looking for Working Sector */}
                        <div className="flex flex-col  gap-6">
                            <p className="text-[1.37rem] font-normal text-[#41404d]">
                                Working As
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap ">
                                <OptionsInput
                                    name="lookingforWorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={inputHandler}
                                    label="WorkingSector"
                                />
                                {registerUser.lookingforWorkingSector && (
                                    <div className="relative">
                                        <OptionsInput
                                            name="lookingforWorkingAsRole"
                                            options={
                                                formdata.WorkingAsRole[
                                                    registerUser
                                                        .lookingforWorkingSector
                                                ]
                                            }
                                            inputHandler={inputHandler}
                                            label="WorkingAsRole"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={onRegister}
                                className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Page() {
    return (
        <Suspense>
            <CompleteProfilePage />
        </Suspense>
    );
}
