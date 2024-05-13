import Container from "../container/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex justify-between tiny:mx-4 sm:mx-4 mt-28 md:mr-10 lg:mr-10 xl:mr-10 items-center">
          <div></div>
          <div>
            <p className="tiny:font-normal sm:font-normal md:font-semibold lg:font-semibold xl:font-semibold 2xl:font-semibold 3xl:font-semibold text-[#0000004D] md:text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[12px]">
              2024 w3rk. All Rights Reserved.
            </p>
          </div>
          <div>
            <div className="flex gap-[17px] justify-center">
              <Image src="/image/fx.png" alt="img" width={33} height={33} />
              <Image src="/image/fg.png" alt="img" width={33} height={33} />
              <Image src="/image/fm.png" alt="img" width={33} height={33} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
