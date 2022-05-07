import { Unit } from '../Unit';
import { Attacker } from './AttackerAbstrct/Attacker';
import { Attack } from '../../unitActions/Action/Attack';
import { Melee } from '../../unitActions/Choise/Melee';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class Skeleton extends Attacker {
  constructor() {
    super(
      'Skeleton',
      100,
      100,
      50,
      false,
      25,
      new UnDefended(),
      new Melee(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]): void {
    this.makeAnAttack(enemy, attackAbleUnits);
  }
}
