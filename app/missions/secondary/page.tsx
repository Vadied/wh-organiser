import { secondaryMissions } from "@/assets/mocks/missions";
import Accordion from "@/components/Accordion";

const Page = () => {
  const items = secondaryMissions.map(({ name, isFixed, rule }) => ({
    title: `${name}${isFixed ? " - fixed" : ""}`,
    content: rule,
  }));
  return (
    <>
      <h1 className="text-3xl mb-4">Missioni secondarie</h1>
      <Accordion items={items} />
    </>
  );
};

export default Page;
