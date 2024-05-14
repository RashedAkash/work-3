import { findJobData } from "../../../public/data/data";
import JobCard from "./JobCard";

const Jobs = () => {
  return (
    <section>
      <div >
        {findJobData?.map((j) => (
          <JobCard key={j.name} j={j} />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
