"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import notify from "@/helpers/notify";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import img from "../../../../public/Assets/logo.png";

// This page is to change password
export function ChangePass() {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const router = useRouter();
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [token, setToken] = useState("");
    const searchParams = useSearchParams();
    const urlToken = searchParams.get("token") || "";
    
    useEffect(() => {
        console.log("urlToken", urlToken);
        
        setToken(urlToken);
    }, [urlToken]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!token) {
                throw new Error("Token is missing");
            }
            formData["token"] = token;
            const response = await axios.post(
                "/api/users/change-pass/",
                formData
            );
            if (response.status !== 200) {
                throw new Error("Failed to change password");
            }
            notify("Password changed!", "success");
            router.push("/divine-dous/login");
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
            <Suspense fallback={<p>Loading...</p>}>
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
                                Reset Your Password
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
                                        Enter New Password
                                    </label>
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleFormChange}
                                        className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                        placeholder="Enter New Password"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <label
                                        htmlFor=""
                                        className="text-sm text-gray-600"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        required
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleFormChange}
                                        className="block w-full py-2 pr-10 text-sm leading-normal px-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
                                        placeholder="Confirm Your Password"
                                    />
                                </div>
                                <button className="bg-[#FF9A8A]  py-2 rounded-lg w-full">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    );
}

export default function page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ChangePass />
        </Suspense>
    );
}
