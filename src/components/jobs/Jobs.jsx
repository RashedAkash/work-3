"use client";

import { findJobData } from "../../../public/data/data";

import Image from "next/image";
import { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";

const Jobs = () => {
  const [modeldata, setModeldata] = useState(null);
  console.log(modeldata);
  const showDetail = (id) => {
    const data = findJobData.find((job) => job.id === id);
    setModeldata(data)
    document.getElementById("my_modal_3").showModal();
    
  };
  return (
    <section>
      <div>
        {findJobData?.map((j) => (
          <div
            onClick={(e) => showDetail(j.id)}
            data-toggle="modal"
            data-target="#myModal"
            key={j?.id}
            className="bg-white rounded-[20px] xl:w-[1005px] 2xl:w-[1005px] 3xl:w-[1005px] lg:w-[770px]  mb-5 xl:h-[132px] 2xl:h-[132px] 3xl:h-[132px] lg:h-[180px] cursor-pointer p-5"
          >
            <div className="flex justify-between items-center gap-7">
              <div className="xl:ml-5 2xl:ml-5 3xl:ml-5">
                <Image src={j?.image} alt="img" width={47} height={47} />
                <h2 className="font-bold primary-color text-[12px]  mt-3">
                  {j?.name}
                </h2>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-[10px]">
                  <h3 className="font-bold primary-color text-[12px] ">
                    {j?.jobName}
                  </h3>
                  <div className=" relative bg-[#120037] w-5 h-5 sidebar-box-shadow rounded">
                    <IoBagHandleOutline
                      className="text-white text-[12px] absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
                <p className="text-[12px]  lg:w-[350px] xl:w-[444px] 2xl:w-[444px] 3xl:w-[444px] font-medium primary-color">
                  {j?.text}
                </p>
              </div>
              <div>
                <p className="font-medium text-[12px]">Fixed/Hourly Contract</p>
                <p className="font-medium text-[12px]">
                  Payment [amount in USD]t
                </p>
                <p className="font-medium text-[12px]">
                  Paid In [insert token logos]
                </p>
              </div>
              <div>
                {" "}
                <div className="mb-[6px]">
                  <button className="text-[10px] font-semibold primary-color sidebar-box-shadow bg-[#FFAEAE80] w-[140px] h-[30px] rounded-[10px] ">
                    Blockchain Development
                  </button>
                </div>
                <div className="mb-[6px]">
                  <button className="text-[10px] font-semibold primary-color sidebar-box-shadow bg-[#FFD5AE80] w-[140px] h-[30px] rounded-[10px] ">
                    [tag]
                  </button>
                </div>
                <div className="mb-[6px]">
                  <button className="text-[10px] font-semibold primary-color sidebar-box-shadow bg-[#FDFFAE80] w-[140px] h-[30px] rounded-[10px] ">
                    [tag]
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <dialog id="my_modal_3" className="modal ">
          <div className="rounded-[20px] w-[1110px] bg-[#00000010] px-[63px] py-[47px]">
            <form method="dialog">
              {/* If there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
            </form>
            <div className="flex justify-between  gap-5">
              <div className="bg-[#FFFFFF] custom-box-shadow w-[250px] h-[557px] rounded-[20px] p-5">
                a
              </div>
              <div>
                <h1 className=" primary-color text-[36px] font-semibold">
                  Job Name
                </h1>
                <h2 className="font-semibold primary-color text-[18px]">
                  Description
                </h2>
                <p className="text-xl font-semibold text-[#00000080]">
                  [service description]
                </p>
              </div>
              <div>
                <div>
                  <h2 className="font-semibold primary-color text-[18px]">
                    Contract Type
                  </h2>
                  <p className="text-xl font-semibold text-[#00000080]">
                    [service description][fixed / hourly]
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold primary-color text-[18px]">
                    Payment
                  </h2>
                  <p className="text-xl font-semibold text-[#00000080]">
                    [amount in USD]
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold primary-color text-[18px]">
                    Paid In
                  </h2>
                  <p className="text-xl font-semibold text-[#00000080]">
                    [select cryptocurrency]
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold primary-color text-[18px]">
                    Tags
                  </h2>
                  <p className="text-xl font-semibold text-[#00000080]">
                    [select 1-3 tags]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default Jobs;
