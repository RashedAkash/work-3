import BlockChain from "@/components/blockChain/BlockChain";
import Connect from "@/components/connect/Connect";
import LatestOpportunity from "@/components/latestOpportunity/LatestOpportunity";
import TopPicks from "@/components/topPicks/TopPicks";


const page = () => {
  return (
    <div>
      <BlockChain />
      <TopPicks />
      <LatestOpportunity />
      <Connect />
      
    </div>
  );
};

export default page;