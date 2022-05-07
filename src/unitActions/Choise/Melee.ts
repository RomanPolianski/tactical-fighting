import { InterfaceChoice } from './InterfaceChoise/InterfaceChoice';
import { Unit } from '../../units/Unit';
import { getUnitToMelee } from '../../functions/GetUnitsToMelee';

export class Melee implements InterfaceChoice {
  getActionableUnits(units: Unit[][], turnUnit: Unit): Unit[] {
    const enemies = getUnitToMelee(units, turnUnit);
    return enemies;
  }
}
