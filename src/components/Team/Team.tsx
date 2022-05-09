import React from 'react';
import { Unit } from '../../units/Unit';
import { Card } from '../Card/Card';
import { v4 as uuidv4 } from 'uuid';
import s from './Team.module.css';

export interface ITeam {
  id: number;
  turnUnit: Unit;
  unitsTeam: Unit[];
  handleAction: (turnUnit: Unit, unit: Unit) => void;
  handleDefence: () => void;
  numberTeam: number;
  actionableUnits: Unit[];
  attack: boolean;
  roundTurnedUnits: Unit[];
  mouseOverUnit: Unit | undefined;
}

export const Team: React.FunctionComponent<ITeam> = ({
  id,
  turnUnit,
  unitsTeam,
  handleAction,
  handleDefence,
  numberTeam,
  actionableUnits,
  attack,
  roundTurnedUnits,
  mouseOverUnit,
}) => {
  return (
    <div>
      <div className={s.cards}>
        {unitsTeam.map((unit) => (
          <Card
            key={uuidv4()}
            unit={unit}
            turnUnit={turnUnit}
            actionableUnits={actionableUnits}
            numberTeam={numberTeam}
            handleDefence={handleDefence}
            handleAction={handleAction}
            attack={attack}
            roundTurnedUnits={roundTurnedUnits}
            mouseOverUnit={mouseOverUnit}
          />
        ))}
      </div>
    </div>
  );
};
