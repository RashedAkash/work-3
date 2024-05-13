import SectionTitle from "@/shared/SectionTitle";
import { picksData } from "../../../public/data/data";
import Container from "../container/Container";

const TopPicks = () => {
  return (
    <section className="mb-28">
      <Container>
        <div className="text-center mb-[45px]">
          <SectionTitle title1="Top" title2="picks" />
        </div>
        <div className="grid tiny:mx-4 sm:mx-4   place-items-center  lg:w-[1020px]  xl:w-[1156px]  2xl:w-[1156px]  3xl:w-[1156px]  tiny:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-7 mx-auto ">
          {picksData?.map((job, index) => (
            <div
              className="custom-box-shadow w-[200px] h-[200px] bg-white tiny:rounded-[20px] sm:rounded-[20px] md:rounded-[40px] lg:rounded-[40px] xl:rounded-[40px] 2xl:rounded-[40px] 3xl:rounded-[40px] tiny:w-[100px] tiny:h-[100px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px]  xl:w-[200px] xl:h-[200px] 2xl:w-[200px] 2xl:h-[200px] 3xl:w-[200px] 3xl:h-[200px]  relative"
              key={index}
            >
              <p className="tiny:font-bold sm:font-bold md:font-semibold xl:font-semibold lg:font-semibold 2xl:font-semibold 3xl:font-semibold tiny:text-[14px]  sm:text-[14px] md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl primary-color absolute top-1/2 -translate-y-1/2 -translate-x-1/2  left-1/2 ">
                {job?.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopPicks;