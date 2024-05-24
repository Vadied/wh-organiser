import { SecondaryMission } from "@/types/missions";

export const generateTwoDifferentIds = (
  data: SecondaryMission[]
): [string, string] => {
  const range = data.length;
  if (range < 2) return ["1", "1"];

  const random1 = Math.floor(Math.random() * range);
  const random2 = Math.floor(Math.random() * range);
  if (random1 === random2) return generateTwoDifferentIds(data);

  return [data[random1].id, data[random2].id];
};
