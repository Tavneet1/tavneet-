"use client";
import React, { useEffect, useState } from "react";
// import profileData from "@/fakeProfiledata";
import img from "../../../../public/NutralProfileImg.webp";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/HomePageComponents/Footer";
import axios from "axios";

const defaultForm = {
    _id: {
        $oid: "664f0adf10262943f46483aa",
    },
    username: "sushpawar001@gmail.com",
    email: "sushpawar001@gmail.com",
    password: "$2a$10$aLCpl3ZB2leau8jvnP1OT.HoePQ.l3HQHlU904aV9KxO8wRZynlsS",
    isVerified: false,
    isAdmin: false,
    __v: 0,
    profileData: {
        CreatedFor: "MySelf",
        Gender: "Male",
        FirstName: "Sushant",
        LastName: "Pawar",
        MaritalStatus: "Never Married",
        DateOfBirth: "2024-05-01",
        Height: "5 ft 0 in",
        Disability: "None",
        HealthInformation: "No Health Problems",
        Diet: "Veg",
        aboutYourself: "vjkh",
        ChurchName: "sacsa",
        ChurchAddress: "A-301 Saptashrungi CHS",
        IsBaptized: "Yes",
        BaptismDate: "2024-05-07",
        FatherStatus: "Employed",
        MotherStatus: "Employed",
        FamilyType: "Joint",
        FamilyTradition: "Traditional",
        AffluenceLevel: "Upper Middle Class",
        NoofSiblings: 2,
        Religion: "Christian",
        motherTongue: "Gujarati",
        EthnicOrigin: "Vietnamese",
        denominations: "Evangelical",
        NativeCity: "Dombivali",
        LivingCountry: "India",
        LivingState: "Maharashtra",
        LivingCity: "Thane",
        ResidencyStatus: "Student Visa",
        Qualification: "Management",
        Degree: "MBA",
        WorkingSector: "Engineering",
        WorkingAsRole: "Mechanical / Production Engineer",
        WorkingWith: "Government / Public Sector",
        Salary: "33 LPA to 36 LPA",
        lookingforMaxAge: 32,
        lookingforMinAge: 28,
        lookingforMaxHeight: "5 ft 1 in",
        lookingforMinHeight: "5 ft 0 in",
        lookingforMaritalStatus: "Never Married",
        lookingforEthnicOrigin: "Latin American",
        lookingforReligion: "",
        lookingforDenomination: "Convert",
        lookingforAnnualIncome: "33 LPA to 36 LPA",
        lookingforProfileCreatedby: "MySelf",
        lookingforDiet: "Veg",
        lookingforCountryLiving: "",
        lookingforStateLiving: "",
        lookingforCity: "",
        lookingforQualification: "Medicine",
        lookingforDegree: "M.S Medicine",
        lookingforWorkingSector: "Defense",
        lookingforWorkingAsRole: "Army",
    },
};

