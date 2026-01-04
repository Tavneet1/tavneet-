"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import img from "../../public/Assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useRouter } from "next/router";

export default function NavBar() {
    const [scrollY, setScrollY] = useState(0);
    const [loginShow, setLoginShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleLoginForm = () => {
        setLoginShow((prevState) => !prevState);
    };

    return (
        <>
            <nav
                className={`fixed  top-0 px-3 lg:px-11 py-1 w-full text-${
                    scrollY > 10 ? "black" : "white"
                }   flex justify-between items-center bg-${
                    scrollY > 10 ? "white" : "transparent"
                }  transition duration-300 ease-in-out z-30 drop-shadow-lg`}
            >
                <Link href="/">
                    <Image
                        src={img}
                        width={150}
                        height={150}
                        alt="DivinsDuos logo"
                        style={{ width: "8rem", height: "4rem" }}
                    />
                </Link>
                <div className="gap-5 flex items-center">
                    <Link href="/login">
                        <button
                            className="px-5 py-3 bg-[#FF9A8A] rounded-lg text-xs md:text-sm lg:text-sm text-black font-semibold"
                            // onClick={toggleLoginForm}
                        >
                            Login
                        </button>
                    </Link>
                    {/* <h1 className="hidden md:flex gap-1 cursor-pointer items-center ">
                        Help <FaAngleDown />
                    </h1> */}
                </div>
            </nav>
            {/* {loginShow && (
                <LoginForm
                    toggleLoginForm={toggleLoginForm}
                    loginShow={loginShow}
                />
            )} */}
        </>
    );
}
