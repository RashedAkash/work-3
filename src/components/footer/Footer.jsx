import Container from "../container/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex justify-between mt-28">
          <div></div>
          <div>
            <p  >2024 w3rk. All Rights Reserved.</p>
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