export default function page() {
    useEffect(() => {
        const fetchProfileData = async () => {
            const response = await axios.get("/api/users/myprofile/");
            if (response.status === 200) {
                console.log(response.data.user);
                setUser(response.data.user);
            }
        };

        fetchProfileData();
    }, []);
    const [user, setUser] = useState(defaultForm);

    return (
        <>
            <div className="flex justify-center px-0 lg:px-11">
                <div className="w-[90%]  md:w-[70%] lg:w-[60%] p-2 lg:p-4  mb-16 mt-3 bg-white flex flex-col gap-y-2 md:gap-y-3 ">
                    <div className="text-xl md:text-2xl lg:text-4xl p-2 md:p-3 text-gray-700 bg-violet-50 font-semibold text-center ">
                        {user.profileData?.FirstName} {user.profileData?.LastName}
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-3 border-b-2 border-violet-200 pb-2">
                        <Image
                            src={img}
                            alt="myprofile"
                            className="w-40 lg:w-48"
                        />

                        <div className="flex flex-col w-full gap-5">
                            <div className="flex flex-col md:grid grid-cols-2 w-full text-sm md:text-base py-2 gap-2 md:gap-3  ">
                                <div className="flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300">
                                    <MyProfileData
                                        title="Age / Height"
                                        data={user.profileData?.DateOfBirth}
                                    />
                                    <MyProfileData
                                        title="Material Status"
                                        data={user.profileData?.MaritalStatus}
                                    />
                                    <MyProfileData
                                        title="Created By"
                                        data={user.profileData?.CreatedFor}
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <MyProfileData
                                        title="Religion"
                                        data={user.profileData?.Religion}
                                    />
                                    <MyProfileData
                                        title="Location"
                                        data={user.profileData?.LivingCity}
                                    />
                                    <MyProfileData
                                        title="Mother Tongue"
                                        data={user.profileData?.motherTongue}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-start">
                                <Link
                                    href="/divine-dous/editprofile"
                                    className="px-10 py-2 rounded-lg bg-blue-600 text-sm md:text-base font-semibold text-white flex gap-5 flex items-center"
                                >
                                    Edit <FaEdit size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <h1 className="bg-violet-400 text-sm md:text-base  text-white w-fit px-6 py-1">
                        About MySelf
                    </h1>

                    <div>
                        <h1 className="text-red-600 text-base font-bold md:text-xl py-1 border-b-2 ">
                            Personality, Family Details, Career, Partner
                            Expectations etc.
                        </h1>
                        <p className="text-sm text-gray-600 px-2 py-2">
                            {user.profileData?.aboutYourself}
                        </p>
                    </div>

                    <div>
                        <h1 className="text-red-600 text-base font-bold md:text-xl py-1 border-b-2 ">
                            Basics & Lifestyle
                        </h1>
                        <div className="flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2">
                            <div className="flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300">
                                <MyProfileData
                                    title="Date of Brith"
                                    data={user.profileData?.DateOfBirth}
                                />
                                <MyProfileData
                                    title="Material Status"
                                    data={user.profileData?.MaritalStatus}
                                />
                                <MyProfileData
                                    title="Height"
                                    data={user.profileData?.Height}
                                />
                                <MyProfileData
                                    title="Grew up in"
                                    data={user.profileData?.LivingCountry}
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <MyProfileData
                                    title="Diet"
                                    data={user.profileData?.Diet}
                                />
                                <MyProfileData
                                    title="Health Information"
                                    data={user.profileData?.HealthInformation}
                                />
                                <MyProfileData
                                    title="Disability"
                                    data={user.profileData?.Disability}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-red-600 text-base font-bold md:text-xl py-1 border-b-2 ">
                            Family details
                        </h1>
                        <div className="flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2">
                            <div className="flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300">
                                <MyProfileData
                                    title="Father Status"
                                    data={user.profileData?.FatherStatus}
                                />
                                <MyProfileData
                                    title="Mother Status"
                                    data={user.profileData?.MotherStatus}
                                />
                                <MyProfileData
                                    title="No of Siblings"
                                    data={user.profileData?.NoofSiblings}
                                />
                                <MyProfileData
                                    title="Family Type"
                                    data={user.profileData?.FamilyType}
                                />
                                <MyProfileData
                                    title="Affluence Level"
                                    data={user.profileData?.AffluenceLevel}
                                />
                                <MyProfileData
                                    title="Religion"
                                    data={user.profileData?.Religion}
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <MyProfileData
                                    title="Native City"
                                    data={user.profileData?.NativeCity}
                                />
                                <MyProfileData
                                    title="Mother Tongue"
                                    data={user.profileData?.motherTongue}
                                />
                                <MyProfileData
                                    title="Denominations"
                                    data={user.profileData?.denominations}
                                />
                                <MyProfileData
                                    title="Ethnic Origin"
                                    data={user.profileData?.EthnicOrigin}
                                />
                                <MyProfileData
                                    title="Family Tradition"
                                    data={user.profileData?.FamilyTradition}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-red-600 text-base font-bold md:text-xl py-1 border-b-2 ">
                            Education & Career & Location
                        </h1>
                        <div className="flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2">
                            <div className="flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300">
                                <div className="grid grid-cols-2 ">
                                    <p className="text-gray-500">Education</p>
                                    <span>
                                        : {user.profileData?.Qualification} -{" "}
                                        {user.profileData?.Degree}
                                    </span>
                                </div>
                                <MyProfileData
                                    title="Working Sector"
                                    data={user.profileData?.WorkingSector}
                                />
                                <MyProfileData
                                    title="Working As Role"
                                    data={user.profileData?.WorkingAsRole}
                                />
                                <MyProfileData
                                    title="Profession area"
                                    data={user.profileData?.WorkingWith}
                                />
                                <MyProfileData
                                    title="Annual Income"
                                    data={user.profileData?.Salary}
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <MyProfileData
                                    title="Living Country"
                                    data={user.profileData?.LivingCountry}
                                />
                                <MyProfileData
                                    title="Living State"
                                    data={user.profileData?.LivingState}
                                />
                                <MyProfileData
                                    title="Living City"
                                    data={user.profileData?.LivingCity}
                                />
                                <MyProfileData
                                    title="Residency Statusy"
                                    data={user.profileData?.ResidencyStatus}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-red-600 text-base font-bold md:text-xl py-1 border-b-2 ">
                            Partner Preference
                        </h1>
                        <div className="flex flex-col md:grid grid-cols-2 w-full text-sm md:text-sm py-2 gap-3  gap-y-2 px-2">
                            <div className="flex flex-col gap-y-2 border-r-0 md:border-r-2 border-gray-300">
                                <div className="grid grid-cols-2 ">
                                    <p className="text-gray-500">Age</p>
                                    <span>
                                        : {user.profileData?.lookingforMinAge} -{" "}
                                        {user.profileData?.lookingforMaxAge}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 ">
                                    <p className="text-gray-500">Height</p>
                                    <span>
                                        : {user.profileData?.lookingforMinHeight}-{" "}
                                        {user.profileData?.lookingforMaxHeight}
                                    </span>
                                </div>
                                <MyProfileData
                                    title="Profile Created by"
                                    data={
                                        user.profileData?.lookingforProfileCreatedby
                                    }
                                />
                                <MyProfileData
                                    title="Diet"
                                    data={user.profileData?.lookingforDiet}
                                />
                                <MyProfileData
                                    title="Denomination"
                                    data={user.profileData?.lookingforDenomination}
                                />
                                <MyProfileData
                                    title="Ethnic Origin"
                                    data={user.profileData?.lookingforEthnicOrigin}
                                />
                                <MyProfileData
                                    title="Marital Status"
                                    data={user.profileData?.lookingforMaritalStatus}
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <MyProfileData
                                    title="Living Country"
                                    data={user.profileData?.lookingforCountryLiving}
                                />
                                <MyProfileData
                                    title="Living State"
                                    data={user.profileData?.lookingforStateLiving}
                                />
                                <MyProfileData
                                    title="Living City"
                                    data={user.profileData?.lookingforCity}
                                />
                                <MyProfileData
                                    title="Residency Statusy"
                                    data={user.profileData?.ResidencyStatus}
                                />
                                <MyProfileData
                                    title="Qualification"
                                    data={user.profileData?.lookingforQualification}
                                />
                                <MyProfileData
                                    title="Degree"
                                    data={user.profileData?.lookingforDegree}
                                />
                                <MyProfileData
                                    title="Working Sector"
                                    data={user.profileData?.lookingforWorkingSector}
                                />
                                <MyProfileData
                                    title="Working As Role"
                                    data={user.profileData?.lookingforWorkingAsRole}
                                />
                                <MyProfileData
                                    title="Annual Income"
                                    data={user.profileData?.lookingforAnnualIncome}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

// 139

export function MyProfileData({ title, data }) {
    return (
        <>
            <div className="grid grid-cols-2 ">
                <p className="text-gray-500">{title}</p>
                <span>: {data}</span>
            </div>
        </>
    );
}
