import { PrimaryMission } from "@/types/missions";
import React from "react";

type Props = PrimaryMission & {};
const MissionCard = ({ name, special, rounds, endBattle }: Props) => {
  return (
    <div className="max-h-48 overflow-auto">
      {special && (
        <p className="mb-2">
          <span className="text-bold text-success">Speciale:</span> {special}
        </p>
      )}
      {rounds.map((round, index) => (
        <p key={index} className="mb-2">
          <span className="text-bold text-success">Round {index + 2}:</span>{" "}
          {round}
        </p>
      ))}
      {endBattle && (
        <p>
          <span className="text-bold text-success">Fine battaglia:</span>{" "}
          {endBattle}
        </p>
      )}
    </div>
  );
};

export default MissionCard;
