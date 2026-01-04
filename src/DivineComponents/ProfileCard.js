"use client"
import React, { useState, useEffect} from 'react';
import Image from 'next/image'
import FakeMatcheData from '@/FakeMatcheData';

import { FaCheck } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { RiUserAddLine } from "react-icons/ri";
import { GiBodyHeight } from "react-icons/gi";
import { IoIosBook } from "react-icons/io";
import { GiGlobeRing } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { SlUserFemale } from "react-icons/sl";
import { MdApartment } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiTwotoneGold } from "react-icons/ai";
import { BsDropbox } from "react-icons/bs";
import { MdTripOrigin } from "react-icons/md";
import { BiHandicap } from "react-icons/bi";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import img from '../../public/NutralProfileImg.webp'


export default function ProfileCard() {

  const [hideProfile, setHideProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) { // Change 100 to the desired scroll position where you want the profile to start hiding
        setHideProfile(true);
      } else {
        setHideProfile(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeTab, setActiveTab] = useState('About');
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

 

  return (
    <>
      <div className='relative h-[37rem] md:h-[41rem] lg:h-[37rem] w-[95%] md:w-[60%] lg:w-[37%] rounded-2xl bg-white text-white'>
        <div className='absolute flex flex-col bottom-0 bg-gradient-to-t from-zinc-900 to-transparent w-full rounded-b-xl px-4 pt-6 py-2 gap-y-5' >
          <div className='flex flex-col gap-y-2 ' >
            <div className='flex items-end'>
              <h1 className='text-2xl md:text-3xl font-medium '>{FakeMatcheData.FirstName}</h1> <span className='text-base md:text-lg font-normal  flex items-center'><LuDot />31 yrs<LuDot /> {FakeMatcheData.Height}</span>
            </div>
            <p className='text-base md:text-lg font-normal  flex items-center '>{FakeMatcheData.LivingCity} <LuDot /> {FakeMatcheData.WorkingAsRole}</p>
          </div>
          <div className='flex flex-row justify-around '>
            <div className='flex flex-col justify-center items-center text-xs md:text-sm gap-1'>  <span className='bg-gradient-to-t from-teal-500 to-cyan-500 p-3 rounded-full'><IoClose className='text-3xl'/></span> Skip</div> 
            <div className='flex flex-col justify-center items-center text-xs md:text-sm gap-1'>  <span className='bg-gradient-to-b from-violet-500 to-indigo-500 p-4 rounded-full'><FaCheck className='text-2xl'/></span> Connect   </div>
            <div className='flex flex-col justify-center items-center text-xs md:text-sm gap-1'>  <span className='bg-gradient-to-t from-red-600 to-pink-500 p-3 rounded-full'><FcLikePlaceholder color='white' className='text-3xl '/></span> Like  </div>
          </div>
        </div>

        <div className='Card-Scroll rounded-2xl overflow-x-scroll flex h-full flex-col scrollbar-none rounded-2xl'>
        <Image src={img} alt="profile-img " className='h-[37rem] md:h-[41rem] lg:h-[37rem]' />
        <ul className="flex flex-wrap -mb-px text-sm text-black border-b font-medium text-center" id="default-tab" role="tablist">
            <li className="" role="presentation">
              <button
                className={`inline-block py-3 px-4 rounded-t-lg ${activeTab === 'About' ? 'border-blue-500  border-b-2' : ''}`}
                id="About"
                onClick={() => handleTabClick('About')}
                role="tab"
                aria-controls="About"
                aria-selected={activeTab === 'About'}
              >
                About
              </button>
            </li>

            <li className="" role="presentation">
              <button
                className={`inline-block py-3 px-4  rounded-t-lg ${activeTab === 'Family' ? 'border-b-2 border-blue-500' : ''}`}
                id="Family"
                onClick={() => handleTabClick('Family')}
                role="tab"
                aria-controls="Family"
                aria-selected={activeTab === 'Family'}
              >
                Family
              </button>
            </li>
            <li  role="presentation">
              <button
                className={`inline-block py-3 px-4  rounded-t-lg ${activeTab === 'Preferences' ? 'border-b-2 border-blue-500' : ''}`}
                id="Preferences"
                onClick={() => handleTabClick('Preferences')}
                role="tab"
                aria-controls="Preferences"
                aria-selected={activeTab === 'Preferences'}>
                Partner Preferences
              </button>
            </li>
          </ul>

          <div id="default-tab-content" className='text-black'>
            <div className={`p-4 lg:p-6 gap-y-4 flex flex-col mb-60 ${activeTab !== 'About' ? 'hidden' : ''}`} id="About" role="tabpanel" aria-labelledby="About">
              <h1 className='text-xl font-semibold text-gray-600'>About Her</h1>

              <div className='flex flex-col gap-y-5 md:gap-y-7'>
                <ProfileInfo
                  icon={<AiOutlineUser />}
                  title='Name'
                  text={FakeMatcheData.FirstName}
                />
                <ProfileInfo
                  icon={<RiUserAddLine />}
                  title='Profile Created by'
                  text={FakeMatcheData.CreatedFor}
                />
                <ProfileInfo
                  icon={<GiBodyHeight />}
                  title='Height'
                  text={FakeMatcheData.Height}
                />
                 <ProfileInfo
                  icon={<FaRegCalendarAlt/>}
                  title='DateOfBirth'
                  text={FakeMatcheData.DateOfBirth}
                />
                <ProfileInfo
                  icon={<GiGlobeRing />}
                  title='MaritalS tatus'
                  text={FakeMatcheData.MaritalStatus}
                />
                <ProfileInfo
                  icon={< BiHandicap />}
                  title='Disability'
                  text={FakeMatcheData.Disability}
                />
                <ProfileInfo
                  icon={<MdOutlineFoodBank/>}
                  title='Diet'
                  text={FakeMatcheData.Diet}
                />
                 <ProfileInfo
                  icon={< BiFoodMenu/>}
                  title='Health Information'
                  text={FakeMatcheData.HealthInformation}
                />
               <ProfileInfo
                  icon={<IoIosBook />}
                  title='Religion | Mother Toungue'
                  text={`${FakeMatcheData.Religion} | ${FakeMatcheData.motherTongue}`}
                />
                 <ProfileInfo
                  icon={<IoIosBook />}
                  title='Denominations'
                  text={FakeMatcheData.denominations} 
                />
                 <ProfileInfo
                  icon={< MdTripOrigin/>}
                  title='Ethnic Origin'
                  text={FakeMatcheData.EthnicOrigin} 
                />
                <ProfileInfo
                  icon={<IoLocationOutline/>}
                  title='Location'
                  text={`${FakeMatcheData.LivingCity}, ${FakeMatcheData.LivingState}, ${FakeMatcheData.LivingCountry}`}
                />
                 <ProfileInfo
                  icon={<MdOutlineMapsHomeWork />}
                  title='Residency Status'
                  text={FakeMatcheData.ResidencyStatus} 
                />
              </div>
            </div>

            <div className={`p-4 lg:p-6 gap-y-4 flex flex-col mb-60 ${activeTab !== 'Family' ? 'hidden' : ''}`} id="Family" role="tabpanel" aria-labelledby="Family">
            <h1 className='text-xl font-semibold text-gray-600'>Family Backround</h1>

            <div className='flex flex-col gap-y-5 md:gap-y-7'>
                <ProfileInfo
                  icon={<SlUser/>}
                  title='Father Status'
                  text={FakeMatcheData.FatherStatus}
                />
                 <ProfileInfo
                  icon={<SlUserFemale/>}
                  title='Mother Status'
                  text={FakeMatcheData.MotherStatus}
                />
                <ProfileInfo
                  icon={<AiTwotoneGold/>}
                  title='Family Type'
                  text={FakeMatcheData.FamilyType}
                />
               <ProfileInfo
                  icon={<BsDropbox/>}
                  title='Family Tradition'
                  text={FakeMatcheData.FamilyTradition}
                />
                <ProfileInfo
                  icon={<MdApartment/>}
                  title='Affluence Level'
                  text={FakeMatcheData.AffluenceLevel}
                /> 
                  <ProfileInfo
                  icon={<HiOutlineUserGroup/>}
                  title='No of Siblings'
                  text={FakeMatcheData.NoofSiblings}
                /> 
                 <ProfileInfo
                  icon={<IoLocationOutline/>}
                  title='Native City'
                  text={FakeMatcheData.NativeCity}
                />
              </div>
            </div>

            <div className={`p-4 lg:p-6 gap-y-4 flex flex-col mb-60 ${activeTab !== 'Preferences' ? 'hidden' : ''}`} id="Preferences" role="tabpanel" aria-labelledby="Preferences">
            <h1 className='text-xl font-semibold text-gray-600'>
Preferences</h1>
              
            </div>
          </div>
        </div>
      </div>


    </>
  )
}




 const ProfileInfo = ({icon, title, text})=> {
  return (
    <div className='flex gap-4 md:gap-6 '>
        <div className='flex-none pt-1 md:pt-2 text-red-400 text-xl md:text-2xl'>{icon}</div>
        <div className='grow flex-col gap-y-1'>
          <p className='text-sm md:text-base text-gray-400 font-normal'>{title}</p>
          <h1 className='text-base md:text-lg font-normal text-gray-700'>{text}</h1>
        </div>
      </div>
  )
}
