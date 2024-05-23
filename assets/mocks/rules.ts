import { title } from "process";

const rules = [
  {
    title: "Muster Armies",
    content:
      "Players first muster their armies, as described in the Core Rules. Remember, all details of a player’s army must be recorded on their Army Roster.",
  },
  {
    title: "Determine Mission",
    content:
      "Players split the cards into their respective decks: Deployment deck; Mission Rule deck; Primary Mission deck; Secondary Mission decks (one for the Attacker, one for the Defender); Gambit decks (one for the Attacker, one for the Defender). Set aside the Secondary Mission and Gambit decks (players will receive these later). Players determine their mission by shuffling and randomly drawing one card from the Deployment, Mission Rule and Primary Mission Decks.",
  },
  {
    title: "Read Mission",
    content:
      "Next players read the Primary Mission and Mission Rule cards they have drawn. The Primary Mission card details how and when players score Victory Points (VP). Players will also score VP by achieving Secondary Missions and Gambits, which are detailed later. Some Primary Mission cards also include additional rules that will apply to the battle. The Mission Rule card details any special rules that apply for the duration of the battle. Players should read and familiarise themselves with these before proceeding.",
  },
  {
    title: "Place Objective Markers",
    content:
      "Players now set up objective markers on the battlefield. Each Deployment card’s deployment map will show players how many objective markers to set up and where each should be placed.",
  },
  {
    title: "Create The Battlefield",
    content:
      "Players now create the battlefield and set up terrain features. Missions are played on rectangular battlefields whose dimensions are approximately 44” by 60”. This can be achieved by placing four Battlezone boards flat on a surface next to each other. Unless otherwise stated,when setting up terrain features, use the guidelines detailed in the Cores Rules. Players must use the rules for terrain features detailed in the Core Rules. Terrain features should not be set up with any impassable sections (such as the walls of a ruin) within 1” of any objective markers.",
  },
  {
    title: "Determine Attacker and Defender",
    content:
      "Players consult the Deployment card drawn for the mission and agree which battlefield edge is the Attacker’s and which is the Defender’s. The players then roll off and the winner decides who will be the Atrtacker and who will be the Defender - this will determine which player uses which deployment zone in the coming battle. Players take their respective Secondary Mission and Gambit decks, shuffle them and place them nearby for later.",
  },
  {
    title: "Select Secondary Missions",
    content:
      "There are two Secondary Mission decks (one for the Attacker, one for the Defender), meaning players can draw the same Secondary Missions. These describe goals that players can achieve to score VP. Each Secondary Mission card will detail when and how it is achieved, as well as how many VP that player scores for achieving it. Each player must now choose whether to use Fixed or Tactical Missions during the battle. To do so, each player first takes their respective Secondary Mission deck. If a player wishes to use Fixed Missions, that Mission symbol - see below) from their Secondary Mission deck and places them face down on the battlefield. If a player wishes to use Tactical Missions, they should instead select any two Secondary Mission cards from their deck that do not have the Fixed Mission symbol and place them face down on the battlefield. Once both players have done so, players reveal their selections. If a player selects two Fixed Mission cards, those Secondary Mission cards are active in every battle round during the battle, and can be achieved and scored in every battle round. The remainder of their Secondary Mission deck will not be used in the coming battle and can be placed to one side. Players’ selected Fixed Mission cards cannot be discarded for any reason. If a player did not select two Fixed Mission cards, then they will use Tactical Missions in the coming battle and they should now reshuffle their Secondary Mission deck. At the start of each of that player’s Command phases, that player must determine which Secondary Mission cards  are active for them by drawing cards from their Secondary Mission deck, if they have fewer than two active Secondary Mission cards. That player has access to the New Orders Stratagem (see below), and can spend CP to  use it after drawing their Secondary Mission cards if they wish. If a player’s Secondary Mission deck runs out, they cannot generate any additional Secondary Missions during the battle. Each time that player achieves a Secondary Mission, after scoring the VP described on that card, that Secondary Mission is then discarded.",
  },
  {
    title: "Declare Battle Formations",
    content: `In the order below, both players secretly note: Which of their Leader units will start the battle attached ( they must specify which Leader unit is attached to which Bodyguard unit).

    Which of their units will start the battle embarked within Transport models (they must specify which units are embarked within which models). Which of their units will start the battle in Reserves (including Strategic Reserves). No more than half the number of units in a player's army can start the battle in Reserves, and the combined points total of those units cannot be more than half the total of their army. Units embarked within a Transport that are set up in Reserves also count as being set up in Reserves for these limits.
    
    When both players have done so, then they reveal their selections to their opponent.
    
    Reserves units cannot arrive during the first battle round and any Strategic Reserves or Reserves that have not arrived on the battlefield by the end of the third battle round count as having been destroyed, as are any units embarked within them (this does not apply to units that are placed into Strategic Reserves after the first battle round has started).`,
  },
  {
    title: "Deploy Armies",
    content: `Players alternate setting up their remaining units one at a time, starting with the Defender. A player’s models must be set up wholly within their deployment zone. If one player finishes deploying all their units, their opponent then deploys the remainder of their units.`,
  },
  {
    title: "Determine First Turn",
    content: `Players roll off and the winner takes the first turn.`,
  },
  {
    title: "Resolve Pre-battle Rules",
    content: `Players alternate resolving any pre-battle rules units from their armies have, starting with the player who will take the first turn.`,
  },
  {
    title: "Begin the Battle",
    content: `The first battle round begins. Players continue to resolve battle rounds until the battle ends.
    
    At the end of each player’s turn, if that player is using Tactical Missions, they can discard one or more of their active Secondary Mission cards. If they do, and if it is not the fifth battle round, that player gains 1CP. This represents high command diverting strategic resources that had been allocated to now-obsolete objectives to instead engage new targets of opportunity.

    At the end of the third battle round, players generate Gambits`,
  },
  {
    title: "End the Battle",
    content: `The battle ends after five battle rounds have been completed. If one player has no models remaining in their army at the start of their turn, the other player can continue to play out their turns until the battle
    ends.`,
  },
  {
    title: "Determine Victor",
    content: `At the end of the battle, the player with the most VP is the winner. If the players are tied, the battle is a draw.
    
    Each player can score a maximum of 50VP from Primary Missions and/or Gambits (any excess VP awarded are lost) and a maximum of 40VP from Secondary Missions (any excess VP awarded are lost), for a possible total of 90VP. If a player is using Fixed Missions, that player can score a maximum of 20VP from each of the Fixed Mission cards they selected before the battle (any excess VP awarded are lost). If every model in a player’s army is painted to a Battle Ready standard, that player is awarded a bonus 10VP. This gives each player a maximum total score of 100VP.
    
    New Orders Stratagem
    COST: 1CP
    WHEN: End of your Command phase.
    TARGET: One of your active Secondary Mission cards.
    EFFECT: Discard it and draw one new Secondary Mission card.
    RESTRICTIONS: You can only use this Stratagem once per battle.
    `,
  },
  {
    title: "Gambit deck",
    content: `There are two Gambit decks (one for each player) with identical cards. These contain challenging goals that players can attempt to achieve by the end of the battle instead of attempting to score any more VP from their Primary Mission.
    
    At the end of the third battle round, before starting the next battle round, players can generate Gambits and choose whether to attempt to achieve one.

    Each player takes their Gambit deck and removes the Proceed as Planned card, placing it to one side, before shuffling the remaining Gambit cards and randomly discarding one. Each player then adds their Proceed as Planned card back in, to have a hand containing three cards.

    Players then secretly choose one of these three cards and place it face down on the battlefield. Once both players have done so, they reveal their choice.

    If a player reveals their Proceed as Planned card, they are not attempting a Gambit in this battle and continue to score VP for achieving the goals as listed on their Primary Mission card.
    
    Otherwise, the player is attempting a Gambit, and until the end of the battle that player cannot score any more VP as described on their Primary Mission card (any VP scored so far are kept). Instead, at the end of the battle, if they successfully completed the goal described on the Gambit card, they score VP as detailed on that Gambit card.
        `,
  },
];

export default rules;
