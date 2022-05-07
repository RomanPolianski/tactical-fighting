import { Unit } from '../Unit';
import { Attacker } from './AttackerAbstrct/Attacker';
import { Attack } from '../../unitActions/Action/Attack';
import { RangeMage } from '../../unitActions/Choise/RangeMage';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class Archimage extends Attacker {
  constructor() {
    super(
      'Archimage',
      90,
      90,
      40,
      false,
      30,
      new UnDefended(),
      new RangeMage(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]) {
    this.makeAnAttack(enemy, attackAbleUnits);
  }
}
