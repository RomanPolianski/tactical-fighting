import { InterfaceChoice } from './InterfaceChoise/InterfaceChoice';
import { Unit } from '../../units/Unit';
import { getUnitFromAnotherTeam } from '../../functions/GetUnitFormAnotherTeam';

export class RangeMage implements InterfaceChoice {
  getActionableUnits(units: Unit[][], turnUnit: Unit): Unit[] {
    const enemies = getUnitFromAnotherTeam(units, turnUnit);
    return enemies;
  }
}
