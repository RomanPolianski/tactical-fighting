import { getUnitFromTeam } from '../../functions/GetUnitFromTeam';
import { InterfaceChoice } from './InterfaceChoise/InterfaceChoice';
import { Unit } from '../../units/Unit';

export class Healer implements InterfaceChoice {
    getActionableUnits(units: Unit[][], turnUnit: Unit): Unit[] {
        const allies = getUnitFromTeam(units, turnUnit);
        return allies;
    }
}