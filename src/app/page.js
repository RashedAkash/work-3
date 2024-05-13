import BlockChain from "@/components/blockChain/BlockChain";
import Connect from "@/components/connect/Connect";
import LatestOpportunity from "@/components/latestOpportunity/LatestOpportunity";


const page = () => {
  return (
    <div>
      {/* <BlockChain /> */}
      <LatestOpportunity />
      <Connect />
      
    </div>
  );
};

export default page;