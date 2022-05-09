import classNames from 'classnames';
import { getUnitImage } from '../../../functions/GetUnitImage';
import { Unit } from '../../../units/Unit';
import s from './RoundInfoCard.module.css';

export interface IRoundCard {
  unit: Unit;
  turnUnit: Unit;
  setMouseOverUnit: (unit: Unit | undefined) => void;
  key: string;
}

export const RoundInfoCard: React.FunctionComponent<IRoundCard> = ({
  unit,
  turnUnit,
  setMouseOverUnit,
}: IRoundCard) => {
  const image = getUnitImage(unit.getName);

  return (
    <div
      className={classNames([s.roundInfoCard], {
        [s.turnUnit]: unit === turnUnit,
      })}
      onMouseOver={() => setMouseOverUnit(unit)}
      onMouseOut={() => setMouseOverUnit(undefined)}
    >
      <img src={image} alt={unit.getName} />
    </div>
  );
};
