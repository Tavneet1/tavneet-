"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import {SelectInput, Radioinput} from '@/InputComponents/SearchInput'
import formdata from '@/formdata'
import { RiUserSearchFill } from "react-icons/ri";
import Footer from '@/HomePageComponents/Footer';


export default function page() {


  const [searchUser, setsearchUser] = useState({
   MaxAge: '',   MinAge: '',   MaxHeight: '',   MinHeight: '',  
   Status:[],   denominations: [], 	MotherTongue:[], 
   CountryLivingIn: [], CountryGrewUpIn: [], Qualification:[],  EducationArea:[], ProfessionArea:[], AnnualIncome:[]
});
const [mulyipleUsers, setmulyipleUsers] = useState([]);



const generateOptions = (data) => {
  return data.map(item => ({
    value: item,
    label: item
  }));
};

const StatusOptions = generateOptions(formdata.Status);
const DenominationOptions = generateOptions(formdata.denominations);

const SearchInputHandler = (selectedOptions, field) => {
  setsearchUser((currentData) => ({
    ...currentData,
    [field]: selectedOptions ? selectedOptions.map(option => option.value) : [],
  }));
};

const onSearch = async (e) => {
    e.preventDefault();
    setmulyipleUsers(prevUsers => [...prevUsers, searchUser]);
    setsearchUser({
        MaxAge: '', MinAge: '',
    });
};


  const ageOptions = [];
  const heightOptions = [];
  for (let age = 18; age <= 55; age++) {
      ageOptions.push(age);
  }
  for (let feet = 4; feet <= 9; feet++) {
      for (let inches = 0; inches <= 12; inches++) {
          heightOptions.push(`${feet}ft ${inches}in`);
      }
  }


  const CountryLivingIn = [{value:'Any',label:'Doesn’t Matter'},{value:'US',label:'US'},{value:'UK',label:'UK'},{value:'Canada',label:'Canada'},{value:'Australia',label:'Australia'},{value:'Europe',label:'Europe'},{value:'India',label:'India'},{value:'Pakistan',label:'Pakistan'},{value:'Bangladesh',label:'Bangladesh'},{value:'Malaysia',label:'Malaysia'},{value:'Singapore',label:'Singapore'},{value:'MiddleEast',label:'Middle East'}];

  const CountryGrewUpIn = [{value:'Any',label:'Doesn’t Matter'},{value:'US',label:'US'},{value:'UK',label:'UK'},{value:'Canada',label:'Canada'},{value:'Australia',label:'Australia'},{value:'Europe',label:'Europe'},{value:'India',label:'India'},{value:'Pakistan',label:'Pakistan'},{value:'Bangladesh',label:'Bangladesh'},{value:'Malaysia',label:'Malaysia'},{value:'Singapore',label:'Singapore'},{value:'MiddleEast',label:'Middle East'}];

  const Qualification = [{value:'Any',label:'Doesn’t Matter'},{value:'Doctorate',label:'Doctorate'},{value:'Master',label:'Master'},{value:'Bachelor',label:'Bachelor / Undergraduate'},{value:'Associate',label:'Associate / Diploma'},{value:'HighSchool',label:'High School and below'}];

  const EducationArea = [{value:'Any',label:'Doesn’t Matter'},{value:'Engineering',label:'Engineering'},{value:'ArtsDesign',label:'Arts / Design'},{value:'FinanceCommerce',label:'Finance / Commerce'},{value:'ComputersIT',label:'Computers / IT'},{value:'Science',label:'Science'},{value:'Medicine',label:'Medicine'},{value:'Management',label:'Management'},{value:'Law',label:'Law'},{value:'OthersEdu',label:'Others'}];

  const ProfessionArea = [{value:'Any',label:'Doesn’t Matter'},{value:'AccountingBankingFinance',label:'Accounting, Banking & Finance'},{value:'AdministrationHR',label:'Administration & HR'},{value:'AdvertisingMediaEntertainment',label:'Advertising, Media & Entertainment'},{value:'Agriculture',label:'Agriculture'},{value:'AirlineAviation',label:'Airline & Aviation'},{value:'ArchitectureDesign',label:'Architecture & Design'},{value:'ArtistsAnimatorsWeb',label:'Artists, Animators & Web Designers'},{value:'BPOKPOCustomerSupport',label:'BPO, KPO, & Customer Support'},{value:'BeautyFashionJewelry',label:'Beauty, Fashion & Jewelry Designers'},{value:'CivilServicesLawEnforcement',label:'Civil Services / Law Enforcement'},{value:'CorporateProfessionals',label:'Corporate Professionals'},{value:'Defense',label:'Defense'},{value:'EducationTraining',label:'Education & Training'},{value:'Engineering',label:'Engineering'},{value:'HotelHospitality',label:'Hotel & Hospitality'},{value:'ITSoftwareEngineering',label:'IT & Software Engineering'},{value:'Legal',label:'Legal'},{value:'MedicalHealthcare',label:'Medical & Healthcare'},{value:'MerchantNavy',label:'Merchant Navy'},{value:'NonWorking',label:'Non-Working'},{value:'OthersPro',label:'Others'},{value:'SalesMarketing',label:'Sales & Marketing'},{value:'Science',label:'Science'}];

  const AnnualIncome = [{value:'Any',label:'Doesn’t Matter'},{value:'SpecifyRange',label:'Specify an Income Range'}];




  return (
    <>
      <div className='px-0 lg:px-11 lg:px-36 flex justify-center py-12'>
        <div className='w-[90%]  md:w-[70%] lg:w-[60%] md:py-10 py-6  pr-2 md:pr-12 lg:pr-20 pl-3 md:pl-6 lg:pl-10 bg-white flex flex-col gap-y-6 lg:gap-y-7  text-slate-600  text-sm md:text-base  '>
          <div className='grid grid-cols-4   items-center '>
            <label className=' text-sm md:text-base peer-focus:text-black'>Age</label>
            <div className='col-span-3 flex gap-1 md:gap-3  items-center text-sm md:text-base'>
              <SelectInput
                name="MinAge"
                options={ageOptions}
                SearchinputHandler={SearchInputHandler}
                label="Min-Age"
              />
              to
              <SelectInput
                name="MaxAge"
                options={ageOptions}
                SearchinputHandler={SearchInputHandler}
                label="Max-Age"
              />
            </div>
          </div>
          <div className='grid grid-cols-4 items-center'>
            <label className=' peer-focus:text-black'>Height</label>
            <div className='col-span-3 flex gap-1 md:gap-3  items-center'>
              <SelectInput
                name="MinHeight"
                options={heightOptions}
                SearchinputHandler={SearchInputHandler}
                label="MinHeight"
              />
              to
              <SelectInput
                name="MaxHeight"
                options={heightOptions}
                SearchinputHandler={SearchInputHandler}
                label="MaxHeight"
              />
            </div>
          </div>


<div className='flex flex-col  gap-2 md:grid grid-cols-4 justify-center md:items-center'>
  <label className='peer-focus:text-black'>Marital Status</label>
  <div className='col-span-3 flex gap-1 md:gap-3 items-center'>
    <Select
      isMulti
      options={StatusOptions}
      value={searchUser.Status.map(status => ({ value: status, label: status }))}
      onChange={(selectedOptions) => SearchInputHandler(selectedOptions, 'Status')}
      className='w-full'
    />
  </div>
</div>

<div className='flex flex-col  gap-2 md:grid grid-cols-4 justify-center md:items-center'>
  <label className='peer-focus:text-black'>Denominations</label>
  <div className='col-span-3 flex gap-1 md:gap-3 items-center'>
    <Select
    name='denominations'
      isMulti
      options={DenominationOptions}
      value={searchUser.denominations.map(denomination => ({ value: denomination, label: denomination }))}
      onChange={(selectedOptions) => SearchInputHandler(selectedOptions, 'denominations')}
      className='w-full'
    />
  </div>
</div>


<div className='flex flex-col  gap-2 md:grid grid-cols-4 justify-center md:items-center'>
  <label className='peer-focus:text-black'>Country Living In</label>
  <div className='col-span-3 flex gap-1 md:gap-3 items-center'>
  <Select
  name='CountryLivingIn'
  isMulti
  options={CountryLivingIn}
  value={CountryLivingIn.filter(option => searchUser.CountryLivingIn.includes(option.value))}
  onChange={(selectedOptions) => SearchInputHandler(selectedOptions, 'CountryLivingIn')}
  className='w-full'
/>
  </div>
</div>

<div className='flex flex-col  gap-2 md:grid grid-cols-4 justify-center md:items-center'>
  <label className='peer-focus:text-black'>Country GrewUp In</label>
  <div className='col-span-3 flex gap-1 md:gap-3 items-center'>
  <Select
  name='CountryGrewUpIn'
  isMulti
  options={CountryGrewUpIn}
  value={CountryGrewUpIn.filter(option => searchUser.CountryGrewUpIn.includes(option.value))}
  onChange={(selectedOptions) => SearchInputHandler(selectedOptions, 'CountryGrewUpIn')}
  className='w-full'
/>
  </div>
</div>

<div className='flex flex-col  gap-2 md:grid grid-cols-4 justify-center md:items-center'>
  <label className='peer-focus:text-black'>Qualification</label>
  <div className='col-span-3 flex gap-1 md:gap-3 items-center'>
  <Select
  name='Qualification'
  isMulti
  options={Qualification}
  value={Qualification.filter(option => searchUser.Qualification.includes(option.value))}
  onChange={(selectedOptions) => SearchInputHandler(selectedOptions, 'Qualification')}
  className='w-full'
/>
  </div>
</div>


<div className='flex flex-col  gap-2 md:grid grid-cols-4 justify-center md:items-center'>
  <label className='peer-focus:text-black'>Education Area</label>
  <div className='col-span-3 flex gap-1 md:gap-3 items-center'>
  <Select
  name='EducationArea'
  isMulti
  options={EducationArea}
  value={EducationArea.filter(option => searchUser.EducationArea.includes(option.value))}
  onChange={(selectedOptions) => SearchInputHandler(selectedOptions, 'EducationArea')}
  className='w-full'
/>
  </div>
</div>
          <div className='flex flex-col  gap-2 md:grid grid-cols-4 justify-center md:items-center'>
            <label className='peer-focus:text-black'>Profession Area</label>
            <div className='col-span-3 flex gap-1 md:gap-3 items-center'>
              <Select
                name='ProfessionArea'
                isMulti
                options={ProfessionArea}
                value={ProfessionArea.filter(option => searchUser.ProfessionArea.includes(option.value))}
                onChange={(selectedOptions) => SearchInputHandler(selectedOptions, 'ProfessionArea')}
                className='w-full'
              />
            </div>
          </div>

          <div className=' flex flex-row justify-center ga-5 md:gap-7  items-center'>
            <button className='px-5 rounded-lg text-white py-3 bg-red-500 font-semibold text-sm md:text-xl gap-1 md:gap-3 flex items-center'>Search <RiUserSearchFill /></button>
            <button className='text-blue-900 text-sm md:text-lg font-semibold hover:underline underline-offset-4 px-5'>Re-set</button>
          </div>
                            
        </div>
      </div>
      <Footer/>
    </>
  )
}
