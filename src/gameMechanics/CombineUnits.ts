import { Unit } from '../units/Unit';

export const combineUnits = (firstArr: Unit[], secondArr: Unit[]) => {
  let combineArr = [];
  for (let index = 0; index < firstArr.length; index++) {
    combineArr.push(firstArr[index]);
    combineArr.push(secondArr[index]);
  }
  console.log(combineArr);
  return combineArr;
};
