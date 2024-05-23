import { primaryMissions } from "@/assets/mocks/missions";
import Accordion from "@/components/Accordion";
import PrimaryMissions from "@/components/PrimaryMissions";

const Page = () => {
  const items = primaryMissions.map((mission) => ({
    title: mission.name,
    content: mission.rounds,
  }));

  return (
    <div className="">
       <PrimaryMissions />
        
    </div>
  );
};

export default Page;
