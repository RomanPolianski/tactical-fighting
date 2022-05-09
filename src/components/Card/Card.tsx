import React from 'react';
import { Defended } from '../../unitActions/Defend/Defend';
import { Unit } from '../../units/Unit';
import { getUnitImage } from '../../functions/GetUnitImage';
import s from './Card.module.css';
import classNames from 'classnames';

export interface ICard {
  key: string;
  unit: any;
  turnUnit: Unit;
  actionableUnits: Unit[];
  numberTeam: number;
  handleDefence: () => void;
  handleAction: (turnUnit: Unit, unit: Unit) => void;
  attack: boolean;
  roundTurnedUnits: Unit[];
  mouseOverUnit: Unit | undefined;
}

export const Card: React.FunctionComponent<ICard> = ({
  unit,
  turnUnit,
  actionableUnits,
  numberTeam,
  handleAction,
  attack,
  roundTurnedUnits,
  mouseOverUnit,
}) => {
  const image = getUnitImage(unit.getName);
  const numberTeamClassName = numberTeam === 1 ? [s.first] : [s.second];
  const remainedHp = unit.healthPoint / unit.maxHealthPoint;
  let remainingHpClassName =
    remainedHp <= 1 && remainedHp > 0.75
      ? ''
      : remainedHp <= 0.75 && remainedHp > 0.5
      ? [s.threeQuarter]
      : remainedHp <= 0.5 && remainedHp > 0.25
      ? [s.half]
      : remainedHp <= 0.25 && remainedHp > 0
      ? [s.quarter]
      : [s.zero];

  const cardClassName = classNames(
    [s.card],
    `${numberTeamClassName}`,
    `${remainingHpClassName}`,
    { [s.action]: actionableUnits.includes(unit) && attack },
    { [s.turned]: roundTurnedUnits.includes(unit) },
    { [s.paralyze]: unit.isParalyze },
    { [s.turnUnit]: turnUnit === unit }
  );

  const handleActionCard = () => {
    handleAction(turnUnit, unit);
  };

  return (
    <div
      className={classNames(
        [s.beforeCard],
        { [s.turnUnit]: turnUnit === unit },
        { [s.defended]: unit.defend instanceof Defended },
        { [s.relative]: mouseOverUnit === unit }
      )}
      onClick={handleActionCard}
    >
      <div className={cardClassName}>
        <img className={s.Card} src={image} alt={unit.getName}></img>
        <div className={s.cardInfo}>
          <p className={s.information}>
            <span>{unit.getName} </span>
            <b>HP:</b> {unit.healthPoint}/{unit.maxHealthPoint}
          </p>
          {unit.damage ? (
            <p className={s.information}>
              <b>DPS:</b> {unit.damage}
            </p>
          ) : unit.heal ? (
            <p className={s.information}>Heal: {unit.heal}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
