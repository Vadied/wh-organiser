import { secondaryMissions } from "@/assets/mocks/missions";
import AccordionItem from "@/components/AccordionItem";
import GenerateGambit from "@/components/GenerateGambit";
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
      <GenerateGambit />

      
    </>
  );
};

export default Page;
