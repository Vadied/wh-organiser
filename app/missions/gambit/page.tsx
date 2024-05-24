import { gambits } from "@/assets/mocks/missions";
import Accordion from "@/components/Accordion";

const Page = () => {
  const items = gambits.map(({ name, rule }) => ({
    title: name,
    content: rule,
  }));
  return (
    <>
      <h1 className="text-3xl mb-4">Gambit</h1>
      <Accordion items={items} />
    </>
  );
};

export default Page;
