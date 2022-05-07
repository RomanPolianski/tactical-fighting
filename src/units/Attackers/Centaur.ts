import { Unit } from '../Unit';
import { Attacker } from './AttackerAbstrct/Attacker';
import { Attack } from '../../unitActions/Action/Attack';
import { Melee } from '../../unitActions/Choise/Melee';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class Centaur extends Attacker {
  constructor() {
    super(
      'Centaur',
      150,
      150,
      50,
      false,
      50,
      new UnDefended(),
      new Melee(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]) {
    this.makeAnAttack(enemy, attackAbleUnits);
  }
}
