import { COLUMN, ROW, UNIT_NAMES } from '../constants/constants';
import { Unit } from '../units/Unit';
import { UnitCreator } from '../units/UnitCreator';
interface ITeams {
  firstTeam: Unit[][];
  secondTeam: Unit[][];
}

export const createTeam = (): ITeams => {
  const createTeamUnit = (team: Unit[][], numberTeam: number) => {
    for (let indexRow = 0; indexRow < ROW; indexRow++) {
      team[indexRow] = [];
      for (let indexColumn = 0; indexColumn < COLUMN; indexColumn++) {
        if (numberTeam === 1) {
          const randomUnit = Math.floor(Math.random() * Unit.length);
          team[indexRow].push(UnitCreator.createUnit(UNIT_NAMES[randomUnit]));
        } else {
          const randomUnit = Math.floor((Math.random() * 13) % Unit.length) + 2;
          team[indexRow].push(UnitCreator.createUnit(UNIT_NAMES[randomUnit]));
        }
      }
    }
    return team;
  };

  let team: Unit[][] = [];

  const firstTeam = createTeamUnit(team, 1);
  team = [];
  const secondTeam = createTeamUnit(team, 2);

  return { firstTeam, secondTeam };
};
