import { Unit } from '../../Unit';
import { InterfaceAction } from '../../../unitActions/Action/InterfaceAction/InterfaceAction';
import { InterfaceChoice } from '../../../unitActions/Choise/InterfaceChoise/InterfaceChoice';
import { InterfaceDefend } from '../../../unitActions/Defend/InterfaceDefend/InterfaceDefend';

export abstract class Paralazyer extends Unit {
  private _actionBehavior: InterfaceAction;
  constructor(
    _name: string,
    _healthPoint: number,
    _maxHealthPoint: number,
    _initiative: number,
    _isParalyzes: boolean,
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
    this._actionBehavior = _actionBehavior;
  }

  public get actionBehavior(): InterfaceAction {
    return this._actionBehavior;
  }
  public set actionBehavior(value: InterfaceAction) {
    this._actionBehavior = value;
  }

  paralyze(enemy: Unit[], attackAbleUnits: Unit[]) {
    this._actionBehavior.doAction(enemy);
    return enemy;
  }
}
