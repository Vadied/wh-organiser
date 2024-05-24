"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { deployments, primaryMissions } from "@/assets/mocks/missions";
import { generateRandomIds } from "@/js/utils";
import { deploy, primary } from "@/assets/params";

const GenerateGame = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const generate = () => {
    const params = new URLSearchParams(searchParams);
    const [idDep] = generateRandomIds(deployments, 1);
    const [idMission] = generateRandomIds(primaryMissions, 1);

    params.set(deploy, idDep);
    params.set(primary, idMission);
    replace(`${pathname}?${params}`);
  };

  return <Button onClick={generate}>Genera</Button>;
};

export default GenerateGame;
