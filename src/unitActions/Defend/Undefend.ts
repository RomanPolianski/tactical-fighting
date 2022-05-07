import { InterfaceDefend } from './InterfaceDefend/InterfaceDefend';

export class UnDefended implements InterfaceDefend{
    defend(enemyDamage: number){
        return enemyDamage;
    }
}