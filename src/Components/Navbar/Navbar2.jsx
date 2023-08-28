import { navLinks } from "../../Components/Navbar/data/data";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import Activedropdown from './Activedropdown'
import Coursesdropdown from './Coursesdropdown'
const Navbar2 = () => {
  const [navbar, setNavbar] = useState(false);

  const [selected, setSelected] = useState("Activities ")
  const [selected1, setSelected1] = useState("Career ")

  return (
    <>
      {/*=======================================desktop======================== */}

      <div className="hidden lg:block">
        {/*===================================Navbar1================================ */}

        <div className="flex items-center justify-center">
          <h1 className="text-[18px] not-italic font-bold font-KaiseiHarunoUmi leading-normal text-[#B42120]">
            કર ભલા હોગા ભલા.
          </h1>
        </div>

        {/*===================main hedear ==========*/}

        <div className="flex flex-row justify-between items-center xl:px-11 lg:px-5">
          <div className="flex flex-row items-center gap-x-10 lg:gap-x-5">
            <a href="/" class="flex flex-row items-center ">
              <img
                src="./img/logo.jpg"
                className="lg:w-[60px] lg:h-[70px]"
                alt="logo"
              />
            </a>
            <div className="">
              <h4 className="xl:text-[14px] lg:text-[12px] not-italic font-semibold font-[inter] leading-normal text-[#000000]">
                Sarva Vidyalaya Kelavani Mandal’s
              </h4>
              <h3 className="xl:text-[17px] lg:text-[14px] not-italic font-bold leading-normal font-[kaisei] text-[#B42120]">
                Narsinhbhai Patel College of Computer Studies and Management
              </h3>
              <h3 className="xl:text-[14px] lg:text-[12px] not-italic font-semibold font-inter leading-normal text-[#FFA800]">
                A Constituent College of KSV{" "}
                <span className="xl:text-[14px] lg:text-[12px] not-italic font-inter font-semibold leading-normal text-[#000000]">
                  {" "}
                  (NAAC Acredited with B+ Grade)
                </span>
              </h3>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center">
              <a href="/desk">
                <div className="flex flex-col">
                  <h1 className="xl:text-[16px] lg:text-[14px] not-italic font-semibold font-inter leading-normal tracking-[0.24px] text-[#B42120]">
                    Who We Are?
                  </h1>
                  <h3 className="xl:text-[12px] lg:text-[10px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                    Administration
                  </h3>
                </div>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="45"
                viewBox="0 0 2 51"
                fill="none"
                className="ml-2 "
              >
                <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
              </svg>

              <div className="flex flex-col px-4 cursor-pointer">
              <div className="right-menu  ">
                <h1 className="menu-text  xl:text-[16px] lg:text-[14px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                  Courses
                </h1>
                <div className="dropdown-menu  rounded-md -right-10 z-50 ">
                      <a href="/bba" className="py-2 text-center">BBA</a>
                      <a href="/bca" className="py-2 text-center">BCA</a>
                      </div>
                      </div>
                <h3 className="xl:text-[12px] lg:text-[10px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                  Know More
                </h3>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="45"
                viewBox="0 0 2 51"
                fill="none"
                className="ml-2 "
              >
                <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
              </svg>

              <a href="/syllabus">
                <div className="flex flex-col px-4">
                  <h1 className=" xl:text-[16px] lg:text-[14px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                    Syllabus
                  </h1>
                  <h3 className="xl:text-[12px] lg:text-[10px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                    Curriculum
                  </h3>
                </div>
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="45"
                viewBox="0 0 2 51"
                fill="none"
                className="ml-2 "
              >
                <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
              </svg>
              <a href="/placementpartner">
              <div className="flex flex-col px-4">
                <h1 className="xl:text-[16px] lg:text-[14px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                  Placements
                </h1>
                <h3 className="xl:text-[12px] lg:text-[10px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                  Know More
                </h3>
              </div>
</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="45"
                viewBox="0 0 2 51"
                fill="none"
                className="ml-2 "
              >
                <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
              </svg>

              <div className="flex flex-col cursor-pointer px-4">
              <div className="right-menu  ">
                                <h1 className="menu-text xl:text-[16px] lg:text-[14px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                  Activities
                </h1>
                 {/* drop down desktop */}
                <div className="dropdown-menu  rounded-md -right-10 z-50 ">
                      <a href="/ncc" className="py-2 text-center">NCC</a>
                      <a href="/nss" className="py-2 text-center">NSS</a>
                      <a href="/sports" className="py-2 text-center">SPORTS</a>
                      </div>
                  {/*========================================== */}
</div>
                <h3 className="xl:text-[12px] lg:text-[10px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                  Know More
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/*================================end Navbar1======================= */}

        <nav className="pt-5">
          <div className="flex gap-x-6 bg-[#B42120] px-5 items-center justify-around lg:py-2 xl:py-3">
            {navLinks.map((link, index) => {
              return (
                <ul>
                  <a className="" href={link.path}>
                    <li
                      className="text-[17px] not-italic font-inter font-medium leading-normal text-[#FFFFFF]  "
                      key={index}
                    >
                      {link.name}
                    </li>
                  </a>
                </ul>
              );
            })}

            {/*=====================================search ==================== */}

            <div className="relative  ">
              <div class="absolute inset-y-0 right-5 flex items-center  pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M13.6349 9.75535C14.1383 8.29386 14.0778 6.70332 13.4647 5.2823C12.8515 3.86128 11.728 2.7075 10.3049 2.03756C8.88184 1.36762 7.25711 1.22758 5.73574 1.64373C4.21436 2.05989 2.90095 3.00362 2.04206 4.29777C1.18318 5.59191 0.837875 7.14748 1.07098 8.67245C1.30409 10.1974 2.09957 11.5869 3.3081 12.5801C4.51663 13.5733 6.0551 14.1019 7.63471 14.0667C9.21431 14.0315 10.7264 13.4348 11.8872 12.3888"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9459 12.4527L16 16.4088"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-[224px] h-[32px] p-2 pr-10 text-[15px] font-inter text-[#00000066]/40 not-italic font-medium  border border-[#999999] bg-[#FFF] "
                placeholder="Search Here"
              />
            </div>
          </div>
        </nav>
      </div>

      {/*=======================================desktop end==================== */}

      {/*=============================Mobile view ============================ */}

      <div className="block lg:hidden">
        <nav className="">
          {/*=================Main header=== */}
          <div className="flex flex-row gap-x-5 items-center justify-around py-2 bg-[#f0f0f0]">
            <div className="flex flex-row items-center justify-around gap-x-5">
              <div>
                <a href="/" className=" ">
                  <img
                    src="./img/logo.jpg"
                    className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                    alt="logo"
                  />
                </a>
              </div>
              <div>
                <div className="">
                  <h4 className="text-[5px] md:text-[10px] not-italic font-semibold font-[inter] leading-normal text-[#000000]">
                    Sarva Vidyalaya Kelavani Mandal’s
                  </h4>
                  <h3 className="text-[7px] md:text-[12px] not-italic font-bold leading-normal font-[kaisei] text-[#B42120]">
                    Narsinhbhai Patel College of Computer Studies and Management
                  </h3>
                  <h3 className="text-[5px] md:text-[10px] not-italic font-semibold font-inter leading-normal text-[#FFA800]">
                    A Constituent College of KSV{" "}
                    <span className="text-[5px] md:text-[10px] not-italic font-semibold leading-normal text-[#000000]">
                      (NAAC Acredited with B+ Grade)
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/*====================main header end==== */}

            <div className="">
              <button
                className="text-gray-700 rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoIosClose size={25} /> : <FiMenu size={25} />}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center pb-3 md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col bg-[#F0F0F0] items-start h-[100%] px-5 ">
              {/*========================================Navbar1=============== */}
              <div className="flex items-center justify-center pt-3">
                <h1 className="text-[18px] not-italic font-bold font-[Kaisei] leading-normal text-[#B42120]">
                  કર ભલા હોગા ભલા.
                </h1>
              </div>

              {/*===================main hedear ==========*/}

              <div className="flex flex-col items-start justify-center">
                {/*====================search=================== */}
                <div className="relative  pt-2 pb-2">
                  <div class="absolute inset-y-0 right-5 flex items-center  pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        d="M13.6349 9.75535C14.1383 8.29386 14.0778 6.70332 13.4647 5.2823C12.8515 3.86128 11.728 2.7075 10.3049 2.03756C8.88184 1.36762 7.25711 1.22758 5.73574 1.64373C4.21436 2.05989 2.90095 3.00362 2.04206 4.29777C1.18318 5.59191 0.837875 7.14748 1.07098 8.67245C1.30409 10.1974 2.09957 11.5869 3.3081 12.5801C4.51663 13.5733 6.0551 14.1019 7.63471 14.0667C9.21431 14.0315 10.7264 13.4348 11.8872 12.3888"
                        stroke="#999999"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.9459 12.4527L16 16.4088"
                        stroke="#999999"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    class="block w-[224px] h-[32px] p-2 pr-10 text-[15px] font-inter text-[#00000066]/40 not-italic font-medium  border border-[#999999] bg-[#FFF] "
                    placeholder="Search Here"
                  />
                </div>

                {/*====================Search end */}

                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col pt-2">
                    <a href="/desk">
                    <h1 className="text-[16px] not-italic font-semibold font-inter leading-normal tracking-[0.24px] text-[#B42120]">
                      Who We Are?
                    </h1>
                    <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                      Administration
                    </h3>
                    </a>
                  </div>

                  <Coursesdropdown selected1={selected1} setSelected1={setSelected1}/>
                  {/* 
                  <div className="flex flex-col pt-2">
                    <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                      Courses
                    </h1>
                    <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                      Know More
                    </h3>
                  </div>
                  */}

                  <div className="flex flex-col pt-2">
                    <a href="/syllabus">
                    <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                      Syllabus
                    </h1>
                    </a>
                    <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                      Curriculum
                    </h3>
                  </div>

                  <div className="flex flex-col pt-2">
                  <a href="/placementpartner">
                    <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                      Placements
                    </h1>
                    </a>
                    <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                      Know More
                    </h3>
                  </div>

                  <div className="flex flex-col pt-2">
                  <Activedropdown selected={selected} setSelected={setSelected}/>
                 
                    </div>
                  {/* <div className="flex flex-col pt-2">
                    <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                      Activities
                    </h1>

                <div className="dropdown-menuphone  rounded-md -right-10  ">
                      <a href="/bba" className="py-2 text-center">BBA</a>
                      <a href="/bca" className="py-2 text-center">BCA</a>
                      <a href="/ncc" className="py-2 text-center">NCC</a>
                      <a href="/nss" className="py-2 text-center">NSS</a>
                      <a href="/sports" className="py-2 text-center">SPORTS</a>
                      </div>

                    <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                      Know More
                    </h3>
                  
                  </div> */}
                </div>

                {/*======================================Navbar1  end============ */}

                {navLinks.map((link, index) => {
                  return (
                    <ul>
                      <a className=" " href={link.path}>
                        <li
                          className=" py-5 text-justify text-[16px] not-italic font-inter font-medium leading-normal text-black  "
                          key={index}
                        >
                          {link.name}
                        </li>
                      </a>
                    </ul>
                  );
                })}

                {/*=====================================search ==================== */}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/*=============================Mobile view end ============================ */}
    </>
  );
};

export default Navbar2;
