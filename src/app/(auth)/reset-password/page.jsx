"use client";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import img from "../../../../public/Assets/logo.png";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import notify from "@/helpers/notify";

// This page is to send reset email link
export default function ResetPass() {
    const [email, setEmail] = useState("");
    const router = useRouter();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!email) {
                throw new Error("Email is missing");
            }
            const response = await axios.post("/api/users/reset-pass/", {
                email: email.toLowerCase(),
            });
            if (response.status === 200) {
                notify("Password reset email sent!", "success");
                router.push("/");
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
                            Enter your email to reset password
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
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button className="bg-[#FF9A8A]  py-2 rounded-lg w-full">
                                Reset Password
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
