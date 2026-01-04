import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import logoImg from "../../public/Assets/logo.png";
import Image from "next/image";
import googlestore from "../../public/Assets/google-store.png";
import appstore from "../../public/Assets/app-store.png";

export default function Footer() {
    const socialMediaPlatforms = [
        { icon: <IoLogoFacebook size={15} />, name: "Facebook", link: "#" },
        { icon: <FaTwitter size={15} />, name: "Twitter", link: "#" },
        { icon: <FaTelegramPlane size={15} />, name: "Telegram", link: "#" },
        { icon: <FaLinkedin size={15} />, name: "Linkedin", link: "#" },
        { icon: <FaYoutube size={15} />, name: "YouTube", link: "#" },
        { icon: <FaInstagram size={15} />, name: "Instagram", link: "#" },
    ];

    const company = [
        { name: "About Us", link: "#" },
        { name: "Success Stories", link: "#" },
        { name: "Divine Duos Blog", link: "#" },
        { name: "Awards & Recognition", link: "#" },
        { name: "Cov-Aid", link: "#" },
        { name: "Contact Us", link: "#" },
    ];

    const Privacy = [
        { name: "Terms of Use", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Be safe Online", link: "#" },
        { name: "Report Missue", link: "#" },
        { name: "Cookie Policy", link: "#" }, // Added item
        { name: "Data Protection", link: "#" },
    ];

    const NeedHelp = [
        { name: "Member Login", link: "/login" },
        { name: "Sign up", link: "#" },
        { name: "Partner Search", link: "#" },
        { name: "How to use DivineDous.com", link: "#" },
        { name: "Premium Memberships", link: "#" },
        { name: "Customer Support", link: "#" },
        { name: "Site Map", link: "#" },
    ];

    return (
        <>
            <footer className="w-[100%] h-[100%] px-2 lg:px-7 xl:px-12 border-slate-900 bg-white">
                <div className="px-3 md:px-5  lg:px-6 xl:px-[2rem]">
                    <div className="px-3 md:px-6 py-4  lg:px-6 xl:px-[2.6rem] flex md:hidden lg:hidden justify-between text-white  border-b-2 ">
                        <IoLogoFacebook size={25} color="black" />
                        <FaTwitter size={25} color="black" />
                        <FaTelegramPlane size={25} color="black" />
                        <FaLinkedin size={25} color="black" />
                        <FaYoutube size={25} color="black" />
                        <FaInstagram size={25} color="black" />
                    </div>
                </div>

                <div className="px-3 md:px-5 lg:px-6 xl:px-[2rem]">
                    <div className="px-3 lg:px-6 xl:px-[2.8rem]  md:flex lg:flex flex-warp flex-row justify-between pt-9  lg:pb-6 ">
                        <div className="w-full md:w-[30%] lg:w-[24%] mb-9 md:mb-0 lg:mb-0">
                            <Image
                                src={logoImg}
                                alt="DivineDuos"
                                className="w-[38%] w-[50%]"
                                width={150}
                                height={150}
                                style={{ width: "8rem", height: "4rem" }}
                            />
                            <p className="text-[#fff] pr-5 py-5 text-sm font-normal text-black">
                                30th Floor, Sunshine Tower, Senapati Bapat Marg,
                                Dadar (W), Mumbai, Maharashtra 400013
                            </p>
                            <Image
                                src={googlestore}
                                alt="google store"
                                className="mb-3"
                                width={110}
                                height={110}
                                style={{ width: "7rem", height: "2.3rem" }}
                            />
                            <Image
                                src={appstore}
                                alt="app store"
                                width={110}
                                height={110}
                                style={{ width: "7rem", height: "2.2rem" }}
                            />

                            {/* <Image src="https://upstox.com/app/uploads/2022/08/download-appStore.png" alt="" className='w-[38%]  md:w-[50%]'  width={100} height={100}/> */}
                        </div>

                        <div className="mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0">
                            <p className=" pb-2 mb-4 font-semibold text-base text-center border-b-2 ">
                                Company
                            </p>

                            <ul className="text-[#fff]  text-sm font-normal text-black">
                                {company.map((item, index) => (
                                    <li key={index} className="mb-2 ">
                                        <Link href={item.link}>
                                            {" "}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0">
                            <p className=" pb-2 mb-4 font-semibold text-base text-center border-b-2">
                                Need Help?
                            </p>

                            <ul className="text-[#fff]  text-sm font-normal text-black">
                                {NeedHelp.map((item, index) => (
                                    <li key={index} className="mb-2 ">
                                        <Link href={item.link}>
                                            {" "}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0">
                            <p className=" pb-2 mb-4 font-semibold text-base text-center border-b-2 px-12">
                                Privacy
                            </p>
                            <ul className="text-[#fff]  text-sm font-normal text-black">
                                {Privacy.map((item, index) => (
                                    <li key={index} className="mb-2 ">
                                        <Link href={item.link}>
                                            {" "}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0 hidden md:block">
                            <p className="pb-2 mb-4 font-semibold text-base text-center border-b-2 px-0 md:px-0 lg:px-0 xl:px-10">
                                Social Media
                            </p>

                            <ul className="text-sm font-normal text-black">
                                {socialMediaPlatforms.map((platform, index) => (
                                    <li
                                        key={index}
                                        className="mb-2 flex gap-3 items-center content-center hover:scale-105  hover:text-red-400"
                                    >
                                        {platform.icon}
                                        <Link href={platform.link}>
                                            {" "}
                                            {platform.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-3 md:px-5   lg:px-6 xl:px-[2rem]  ">
                    <div className="px-3 py-6 lg:px-6 xl:px-[2.8rem] text-white flex justify-between flex-wrap font-medium text-[0.7rem] border-t-2 ">
                        <p className="mb-2 md:mb-0 text-center md:test-start text-black">
                            © 1996-2024 DivineDous.com, The World's Leading
                            Matchmaking Service™
                        </p>
                        <p className="text-center w-full md:w-fit text-black ">
                            Passionately created by{" "}
                            <Link href="" className="text-blue-900">
                                {" "}
                                People Group ➤
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
