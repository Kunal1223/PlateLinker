import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function CardR(props) {
  let { name, email, manager_name, desc, phone, social_link, imageUrl } = props.res_detail;

  return (
    <div className="">


      <div className=" mx-5 my-5  mt-11 w-72 transform overflow-hidden rounded-lg   shadow-lg duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-48 w-full object-cover object-center " src={imageUrl} alt="event1" />
        <div className="p-4">


          <div className=" py-2">
            <div className="font-bold text-xl ">{name}</div>
          </div>


          <div className="  pb-2 flex align-bottom text-[#0000006d] leading-normal text-[14px] font-normal font-[Roboto] ">
            Description: {desc}
          </div>

          <div className=" pt-4 ">
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Veg</span>

            <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Non-Veg</span>
          </div>
          <div className=" py-2 flex justify-between">
            <div className="font-bold  "><span className="">Manager: </span>{manager_name}</div>
            <div className="">
              <a href={social_link}>  <i className="fa-brands fa-instagram mr-2"></i></a>
              <i className="fa-regular fa-envelope mr-2"></i>
              <i className="fa-solid fa-phone "></i>
            </div>
          </div>

          <div className="packets">
            <button className="bg-[#dfe3e4] px-2 py-1 rounded-md text-gray-800 font-semibold">Donate Packets  
            : <span className="ml-4">5 </span><i class="fa-solid fa-circle text-red-500 mr-4 "></i>  4  <i class="fa-solid fa-circle text-green-500 mr-4"></i></button>
          </div>

        </div>
      </div>


    </div>
  );
}

// line-height: normal;
