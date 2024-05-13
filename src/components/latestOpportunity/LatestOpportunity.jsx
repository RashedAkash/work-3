import SectionTitle from "@/shared/SectionTitle";
import { jobData } from "../../../public/data/data";
import Container from "../container/Container";

const LatestOpportunity = () => {
 
  return (
    <section>
      <Container>
        <div className="text-center mb-[45px]">
          <SectionTitle title1="Latest" title2="opportunities" />
        </div>
        <div className="grid lg:grid-cols-5 xl:grid-cols-5 gap-8">
          {jobData?.map((job, index) => (
            <div
              className="custom-box-shadow bg-white rounded-[40px] w-[200px] h-[200px] relative"
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
