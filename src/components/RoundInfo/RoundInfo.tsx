import { Unit } from '../../units/Unit';
import { v4 as uuidv4 } from 'uuid';
import { RoundInfoCard } from './RoundInfoCard/RoundInfoCard';
import s from './RoundInfo.module.css';

export interface IRoundInfo {
  roundOrderTeam: Unit[];
  turnUnit: Unit;
  setMouseOverUnit: (unit: Unit | undefined) => void;
}

export const RoundInfo: React.FunctionComponent<IRoundInfo> = ({
  roundOrderTeam,
  turnUnit,
  setMouseOverUnit,
}: IRoundInfo) => {
  return (
    <div className={s.roundInfo}>
      {roundOrderTeam.map((unit) => (
        <RoundInfoCard
          unit={unit}
          turnUnit={turnUnit}
          setMouseOverUnit={setMouseOverUnit}
          key={uuidv4()}
        />
      ))}
    </div>
  );
};
