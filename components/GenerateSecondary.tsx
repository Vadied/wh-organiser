"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { secondaryMissions } from "@/assets/mocks/missions";
import { useState } from "react";
import { generateTwoDifferentIds } from "@/js/utils";

const GenerateSecondary = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const fixedParam = searchParams.get("fixed") === "true";
  const [isFixed, setIsFixed] = useState(fixedParam);

  const generate = () => {
    const params = new URLSearchParams(searchParams);
    const filtered = secondaryMissions.filter((m) => !isFixed || m.isFixed);
    const [id1, id2] = generateTwoDifferentIds(filtered);

    params.set("missions", `${id1}-${id2}`);

    replace(`${pathname}?${params}`);
  };

  const toggleFixed = () => {
    const params = new URLSearchParams(searchParams);
    params.set("fixed", isFixed ? "true" : "false");

    replace(`${pathname}?${params}`);
    setIsFixed(!isFixed);
  };

  return (
    <div className="flex gap-5 mb-4 w-full justify-between">
      <Button onClick={generate}>Genera</Button>
      <Button type={isFixed ? "primary" : "secondary"} onClick={toggleFixed}>
        Fixed
      </Button>
    </div>
  );
};

export default GenerateSecondary;
