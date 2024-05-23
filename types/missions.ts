
export type PrimaryMission = {
    id: string;
    special?: string;
    name: string;
    battleRound: string[];
    endBattle?: string;
    set: string;
}

export type MissionRule = {
    id: string;
    name: string;
    rule: string;
    set: string;
}

export type Gambit = {
    id: string;
    name: string;
    rule: string;
    set: string;
}

export type SecondaryMission = {
    id: string;
    name: string;
    set: string;
    type: "fixed" | "tactical"
    rule: string;
}

export type Deployment = {
    id: string;
    field: string;
}
