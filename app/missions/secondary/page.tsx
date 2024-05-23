import { secondaryMissions } from "@/assets/mocks/missions";
import Accordion from "@/components/Accordion";

const Page = () => {
  const items = secondaryMissions.map((m) => ({
    title: m.name,
    content: m.rule,
  }));
  return (
    <>
      <h1 className="text-3xl mb-4">Secondary Missions</h1>
      <Accordion items={items} />
    </>
  );
};

export default Page;
