import { Unit } from '../units/Unit';

export interface IIndexUnit {
  column: number;
  row: number;
}

export const getUnitCoordination = (
  allUnits: Unit[][],
  turnUnit: Unit
): IIndexUnit => {
  let rowIndexR = 0,
    columnIndexR = 0;
  allUnits.forEach((row, rowIndex) => {
    row.forEach((unit, unitIndex) => {
      if (unit === turnUnit) {
        rowIndexR = rowIndex;
        columnIndexR = unitIndex;
      }
    });
  });
  return { row: rowIndexR, column: columnIndexR };
};
