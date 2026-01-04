"use client";
import Footer from "@/HomePageComponents/Footer";
import { EditOptionsInput, EditTextinput } from "@/InputComponents/EditeInput";
import { GeoInputs } from "@/InputComponents/GeoDropdowns";
import formdata from "@/formdata";
import notify from "@/helpers/notify";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiSaveUp2 } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import img from "../../../../public/NutralProfileImg.webp";
import {
    generateAgeOptions,
    generateHeightOptions,
    generateSalaryOptions,
} from "@/helpers/generateInputOptions";

export default function page() {
    useEffect(() => {
        const fetchProfileData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("/api/users/myprofile/");
                if (response.status === 200) {
                    console.log(response.data.user);
                    setUser(response.data.user);
                    setedit(response.data.user.profileData);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, []);
    const router = useRouter();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [edit, setedit] = useState({
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
    });

    const today = new Date();
    const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = edit;
        data["email"] = user.email;
        try {
            const response = await axios.patch(
                "/api/users/complete-profile/",
                data
            );
            if (response.status === 200) {
                console.log(response.data);
                notify("Profile Updated!", "success");
                router.push("/divine-dous/myprofile");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const edithandler = (e) => {
        setedit((currentData) => {
            return { ...currentData, [e.target.name]: e.target.value };
        });
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setedit((currentData) => ({
                ...currentData,
                profileImages: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const ageOptions = generateAgeOptions();
    const heightOptions = generateHeightOptions();
    const Salary = generateSalaryOptions();

    const [maxAgeOptions, setMaxAgeOptions] = useState([]);
    useEffect(() => {
        const minAge = parseInt(edit.lookingforMinAge);

        if (Number.isInteger(minAge)) {
            setMaxAgeOptions(ageOptions.filter((age) => age > minAge));
        } else {
            setMaxAgeOptions(ageOptions);
        }
    }, [edit.lookingforMinAge]);

    const [maxHeightOptions, setMaxHeightOptions] = useState([]);
    useEffect(() => {
        const heightOption = edit.lookingforMinHeight;

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
    }, [edit.lookingforMinHeight]);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        const newData = { ...edit };
        if (selectedCountry) newData.LivingCountry = selectedCountry;
        if (selectedState) newData.LivingState = selectedState;
        if (selectedCity) newData.LivingCity = selectedCity;
        setedit(newData);
    }, [selectedCountry, selectedState, selectedCity]);

    const [selectedPartnerCountry, setSelectedPartnerCountry] = useState(null);
    const [selectedPartnerState, setSelectedPartnerState] = useState(null);
    const [selectedPartnerCity, setSelectedPartnerCity] = useState(null);

    useEffect(() => {
        const newData = { ...edit };
        if (selectedPartnerCountry)
            newData.lookingforCountryLiving = selectedPartnerCountry;
        if (selectedPartnerState)
            newData.lookingforStateLiving = selectedPartnerState;
        if (selectedPartnerCity) newData.lookingforCity = selectedPartnerCity;
        setedit(newData);
    }, [selectedPartnerCountry, selectedPartnerState, selectedPartnerCity]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="font-semibold text-3xl">Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-center flex-col px-2 md:px-16 lg:px-36 mb-12">
                <h1 className="text-red-400 text-center text-lg md:text-xl lg:text-3xl font-bold py-5 md:py-6 m">
                    Edit Personal Profile
                </h1>
                <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                    <div className="flex flex-col gap-3 md:gap-5">
                        <div className="grid bg-white px-3 py-1 gap-2">
                            <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl ">
                                Profile Image
                            </h1>
                            <div className="w-full bg-black flex justify-center ">
                                {edit.profileImages ? (
                                    <Image
                                        src={edit.profileImages}
                                        alt="Profile"
                                        width={600}
                                        height={200}
                                        className="h-96 w-72"
                                    />
                                ) : (
                                    <Image
                                        src={img}
                                        alt="Profile"
                                        width={600}
                                        height={700}
                                        className="h-96"
                                    />
                                )}
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <label
                                    htmlFor="profileImages"
                                    className="flex flex-col items-center justify-center w-full py-3 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <FaCloudUploadAlt
                                            color="black"
                                            size={30}
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            id="profileImages"
                                            name="profileImages"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="grid bg-white px-3 py-1">
                            <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl ">
                                Basic Info
                            </h1>
                            <div className="flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4">
                                <EditOptionsInput
                                    name="Gender"
                                    options={formdata.Gender}
                                    inputHandler={edithandler}
                                    label="Gender"
                                    className="w-full"
                                    value={edit.Gender}
                                />
                                <EditOptionsInput
                                    name="CreatedFor"
                                    options={formdata.CreatedFor}
                                    inputHandler={edithandler}
                                    label="Created For"
                                    className="w-full"
                                    value={edit.CreatedFor}
                                />
                                <EditTextinput
                                    id="FirstName"
                                    name="FirstName"
                                    onChange={edithandler}
                                    value={edit.FirstName}
                                    placeholder="FirstName"
                                    label="First Name"
                                />
                                <EditTextinput
                                    id="LastName"
                                    name="LastName"
                                    onChange={edithandler}
                                    value={edit.LastName}
                                    placeholder="Last Name"
                                    label="Last Name"
                                />
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Date of Brith
                                    </label>
                                    <input
                                        type="date"
                                        id="DateOfBirth"
                                        name="DateOfBirth"
                                        value={edit.DateOfBirth}
                                        max={
                                            eighteenYearsAgo
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        onChange={edithandler}
                                        className="w-full peer   rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                                    />
                                </div>
                                <EditOptionsInput
                                    name="Height"
                                    options={heightOptions}
                                    inputHandler={edithandler}
                                    label="Your Height"
                                    className="w-full"
                                    value={edit.Height}
                                />
                                <EditOptionsInput
                                    name="MaritalStatus"
                                    options={formdata.Status}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Marital Status"
                                    value={edit.MaritalStatus}
                                />
                                <EditOptionsInput
                                    name="Diet"
                                    options={formdata.Diet}
                                    inputHandler={edithandler}
                                    label="Diet"
                                    className="w-full"
                                    value={edit.Diet}
                                />
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Any Disability
                                    </label>
                                    <div className="flex gap-3 flex-wrap">
                                        <div className="border-2 px-1 py-1  rounded-full flex items-center">
                                            <input
                                                type="radio"
                                                id="Disability"
                                                name="Disability"
                                                value="None"
                                                onChange={edithandler}
                                                checked={
                                                    edit.Disability === "None"
                                                }
                                                className={`h-5 w-5`}
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
                                                onChange={edithandler}
                                                checked={
                                                    edit.Disability ===
                                                    "Physical Disability"
                                                }
                                                className="h-5 w-5 "
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

                                <EditOptionsInput
                                    name="healthOptions"
                                    options={formdata.healthInformation}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Health Information"
                                    value={edit.HealthInformation}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  gap-3 md:gap-5">
                        {/* Family Backround */}
                        <div className="grid bg-white px-3 py-1">
                            <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  ">
                                About Yourself
                            </h1>
                            <div className="relative w-full text-sm md:text-base pt-3 ">
                                <textarea
                                    id="aboutYourself"
                                    name="aboutYourself"
                                    onChange={edithandler}
                                    value={edit.aboutYourself}
                                    cols="30"
                                    rows="6"
                                    maxLength={500}
                                    className="w-full peer bg-white rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                                    placeholder="Tell us more about yourself, your partner, and your family..."
                                ></textarea>
                                <div className="absolute bottom-5 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-sm">
                                    <span id="characterCount">
                                        500 characters remaining
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Location & Career Backround */}
                        <div className="grid bg-white px-3 py-1">
                            <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  ">
                                Location & Career Backround
                            </h1>
                            <div className="flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4">
                                <div className="flex flex-col gap-4">
                                    <GeoInputs
                                        name={"User"}
                                        label={"User1"}
                                        setCountryName={setSelectedCountry}
                                        setStateName={setSelectedState}
                                        setCityName={setSelectedCity}
                                        // selectedCountryValue={edit.LivingCountry}
                                    />
                                </div>
                                <EditOptionsInput
                                    name="ResidencyStatus"
                                    options={formdata.ResidencyStatus}
                                    inputHandler={edithandler}
                                    label="Residency Status"
                                    value={edit.ResidencyStatus}
                                />

                                <EditOptionsInput
                                    name="Qualification"
                                    options={formdata.Qualification}
                                    inputHandler={edithandler}
                                    label="Qualification"
                                    value={edit.Qualification}
                                />
                                {edit.Qualification && (
                                    <EditOptionsInput
                                        name="Degree"
                                        options={
                                            formdata.Degree[edit.Qualification]
                                        }
                                        inputHandler={edithandler}
                                        label="Degree"
                                        value={edit.Degree}
                                    />
                                )}
                                <EditOptionsInput
                                    name="WorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Working Sector"
                                    value={edit.WorkingSector}
                                />
                                {edit.WorkingSector && (
                                    <EditOptionsInput
                                        name="WorkingAsRole"
                                        options={
                                            formdata.WorkingAsRole[
                                                edit.WorkingSector
                                            ]
                                        }
                                        inputHandler={edithandler}
                                        label="Working As Role"
                                        value={edit.WorkingAsRole}
                                    />
                                )}
                                <EditOptionsInput
                                    name="WorkingWith"
                                    options={formdata.WorkingWith}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Working With"
                                    value={edit.WorkingWith}
                                />
                                <EditOptionsInput
                                    name="Salary"
                                    options={Salary}
                                    inputHandler={edithandler}
                                    label="Annual Income"
                                    value={edit.Salary}
                                />
                            </div>
                        </div>

                        {/*      Religious Background */}
                        <div className="grid bg-white px-3 py-1">
                            <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  ">
                                Religious Background
                            </h1>
                            <div className="flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4">
                                <EditOptionsInput
                                    name="Religion"
                                    options={formdata.Religion}
                                    inputHandler={edithandler}
                                    label="Religion"
                                    className="w-full"
                                    value={edit.Religion}
                                />
                                <EditOptionsInput
                                    name="denominations"
                                    options={formdata.denominations}
                                    inputHandler={edithandler}
                                    label="Denominations"
                                    className="w-full"
                                    value={edit.denominations}
                                />
                                <EditOptionsInput
                                    name="EthnicOrigin"
                                    options={formdata.EthnicOrigin}
                                    inputHandler={edithandler}
                                    label="Ethnic Origin"
                                    className="w-full"
                                    value={edit.EthnicOrigin}
                                />
                                <EditOptionsInput
                                    name="motherTongue"
                                    options={formdata.motherTongue}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Mother Tongue"
                                    value={edit.motherTongue}
                                />
                                <EditTextinput
                                    id="ChurchName"
                                    name="ChurchName"
                                    onChange={edithandler}
                                    value={edit.ChurchName}
                                    placeholder="Church Name"
                                    label="Church Name"
                                />
                                <EditTextinput
                                    id="ChurchAddress"
                                    name="ChurchAddress"
                                    onChange={edithandler}
                                    value={edit.ChurchAddress}
                                    placeholder="Church Address"
                                    label="Church Address"
                                />
                                <div className="grid grid-cols-2  items-center">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Is baptized ?
                                    </label>
                                    <div className="flex gap-3 flex-wrap">
                                        <div className="border-2 px-1 py-1  rounded-full flex items-center">
                                            <input
                                                type="radio"
                                                id="IsBaptized "
                                                name="IsBaptized"
                                                value="Yes"
                                                onChange={edithandler}
                                                checked={
                                                    edit.IsBaptized === "Yes"
                                                }
                                                className={`h-5 w-5`}
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
                                                onChange={edithandler}
                                                checked={
                                                    edit.IsBaptized === "NO"
                                                }
                                                className="h-5 w-5 "
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
                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        BaptismDate
                                    </label>
                                    <input
                                        type="date"
                                        id="BaptismDate"
                                        name="BaptismDate"
                                        value={edit.BaptismDate}
                                        max={
                                            new Date()
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        onChange={edithandler}
                                        className="w-full peer   rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  gap-3 md:gap-5">
                        {/* Family Backround */}
                        <div className="grid bg-white px-3 py-1">
                            <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  ">
                                Family Backround
                            </h1>
                            <div className="flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4">
                                <EditOptionsInput
                                    name="FatherStatus"
                                    options={formdata.FatherStatus}
                                    inputHandler={edithandler}
                                    label="Father Status"
                                    className="w-full"
                                    value={edit.FatherStatus}
                                />
                                <EditOptionsInput
                                    name="Mother Status"
                                    options={formdata.MotherStatus}
                                    inputHandler={edithandler}
                                    label="Mother Status"
                                    className="w-full"
                                    value={edit.MotherStatus}
                                />
                                <EditOptionsInput
                                    name="NoofSiblings"
                                    options={formdata.NoofSiblings}
                                    inputHandler={edithandler}
                                    label="No of Siblings"
                                    className="w-full"
                                    value={edit.NoofSiblings}
                                />
                                <EditTextinput
                                    id="NativeCity"
                                    name="NativeCity"
                                    onChange={edithandler}
                                    value={edit.NativeCity}
                                    placeholder="Native City"
                                    label="Native City"
                                />
                                <EditOptionsInput
                                    name="FamilyType"
                                    options={formdata.FamilyType}
                                    inputHandler={edithandler}
                                    label="Family Type"
                                    className="w-full"
                                    value={edit.FamilyType}
                                />
                                <EditOptionsInput
                                    name="FamilyTradition"
                                    options={formdata.FamilyTradition}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Family Tradition"
                                    value={edit.FamilyTradition}
                                />
                                <EditOptionsInput
                                    name="AffluenceLevel"
                                    options={formdata.AffluenceLevel}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="AffluenceLevel"
                                    value={edit.AffluenceLevel}
                                />
                            </div>
                        </div>

                        {/* Parter Preferences */}
                        <div className="grid bg-white px-3 py-1">
                            <h1 className="py-2 border-b-2 border-gray-300 text-gray-500 text-base md:text-lg lg:text-xl  ">
                                Parter Preferences
                            </h1>
                            <div className="flex flex-col w-full text-sm md:text-base py-5 gap-y-2 md:gap-y-4">
                                {/* <EditOptionsInput
                                    name="lookingforProfileCreatedby"
                                    options={formdata.CreatedFor}
                                    inputHandler={edithandler}
                                    label="Created For"
                                    className="w-full"
                                    value={edit.lookingforProfileCreatedby}
                                /> */}

                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Age
                                    </label>
                                    <div className="flex flex-row  w-full gap-2 items-center">
                                        <EditOptionsInput
                                            name="lookingforMinAge"
                                            options={ageOptions}
                                            inputHandler={edithandler}
                                            className="w-full"
                                            value={parseInt(
                                                edit.lookingforMinAge
                                            ) || ""}
                                        />
                                        to
                                        <EditOptionsInput
                                            name="lookingforMaxAge"
                                            options={maxAgeOptions}
                                            inputHandler={edithandler}
                                            // label="Max-Age"
                                            className="w-full"
                                            value={parseInt(
                                                edit.lookingforMaxAge
                                            ) || ""}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2   items-center ">
                                    <label className=" text-sm md:text-base peer-focus:text-black">
                                        Height
                                    </label>
                                    <div className="flex flex-row  w-full gap-2 items-center">
                                        <EditOptionsInput
                                            name="lookingforMinHeight"
                                            options={heightOptions}
                                            inputHandler={edithandler}
                                            className="w-full"
                                            value={edit.lookingforMinHeight}
                                        />
                                        to
                                        <EditOptionsInput
                                            name="lookingforMaxHeight"
                                            options={maxHeightOptions}
                                            inputHandler={edithandler}
                                            className="w-full"
                                            value={edit.lookingforMaxHeight }
                                        />
                                    </div>
                                </div>

                                <EditOptionsInput
                                    name="lookingforMaritalStatus"
                                    options={formdata.Status}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Marital Status"
                                    value={edit.lookingforMaritalStatus}
                                />
                                <EditOptionsInput
                                    name="lookingforDiet"
                                    options={formdata.Diet}
                                    inputHandler={edithandler}
                                    label="Diet"
                                    className="w-full"
                                    value={edit.lookingforDiet}
                                />
                                <EditOptionsInput
                                    name="lookingforReligion"
                                    options={formdata.Religion}
                                    inputHandler={edithandler}
                                    label="Religion"
                                    className="w-full"
                                    value={edit.lookingforReligion}
                                />
                                <EditOptionsInput
                                    name="lookingforDenomination"
                                    options={formdata.denominations}
                                    inputHandler={edithandler}
                                    label="Denominations"
                                    className="w-full"
                                    value={edit.lookingforDenomination}
                                />
                                <EditOptionsInput
                                    name="lookingforEthnicOrigin"
                                    options={formdata.EthnicOrigin}
                                    inputHandler={edithandler}
                                    label="Ethnic Origin"
                                    className="w-full"
                                    value={edit.lookingforEthnicOrigin}
                                />
                                <div className="flex flex-col gap-4">
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
                                <EditOptionsInput
                                    name="lookingforWorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={edithandler}
                                    className="w-full"
                                    label="Working Sector"
                                    value={edit.lookingforWorkingSector}
                                />
                                {edit.lookingforWorkingSector && (
                                    <EditOptionsInput
                                        name="lookingforWorkingAsRole"
                                        options={
                                            formdata.WorkingAsRole[
                                                edit.lookingforWorkingSector
                                            ]
                                        }
                                        inputHandler={edithandler}
                                        label="Working As Role"
                                        value={edit.lookingforWorkingAsRole}
                                    />
                                )}

                                <EditOptionsInput
                                    name="lookingforQualification"
                                    options={formdata.Qualification}
                                    inputHandler={edithandler}
                                    label="Qualification"
                                    value={edit.lookingforQualification}
                                />
                                {edit.lookingforQualification && (
                                    <EditOptionsInput
                                        name="lookingforDegree"
                                        options={
                                            formdata.Degree[
                                                edit.lookingforQualification
                                            ]
                                        }
                                        inputHandler={edithandler}
                                        label="Degree"
                                        value={edit.lookingforDegree}
                                    />
                                )}
                                <EditOptionsInput
                                    name="lookingforAnnualIncome"
                                    options={Salary}
                                    inputHandler={edithandler}
                                    label="Annual Income"
                                    value={edit.lookingforAnnualIncome}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-5">
                    <button
                        className="flex  items-center px-5 py-2 border-2 gap-3 text-base md:text-lg font-medium bg-red-400 text-white rounded-lg"
                        onClick={onSubmit}
                    >
                        <CiSaveUp2 className="font-bold" size={20} /> Save Edit{" "}
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}
