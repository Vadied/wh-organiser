import rules from "@/assets/mocks/rules";
import Accordion from "@/components/Accordion";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl mb-8">Sommario</h1>
      <p className="mb-4">
        A Leviathan Chapter Approved battle is waged by following the sequence
        below. Chapter Approved battles are designed for Incursion and Strike
        Force battle sizes.
      </p>

      <Accordion items={rules} />

      <h2 className="text-2xl mt-4  mb-4">8 - Declare Battle Formations</h2>
      <p>In the order below, both players secretly note:</p>

      <p>
        {
          "Which of their Leader units will start the battle attached ( they must specify which Leader unit is attached to which Bodyguard unit).\nWhich of their units will start the battle embarked within Transport models (they must specify which units are embarked within which models).\nWhich of their units will start the battle in Reserves (including Strategic Reserves). No more than half the number of units in a player's army can start the battle in Reserves, and the combined points total of those units cannot be more than half the total of their army. Units embarked within a Transport that are set up in Reserves also count as being set up in Reserves for these limits."
        }
      </p>

      <p>
        When both players have done so, then they reveal their selections to
        their opponent.
      </p>

      <p>
        Reserves units cannot arrive during the first battle round and any
        Strategic Reserves or Reserves that have not arrived on the battlefield
        by the end of the third battle round count as having been destroyed, as
        are any units embarked within them (this does not apply to units that
        are placed into Strategic Reserves after the first battle round has
        started).
      </p>

      <h2 className="text-2xl mt-4  mb-4">9 - Deploy Armies</h2>
      <p>
        Players alternate setting up their remaining units one at a time,
        starting with the Defender. A player’s models must be set up wholly
        within their deployment zone. If one player finishes deploying all their
        units, their opponent then deploys the remainder of their units.
      </p>

      <h2 className="text-2xl mt-4  mb-4">10 - Determine First Turn</h2>
      <p>Players roll off and the winner takes the first turn.</p>

      <h2 className="text-2xl mt-4  mb-4">11 - Resolve Pre-battle Rules</h2>
      <p>
        Players alternate resolving any pre-battle rules units from their armies
        have, starting with the player who will take the first turn.
      </p>

      <h2 className="text-2xl mt-4  mb-4">12 - Begin the Battle</h2>
      <p>
        The first battle round begins. Players continue to resolve battle rounds
        until the battle ends.
      </p>

      <p>
        At the end of each player’s turn, if that player is using Tactical
        Missions, they can discard one or more of their active Secondary Mission
        cards. If they do, and if it is not the fifth battle round, that player
        gains 1CP. This represents high command diverting strategic resources
        that had been allocated to now-obsolete objectives to instead engage new
        targets of opportunity.
      </p>

      <p>At the end of the third battle round, players generate Gambits</p>

      <h2 className="text-2xl mt-4  mb-4">13 - End the Battle</h2>
      <p>
        The battle ends after five battle rounds have been completed. If one
        player has no models remaining in their army at the start of their turn,
        the other player can continue to play out their turns until the battle
        ends.
      </p>

      <h2 className="text-2xl mt-4  mb-4">14 - Determine Victor</h2>
      <p>
        At the end of the battle, the player with the most VP is the winner. If
        the players are tied, the battle is a draw.
      </p>

      <p>
        Each player can score a maximum of 50VP from Primary Missions and/or
        Gambits (any excess VP awarded are lost) and a maximum of 40VP from
        Secondary Missions (any excess VP awarded are lost), for a possible
        total of 90VP. If a player is using Fixed Missions, that player can
        score a maximum of 20VP from each of the Fixed Mission cards they
        selected before the battle (any excess VP awarded are lost). If every
        model in a player’s army is painted to a Battle Ready standard, that
        player is awarded a bonus 10VP. This gives each player a maximum total
        score of 100VP.
      </p>

      <p>New Orders Stratagem</p>
      <p>COST: 1CP</p>

      <p>WHEN: End of your Command phase.</p>

      <p>TARGET: One of your active Secondary Mission cards.</p>

      <p>EFFECT: Discard it and draw one new Secondary Mission card.</p>

      <p>RESTRICTIONS: You can only use this Stratagem once per battle.</p>

      <h2 className="text-2xl mt-4  mb-4">Gambit Deck</h2>
      <p>
        There are two Gambit decks (one for each player) with identical cards.
        These contain challenging goals that players can attempt to achieve by
        the end of the battle instead of attempting to score any more VP from
        their Primary Mission.
      </p>

      <p>
        At the end of the third battle round, before starting the next battle
        round, players can generate Gambits and choose whether to attempt to
        achieve one.
      </p>

      <p>
        Each player takes their Gambit deck and removes the Proceed as Planned
        card, placing it to one side, before shuffling the remaining Gambit
        cards and randomly discarding one. Each player then adds their Proceed
        as Planned card back in, to have a hand containing three cards.
      </p>

      <p>
        Players then secretly choose one of these three cards and place it face
        down on the battlefield. Once both players have done so, they reveal
        their choice.
      </p>

      <p>
        If a player reveals their Proceed as Planned card, they are not
        attempting a Gambit in this battle and continue to score VP for
        achieving the goals as listed on their Primary Mission card.
      </p>

      <p>
        Otherwise, the player is attempting a Gambit, and until the end of the
        battle that player cannot score any more VP as described on their
        Primary Mission card (any VP scored so far are kept). Instead, at the
        end of the battle, if they successfully completed the goal described on
        the Gambit card, they score VP as detailed on that Gambit card.
      </p>
    </>
  );
};

export default Page;
