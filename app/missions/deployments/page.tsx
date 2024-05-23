import { deployments } from "@/assets/mocks/missions";
import PrimaryMissions from "@/components/PrimaryMissions";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl mb-4">Primary Missions</h1>
      <PrimaryMissions />
    </>
  );
};

export default Page;
