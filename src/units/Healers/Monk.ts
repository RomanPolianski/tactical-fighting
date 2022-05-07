import { Unit } from '../Unit';
import { HealUnit } from './HealerAbstrct/Healer';
import { Heal } from '../../unitActions/Action/Heal';
import { Healer } from '../../unitActions/Choise/Healer';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class Monk extends HealUnit {
  constructor() {
    super(
      'Monk',
      90,
      90,
      20,
      false,
      40,
      new UnDefended(),
      new Healer(),
      new Heal()
    );
  }
  doAction(allies: Unit[], attackAbleUnits: Unit[]): void {
    this.makeHeal(allies, attackAbleUnits);
  }
}
