"use client";

import { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { deployments, primaryMissions } from "@/assets/mocks/missions";
import { generateRandomIds } from "@/js/utils";
import { deploy, fixed, gambit, primary, secondary } from "@/assets/params";

const GenerateGame = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [isOn, setIsOn] = useState(
    searchParams.has(deploy) && searchParams.has(primary)
  );

  const generate = () => {
    const params = new URLSearchParams(searchParams);
    const [idDep] = generateRandomIds(deployments, 1);
    const [idMission] = generateRandomIds(primaryMissions, 1);

    params.set(deploy, idDep);
    params.set(primary, idMission);
    replace(`${pathname}?${params}`);
    setIsOn(true);
  };

  const reset = () => {
    const params = new URLSearchParams(searchParams);

    params.delete(deploy);
    params.delete(primary);
    params.delete(fixed);
    params.delete(secondary);
    params.delete(gambit);

    replace(`${pathname}?${params}`);
    setIsOn(false);
  };

  if (isOn)
    return (
      <Suspense>
        <Button classes="w-full" onClick={reset}>
          Reset
        </Button>
      </Suspense>
    );

  return (
    <Suspense>
      <Button classes="w-full" onClick={generate}>
        Genera partita
      </Button>
    </Suspense>
  );
};

export default GenerateGame;
