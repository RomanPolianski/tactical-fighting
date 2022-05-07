import { Unit } from "../../../units/Unit";

export interface InterfaceChoice {
    getActionableUnits(units:Unit[][], turnUnit: Unit): Unit[];
}