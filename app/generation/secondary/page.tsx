import { secondaryMissions } from "@/assets/mocks/missions";
import AccordionItem from "@/components/AccordionItem";
import GenerateSecondary from "@/components/GenerateSecondary";

type Props = {
  searchParams?: {
    sm?: string;
  };
};
const Page = ({ searchParams }: Props) => {
  const { sm = "" } = searchParams || {};

  const missionsIds = sm.split("-");

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