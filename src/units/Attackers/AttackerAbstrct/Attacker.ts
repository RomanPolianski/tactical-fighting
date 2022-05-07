import { InterfaceAction } from '../../../unitActions/Action/InterfaceAction/InterfaceAction';
import { InterfaceChoice } from '../../../unitActions/Choise/InterfaceChoise/InterfaceChoice';
import { InterfaceDefend } from '../../../unitActions/Defend/InterfaceDefend/InterfaceDefend';
import { Unit } from '../../Unit';


export abstract class Attacker extends Unit {
  private _damage: number;
  private _actionBehavior: InterfaceAction;

  constructor(
    _name: string,
    _healthPoint: number,
    _maxHealthPoint: number,
    _initiative: number,
    _isParalyzes: boolean,
    _damage: number,
    _defended: InterfaceDefend,
    _choiceBehavior: InterfaceChoice,
    _actionBehavior: InterfaceAction
  ) {
    super(
      _name,
      _healthPoint,
      _maxHealthPoint,
      _initiative,
      _isParalyzes,
      _defended,
      _choiceBehavior
    );
    this._damage = _damage;
    this._actionBehavior = _actionBehavior;
  }

  public get damage(): number {
    return this._damage;
  }
  public set damage(value: number) {
    this._damage = value;
  }

  public get actionBehavior(): InterfaceAction {
    return this._actionBehavior;
  }
  public set actionBehavior(value: InterfaceAction) {
    this._actionBehavior = value;
  }

  makeAnAttack(enemy: Unit[], attackAbleUnits: Unit[]) {
    this._actionBehavior.doAction(enemy, this.damage);
    return enemy;
  }
}
