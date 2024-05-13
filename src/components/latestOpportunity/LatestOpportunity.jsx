import SectionTitle from "@/shared/SectionTitle";
import { jobData } from "../../../public/data/data";
import Container from "../container/Container";

const LatestOpportunity = () => {
  return (
    <section className="mb-28">
      <Container>
        <div className="text-center mb-[45px]">
          <SectionTitle title1="Latest" title2="opportunities" />
        </div>
        <div className="grid  place-items-center  lg:w-[1020px]  xl:w-[1156px]  2xl:w-[1156px]  3xl:w-[1156px]  tiny:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-7 mx-auto ">
          {jobData?.map((job, index) => (
            <div
              className="custom-box-shadow bg-white rounded-[40px] tiny:w-[110px] tiny:h-[110px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px]  xl:w-[200px] xl:h-[200px] 2xl:w-[200px] 2xl:h-[200px] 3xl:w-[200px] 3xl:h-[200px]  relative"
              key={index}
            >
              <p className=" font-semibold text-2xl primary-color absolute top-1/2 -translate-y-1/2 -translate-x-1/2  left-1/2 ">
                {job?.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestOpportunity;
