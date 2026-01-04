"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

import img from "../../../../public/Assets/logo.png";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
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
            if (!formData || !formData.email || !formData.password) {
                throw new Error("Email or password is missing");
            }
            formData.email = formData.email.toLowerCase();
            const response = await axios.post("/api/users/login/", formData);
            if (response.status === 200) {
                notify("Login successful!", "success");
                router.push("/divine-dous/myprofile");
            } else {
                const message = response.data.error;
                notify(message, "error");
                console.log("Something went wrong!");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                notify(error.response.data.error, "error");
            } else {
                notify(error.message, "error");
            }
        }
    };

    return (
        <>
            <div className="fixed  bg-red-400 h-full w-full flex justify-center items-center z-50">
                <div className="w-[90%] md:w-[50%] lg:w-[36%] xl:w-[28%] h-fit  relative  bg-white rounded-lg  mt-10 ">
                    <div className="absolute top-2 left-2 text-gray-600 cursor-pointer">
                        <IoMdArrowBack
                            size={20}
                            onClick={() => {
                                router.push("/");
                            }}
                        />
                    </div>
                    <div className="px-5 md:px-9 py-7 z-10">
                        <div className="flex justify-center mb-2">
                            <Image
                                src={img}
                                width={120}
                                height={100}
                                alt="DivinsDuos logo"
                                style={{ width: "8rem", height: "4rem" }}
                                priority
                            />
                        </div>
                        <h1 className="text-base md:text-lg text-center py-3 text-gray-700">
                            Welcome back! Please Login
                        </h1>
                        <form
                            className="flex flex-col gap-y-4 my-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor=""
                                    className="text-sm text-gray-600"
                                >
                                    Email ID
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="user@email.com"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label
                                    htmlFor=""
                                    className="text-sm text-gray-600"
                                >
                                    Password
                                </label>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleFormChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-row items-center gap-1">
                                    <input
                                        type="checkbox"
                                        name="vehicle1"
                                        className="text-xs "
                                    />
                                    <label className="text-xs text-gray-600">
                                        Remember me
                                    </label>
                                </div>
                                <Link href="/reset-password">
                                    {" "}
                                    <span className="text-xs font-semibold text-blue-600 hover:underline ">
                                        Forgot Password?
                                    </span>
                                </Link>
                            </div>
                            <button className="bg-[#FF9A8A]  py-2 rounded-lg w-full">
                                Login
                            </button>
                        </form>
                        <div className="text-sm text-center text-gray-500 flex flex-row justify-center gap-2">
                            <span>New to DivineDuos? </span>
                            <Link href="/sign-up">
                                <span className="font-semibold flex items-center hover:underline gap-2">
                                    Sign up Free <FaArrowRightLong size={12} />
                                </span>{" "}
                            </Link>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
