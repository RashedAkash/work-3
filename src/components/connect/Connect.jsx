import Image from "next/image";
import Container from "../container/Container";

const Connect = () => {
  return (
    <section>
      <Container>
        <div>
          <div className=" tiny:w-[325px] tiny:text-center sm:w-[425px] md:w-[425px] lg:w-[425px] xl:w-[460px] 2xl:w-[460px] 3xl:w-[460px]  mx-auto  mb-[45px]">
            <h1 className="secondary-color tiny:text-[24px] sm:text-[24px]   font-semibold md:text-[40px] lg:text-[51px] xl:text-[56px] 2xl:text-[56px] 3xl:text-[56px]">
              <span className="text-[#A274FF]">Connect </span>
              with us!
            </h1>
          </div>
          <div className="bg-white  tiny:w-[335px] sm:w-[335px] md:w-[643px] lg:w-[643px] xl:w-[643px] 2xl:w-[643px] 3xl:w-[643px]  mx-auto rounded-[30px] tiny:px-[32px] tiny:py-[40px] sm:px-[32px] sm:py-[40px]    md:px-[64px] md:py-[75px] lg:px-[64px] lg:py-[75px] xl:px-[64px] xl:py-[75px] 2xl:px-[64px] 3xl:py-[75px] 3xl:px-[64px] 2xl:py-[75px]  custom-box-shadow">
            <div className="font-semibold tiny:text-base sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[18px] primary-color mb-[38px]">
              <p className="mb-[20px] text-center">
                Collaborate with us at w3rk to unlock exciting possibilities in
                the Web 3.0 space.
              </p>
              <p>Let’s redefine how work gets done in the decentralized era!</p>
            </div>
            <div className="flex gap-[28px] justify-center">
              <Image src="/image/x.png" alt="img" width={50} height={50} />
              <Image src="/image/game.png" alt="img" width={50} height={50} />
              <Image src="/image/email.png" alt="img" width={50} height={50} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Connect;
