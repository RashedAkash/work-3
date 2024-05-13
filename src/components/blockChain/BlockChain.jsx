import Image from "next/image";
import { blockChainData } from "../../../public/data/data";
import Container from "../container/Container";

const BlockChain = () => {
  return (
    <section>
      <Container>
        <div className="  md:w-[1020px] lg:w-[750px]  xl:w-[1156px] 2xl:w-[1156px] 3xl:w-[1156px]  mx-auto mb-[40px]">
          <h1 className="primary-color text-center  tiny:text-[24px] sm:text-[24px]   font-semibold md:text-[30px] lg:text-[35px] xl:text-[51px] 2xl:text-[51px] 3xl:text-[51px]">
            Unlock the potential of
            <span className="text-[#A274FF]"> blockchain</span> technology.
          </h1>
        </div>
        <div className="mb-28 flex flex-col items-center    ">
          <div className="tiny:text-center sm:text-center md:flex lg:flex xl:flex 2xl:flex 3xl:flex items-center gap-7  ">
            <div className="  w-[150px] h-[150px] mx-auto mb-5  custom-box-shadow rounded-[40px] relative mt-5 ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/user.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl md:w-[542px] lg:w-[542px] xl:w-[542px] 2xl:w-[542px] 3xl:w-[542px] ">
              Create your Web 3.0 identity effortlessly via Lens where you can
              showcase your expertise and experience.
            </h1>
          </div>
          <div className="tiny:text-center sm:text-center md:flex lg:flex xl:flex 2xl:flex 3xl:flex items-center gap-7  ">
            <div className="  w-[150px] h-[150px] mx-auto mb-5  custom-box-shadow rounded-[40px] relative mt-5 ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/user.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl md:w-[542px] lg:w-[542px] xl:w-[542px] 2xl:w-[542px] 3xl:w-[542px] ">
              Create your Web 3.0 identity effortlessly via Lens where you can
              showcase your expertise and experience.
            </h1>
          </div>
          <div className="tiny:text-center sm:text-center md:flex lg:flex xl:flex 2xl:flex 3xl:flex items-center gap-7  ">
            <div className="  w-[150px] h-[150px] mx-auto mb-5  custom-box-shadow rounded-[40px] relative mt-5 ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/user.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl md:w-[542px] lg:w-[542px] xl:w-[542px] 2xl:w-[542px] 3xl:w-[542px] ">
              Create your Web 3.0 identity effortlessly via Lens where you can
              showcase your expertise and experience.
            </h1>
          </div>
          <div className="tiny:text-center sm:text-center md:flex lg:flex xl:flex 2xl:flex 3xl:flex items-center gap-7  ">
            <div className="  w-[150px] h-[150px] mx-auto mb-5  custom-box-shadow rounded-[40px] relative mt-5 ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/user.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl md:w-[542px] lg:w-[542px] xl:w-[542px] 2xl:w-[542px] 3xl:w-[542px] ">
              Create your Web 3.0 identity effortlessly via Lens where you can
              showcase your expertise and experience.
            </h1>
          </div>
         
        </div>
      </Container>
    </section>
  );
};

export default BlockChain;
