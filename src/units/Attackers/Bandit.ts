import { Unit } from '../Unit';
import { Attack } from '../../unitActions/Action/Attack';
import { Attacker } from './AttackerAbstrct/Attacker';
import { RangeMage } from '../../unitActions/Choise/RangeMage';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class Bandit extends Attacker {
  constructor() {
    super(
      'Bandit',
      75,
      75,
      60,
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
