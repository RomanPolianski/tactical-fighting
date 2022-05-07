import { Unit } from "../../../units/Unit";

export interface InterfaceAction {
  doAction(unit: Unit[], impact?: number): Unit[];
}
