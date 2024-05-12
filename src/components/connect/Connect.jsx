import Image from "next/image";
import Container from "../container/Container";

const Connect = () => {
  return (
    <section>
      <Container>
        <div>
          <div className=" md:w-[425px] mx-auto h-[80px] mb-[45px]">
            <h1 className="primary-color   font-semibold text-[51px]">
              <span className="text-[#A274FF]">Connect </span>
              with us!
            </h1>
          </div>
          <div className="bg-white md:w-[643px] mx-auto rounded-[30px] px-[64px] py-[75px]  custom-box-shadow">
            <div className="font-semibold text-[18px] primary-color mb-[38px]">
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
