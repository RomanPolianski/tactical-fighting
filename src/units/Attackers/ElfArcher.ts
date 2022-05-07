import { Unit } from '../Unit';
import { Attacker } from './AttackerAbstrct/Attacker';
import { Attack } from '../../unitActions/Action/Attack';
import { RangeMage } from '../../unitActions/Choise/RangeMage';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class ElfArcher extends Attacker {
  constructor() {
    super(
      'Elf Archer',
      90,
      90,
      60,
      false,
      45,
      new UnDefended(),
      new RangeMage(),
      new Attack()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]) {
    this.makeAnAttack(enemy, attackAbleUnits);
  }
}
