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
  {
    id: "2",
    name: "Scorched Earth",
    set: "core",
    special:
      "From the second battle round, in each player’s Shooting phase, the player whose turn it is can select one unit from their army that is not Battle-shocked and is eligible to shoot. Until the end of that turn, that unit is not eligible to shoot or declare a charge. At the start of its controlling player’s next Command phase, if that unit is within 1” of an objective marker that the player whose turn it is controls, that objective marker is burned and removed from the battlefield",
    rounds: [
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)",
      "The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.",
    ],
    endBattle:
      "Each player scores 5VP if one or more objective markers in No Man’s Land were burned by a unit from their army, and 10VP if the objective marker in their opponent’s deployment zone was burned.",
  },
  {
    id: "3",
    name: "Purge the Foe",
    set: "core",
    special:
      "At the end of the battle round, each player scores 4VP if one of more enemy units were destroyed that battle round, and an extra 4VP if more enemy units than friendly units were destroyed that battle round.\n\nNote that a unit can, if it is returned to the battlefield for any reason, potentially contribute to this Primary Mission several times (assuming it is returned and subsequently destroyed several times over)",
    rounds: [
      "At the end of each Command phase, the player whose turn it is scores 4VP if they control one or more objective markers, and an extra 4VP if they control more objective markers than their opponent controls.",
      "At the end of each Command phase, the player whose turn it is scores 4VP if they control one or more objective markers, and an extra 4VP if they control more objective markers than their opponent controls.",
      "At the end of each Command phase, the player whose turn it is scores 4VP if they control one or more objective markers, and an extra 4VP if they control more objective markers than their opponent controls.",
      "The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.",
    ],
  },
  {
    id: "4",
    name: "Sites of Power",
    set: "core",
    special:
      "The objective markers in No Man’s Land are sites of power. At the end of each command phase, the player whose turn it is empowers all sites of power that they control that have one or more Character models from their army within range; each site of power remains empowered by that player while one or more of their Character models remains within range of itFrom the second battle round, in each player’s Shooting phase, the player whose turn it is can select one unit from their army that is not Battle-shocked and is eligible to shoot. Until the end of that turn, that unit is not eligible to shoot or declare a charge. At the start of its controlling player’s next Command phase, if that unit is within 1” of an objective marker that the player whose turn it is controls, that objective marker is burned and removed from the battlefield",
    rounds: [
      "At the end of each player’s Command phase, the player whose turn it is scores VP as follows (up to 15VP pe\nNote that these are cumulative, so a player that controls one objective marker they have also empowered will score 6VP that turn",
      "At the end of each player’s Command phase, the player whose turn it is scores VP as follows (up to 15VP pe\nNote that these are cumulative, so a player that controls one objective marker they have also empowered will score 6VP that turn",
      "At the end of each player’s Command phase, the player whose turn it is scores VP as follows (up to 15VP pe\nNote that these are cumulative, so a player that controls one objective marker they have also empowered will score 6VP that turn",
      "The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.",
    ],
  },
  {
    id: "5",
    name: "The Ritual",
    set: "core",
    special:
      "When setting up the battlefield, remove all objective markers in No Man’s Land except the one closest to the centre of the battlefield.\n\nIn each player’s Shooting phase, the player whose turn it is can select one unit from their army that is not Battle-shocked and is eligible to shoot. Until the end of that turn, that unit is not eligible to shoot or declare a charge. At the end of that turn, the player whose turn it is can set up one objective marker wholly within No Man’s Land and within 1” of that unit provided it can be set up exactly 9” from one other objective marker and not within 6” of any other objective marker.",
    rounds: [
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker in No Man’s Land they control (up to 15VP per turn).",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker in No Man’s Land they control (up to 15VP per turn).",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker in No Man’s Land they control (up to 15VP per turn).",
      "The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.",
    ],
  },
  {
    id: "6",
    name: "Priority Targets",
    set: "core",
    rounds: [
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)",
    ],
    endBattle:
      "Each player scores 5VP for each objective marker they control (up to 15VP per player)",
  },
  {
    id: "7",
    name: "Deploy Servo-Skulls",
    set: "core",
    special:
      "The objective markers that start the battle in No Man’s Land are servo-skulls. At the end of each turn, each of these objective markers can be moved up to 6” in any direction by the player that controls it. When moving objective markers, they cannot end that move on top of any other objective marker or model, or inside impassable parts of terrain features (such as the walls of a ruin).",
    rounds: [
      "At the end of each turn, the player whose turn it is scores VP as follows:\n\n2VP for each servo-skull that is wholly within 12” of their opponent’s deployment zone.\n5VP for each servo-skull that is wholly within 6” of their opponent’s deployment zone.\n8VP for each servo-skull that is wholly within their opponent’s deployment zone.\n\nNote that these are cumulative, so if a servo-skull is wholly within your opponent’s deployment zone, you would score 15VP from that servo-skull at the end of your turn.",
      "At the end of each turn, the player whose turn it is scores VP as follows:\n\n2VP for each servo-skull that is wholly within 12” of their opponent’s deployment zone.\n5VP for each servo-skull that is wholly within 6” of their opponent’s deployment zone.\n8VP for each servo-skull that is wholly within their opponent’s deployment zone.\n\nNote that these are cumulative, so if a servo-skull is wholly within your opponent’s deployment zone, you would score 15VP from that servo-skull at the end of your turn.",
      "At the end of each turn, the player whose turn it is scores VP as follows:\n\n2VP for each servo-skull that is wholly within 12” of their opponent’s deployment zone.\n5VP for each servo-skull that is wholly within 6” of their opponent’s deployment zone.\n8VP for each servo-skull that is wholly within their opponent’s deployment zone.\n\nNote that these are cumulative, so if a servo-skull is wholly within your opponent’s deployment zone, you would score 15VP from that servo-skull at the end of your turn.",
    ],
  },
  {
    id: "8",
    name: "Vital Ground",
    set: "core",
    special:
      "If you draw this and the Hidden Supplies Mission Rule Card, discard this card and draw a new Primary Mission card.\n\nAfter setting up the battlefield, remove the objective marker in No Man’s Land that is closest to the centre of the battlefield.",
    rounds: [
      "At the end of each Command phase, the player whose turn it is scores VP as follows:\n\nIf they control the objective marker in their own deployment zone, they score 2VP.\nFor each objective marker in No Man’s Land they control, they score 5VP.\nIf they control the objective marker in their opponent’s deployment zone, they score 6VP.",
      "At the end of each Command phase, the player whose turn it is scores VP as follows:\n\nIf they control the objective marker in their own deployment zone, they score 2VP.\nFor each objective marker in No Man’s Land they control, they score 5VP.\nIf they control the objective marker in their opponent’s deployment zone, they score 6VP.",
      "At the end of each Command phase, the player whose turn it is scores VP as follows:\n\nIf they control the objective marker in their own deployment zone, they score 2VP.\nFor each objective marker in No Man’s Land they control, they score 5VP.\nIf they control the objective marker in their opponent’s deployment zone, they score 6VP.",
      "The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.",
    ],
  },
  {
    id: "9",
    name: "Supply Drop",
    set: "core",
    special:
      "At the start of the battle, players randomly select two different objective markers in No Man’s Land: the first selected is the Alpha objective, the second is the Omega objective. At the start of the fourth battle round, the Alpha objective is removed from the battlefield. At the start of the fifth battle round, all objective markers in No Man’s Land apart from the Omega objective are also removed.",
    rounds: [
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control in No Man’s Land.",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control in No Man’s Land.",
      "At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control in No Man’s Land.",
      "The player who has the first turn scores 15VP at the end of their command phase if they control the objective marker in No Man’s Land.\n\nThe player who has the second turn scores 15VP at the end of their turn if they control the objective maker in No Man’s Land",
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
  {
    id: "2",
    name: "Chilling Rain",
    set: "core",
    rule: "In this mission, no additional mission rules apply",
  },
  {
    id: "3",
    name: "Sweep and Clear",
    set: "core",
    rule: "In this mission, if a player controls an objective marker at the end of their Command phase, that objective marker remains under their control, even if they have no models within range of it, unless their opponent controls it at the end of any subsequent Command phase.",
  },
  {
    id: "4",
    name: "Minefields",
    set: "core",
    rule: "In this mission, each time an Advance roll of 6 is made for a unit, that unit suffers 1 mortal wound.",
  },
  {
    id: "5",
    name: "Targets of Opportunity",
    set: "core",
    rule: "In this mission, if a player is using Tactical Missions, then each time that player determines which Secondary Mission cards are active for them, if they have fewer than 3 active Secondary Mission cards, that player draws from their Secondary Mission deck until they have 3 Secondary Mission cards.\n\nIn this mission, if a player is using Fixed Missions, then in addition to the 2 Fixed Mission cards, that player will also draw cards from their Secondary Mission deck during the battle. At the end of the Select Secondary Missions step, that player should retrieve their Secondary Mission deck, remove all the Fixed Mission cards they did not select at the start of that step, then shuffle the remaining cards. Then, at the start of each of that player’s Command phases, if that player has fewer than 3 active Secondary Mission cards (including their Fixed Mission cards), they draw from their Secondary Mission deck until they have 3 Secondary Mission cards. That player has access to the New Orders Strategem, and can spend CP to use it after drawing their Secondary Mission cards if they wish (remember that Fixed Mission cards cannot be discarded for any reason).",
  },
  {
    id: "6",
    name: "Scrambler Fields",
    set: "core",
    rule: "In this mission:\n\nPlayers’ units with the Infiltrators ability cannot be set up within range of an objective marker that is either in No Man’s Land or their opponent’s deployment zone.\nPlayers’ units with the Scout ability that make a move before the first turn begins cannot end that move within range of an objective marker that is either in No Man’s Land or their opponent’s deployment zone.\nIf any rule is used to redeploy a unit, that rule cannot be used to set up that unit within range of an objective marker in No Man’s Land.\nWhen a player’s Reserves and Strategic Reserves units are set up on the battlefield, they cannot be set up within range of an objective marker that is either in No Man’s Land or their opponent’s deployment zone.",
  },
  {
    id: "7",
    name: "Delayed Reserves",
    set: "core",
    rule: "In this mission, until the start of the third battle round, each time a Reserves or Strategic Reserves unit wishes to arrive on the battlefield, the controlling player must make a Reserves roll for it. To do so, that player rolls one D6: on a 3+, that unit arrives on the battlefield; otherwise, the Reserves roll fails and that unit does not arrive this turn.",
  },
  {
    id: "8",
    name: "Chosen Battlefield",
    set: "core",
    rule: "In this mission, objective markers are not placed as shown on the Deployment card drawn. Instead, players roll off at the start of the Place Objective Markers step, then alternate setting up objective markers, one at a time, starting with the winner of the roll off.\n\nOne objective marker must be placed wholly within each deployment zone, and the remaining objective markers must be played wholly within No Man’s Land, as shown on the Deployment card drawn. Objective markers must be placed more than 6” away from any battlefield edge and more than 9” away from all other objective markers.\n\nIf for whatever reason it is not possible to set up an objective marker as described above, it is not placed on the battlefield.\n\nIf any rules require players to set up additional objective markers (e.g. Hidden Supplies) during the Place Objective Markers step, players set them up as described on this Mission Rule card.\n\nIf any rules instruct players to remove one or more objective markers, do so after setting them all up.",
  },
  {
    id: "9",
    name: "Maelstrom of Battle",
    set: "core",
    rule: "In this mission, shuffle the remaining Mission Rule cards together before drawing 2 new Mission Rule cards.\n\nIf either of these new Mission Rule cards is Chilling rain, discard that Mission Rule card and draw 2 additional new Mission Rule cards (for a total of 3 new Mission Rule cards).\n\nApply all the drawn Mission Rule cards to the battle.",
  },
  {
    id: "10",
    name: "Supply Lines",
    set: "core",
    rule: "In this mission, if a player controls the objective marker in their own deployment zone at the start of their Command phase, they roll one D6: on a 4+, that player gains 1CP.",
  },
  {
    id: "11",
    name: "Secret Intel",
    set: "core",
    rule: "In this mission, in each player’s Command phase, the first time that player draws Secondary Mission cards that phase, that player can draw one additional Secondary Mission card, and then discard one of their active Secondary Mission cards.",
  },
  {
    id: "12",
    name: "Vox Static",
    set: "core",
    rule: "In this mission, the Command Re-roll Stratagem and New Orders Stratagem both cost 2CP to use.",
  },
];

export const secondaryMissions: SecondaryMission[] = [
  {
    id: "1",
    name: "Behind Enemy Lines",
    set: "core",
    isFixed: true,
    player: "attacker",
    rule: "At the end of your turn, if two or more units from your army (excluding Aircraft) are wholly within your opponent’s deployment zone, this Secondary Mission is achieved and you score 4VP\n\nIf, at the end of your turn, only one unit from your army (excluding Aircraft) is wholly within your opponent’s deployment zone, this Secondary Mission is still achieved, but in this instance you score 2VP instead of 4VP.\n\nIf you are using Tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP (for a maximum of 5VP).",
  },
  {
    id: "2",
    name: "Assassination",
    set: "core",
    isFixed: true,
    player: "attacker",
    rule: "If you are using Fixed Missions, then while this Secondary Mission is active, each time an enemy Character model is destroyed, you score 4VP.\n\nIf you are using Tactical Missions, then at the end of the turn, if either of the conditions below are satisfied, this Secondary Mission is achieved and you score 5VP:\n\nOne or more enemy Character units were destroyed this turn.\nAll Character units from your opponent’s Army Roster have been destroyed during the battle.\n\nNote that if you are using Tactical Missions, this Secondary Mission is achieved even if such a unit was destroyed and then subsequently resurrected for any reason.",
  },
  {
    id: "3",
    name: "Bring it Down",
    set: "core",
    isFixed: true,
    player: "attacker",
    rule: "While this Secondary Mission is active, each time an enemy Monster or Vehicle model is destroyed, you score 2VP and an extra 1VP for each of the conditions below that are satisfied (all are cumulative):\n\nThe destroyed model had a Wounds characteristic of 10+\nThe destroyed model had a Wounds characteristic of 15+\nThe destroyed model had a Wounds characteristic of 20+\nNote that VP are scored even if such a model is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.\n\nIf you are using Tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP. However, if you are using Tactical Missions, you cannot score more than 8VP in total from this Secondary Mission.",
  },
  {
    id: "4",
    name: "Storm Hostile Objective",
    set: "core",
    isFixed: true,
    player: "attacker",
    rule: "At the end of your turn, if either of the below conditions are satisfied, this Secondary Mission is achieved and you score 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions:\n\nYou control one or more objective markers that were controlled by your opponent at the start of your turn.\nYour opponent did not control any objective markers at the start of your turn and you control one or more objective markers that you did not control at the start of your turn.\nThis Secondary Mission cannot be achieved during the first battle round; if you randomly drew this Secondary Mission card during the first battle round, draw a new Secondary Mission card and shuffle this Secondary Mission card back into your Secondary Mission deck.",
  },
  {
    id: "5",
    name: "Engage on All Fronts",
    set: "core",
    isFixed: true,
    player: "attacker",
    rule: "At the end of your turn, if you have one or more qualifying units (see below) from your army wholly within three or more different table quarters, and those units are all more than 3” away from any other table quarter, this Secondary Mission is achieved and you score 4VP if you have qualifying units in four different table quarters, or 2VP if you have qualifying units in three different table quarters.\nWhile a unit is Battle-shocked, it is not a qualifying unit.\n\nIf, when you draw this Secondary Mission card, you only have one or two qualifying units remaining in your army, you can discard this Secondary Mission card and draw a new Secondary Mission card.\n\nIf you are using tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP (for a maximum of 5VP).",
  },
  {
    id: "6",
    name: "Cleanse",
    set: "core",
    isFixed: true,
    player: "attacker",
    rule: "In your Shooting phase, you can select one or more units from your army that are not Battle-shocked and are eligible to shoot. Until the end of your turn, the units you selected are not eligible to shoot or declare a charge.\nAt the end of your turn, each objective marker that is not within your deployment zone that you control that has one or more of these selected units within range is cleansed by your army.\nIf one or more objective markers are cleansed by your army this turn, this Secondary Mission is achieved and you score a number of VP depending on the number of objective markers cleansed by your army this turn, as follows:\n1 objective marker cleansed = 2VP if you are using Fixed Missions, or 3VP if you are using Tactical Missions.\n2 or more objective markers cleansed = 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions.",
  },
  {
    id: "7",
    name: "Deploy Teleport Homers",
    set: "core",
    isFixed: true,
    player: "attacker",
    rule: "In your shooting phase, you can select one unit from your army that is not Battle-shocked and is eligible to shoot. Until the end of your turn, that unit is not eligible to shoot or declare a charge.\n\nAt the end of your turn, if that unit is within your opponents deployment zone, or within 6” of the centre of the battlefield, it deploys a teleport homer at that locations, this Secondary Mission is achieved and you score a number of VP depending on where the teleport homer was deployed, as follows:\n\nCentre of battlefield = 2VP if you are using Fixed Missions, or 3VP if you are using Tactical Missions\nOpponent’s deployment zone = 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions",
  },
  {
    id: "8",
    set: "core",
    isFixed: false,
    name: "Investigate Signals",
    player: "attacker",
    rule: "In your Shooting phase, you can select one or more units from your army that are not Battle-shocked and are eligible to shoot. Until the end of your turn, the units you selected are not eligible to shoot or declare a charge.\n\nAt the end of your turn, each corner of the battlefield that has one or more of these selected units wholly within 9” of it is scanned by your army.\n\nIf one or more corners are scanned by your army, this Secondary Mission is achieved and you score 2VP for each corner scanned by your army this turn.",
  },
  {
    id: "9",
    set: "core",
    isFixed: false,
    name: "No Prisoners",
    player: "attacker",
    rule: "While this Secondary Mission is active, each time an enemy unit is destroyed, you score 2VP (to a maximum of 5VP).\n\nNote that VP are scored even if such a unit is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.",
  },
  {
    id: "10",
    set: "core",
    isFixed: false,
    name: "Extend Battle Lines",
    player: "attacker",
    rule: "At the end of your turn, if you control one or more objective markers in your own deployment zone and you also control one or more objective markers in No Man’s Land, this Secondary Mission is achieved and you score 5VP.\n\nIf you only have one unit remaining in your army, then this Secondary Mission is instead achieved at the end of your turn if that unit controls one objective marker in No Man’s Land, but in this instance you score 2VP instead of 5VP.",
  },
  {
    id: "11",
    set: "core",
    isFixed: false,
    name: "Defend Stronghold",
    player: "attacker",
    rule: "At the end of your opponent’s turn, or at the end of the battle (whichever comes first), if you control one or more objective markers in your own deployment zone, this Secondary Mission is achieved and you score 3VP.\n\nThis Secondary Mission cannot be achieved during the first battle round; if you draw this Secondary Mission card during the first battle round, draw a new Secondary Mission card and shuffle this Secondary Mission card back into your Secondary Mission deck.",
  },
  {
    id: "12",
    set: "core",
    isFixed: false,
    player: "attacker",
    name: "Overwhelming Force",
    rule: "While this Secondary Mission is active, each time an enemy unit that started the turn within range of an objective marker is destroyed, you score 3VP (to a maximum of 5VP).\n\nNote that VP are scored even if such a unit is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.",
  },
  {
    id: "13",
    set: "core",
    isFixed: false,
    player: "attacker",
    name: "Secure No Man’s Land",
    rule: "At the end of your turn, if you control two or more objective markers in No Man’s Land, this Secondary Mission is achieved and you score 5VP.\n\nIf, at the end of your turn, you only control one objective marker in No Man’s Land, this Secondary Mission is still achieved, but in this instance you score 2VP instead of 5VP.",
  },
  {
    id: "14",
    set: "core",
    isFixed: false,
    name: "Area Denial",
    player: "attacker",
    rule: "At the end of your turn, if one or more units from your army (excluding Battle-shocked units) are wholly within 6” of the centre of the battlefield, and there are no enemy units wholly within 6” of the centre of the battlefield, this Secondary Mission is achieved and you score 5VP.\n\nIf, at the end of your turn, there are one or more enemy units wholly within 6” of the centre of the battlefield, but there are no enemy units within 3” of the centre of the battlefield, then this Secondary Mission is still achieved, but in this instance you score 3VP instead of 5VP.",
  },
  {
    id: "15",
    set: "core",
    isFixed: false,
    name: "A Tempting Target",
    player: "attacker",
    rule: "When this Secondary Mission card is drawn, your opponent must select one objective marker in No Man’s Land.\n\nAt the end of your turn, if you control that selected objective marker, this Secondary Mission is achieved and you score 5VP.",
  },
  {
    id: "16",
    set: "core",
    isFixed: false,
    name: "Capture Enemy Outpost",
    player: "attacker",
    rule: "At the end of your turn, if you control one or more objective markers in your opponent’s deployment zone, this Secondary Mission is achieved and you score 8VP.",
  },
];

export const gambits: Gambit[] = [
  {
    id: "1",
    set: "core",
    name: "Proceed as Planned",
    rule: "If you select this Gambit card, you have chosen not to attempt a gambit.\n\nUntil the end of the battle, you continue to score VP from your Primary Mission.",
  },
  {
    id: "2",
    set: "core",
    name: "Delaying Tactics",
    rule: "Determine Distraction Target: Your Distraction target will be equal to half the number of enemy units that are within Engagement Range of one or more units from your army (rounding up) at the end of your fifth turn. If your Distraction target is less than 4, it is increased to 4.\n\nDistract Enemy Units: At the end of your fifth turn, roll one D6 for each enemy unit that is within Engagement Range of one or more units from your army. Add 1 to the result if that enemy unit is Battle-shocked and subtract 1 if one or more of the units from your army that are within Engagement Range of it are Battle-shocked. On a 4+, that enemy unit has been successfully delayed.\n\nDetermine Gambit Success: If the number of enemy units that have been successfully delayed is greater than or equal to your Distraction target, this Gambit is successfully completed and you score 30VP.",
  },
  {
    id: "3",
    set: "core",
    name: "Orbital Strike Coordinates",
    rule: "At the end of your fifth turn, if one or more units from your army that are not Battle-shocked are wholly within 9” of a corner of the battlefield, and those units are not within your own deployment zone, roll 2D6.\n\nAdd 1 to the result for every other corner of the battlefield that has one or more units from your army wholly within 9” of it (excluding units that are Battle-shocked or within Engagement Range of any enemy units).\n\nIf the final result is 12 or more, this Gambit is successfully completed and you score 30VP.",
  },
  {
    id: "4",
    set: "core",
    name: "Emergency Evacuation",
    rule: "Determine Evacuation Target: Your Evacuation target will be equal to half the number of units from your army that are on the battlefield at the end of the battle (rounding up), including units embarked with Transport models that are on the battlefield. If your Evacuation target is less than 4, it is increased to 4.\n\nEvacuate Units: At the end of your fifth turn, roll one D6 for each unit from your army that is wholly within 6” of the centre of the battlefield, subtracting 1 from the result if that unit is Battle-shocked. On a 4+, that unit (and any units embarked within it) are marked for evacuation.\n\nDetermine Gambit Success: If the number of your units that are marked for evacuation is greater than or equal to your Evacuation target, this Gambit is successfully completed and you score 30VP.",
  },
];

export const deployments: Deployment[] = [
  {
    id: "1",
    name: "Search and Destroy",
    field: "field_01.png",
  },
  {
    id: "2",
    name: "Dawn of War",
    field: "field_02.png",
  },
  {
    id: "3",
    name: "Sweeping Engagement",
    field: "field_03.png",
  },
  {
    id: "4",
    name: "Crucible of Battle",
    field: "field_04.png",
  },
  {
    id: "5",
    name: "Hammer and Anvil",
    field: "field_05.png",
  },
];
