import Image from "next/image";
import Container from "../container/Container";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar h-[140px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden xl:hidden 2xl:hidden 3xl:hidden"
            >
              <IoMenuSharp className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
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
          <a className="  text-xl">
            {" "}
            <Image src="/image/logo.png" alt="img" width={135} height={47} />
          </a>
        </div>
        <div className="navbar-center tiny:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex 3xl:flex">
          <ul className="menu menu-horizontal px-1  text-[#000] text-base font-semibold">
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
        <div className="navbar-end">
          <a className=" bg-[#A274FF80] tiny:px-3 tiny:py-[10px] sm:px-3 sm:py-[10px]  px-10 py-4 rounded-[16px] tiny:rounded-[8px] sm:rounded-[8px] tiny:text-[14px] sm:text-[14px] lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl text-white font-semibold">
            Connect Wallet
          </a>
        </div>
      </nav>
      {/* <nav className="h-[140px] items-center lg:justify-between lg:px-10 xl:gap-[360px] xl:px-[218px] flex ">
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
      </nav> */}
    </Container>
  );
};

export default Navbar;
