import { InterfaceAction } from './InterfaceAction/InterfaceAction';
import { Unit } from '../../units/Unit';

export class Paralyze implements InterfaceAction {
  doAction(enemies: Unit[]) {
    enemies.forEach((e) => {
      e.isParalyze = true;
    });
    return enemies;
  }
}
