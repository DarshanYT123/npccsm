import React, { useState } from 'react'

const Activedropdown = ({ selected, setSelected }) => {

    const [isActive, SetIsActive] = useState(false)
    const option = [
        {
            name: "BBA",
            path: "/bba",
          },
          {
            name: "BCA",
            path: "/bca",
          },
          {
            name: "NCC",
            path: "/ncc",
          }, {
            name: "NSS",
            path: "/nss",
          }, {
            name: "SPORTS",
            path: "/sports",
          },
    ]
    return (
        <div className='dropdown w-[180px] h-[50px]  relative z-50' >
            <div className=' text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120] md:w-[180px] md:h-[50px]     dropdown-btn rounded-[3px]'

                onClick={(e) => SetIsActive(!isActive)}>

                {selected}
                {/* ===========================icon====================== */}
                <div className='relative pt-1.5 '>

                    <svg width="20" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-[5px]  lg:bottom-[3px] text-[#B42120]   left-20 lg:left-[4.5rem] md:left-20 '>
                        <path d="M2 8L12.2401 16.3783C12.6822 16.7399 13.3178 16.7399 13.7599 16.3783L24 8" stroke="#B42120" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
                <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                      Know More
                    </h3>

                {/*====================================================== */}

            </div>

            {isActive && (
                <div className="absolute  top[110px] p-[15px] my-2   bg-white shadow-stone-900 left-0 w-[100%] drop-shadow-md  dropdown-contain">





                    {option.map((option,index) => (
                        <div className="dropdown-item p-[10px] cursor-pointer  "
                            onClick={(e) => {
                                setSelected(option)
                                SetIsActive(false);
                            }
                            }>
                         
                            <a  href={option.path}>   <h1 className="cursor-pointer ">{option.name}</h1></a> 
                        </div>
                    ))}



                </div>
            )}



        </div>
    )
}

export default Activedropdown