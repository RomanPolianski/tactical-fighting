import { InterfaceAction } from './InterfaceAction/InterfaceAction';
import { Unit } from '../../units/Unit';

export class Heal implements InterfaceAction {
  doAction(allies: Unit[], healPoint: number) {
    allies.forEach((a) => {
      a.healthPoint += healPoint;
      a.healthPoint =
        a.healthPoint > a.maxHealthPoint
          ? a.maxHealthPoint
          : a.healthPoint;
    });
    return allies;
  }
}
