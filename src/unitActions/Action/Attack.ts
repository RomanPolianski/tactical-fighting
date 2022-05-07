import { InterfaceAction } from './InterfaceAction/InterfaceAction';
import { Unit } from '../../units/Unit'

export class Attack implements InterfaceAction {
  doAction(enemies: Unit[], damage: number) {
    enemies.forEach((e) => {
      e.healthPoint -= e.receivedDamage(damage);
      e.healthPoint = e.healthPoint < 0 ? 0 : e.healthPoint;
    });
    return enemies;
  }
}
