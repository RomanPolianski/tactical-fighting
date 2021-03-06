import { Unit } from '../units/Unit';

export const checkUnitTeam = (allUnits: Unit[][], turnUnit: Unit): boolean => {
  let unitInFirstTeam: boolean = false;
  for (let row = 0; row < allUnits.length / 2; row++) {
    for (let column = 0; column < allUnits[row].length; column++) {
      if (allUnits[row][column] === turnUnit) {
        unitInFirstTeam = true;
      }
    }
  }
  return unitInFirstTeam;
};
