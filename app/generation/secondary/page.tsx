import { secondaryMissions } from "@/assets/mocks/missions";
import AccordionItem from "@/components/AccordionItem";
import GenerateSecondary from "@/components/GenerateSecondary";

type Props = {
  searchParams?: {
    missions?: string;
    fixed?: string;
  };
};
const Page = ({ searchParams }: Props) => {
  const { missions = "", fixed = false } = searchParams || {};

  const missionsIds = missions.split("-");

  return (
    <>
      <GenerateSecondary />

      {secondaryMissions
        .filter(({ id }) => missionsIds.includes(id))
        .map(({ name, isFixed, rule, id }) => {
          const title = `${name}${isFixed ? " - fixed" : ""}`;

          return (
            <AccordionItem key={id} title={title}>
              {rule}
            </AccordionItem>
          );
        })}
    </>
  );
};

export default Page;
