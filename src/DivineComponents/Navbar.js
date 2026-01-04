"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import img from "../../public/Assets/logo.png";
import fake from "../../public/NutralProfileImg.webp";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import axios from "axios";
import notify from "@/helpers/notify";
("../../src/app/divine-dous/premium");

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [profile, setProfile] = useState({ name: "", email: "" });
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const logout = async () => {
        try {
            const respone = await axios.get("/api/users/logout");
            // console.log(respone.data);
            if (respone.status === 200) {
                notify("Logged out!", "success");
                router.refresh();
            }
        } catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get("/api/users/myprofile/");
                // console.log("getProfile: ", response.data);
                if (response.status === 200) {
                    const data = response.data.user;
                    setProfile({
                        email: data.email,
                        name:
                            data.profileData.FirstName +
                            " " +
                            data.profileData.LastName,
                    });
                }
            } catch (error) {
                console.log("error:", error);
            }
        };
        getProfile();
    }, []);

    return (
        <div>
            <nav
                className={` px-3 py-2 lg:py-2 md:px-12 lg:px-36 bg-white w-full text-black flex justify-center md:justify-between items-center  transition duration-300 ease-in-out z-30 drop-shadow-lg shadow-md`}
            >
                <Link href="/">
                    <Image
                        src={img}
                        width={150}
                        height={150}
                        alt="DivinsDuos logo"
                        style={{ width: "6rem", height: "3rem" }}
                        className="hidden md:flex"
                    />
                </Link>
                <ul className="flex justify-between gap-3 md:gap-5   lg:gap-16 text-sm lg:text-base font-medium">
                    <li>
                        <Link
                            href="/divine-dous/myprofile"
                            className="cursor-pointer px-2 md:px-6  py-2 md:py-3 border-b-2 border-red-400"
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/divine-dous/matches"
                            className="cursor-pointer px-2 md:px-6  py-2 md:py-3 border-b-2 border-red-400"
                        >
                            MATCHES
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/divine-dous/search"
                            className="cursor-pointer px-2 md:px-6  py-2 md:py-3 border-b-2 border-red-400"
                        >
                            SEARCH
                        </Link>
                    </li>

                    <button
                        id="dropdownAvatarNameButton"
                        data-dropdown-toggle="dropdownAvatarName"
                        className="lg:hidden flex items-center flex-row gap-1 md:gap-2"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <Image
                            className="w-6 md:w-8 lg:w-9  rounded-md md:rounded-full"
                            src={fake}
                            alt="user photo"
                        />
                        <FaChevronDown className="text-xs md:text-sm" />
                    </button>
                </ul>

                <div className="hidden lg:flex flex-row items-center gap-7">
                    <Link
                        href="/divine-dous/premium"
                        className="hidden lg:flex flex-row items-center px-5 py-2 border-2 gap-3 text-base font-medium bg-red-400 text-white rounded-lg"
                    >
                        {" "}
                        <GiQueenCrown className="text-2xl " /> Premium
                    </Link>
                    <button
                        id="dropdownAvatarNameButton"
                        data-dropdown-toggle="dropdownAvatarName"
                        className="flex items-center flex-row gap-1 md:gap-2"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <Image
                            className="w-6 md:w-8 lg:w-9  rounded-full"
                            src={fake}
                            alt="user photo"
                        />
                        <FaChevronDown className="text-xs md:text-sm " />
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div
                    id="dropdownAvatarName"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow text-black absolute right-1 md:right-10 lg:right-32 text-sm md:text-base "
                >
                    <div className="px-3 md:px-4 flex flex-col gap-3 py-2  ">
                        <div className="font-medium text-base md:text-xl  ">
                            {profile.name ? profile.name : "Profile Name"}
                        </div>
                        <div className="">
                            {profile.email ? profile.email : "Profile Email"}
                        </div>
                        <Link
                            href=""
                            className="lg:hidden flex flex-row items-center gap-3  font-medium text-red-400"
                        >
                            Premium{" "}
                            <GiQueenCrown className="text-base md:text-xl" />
                        </Link>
                    </div>
                    <div className="py-2">
                        <span
                            className="block px-3 md:px-4 cursor-pointer"
                            onClick={logout}
                        >
                            Sign out
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
