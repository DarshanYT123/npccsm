import React from "react";
import Inquiry from "../Homepage/Inquiry";
import Slider from "../Slider/Slider";
import Hero from "../VericalSlider/Hero";

const Sports = () => {
  return (
    <div>
      <div className="lg:px-12   pt-10 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi md:text-[25px]  text-[16px]  lg:text-[32px] not-italic font-semibold leading-[normal]">
          Sports
        </h1>
      </div>
      <Hero /> 
      <div className="mt-5">
        <p className="text-[16px] font-inter px-14 text-justify  not-italic font-medium leading-[202.523%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
          aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id
          sapien. Vestibulum malesuada orci sit amet pretium facilisis. In
          lobortis congue augue, a commodo libero tincidunt scelerisque. Donec
          tempus congue lacinia. Phasellus lacinia felis est, placerat commodo
          odio tincidunt iaculis. Sed felis magna, iaculis a metus id,
          ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere
          porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa.
          Proin nulla augue, dapibus non justo in, laoreet commodo nunc.
          Maecenas faucibus neque in nulla mollis interdum. Quisque quis
          pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus.
          Curabitur scelerisque magna a interdum pretium. Integer sodales metus
          ut placerat viverra. Curabitur accumsan, odio quis vehicula imperdiet,
          tellus ex venenatis nisl, a dignissim lectus augue tincidunt arcu.
        </p>
      </div>
      <div className="flex flex-col gap-y-10 py-10 px-14">
        <div className=" flex flex-col md:flex-col lg:flex-row md:gap-x-10">
          <div className="lg:w-[40%]  ">
            <img src="./img/kabbdi.png" className="" alt="" />
          </div>
          <div className="flex flex-col  lg:w-[60%]">
            <h1 className=" text-[color:var(--01,#B42120)] lg:pt-0 md:pt-8 font-KaiseiHarunoUmi md:text-[25px]  text-[16px]  lg:text-[32px] not-italic font-semibold leading-[normal]">
              Kabbdi
            </h1>
            <p className="text-[16px]  font-inter  text-justify  pt-5 not-italic font-medium leading-[202.523%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis
              scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit
              mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium
              facilisis. In lobortis congue augue, a commodo libero tincidunt
              scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis
              est, placerat commodo odio tincidunt iaculis. Sed felis magna,
              iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis,
              nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel
              feugiat nisi elit id massa. Proin nulla augue, dapibus non justo
              in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis
              interdum. Quisque quis pellentesque enim, vitae pulvinar purus.
              Quisque vitae suscipit risus. Curabitur scelerisque magna a
              interdum pretium. Integer sodales metus ut placerat viverra.
              Curabitur accumsan, odio quis vehicula imperdiet, tellus ex
              venenatis nisl, a dignissim lectus augue tincidunt arcu.
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-x-10 ">
          <div className="lg:w-[60%]">
            <h1 className=" text-[color:var(--01,#B42120)] lg:py-0 md:py-3 font-KaiseiHarunoUmi md:text-[25px]  text-[16px]  lg:text-[32px] not-italic font-semibold leading-[normal]">
              Cricket
            </h1>
            <p className="text-[16px]  text-justify font-inter  pt-5 not-italic font-medium leading-[202.523%]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis
              scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit
              mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium
              facilisis. In lobortis congue augue, a commodo libero tincidunt
              scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis
              est, placerat commodo odio tincidunt iaculis. Sed felis magna,
              iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis,
              nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel
              feugiat nisi elit id massa. Proin nulla augue, dapibus non justo
              in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis
              interdum. Quisque quis pellentesque enim, vitae pulvinar purus.
              Quisque vitae suscipit risus. Curabitur scelerisque magna a
              interdum pretium. Integer sodales metus ut placerat viverra.
              Curabitur accumsan, odio quis vehicula imperdiet, tellus ex
              venenatis nisl, a dignissim lectus augue tincidunt arcu.
            </p>
          </div>
          <div className="lg:w-[40%] md:py-7 lg:py-0 ">
            <img src="./img/cricket.png" alt="Cricket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;

// NCC provides a suitable environment to motivate the youth to take up a career in the Armed Forces and Develop Character,Comradeship,Discipline,Leadership,Secular Outlook, Spirit of Adventure and Ideals of Selfless Service among the Youth of the Country.
// BPCCS is having 50 seats of NCC which is running under 9 BT Gujarat Ahmedabad, NCC.
// Cadets are having parade on every Monday.
// Every year Cadets have celebrated Kargil Vijay Diwas, Republic Day and Independence Day and have given their services in every college events and programme
// Cadets have attended Advance Leadership Camp, Basic Leadership Camp, National Integration Camp, CATC and NCC National Games.

// Volunteers works selflessly on “Don’t wait for the change, be the change”.
// BPCCS is running 1 unit (100 Volunteers) of NSS. Students is actively participating social activities like Blood Donation Camp, Medical Check up Camp, Thalassemia Awareness and Testing Camp.
// Every Year volunteers are celebrating Engineers Day, Aids Day, Women’s Day, Population Day, Ozone Day, Teachers Day and Sanvedna Saptaah.
// Volunteers are participating in 7 days residential camp in different village.
// Volunteers have participated in National Integration Camp, Pre Republic Day Camp and attended BHARTIYA CHATRA SANSAD Seminar.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque quis pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus. Curabitur scelerisque magna a interdum pretium. Integer sodales metus ut placerat viverra. Curabitur accumsan, odio quis vehicula imperdiet, tellus ex venenatis nisl, a dignissim lectus augue tincidunt arcu.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque
