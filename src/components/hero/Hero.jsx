import Image from "next/image";

const Hero = () => {
  return (
    <section className="mb-[300px] mt-20 ">
      <div className=" flex flex-col justify-center ">
        <div className="relative">
          <h1 className=" font-medium tiny:text-2xl sm:text-3xl md:text-[62px] xl:text-[62px] lg:text-[62px] 2xl:text-[62px]3xl:text-[62px] secondary-color md:w-[730px] lg:w-[730px] xl:w-[730px] 2xl:w-[730px] 3xl:w-[730px]  text-center mx-auto">
            The <span className="text-[#A274FF80]">Web 3.0</span> Freelancing
            Marketplace
          </h1>
          <div className="absolute -top-20 left-32  ">
            <div className="bg-[#A274FF1A] custom-box-shadow w-[96px] h-[96px] rounded-[24px] relative">
              <div
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-1 "
              >
                <Image src="/image/h1.png" alt="img" width={40} height={40} />
                <p className="primary-color font-semibold text-[10px] bg-white px-[10px] py-1 rounded-[10px]">
                  Marketer
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-20  ">
            <div className="bg-[#A274FF1A] custom-box-shadow w-[132px] h-[132px] rounded-[24px] relative">
              <div
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-1 "
              >
                <Image src="/image/h5.png" alt="img" width={62} height={62} />
                <p className="primary-color font-semibold text-[10px] bg-white px-[10px] py-1 rounded-[10px]">
                  Copywriter
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-24 left-0  ">
            <div className="bg-white custom-box-shadow w-[164px] h-[164px] rounded-[24px] relative">
              <div
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center  "
              >
                <Image src="/image/h2.png" alt="img" width={76} height={76} />
                <p className="primary-color font-semibold text-[10px] bg-[#0000000D] px-[10px] py-1 rounded-[10px] mt-2">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="tiny:mx-3 sm:mx-3 md:w-[561px] xl:w-[561px] lg:w-[561px] 3xl:w-[561px] 2xl:w-[561px] font-semibold text-[18px] text-[#00000050] mx-auto text-center my-4">
          At w3rk we are on a mission to to reshape the freelancing and hiring
          landscape for the Web 3.0 world, proudly bridging global businesses
          with exceptional Web 3.0 professionals who embrace cryptocurrency
          payments.
        </p>
        <div className=" text-center relative mt-4">
          <button className="px-10 py-4 bg-[#A274FF80] rounded-[16px] w-[220px] h-[56px] mx-auto text-white font-semibold ">
            Connect Wallet
          </button>
          <div className="absolute -top-10 right-20  ">
            <div className="bg-[#A274FF1A] custom-box-shadow w-[264px] h-[264px] rounded-[24px] relative">
              <div
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center  "
              >
                <Image src="/image/h6.png" alt="img" width={140} height={140} />
                <p className="primary-color font-semibold text-[10px] bg-white px-[10px] py-1 rounded-[10px] mt-2">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-10 left-20  ">
            <div className="bg-white custom-box-shadow w-[196px] h-[196px] rounded-[24px] relative">
              <div
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center  "
              >
                <Image src="/image/h3.png" alt="img" width={90} height={90} />
                <p className="primary-color font-semibold text-[10px] bg-[#0000000D] px-[10px] py-1 rounded-[10px] mt-2">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
