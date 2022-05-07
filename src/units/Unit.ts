import { InterfaceChoice } from '../unitActions/Choise/InterfaceChoise/InterfaceChoice';
import { InterfaceDefend } from '../unitActions/Defend/InterfaceDefend/InterfaceDefend';

export abstract class Unit {
  constructor(
    private _name: string,
    private _healthPoint: number,
    private _maxHealthPoint: number,
    private _initiative: number,
    private _isParalyzes: boolean,
    private _defended: InterfaceDefend,
    private _choiceBehavior: InterfaceChoice
  ) {}

  //getters

  public get getName(): string {
    return this._name;
  }

  public get healthPoint(): number {
    return this._healthPoint;
  }

  public get maxHealthPoint(): number {
    return this._maxHealthPoint;
  }

  public get initiative(): number {
    return this._initiative;
  }

  public get isParalyze(): boolean {
    return this._isParalyzes;
  }

  public get defend() {
    return this._defended;
  }

  public get behavior() {
    return this._choiceBehavior;
  }

  //setters

  public set setName(value: string) {
    this._name = value;
  }

  public set healthPoint(value: number) {
    this._healthPoint = value;
  }

  public set maxHealthPoint(value: number) {
    this._healthPoint = value;
  }

  public set initiative(value: number) {
    this._initiative = value;
  }

  public set isParalyze(value: boolean) {
    this._isParalyzes = value;
  }

  public set defend(value: InterfaceDefend) {
    this._defended = value;
  }

  public set behavior(value: InterfaceChoice) {
    this._choiceBehavior = value;
  }

  receivedDamage(enemyDamage: number): number {
    return this._defended.defend(enemyDamage);
  }

  getActionableUnits(allUnits: Unit[][], turnUnit: Unit): Unit[] {
    const actionAbleUnits = this.behavior.getActionableUnits(
      allUnits,
      turnUnit
    );
    return actionAbleUnits;
  }

  abstract doAction(enemy: Unit[], attackAbleUnits: Unit[]): void;
}
