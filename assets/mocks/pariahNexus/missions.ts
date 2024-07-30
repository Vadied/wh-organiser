import {
  Deployment,
  Gambit,
  MissionRule,
  PrimaryMission,
  SecondaryMission,
} from "@/types/missions";

export const primaryMissions: PrimaryMission[] = [
  {
    id: "1",
    name: "Take and Hold",
    set: "core",
    rounds: [
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)",
      "The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.",
    ],
  },
];

export const missionRules: MissionRule[] = [
  {
    id: "1",
    name: "Hidden Supplies",
    set: "core",
    rule: "In this mission, players must set up one additional objective marker in No Man’s Land.\n\nUnless the Chosen Battlefield mission rule is also in effect, before setting up this new objective marker, players must first move the objective marker in the centre of the battlefield 6” directly towards one of the corners of the battlefield (if No Man’s Land touches any corners of the battlefield, you must move the objective marker towards one of those corners). Players then set up the new objective marker 6” from the centre of the battlefield towards the diagonally opposite corner of the battlefield to the previously moved objective marker.",
  },
];

export const secondaryMissions: SecondaryMission[] = [
  {
    id: "1",
    name: "Area Denial",
    set: "pariahNexus",
    isFixed: false,
    player: "attacker",
    rule: `
    <b>When: End of your turn</b>
    One or more units from your army (excluding AIRCRAFT or battle-shocked) are within 3" of the center of the battlefield and there are no enemy units withing 3" of the center of the battlefield. <b>[2 VP]</b>
    \n - OR -
    \n One or more units from your army (excluding AIRCRAFT or battle-shocked) are within 3" of the center of the battlefield and there are no enemy units withing 6" of the center of the battlefield. <b>[5 VP]</b>
    `,
  },
  {
    id: "2",
    name: "Assassination",
    set: "pariahNexus",
    isFixed: false,
    player: "attacker",
    rule: `
      <b>When: End of your turn</b>
      One or more CHARACTER units were destroyed during this turn <b>[5 VP] [4PV if fixed]</b>
      \n - OR -
      \n All CHARACTER units from your opponents army roaster have been destroyed during the battle <b>[5 VP] [4PV if fixed]</b>
      `,
  },
  {
    id: "3",
    name: "Secure no Man's Land",
    set: "pariahNexus",
    isFixed: false,
    player: "attacker",
    rule: `
      <b>When: End of your turn</b>
      You control one objective marker in No Mans Land <b>[2 VP]</b>
      \n - OR -
      \n You control two or more objective markers in No Mans Land <b>[5 VP]</b>
      `,
  },
  {
    id: "4",
    name: "Storm Hostile",
    set: "pariahNexus",
    isFixed: false,
    player: "attacker",
    rule: `
      <i>When drawn, if it is the first battle round you can draw a new Secondary Mission card. This mission cannotbeen achieved in the first turn</i>
      <b>When: End of your turn</b>
      You control one or more objective markers that were controlled by your opponent at the start of your turn<b>[5 VP]</b>
      \n - OR -
      \n Your opponent did not control any objective markers at the start of your turn and you control one or more objective markers that you did not control at the start of your turn <b>[5 VP]</b>
      `,
  },
  {
    id: "5",
    name: "Recover Assets",
    set: "pariahNexus",
    isFixed: false,
    player: "attacker",
    rule: `
      <b>Start: your shooting phase</b>
      <b>Unit:</b> Two or ore units from your army, if each of those unit is wholly within a different one of the followinf areas: your deployment zone, No Mans Land, your oopponent deployment zone.
      <b>Complete</b> End of your opponent next turn or the end of the battle, if either two or three of those units are on the battlefield, those units recover assets.

      Two unit recover assets <b>[3 VP]</b>
      \n - OR -
      \n Three unit recover assets <b>[6 VP]</b>
      `,
  },
  {
    id: "6",
    name: "Sabotage",
    set: "pariahNexus",
    isFixed: false,
    player: "attacker",
    rule: `
      <b>Start: your shooting phase</b>
      <b>Unit:</b> One unit from your army that is within a terrain feature and not wihitn deployment zone.
      <b>Complete</b>End of your opponent next turn or the end of the battle. 

      Mission completed <b>[3 VP]</b>
      \n - OR -
      \n Mission completed within theenemy deployment zone <b>[6 VP]</b>
      `,
  },
];

export const gambits: Gambit[] = [
  {
    id: "1",
    set: "core",
    name: "Proceed as Planned",
    rule: "If you select this Gambit card, you have chosen not to attempt a gambit.\n\nUntil the end of the battle, you continue to score VP from your Primary Mission.",
  },
];

export const deployments: Deployment[] = [
  {
    id: "1",
    name: "Search and Destroy",
    field: "field_01.png",
  },
];
