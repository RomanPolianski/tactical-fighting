import { Unit } from '../../Unit';
import { InterfaceAction } from '../../../unitActions/Action/InterfaceAction/InterfaceAction';
import { InterfaceChoice } from '../../../unitActions/Choise/InterfaceChoise/InterfaceChoice';
import { InterfaceDefend } from '../../../unitActions/Defend/InterfaceDefend/InterfaceDefend';

export abstract class HealUnit extends Unit {
  private _heal: number;
  private _actionBehavior: InterfaceAction;

  constructor(
    _name: string,
    _healthPoint: number,
    _maxHealthPoint: number,
    _initiative: number,
    _isParalyzes: boolean,
    _heal: number,
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
    this._heal = _heal;
    this._actionBehavior = _actionBehavior;
  }

  public get heal(): number {
    return this._heal;
  }
  public set heal(value: number) {
    this._heal = value;
  }

  public get actionBehavior(): InterfaceAction {
    return this._actionBehavior;
  }
  public set actionBehavior(value: InterfaceAction) {
    this._actionBehavior = value;
  }

  makeHeal(allies: Unit[], attackAbleUnits: Unit[]) {
    this._actionBehavior.doAction(allies, this.heal);
    return allies;
  }
}
