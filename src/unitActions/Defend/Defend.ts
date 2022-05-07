import { InterfaceDefend } from './InterfaceDefend/InterfaceDefend';

export class Defended implements InterfaceDefend {
  defend(enemyDamage: number) {
    return Math.floor(enemyDamage * 0.5);
  }
}
