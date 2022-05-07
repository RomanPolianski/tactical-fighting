import { Unit } from '../Unit';
import { HealUnit } from './HealerAbstrct/Healer';
import { Heal } from '../../unitActions/Action/Heal';
import { Healer } from '../../unitActions/Choise/Healer';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class Bishop extends HealUnit {
  constructor() {
    super(
      'Bishop',
      130,
      130,
      20,
      false,
      25,
      new UnDefended(),
      new Healer(),
      new Heal()
    );
  }
  doAction(allies: Unit[], attackAbleUnits: Unit[]): void {
    this.makeHeal(allies, attackAbleUnits);
  }
}
