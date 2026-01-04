"use client";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import img from "../../../../public/Assets/logo.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import notify from "@/helpers/notify";

// TODO: fix the styling
export default function page() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/users/register/", formData);
            if (response.status !== 200) {
                throw new Error(response.data.error || "User already exists");
            }

            const { email } = formData;
            router.push(
                `/complete-profile/?email=${encodeURIComponent(email)}`
            );
        } catch (error) {
            const errorMessage =
                error.response && error.response.data
                    ? error.response.data.error
                    : error.message;
            console.error("signup error", errorMessage);
            notify(errorMessage, "error");
        }
    };

    return (
        <>
            <div className="fixed  bg-red-400 h-full w-full flex justify-center items-center z-50">
                <div className="w-[90%] md:w-[50%] lg:w-[36%] xl:w-[28%] h-fit  relative  bg-white rounded-lg  mt-10 ">
                    <div className="px-5 md:px-9 py-7 z-10">
                        <div className="flex justify-center mb-2">
                            <Image
                                src={img}
                                width={120}
                                height={100}
                                alt="DivinsDuos logo"
                                style={{ width: "8rem", height: "4rem" }}
                            />
                        </div>
                        <h1 className="text-base md:text-lg text-center py-3 text-gray-700">
                            Hello, Please sign up
                        </h1>
                        <form
                            className="flex flex-col gap-y-4 my-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm text-gray-600"
                                >
                                    Email ID
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="user@email.com"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor="password"
                                    className="text-sm text-gray-600"
                                >
                                    Password
                                </label>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    id="password"
                                    minLength={8}
                                    value={formData.password}
                                    onChange={handleFormChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <button className="bg-[#FF9A8A] text-white font-semibold py-2 rounded-lg w-full">
                                Sign Up
                            </button>
                        </form>
                        <div className="text-sm text-center text-gray-500 flex flex-row justify-center gap-2">
                            <span>Already have an account? </span>
                            <Link href="/login">
                                <span className="font-semibold flex items-center hover:underline gap-2">
                                    Login <FaArrowRightLong size={12} />
                                </span>{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
