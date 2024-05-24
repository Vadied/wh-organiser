import {
  deployments,
  gambits,
  primaryMissions,
  secondaryMissions,
} from "@/assets/mocks/missions";
import AccordionItem from "@/components/AccordionItem";
import GenerateGame from "@/components/GenerateGame";
import MissionCard from "@/components/PrimaryMissions/MissionCard";
import Image from "next/image";

type Props = {
  searchParams?: {
    [key: string]: string;
  };
};

const Page = ({ searchParams }: Props) => {
  const { dp = "", sm = "", pm = "", gm = "", fixed } = searchParams || {};

  const deployment = deployments.find((d) => d.id === dp);
  const primary = primaryMissions.find((m) => m.id === pm);
  const secondaries = secondaryMissions.filter((m) =>
    sm.split("-").includes(m.id)
  );
  const gambit = gambits.find((g) => g.id === gm);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Partita</h1>
        <GenerateGame />
      </div>
      
      {deployment && (
        <AccordionItem title="Schieramento">
          <Image
            alt={`campo di battaglia ${deployment.field}`}
            src={`/img/fields/${deployment.field}`}
            width={400}
            height={400}
          />
        </AccordionItem>
      )}

      {primary && (
        <AccordionItem title="Missione primaria">
          <MissionCard {...primary} />
        </AccordionItem>
      )}

      {secondaries.length > 0 && (
        <AccordionItem title="Missioni secondarie">
          {secondaries.map(({ id, name, rule }) => (
            <AccordionItem classes="mb-2" key={id} title={name}>
              {rule}
            </AccordionItem>
          ))}
        </AccordionItem>
      )}

      {gambit && (
        <AccordionItem title="Gambit">
          <h2>{gambit.name}</h2>
          <p>{gambit.rule}</p>
        </AccordionItem>
      )}
    </div>
  );
};

export default Page;
