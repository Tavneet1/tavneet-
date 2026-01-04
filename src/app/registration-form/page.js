"use client"
import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import formdata from '../../formdata'
import { page1Fields, page2Fields, page3Fields, page4Fields, page5Fields } from '../../validationMassage'
import {OptionsInput,Radioinput,Textinput} from '@/InputComponents/RegistrationInput'

export default function page() {

    const [registerUser, setRegisterUser] = useState({
        CreatedFor: '', Gender: '', FirstName: '', LastName: '', MaritalStatus: '', DateOfBirth: '',
        Height: '', Disability: '', HealthInformation: '', Diet: '', aboutYourself: '',
        ChurchName: '', ChurchAddress: '', IsBaptized: '', BaptismDate: '', FatherStatus: '',
        MotherStatus: '', FamilyType: '', FamilyTradition: '', AffluenceLevel: '', NoofSiblings: '',
        Religion: '', motherTongue: '', EthnicOrigin: '',  denominations: '',
        NativeCity: '', LivingCountry: '', LivingState: '', LivingCity: '', ResidencyStatus: '',
        Qualification: '', Degree: '', WorkingSector: '', WorkingAsRole: '', WorkingWith: '',
        Salary: '', GamilAddress:'',    passward:"",    ReEnterpassward:"",    number:"",

        lookingforMaxAge: '', lookingforMinAge: '', lookingforMaxHeight: '', lookingforMinHeight: '', lookingforMaritalStatus: '', lookingforEthnicOrigin: '', lookingforReligion: '', lookingforDenomination: '', lookingforAnnualIncome: "",
        lookingforProfileCreatedby: "", lookingforDiet: "", lookingforCountryLiving: '', lookingforStateLiving: '', lookingforCity: '', lookingforQualification: "", lookingforDegree: "", lookingforWorkingSector: '', lookingforWorkingAsRole: ''
    });
    const [mulyipleUsers, setmulyipleUsers] = useState([]);

    const inputHandler = (e) => {
        setRegisterUser((currentData) => {
            return { ...currentData, [e.target.name]: e.target.value };
        })
    };

    const onRegister = async (e) => {
        e.preventDefault();
        setmulyipleUsers(prevUsers => [...prevUsers, registerUser]);
        setRegisterUser({
            CreatedFor: '', Gender: '', FirstName: '', LastName: '', MaritalStatus: '', DateOfBirth: '',
            Height: '', Disability: '', HealthInformation: '', Diet: '', aboutYourself: '',
            ChurchName: '', ChurchAddress: '', IsBaptized: '', BaptismDate: '', FatherStatus: '',
            MotherStatus: '', FamilyType: '', FamilyTradition: '', AffluenceLevel: '', NoofSiblings: '',
            Religion: '', motherTongue: '', EthnicOrigin: '', denominations: '',
            NativeCity: '', LivingCountry: '', LivingState: '', LivingCity: '', ResidencyStatus: '',
            Qualification: '', Degree: '', WorkingSector: '', WorkingAsRole: '', WorkingWith: '',
            Salary: '', GamilAddress:'', passward:"",    ReEnterpassward:"",  number:"",

            lookingforMaxAge: '', lookingforMinAge: '', lookingforMaxHeight: '', lookingforMinHeight: '', lookingforMaritalStatus: '', lookingforEthnicOrigin: '', lookingforReligion: '', lookingforDenomination: '', lookingforAnnualIncome: "",  lookingforProfileCreatedby: "", lookingforDiet: "", lookingforCountryLiving: '', lookingforStateLiving: '', lookingforCity: '', lookingforQualification: "", lookingforDegree: "", lookingforWorkingSector: '', lookingforWorkingAsRole: ''
        });
    };

    const ageOptions = [];
    const heightOptions = [];
    for (let age = 18; age <= 55; age++) {
        ageOptions.push(age);
    }
    for (let feet = 4; feet <= 9; feet++) {
        for (let inches = 0; inches <= 12; inches++) {
            heightOptions.push(`${feet} ft ${inches} in`);
        }
    }

    const Salary = [];
    const rangeStep = 3;
    const maxSalary = 50; // Maximum salary in LPA
    for (let i = rangeStep; i <= maxSalary; i += rangeStep) {
        const lowerRange = i - rangeStep;
        const upperRange = i;
        const category = `${lowerRange} LPA to ${upperRange} LPA`;
        Salary.push(category);
    }
    Salary.push(`Above ${maxSalary} LPA`);

    const validateFields = () => {
        let isValid = true;
        let missingFields = [];
        switch (currentSlide) {
            case 1:
                Object.keys(page1Fields).forEach(field => {
                    if (!registerUser[field]) {
                        isValid = false;
                        missingFields.push(page1Fields[field]);
                    }
                });
                break;
            case 2:
                Object.keys(page2Fields).forEach(field => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            case 3:
                Object.keys(page3Fields).forEach(field => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            case 4:
                Object.keys(page4Fields).forEach(field => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            case 5:
                Object.keys(page5Fields).forEach(field => {
                    if (!registerUser[field]) {
                        isValid = false;
                    }
                });
                break;
            default:
                break;
        }
        return isValid;
    };

    const [currentSlide, setCurrentSlide] = useState(1);
    const nextSlide = ()=>{
        if (validateFields()) {
            setCurrentSlide(currentSlide + 1);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } 
        else {
            alert(`Please fill in all required fields`);
        }
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };


    return (
        <>        
            <div className='flex w-full mp-[4.5rem] justify-center bg-red-500 '>
                <div className='w-full  px-5  md:px-10 lg:px-20 py-12 my-[3rem] w-[85%] md:w-[75%] lg:w-[55%] bg-white  rounded-lg'>
                    <div className="flex flex-col " style={{ display: currentSlide === 1 ? 'flex' : 'none', gridGap: '2rem' }}>
                        {/* Profile Created by */}
                        <div className='flex flex-col  gap-3'>
                            <p className='text-[1.37rem] font-normal  text-[#41404d]'>Profile Created by </p>
                            <div className='flex gap-3 flex-wrap'>
                                {formdata.CreatedFor.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`CreatedFor-${option}`}
                                        name="CreatedFor"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={registerUser.CreatedFor === option}
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Gender */}
                        <div className='flex flex-col gap-3  '>
                            <p className='text-[1.37rem] font-normal  text-[#41404d]'>Gender</p>
                            <div className='flex gap-3 flex-wrap'>
                                {formdata.Gender.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`Gender-${option}`}
                                        name="Gender"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={registerUser.Gender === option}
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Your Name  */}
                        <div className='flex flex-col gap-5 '>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Your Name</p>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <Textinput
                                    id="FirstName"
                                    name="FirstName"
                                    value={registerUser.FirstName}
                                    onChange={inputHandler}
                                    placeholder="Type here First Name"
                                    label="FirstName"
                                />
                                <Textinput
                                    id="LastName"
                                    name="LastName"
                                    value={registerUser.LastName}
                                    onChange={inputHandler}
                                    placeholder="Type here Last Name"
                                    label="LastName"
                                />
                            </div>
                        </div>
                        {/* Marital Status */}
                        <div className='flex flex-col  gap-3 mb-8'>
                            <p className='text-[1.37rem] font-normal  text-[#41404d]'>Marital Status</p>
                            <div className='flex gap-3 flex-wrap'>
                                {
                                    formdata.Status.map((option, index) => (
                                        <Radioinput
                                            key={index}
                                            id={`MaritalStatus-${option}`}
                                            name="MaritalStatus"
                                            value={option}
                                            onChange={inputHandler}
                                            checked={registerUser.MaritalStatus === option}
                                            label={option}
                                        />
                                    ))
                                }
                                
                            </div>
                        </div>

                        {/* DateOfBirth, AND Height */}
                        <div className='flex flex-col md:flex-row mb-5 gap-6'>
                            <div className='relative w-full'>
                                <input
                                    type="date"
                                    id="DateOfBirth"
                                    name="DateOfBirth"
                                    value={registerUser.DateOfBirth}
                                    onChange={inputHandler}
                                    className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'
                                />

                                <label
                                    htmlFor="Date of Brith"
                                    className="pointer-events-none absolute left-3 top-0 text-xl mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.1rem] scale-[0.8]    motion-reduce:transition-none bg-white px-2 peer-focus:text-cyan-400 peer-focus:text-lg peer-focus:-translate-y-[0.9rem] "
                                >Date of Brith
                                </label>
                            </div>


                            <div className='relative w-full gap-3'>
                                <OptionsInput
                                    name="Height"
                                    options={heightOptions}
                                    inputHandler={inputHandler}
                                    label="Your-Height"
                                    className='w-full'
                                />
                            </div>

                        </div>

                        {/* Any Disability */}
                        <div className='flex flex-col  gap-3' >
                            <p className='text-[1.37rem] font-normal  text-[#41404d]'>Any Disability</p>
                            <div className='flex gap-3 flex-wrap'>
                                <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                    <input type="radio" id="Disability" name="Disability" value="None" onChange={inputHandler} checked={registerUser.Disability === "None"} className={`h-6 w-6`} />
                                    <label htmlFor="Disability" className='mx-2 text-sm font-medium text-gray-600'>None</label>
                                </div>
                                <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                    <input type="radio" id="Disability" name="Disability" value="Physical Disability" onChange={inputHandler} checked={registerUser.Disability === "Physical Disability"} className='h-6 w-6 ' />
                                    <label htmlFor="Disability" className='mx-2 text-sm font-medium text-gray-600'>Physical Disability</label>
                                </div>
                            </div>
                        </div>

                        {/* Health Information */}
                        <div className='flex flex-col  gap-3'>
                            <p className='text-[1.37rem] font-normal  text-[#41404d]'>	Health Information</p>
                            <div className='flex gap-3 flex-wrap'>
                                {formdata.healthOptions.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`HealthInformation-${option.value}`}
                                        name="HealthInformation"
                                        value={option.value}
                                        onChange={inputHandler}
                                        checked={registerUser.HealthInformation === option.value}
                                        label={option.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Diet */}
                        <div className='flex flex-col  gap-3'>
                            <p className='text-[1.37rem] font-normal  text-[#41404d]'>Diet</p>
                            <div className='flex gap-3 flex-wrap'>
                                {formdata.Diet.map((option, index) => (
                                    <Radioinput
                                        key={index}
                                        id={`Diet-${index}`} // You may want to make the ID unique per option
                                        name="Diet"
                                        value={option}
                                        onChange={inputHandler}
                                        checked={registerUser.Diet === option}
                                        label={option}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* More about your self, Partner and Family */}
                        <div className='flex flex-col  gap-3'>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>More about your self, Partner and Family</p>
                            <div className='relative'>
                                <textarea id="aboutYourself"
                                    name="aboutYourself"
                                    onChange={inputHandler}
                                    value={registerUser.aboutYourself}
                                    cols="30"
                                    rows="6"
                                    maxLength={500}
                                    className='w-full peer block w-full rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 overflow-hidden'
                                    placeholder="Tell us more about yourself, your partner, and your family...">
                                </textarea>
                                <div className="absolute bottom-1 right-0 flex items-center pr-3 pointer-events-none text-gray-400 text-sm">
                                    <span id="characterCount">500 characters remaining</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                                <button onClick={() => nextSlide(page1Fields)} className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500">Continue</button>
                            </div>
                    </div>

                    <div className="flex relative flex-col justify-center" style={{ display: currentSlide === 2 ? 'flex' : 'none', gridGap: '2rem' }}>

                    <button onClick={prevSlide} className="absolute -top-3 left-1 md:-left-3 text-[#41404d] ">< FaArrowLeftLong  className="text-base  md:text-2xl"/></button>

                        <div className='flex justify-center  text-[1.37rem] font-normal text-[#41404d]'><p>Family Backround</p></div>

                        <div className='grid grid-cols-1 md:grid-cols-2  gap-12'>
                            <OptionsInput
                                name="FatherStatus"
                                options={formdata.FatherStatus}
                                inputHandler={inputHandler}
                                label="Father's Status"
                            />
                            <OptionsInput
                                name="MotherStatus"
                                options={formdata.MotherStatus}
                                inputHandler={inputHandler}
                                label="Mother's Status"
                            />
                            <OptionsInput
                                name="FamilyType"
                                options={formdata.FamilyType}
                                inputHandler={inputHandler}
                                label="Family Type"
                            />
                            <OptionsInput
                                name="FamilyTradition"
                                options={formdata.FamilyTradition}
                                inputHandler={inputHandler}
                                label="Family Tradition"
                            />
                            <OptionsInput
                                name="AffluenceLevel"
                                options={formdata.AffluenceLevel}
                                inputHandler={inputHandler}
                                label="Affluence Level"
                            />
                            <OptionsInput
                                name="NoofSiblings"
                                options={formdata.NoofSiblings}
                                inputHandler={inputHandler}
                                label="No of Siblings"
                            />
                            <OptionsInput
                                name="motherTongue"
                                options={formdata.motherTongue}
                                inputHandler={inputHandler}
                                label="Your Mother Tongue"
                            />
                            <OptionsInput
                                name="Religion"
                                options={formdata.Religion}
                                inputHandler={inputHandler}
                                label="Religion"
                                defaultValue="Christian"
                            />
                            <OptionsInput
                                name="EthnicOrigin"
                                options={formdata.EthnicOrigin}
                                inputHandler={inputHandler}
                                label="Your Ethnic Origin"
                            />
                            <OptionsInput
                                name="denominations"
                                options={formdata.denominations}
                                inputHandler={inputHandler}
                                label="Your denominations"
                            />

                            {/* NativeCity */}
                            <Textinput
                                id="NativeCity"
                                name="NativeCity"
                                onChange={inputHandler}
                                placeholder="Eg.Delhi"
                                label="NativeCity"
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-12'>
                        <div className='flex flex-col gap-3 w-full' >
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Church Name</p>
                                <Textinput
                                    type="text"
                                    id="ChurchName"
                                    name="ChurchName"
                                    onChange={inputHandler}
                                    value={registerUser.ChurchName}
                                    placeholder='Church Name'
                                />
                            </div>
                            <div className='flex flex-col gap-3  w-full'>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Church Address</p>
                                <Textinput
                                    type="text"
                                    id="ChurchAddress"
                                    name="ChurchAddress"
                                    onChange={inputHandler}
                                    value={registerUser.ChurchAddress}
                                    placeholder='Church Address'
                                />
                            </div>
                             {/* Is baptized ? */}
                            <div className='flex flex-col gap-3 w-full' >
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Is baptized ?</p>
                                <div className='flex gap-3 flex-wrap'>
                                    <div className='border-2 px-1 py-1  rounded-full flex items-center'>
                                        <input type="radio" id="IsBaptized " name="IsBaptized" value="Yes" onChange={inputHandler} checked={registerUser.IsBaptized === "Yes"} className={`h-6 w-6`} />
                                        <label htmlFor="IsBaptized" className='mx-2 text-sm font-medium text-gray-600'>Yes</label>
                                    </div>
                                    <div className='border-2  px-1 py-1 rounded-full flex items-center'>
                                        <input type="radio" id="IsBaptized" name="IsBaptized" value="NO" onChange={inputHandler} checked={registerUser.IsBaptized === "NO"} className='h-6 w-6 ' />
                                        <label htmlFor="IsBaptized" className='mx-2 text-sm font-medium text-gray-600'>No</label>
                                    </div>
                                </div>
                            </div>
                            {/* Baptism Date */}
                            <div className='relative w-full flex-col gap-3'>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Baptism Date</p>
                                <input
                                    type="date"
                                    id="BaptismDate"
                                    name="BaptismDate"
                                    value={registerUser.BaptismDate}
                                    onChange={inputHandler}
                                    className='w-full peer   rounded border-2 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'
                                />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={nextSlide} className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500">Continue</button>
                        </div>
                    </div>

                    <div className="flex relative flex-col justify-center" style={{ display: currentSlide === 3 ? 'flex' : 'none', gridGap: '2rem' }}>
                    <button onClick={prevSlide} className="absolute -top-3 left-1 md:-left-3 text-[#41404d] ">< FaArrowLeftLong  className="text-base  md:text-2xl"/></button>
                        <div className='flex justify-center  text-center text-[1.37rem] font-normal text-[#41404d]'><p>	Location, Education & Career Backround</p></div>
                        {/* Living Location */}
                        <div className='flex flex-col gap-5 '>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Living Location</p>
                            <div className='flex flex-row gap-3'>
                                {formdata.LivingLoactionFields.map((field, index) => (
                                    <Textinput
                                        key={index}
                                        id="LivingLoactionFields"
                                        name={field.name}
                                        value={registerUser[field.name]}
                                        onChange={inputHandler}
                                        placeholder='Type Here..'
                                        label={field.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ResidencyStatus */}
                        <div className='relative  gap-3'>
                            <OptionsInput
                                name="ResidencyStatus"
                                options={formdata.ResidencyStatus}
                                inputHandler={inputHandler}
                                label="Residency Status"
                            />
                        </div>

                        {/* Highest Qualification */}
                        <div className='flex flex-col  gap-6'>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Highest Qualification</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap '>
                                <div className='relative'>
                                    <OptionsInput
                                        name="Qualification"
                                        options={formdata.Qualification}
                                        inputHandler={inputHandler}
                                        label="Field"
                                    />
                                </div>
                                {
                                    registerUser.Qualification && <div className='relative'>
                                        <OptionsInput
                                            name="Degree"
                                            options={formdata.Degree[registerUser.Qualification]}
                                            inputHandler={inputHandler}
                                            label="Degree"
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                        {/* Working As */}
                        <div className='flex flex-col  gap-6'>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Working As</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap '>
                                <OptionsInput
                                    name="WorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={inputHandler}
                                    label="WorkingSector"
                                />
                                {
                                    registerUser.WorkingSector && <div className='relative'>
                                        <OptionsInput
                                            name="WorkingAsRole"
                                            options={formdata.WorkingAsRole[registerUser.WorkingSector]}
                                            inputHandler={inputHandler}
                                            label="WorkingAsRole"
                                        />
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  gap-3'>
                            <OptionsInput
                                name="WorkingWith"
                                options={formdata.WorkingWith}
                                inputHandler={inputHandler}
                                label="WorkingWith"
                            />
                            <OptionsInput
                                name="Salary"
                                options={Salary}
                                inputHandler={inputHandler}
                                label="Annual Income"
                            />
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={nextSlide} className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500">Continue</button>
                        </div>
                    </div>

                    <div className="flex relative flex-col justify-center" style={{ display: currentSlide === 4 ? 'flex' : 'none', gridGap: '1.5rem' }}>
                        <p className='flex justify-center text-[1.37rem] text-center font-normal text-[#41404d]'>Partner Looking for (basic info)</p>
                        <button onClick={prevSlide} className="absolute -top-3 left-1 md:-left-3 text-[#41404d] ">< FaArrowLeftLong  className="text-base  md:text-2xl"/></button>

                        {/* looking for Marital Status */}
                        <div className='flex flex-col mb-9  gap-3 '>
                            <p className='text-[1.37rem] font-normal  text-[#41404d]'>Marital Status</p>
                            <div className='flex gap-3 flex-wrap'>
                                {
                                    formdata.Status.map((option, index) => (
                                        <Radioinput
                                            key={index}
                                            id={`lookingforMaritalStatus-${option}`}
                                            name="lookingforMaritalStatus"
                                            value={option}
                                            onChange={inputHandler}
                                            checked={registerUser.lookingforMaritalStatus === option}
                                            label={option}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2   gap-12'>

                            {/* looking for Min Age */}
                            <div className='flex flex-row gap-3 w-full items-center '>
                                <OptionsInput
                                    name="lookingforMinAge"
                                    options={ageOptions}
                                    inputHandler={inputHandler}
                                    label="Min-Age"
                                    className='w-full'
                                />
                                To
                                <OptionsInput
                                    name="lookingforMaxAge"
                                    options={ageOptions}
                                    inputHandler={inputHandler}
                                    label="Max-Age"
                                    className='w-full'
                                />
                            </div>

                            {/* looking for height */}
                            <div className='flex flex-row gap-3 w-full items-center'>
                                <OptionsInput
                                    name="lookingforMinHeight"
                                    options={heightOptions}
                                    inputHandler={inputHandler}
                                    label="Min-Height"
                                    className='w-full'
                                />
                                To
                                <OptionsInput
                                    name="lookingforMaxHeight"
                                    options={heightOptions}
                                    inputHandler={inputHandler}
                                    label="Max-Height"
                                    className='w-full'
                                />
                            </div>

                            {/* looking for Ethnic Origin */}
                            <OptionsInput
                                name="lookingforEthnicOrigin"
                                options={formdata.EthnicOrigin}
                                inputHandler={inputHandler}
                                label="Ethnic Origin"
                            />
                            {/* looking for Denomination */}
                            <OptionsInput
                                name="lookingforDenomination"
                                options={formdata.denominations}
                                inputHandler={inputHandler}
                                label="denominations"
                            />

                            {/* looking for Profile Created by */}
                            <div className='flex flex-col  gap-3'>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Profile Created by </p>
                                <div className='flex gap-3 flex-wrap'>
                                    {formdata.CreatedFor.map((option, index) => (
                                        <Radioinput
                                            key={index}
                                            id={`lookingforProfileCreatedby-${option}`}
                                            name="lookingforProfileCreatedby"
                                            value={option}
                                            onChange={inputHandler}
                                            checked={registerUser.lookingforProfileCreatedby === option}
                                            label={option}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* looking for Diet */}
                            <div className='flex flex-col  gap-3'>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Diet</p>
                                <div className='flex gap-3 flex-wrap'>
                                    {formdata.Diet.map((option, index) => (
                                        <Radioinput
                                            key={index}
                                            id={`lookingforDiet-${index}`} // You may want to make the ID unique per option
                                            name="lookingforDiet"
                                            value={option}
                                            onChange={inputHandler}
                                            checked={registerUser.lookingforDiet === option}
                                            label={option}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* looking for Annual Income */}
                            <div className='flex flex-col  gap-5'>
                                <p className='text-[1.37rem] font-normal  text-[#41404d]'>Expected Income</p>
                                <OptionsInput
                                    name="lookingforAnnualIncome"
                                    options={Salary}
                                    inputHandler={inputHandler}
                                    label="Annual Income"
                                />
                            </div>

                            {/* looking for Living Loaction Fields */}
                            <div className='flex flex-col gap-5 '>
                                <p className='text-[1.37rem] font-normal text-[#41404d]'>Living Location</p>
                                <div className='flex flex-row gap-3'>
                                    {formdata.lookingforLivingLoactionFields.map((fields, index) => (
                                        <Textinput
                                            key={index}
                                            id="NativeCity"
                                            name={fields.name}
                                            value={registerUser[fields.name]}
                                            onChange={inputHandler}
                                            placeholder='Type Here..'
                                            label={fields.label}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* looking for Qualification */}
                        <div className='flex flex-col  gap-6'>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Highest Qualification</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap '>
                                <div className='relative'>
                                    <OptionsInput
                                        name="lookingforQualification"
                                        options={formdata.Qualification}
                                        inputHandler={inputHandler}
                                        label="Field"
                                    />
                                </div>
                                {
                                    registerUser.lookingforQualification && <div className='relative'>
                                        <OptionsInput
                                            name="lookingforDegree"
                                            options={formdata.Degree[registerUser.lookingforQualification]}
                                            inputHandler={inputHandler}
                                            label="Degree"
                                        />
                                    </div>
                                }
                            </div>
                        </div>

                        {/* looking for Working Sector */}
                        <div className='flex flex-col  gap-6'>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Working As</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 flex-wrap '>
                                <OptionsInput
                                    name="lookingforWorkingSector"
                                    options={formdata.WorkingSector}
                                    inputHandler={inputHandler}
                                    label="WorkingSector"
                                />
                                {
                                    registerUser.lookingforWorkingSector && <div className='relative'>
                                        <OptionsInput
                                            name="lookingforWorkingAsRole"
                                            options={formdata.WorkingAsRole[registerUser.lookingforWorkingSector]}
                                            inputHandler={inputHandler}
                                            label="WorkingAsRole"
                                        />
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <button onClick={nextSlide} className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500">Continue</button>
                        </div>
                    </div>

                    <div className="flex relative flex-col justify-center items-center " style={{ display: currentSlide === 5 ? 'flex' : 'none', gridGap: '2rem' }}>
                        <button onClick={prevSlide} className="absolute -top-3 left-1 md:-left-3 text-[#41404d] ">< FaArrowLeftLong className="text-base  md:text-2xl" /></button>
                        <div className='flex flex-col justify-center w-full md:w-[60%] gap-5 '>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Gmail Address </p>
                            <Textinput
                                type='gamil'
                                id="GamilAddress"
                                name="GamilAddress"
                                onChange={inputHandler}
                                placeholder="Type here"
                                label="gmail"
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full md:w-[60%] gap-5 '>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Create passward</p>
                            <Textinput
                                type='password'
                                id="passward"
                                name="passward"
                                onChange={inputHandler}
                                placeholder="Type here"
                                label="password"
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full md:w-[60%] gap-5 '>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Re-Enter passward</p>
                            <Textinput
                                type='passward'
                                id="ReEnterpassward"
                                name="ReEnterpassward"
                                onChange={inputHandler}
                                placeholder="Type here"
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full md:w-[60%] gap-5 '>
                            <p className='text-[1.37rem] font-normal text-[#41404d]'>Number</p>
                            <Textinput
                                type='number'
                                id="number"
                                name="number"
                                onChange={inputHandler}
                                placeholder="Type here"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={onRegister} className="mt-5 font-semibold text-white py-2 px-5  bg-red-500  rounded-lg border-sky-500">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* 688 */}


            {/* <div className='  grid  gap-y-10 grid-rows-4 grid-flow-col  flex-warp my-[4.5rem] mx-[3rem] gap-5'>
                {mulyipleUsers.map((user, index) => (
                    <div key={index} className="p-6 border-black flex flex-row  border-2 bg-white shadow-md bg-clip-border rounded-xl  ">
                        <div className='flex flex-row' >
                            <p>CreatedFor: <span className='font-bold text-red-600 text-xl'>{user.createdFor}</span></p>
                            <p>Gender: <span className='font-bold text-red-600 text-xl'>{user.Gender}</span></p>
                            <p>FirstName: <span className='font-bold text-red-600 text-xl'>{user.FirstName}</span></p>
                            <p>LastName:'', <span className='font-bold text-red-600 text-xl'>{user.LastName}</span></p>
                            <p>MaritalStatus:'', <span className='font-bold text-red-600 text-xl'>{user.MaritalStatus}</span></p>
                            <p>DateOfBirth:'', <span className='font-bold text-red-600 text-xl'>{user.DateOfBirth}</span></p>
                            <p>HealthInformation: <span className='font-bold text-red-600 text-xl'>{user.HealthInformation}</span></p>
                            <p>Diet: <span className='font-bold text-red-600 text-xl'>{user.Diet}</span></p>
                            Height: {user.Height}
                            <p>Disability:: <span className='font-bold text-red-600 text-xl'>{user.Disability}</span></p>,
                            {user.HealthInformation}
                            {user.Diet}
                            {user.aboutYourself}
                            {user.ChurchName}
                            {user.ChurchAddress}
                            {user.IsBaptized}
                            {user.BaptismDate}
                            {user.FatherStatus}
                            {user.MotherStatus}
                            {user.FamilyType}
                            {user.FamilyTradition}
                            {user.AffluenceLevel}      {user.NoofSiblings}
                            {user.Religion}    {user.motherTongue}      {user.EthnicOrigin}       {user.Religion}    {user.denominations}
                            {user.NativeCity}    {user.LivingCountry}      {user.LivingState}     {user.LivingCity}     {user.ResidencyStatus}
                            {user.Qualification}   {user.Degree}    {user.WorkingSector}      {user.WorkingAsRole}     {user.WorkingWith}
                            {user.Salary}
                        </div>
                        <div  className='flex flex-row'>
                            {user.lookingforMaxAge} {user.lookingforMinAge} {user.lookingforMaxHeight}  {user.lookingforMinHeight}
                            {user.lookingforMaritalStatus} {user.lookingforEthnicOrigin} {user.lookingforReligion} {user.lookingforDenomination}
                            {user.lookingforCountryLiving} {user.lookingforStateLiving} {user.lookingforCity}
                            {user.lookingforAnnualIncome}
                            {user.lookingforProfileCreatedby}   {user.lookingforDiet}    {user.lookingforQualification}  {user.lookingforDegree}  {user.lookingforWorkingSector}    {user.lookingforWorkingAsRole}
                        </div>
                        
                    </div>
                ))}
            </div>              */}
                    {/* <RagistartionFrom/> */}
                    </>
                )
}
