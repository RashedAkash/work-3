import Image from "next/image";
import Container from "../container/Container";
import Link from "next/link";


const Navbar = () => {
  return (
    <Container>
      <nav className="h-[140px] items-center justify-between flex  lg:px-[218px]">
        <div>
          <Image src="/image/logo.png" alt="img" width={135} height={47} />
        </div>
        <div>
          <ul className=" flex gap-[39px] text-[#000] text-base font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Find work</Link>
            </li>
            <li>
              <Link href="#">Find talent</Link>
            </li>
          </ul>
        </div>
        <div>c</div>
      </nav>
    </Container>
  );
};

export default Navbar;