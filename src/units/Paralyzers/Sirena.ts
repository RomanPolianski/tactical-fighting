import { Unit } from '../Unit';
import { Paralazyer } from './ParalyzerAbstrct/Paralyzer';
import { Paralyze } from '../../unitActions/Action/Paralyze';
import { RangeMage } from '../../unitActions/Choise/RangeMage';
import { UnDefended } from '../../unitActions/Defend/Undefend';

export class Sirena extends Paralazyer {
  constructor() {
    super(
      'Sirena',
      80,
      80,
      20,
      false,
      new UnDefended(),
      new RangeMage(),
      new Paralyze()
    );
  }
  doAction(enemy: Unit[], attackAbleUnits: Unit[]): void {
    this.paralyze(enemy, attackAbleUnits);
  }
}
