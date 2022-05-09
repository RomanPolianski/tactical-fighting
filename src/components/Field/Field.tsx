import { useEffect, useState } from 'react';
import { Bishop } from '../../units/Healers/Bishop';
import { Archimage } from '../../units/Attackers/Archimage';
import { SkeletonMage } from '../../units/Attackers/SkeletonMage';
import { Team } from '../Team/Team';
import { TurnedUnits } from '../../gameMechanics/TurnedUnits';
import { Round } from '../../gameMechanics/Round';
import { getTurnUnit } from '../../gameMechanics/GetTurnUnit';
import { Unit } from '../../units/Unit';
import { Defended } from '../../unitActions/Defend/Defend';
import s from './Field.module.css';
import { RoundInfo } from '../RoundInfo/RoundInfo';
import Modal from '../Modal/Modal';

export interface IFieldProps {
  round: Round;
  roundTurnedUnits: TurnedUnits;
  firstTeam: Unit[][];
  secondTeam: Unit[][];
  firstTeamOrder: Unit[];
  secondTeamOrder: Unit[];
  combineOrder: Unit[];
}

export const Field: React.FunctionComponent<IFieldProps> = ({
  round,
  roundTurnedUnits,
  firstTeam,
  secondTeam,
  firstTeamOrder,
  secondTeamOrder,
  combineOrder,
}) => {
  const twoTeams = firstTeam.concat(secondTeam);
  const [step, setStep] = useState<number>(1);
  const [turnUnit, setTurnUnit] = useState<any>();
  const [actionableUnits, setActionableUnits] = useState<Unit[]>([]);
  const [attack, setAttack] = useState<boolean>(false);
  const [mouseOverUnit, setMouseOverUnit] = useState<Unit | undefined>(
    undefined
  );
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const turnUnitStep = getTurnUnit({
      firstTeam,
      secondTeam,
      step,
      roundTurnedUnits,
      round,
      firstTeamOrder,
      secondTeamOrder,
    });
    if (turnUnitStep) {
      if (turnUnitStep.isParalyze) {
        turnUnitStep.isParalyze = false;
        roundTurnedUnits.turnedUnits.push(turnUnitStep);
        setStep((prev) => (prev += 1));
      } else {
        setTurnUnit(turnUnitStep);
        setActionableUnits(
          turnUnitStep.getActionableUnits(twoTeams, turnUnitStep)
        );
      }
    } else if (turnUnitStep === null) {
      setStep((prev) => prev++);
    } else {
      setModal(true);
    }
    setAttack(false);
  }, [step]);

  const getDestructionTeam = (team: Unit[][]): Unit[] => {
    let destructionTeam: Unit[] = [];
    team.forEach((row) => {
      destructionTeam.push(...row);
    });
    return destructionTeam;
  };

  const doTurn = (turnUnit: Unit, unit: Unit[], actionableUnits: Unit[]) => {
    turnUnit.doAction(unit, actionableUnits);
  };

  const handleAction = (turnUnit: Unit, unit: Unit) => {
    if (actionableUnits.includes(unit)) {
      doTurn(turnUnit, [unit], actionableUnits);
      roundTurnedUnits.turnedUnits.push(turnUnit);
      setStep((prev) => (prev += 1));
    }
  };

  const handleDefence = () => {
    turnUnit.defend = new Defended();
    roundTurnedUnits.turnedUnits.push(turnUnit);
    setStep((prev) => (prev += 1));
  };

  const handleMassAction = () => {
    if (
      turnUnit instanceof SkeletonMage ||
      turnUnit instanceof Archimage ||
      turnUnit instanceof Bishop
    ) {
      doTurn(turnUnit, actionableUnits, actionableUnits);
      roundTurnedUnits.turnedUnits.push(turnUnit);
      setStep((prev) => (prev += 1));
    } else {
      setAttack(true);
    }
  };

  const firstTeamUnit = getDestructionTeam(firstTeam);
  const secondTeamUnit = getDestructionTeam(secondTeam);

  return (
    <div className={s.mainField}>
      <p className={s.rounds}>
        <b>Round:</b> {round.round} <b>Step:</b> {step}
      </p>
      <Team
        id={1}
        turnUnit={turnUnit}
        unitsTeam={firstTeamUnit}
        handleAction={handleAction}
        handleDefence={handleDefence}
        numberTeam={1}
        actionableUnits={actionableUnits}
        attack={attack}
        roundTurnedUnits={roundTurnedUnits.turnedUnits}
        mouseOverUnit={mouseOverUnit}
      />
      <div>
        <p>---</p>
      </div>
      <Team
        id={2}
        turnUnit={turnUnit}
        unitsTeam={secondTeamUnit}
        handleAction={handleAction}
        handleDefence={handleDefence}
        numberTeam={2}
        actionableUnits={actionableUnits}
        attack={attack}
        roundTurnedUnits={roundTurnedUnits.turnedUnits}
        mouseOverUnit={mouseOverUnit}
      />
      <div className={s.buttonsContainer}>
        <button className={s.buttonDefence} onClick={handleDefence}>
          Defence
        </button>
        <button className={s.buttonAttack} onClick={handleMassAction}>
          Attack
        </button>
      </div>

      <div>
        <RoundInfo
          roundOrderTeam={combineOrder}
          turnUnit={turnUnit}
          setMouseOverUnit={setMouseOverUnit}
        />
      </div>
      {modal ? <Modal modal={modal} /> : null}
    </div>
  );
};
