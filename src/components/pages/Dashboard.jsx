import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="left   w-[300px] h-[100vh] bg-[#152259]">
        <div className="p-[25px] border-b-[#a7a7a7] border-b border-solid">
          <div className="logo flex flex-col  justify-center items-center gap-3">
            <img className="w-[65px]" src="./logo.png" alt="" />
            <h1 className="text-white">Udemy Inter. school</h1>
          </div>
        </div>
        <div className="sections p-[25px] flex flex-col  gap-2">
          <button className="flex items-center font-semibold text-sm  w-full py-[11px] px-[16px] rounded  bg-[#509CDB]  text-white gap-4">
            {" "}
            <img src="./dashboard.svg" alt="" />
            Dashboard
          </button>
          <Link to={`/teachers`}>
            <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
              {" "}
              <img src="./dashboard.svg" alt="" />
              Teachers
            </button>
          </Link>
          <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
            {" "}
            <img src="./students.svg" alt="" />
            Students
          </button>
          <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
            {" "}
            <img src="./billing.svg" alt="" />
            Billing
          </button>
          <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
            {" "}
            <img src="./settings.svg" alt="" />
            Settings and profile
          </button>
          <button className="flex items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
            {" "}
            <img src="./exams.svg" alt="" />
            Exams
          </button>
          <button className="flex mt-[114px] items-center font-semibold text-sm  w-full py-[11px] transition-[3s] px-[14px] rounded  active:bg-[#509CDB] hover:bg-[#509CDB]  text-white gap-4">
            {" "}
            <img src="./features.svg" alt="" />
            Features
            <span className="font-semibold text-[10px] text-black px-2 py-px rounded-lg bg-[#B9D7F1]">
              NEW
            </span>
          </button>
        </div>
      </div>
      <div className="main w-full">
        <div className="header px-[124px] mb-[53px] flex items-center justify-between  bg-[#FCFAFA] h-[100px]">
          <h1 className="font-medium text-base text-[#424242]">
            Learn how to launch faster <br />
            <span className="font-[400]">
              watch our webinar for tips from our experts and get a limited time
              offer.
            </span>
          </h1>
          <div className="flex gap-12">
            <img src="./notification.svg" alt="" />
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              className="w-fit  bg-[#509CDB] text-white rounded-[8px] py-3 px-9"
            >
              Log out
            </button>
          </div>
        </div>
        <div className="center px-[124px] ">
          <h1 className="font-semibold text-4xl  mb-[23px] text-[#424242]">
            Welcome to your dashboard, Udemy school
          </h1>
          <h3 className="font-semibold text-2xl text-[#424242] ml-[100px]">
            Uyo/school/@teachable.com
          </h3>
          <div>
            <div class="text-gray-600  py-[70px]  px-[90px] ">
              <div
                class="flex flex-col sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
                bis_skin_checked="1"
              >
                <div class="p-4 flex">
                  <div class="w-12 h-12 flex items-center justify-center rounded-[8px] bg-[#eff3fa] mb-4 ">
                    <img src="./addotheradmins.svg" className="" alt="" />
                  </div>
                  <div class="flex-grow pl-6" bis_skin_checked="1">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                      Add other admins
                    </h2>
                    <p class="leading-relaxed text-base">
                      Create rich course content and coaching products for your
                      students. <br /> When you give them a pricing plan,
                      they’ll appear on your site!
                    </p>
                  </div>
                </div>
                <div class="p-4  flex">
                  <div class="w-12 h-12 flex items-center justify-center rounded-[8px] bg-[#eff3fa] mb-4 ">
                    <img src="./addclasses.svg" className="" alt="" />
                  </div>
                  <div class="flex-grow pl-6" bis_skin_checked="1">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                      Add classes
                    </h2>
                    <p class="leading-relaxed text-base">
                      Create rich course content and coaching products for your
                      students. <br /> When you give them a pricing plan,
                      they’ll appear on your site!
                    </p>
                  </div>
                </div>
                <div class="p-4  flex">
                  <div class="w-12 h-12 flex items-center justify-center rounded-[8px] bg-[#eff3fa] mb-4 ">
                    <img src="./studentsblue.svg" alt="" />
                  </div>
                  <div class="flex-grow pl-6" bis_skin_checked="1">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                      Add students
                    </h2>
                    <p class="leading-relaxed text-base">
                      Create rich course content and coaching products for your
                      students. <br />
                      When you give them a pricing plan, they’ll appear on your
                      site!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#152259] absolute bottom-[150px] right-[100px] flex gap-[39px] w-fit rounded-[30px]  py-[22px] px-[24px] items-center text-white">
          <div className="flex items-center gap-2">
            <img src="./call.svg" alt="" />
            Support
          </div>
          <FaAngleUp />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
