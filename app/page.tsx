import {
  deployments,
  gambits,
  primaryMissions,
  secondaryMissions,
} from "@/assets/mocks/missions";
import AccordionItem from "@/components/AccordionItem";
import Counter from "@/components/Counter";
import GenerateGame from "@/components/GenerateGame";
import MissionCard from "@/components/PrimaryMissions/MissionCard";
import Image from "next/image";

type Props = {
  searchParams?: {
    [key: string]: string;
  };
};
export default async function IndexPage({ searchParams }: Props) {
  const { dp = "", sm = "", pm = "", gm = "", fixed } = searchParams || {};

  const deployment = deployments.find((d) => d.id === dp);
  const primary = primaryMissions.find((m) => m.id === pm);
  const secondaries = secondaryMissions.filter((m) =>
    sm.split("-").includes(m.id)
  );
  const gambit = gambits.find((g) => g.id === gm);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <GenerateGame />
        </div>

        <AccordionItem title="Giocatore 1">
            <Counter classes="mb-4" name="Vittoria" value={0} />
            <Counter name="Comando" value={0} />
        </AccordionItem>

        <AccordionItem title="Giocatore 2">
            <Counter classes="mb-4" name="Vittoria" value={0} />
            <Counter name="Comando" value={0} />
        </AccordionItem>

        <AccordionItem title="Schieramento">
          {!deployment && <p>Seleziona uno schieramento</p>}
          {deployment && (
            <Image
              alt={`campo di battaglia ${deployment.field}`}
              src={`/img/fields/${deployment.field}`}
              width={400}
              height={400}
            />
          )}
        </AccordionItem>

        <AccordionItem title="Missione primaria">
          {!primary && <p>Seleziona una missione primaria</p>}
          {primary && (
            <AccordionItem classes="mb-2" title={primary.name}>
              <MissionCard {...primary} />
            </AccordionItem>
          )}
        </AccordionItem>

        <AccordionItem title="Missioni secondarie">
          {!secondaries.length && (
            <p>Seleziona almeno una missione secondaria</p>
          )}
          {secondaries.map(({ id, name, rule }) => (
            <AccordionItem classes="mb-2" key={id} title={name}>
              {rule}
            </AccordionItem>
          ))}
        </AccordionItem>

        <AccordionItem title="Gambit">
          {!gambit && <p>Genera un gambit</p>}
          {gambit && (
            <>
              <h2>{gambit.name}</h2>
              <p>{gambit.rule}</p>
            </>
          )}
        </AccordionItem>
      </div>
    </main>
  );
}
