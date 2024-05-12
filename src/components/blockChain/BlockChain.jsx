import Image from "next/image";
import { blockChainData } from "../../../public/data/data";
import Container from "../container/Container";

const BlockChain = () => {
  return (
    <section>
      <Container>
        <div className="mb-28   lg:w-[824px] mx-auto  ">
          <div className="flex items-center gap-7  mb-5 ">
            <div className="w-[150px] h-[150px]  custom-box-shadow rounded-[40px] relative ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/user.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl lg:w-[542px]">
              Create your Web 3.0 identity effortlessly via Lens where you can
              showcase your expertise and experience.
            </h1>
          </div>
          <div className="flex items-center gap-7   mb-5">
            <div className="w-[150px] h-[150px]  custom-box-shadow rounded-[40px] relative ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/map.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl lg:w-[612px]">
              List your services or post a job directly on the blockchain,
              creating a strong foundation for fruitful collaborations on-chain.
            </h1>
          </div>
          <div className="flex items-center gap-7   mb-5">
            <div className="w-[150px] h-[150px]  custom-box-shadow rounded-[40px] relative ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/user.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl lg:w-[600px]">
              Experience secure and transparent payments, freelancers set their
              rates and organisations pay seamlessly in cryptocurrency.
            </h1>
          </div>
          <div className="flex items-center gap-7  ">
            <div className="w-[150px] h-[150px]  custom-box-shadow rounded-[40px] relative ">
              <Image
                className="absolute left-1/2 -translate-x-1/2
                 top-1/2 -translate-y-1/2"
                src="/image/map.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-medium primary-color text-xl lg:w-[646px]">
              We ensure secure escrow services and efficient dispute resolution,
              benefiting both parties. Transactions are protected until
              obligations are met, fostering trust and reliability for all.
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlockChain;
