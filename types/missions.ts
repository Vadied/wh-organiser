export type PrimaryMission = {
  id: string;
  special?: string;
  name: string;
  rounds: string[];
  endBattle?: string;
  set: string;
};

export type MissionRule = {
  id: string;
  name: string;
  rule: string;
  set: string;
};

export type Gambit = {
  id: string;
  name: string;
  rule: string;
  set: string;
};

export type SecondaryMission = {
  id: string;
  name: string;
  set: string;
  isFixed: boolean;
  rule: string;
  player: "attacker" | "defender";
};

export type Deployment = {
  id: string;
  field: string;
};
