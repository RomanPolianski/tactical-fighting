import { Skeleton } from './Attackers/Skeleton';
import { SkeletonMage } from './Attackers/SkeletonMage';
import { Centaur } from './Attackers/Centaur';
import { Bandit } from './Attackers/Bandit';
import { Archimage } from './Attackers/Archimage';
import { ElfArcher } from './Attackers/ElfArcher';
import { Bishop } from './Healers/Bishop';
import { Monk } from './Healers/Monk';
import { Sirena } from './Paralyzers/Sirena';

export class UnitCreator {
  public static createUnit(name: string) {
    switch (name) {
      case 'Skeleton':
        return new Skeleton();
      case 'Skeleton Mage':
        return new SkeletonMage();
      case 'Centaur':
        return new Centaur();
      case 'Bandit':
        return new Bandit();
      case 'Archimage':
        return new Archimage();
      case 'Elf Archer':
        return new ElfArcher();
      case 'Bishop':
        return new Bishop();
      case 'Monk':
        return new Monk();
      case 'Sirena':
        return new Sirena();
      default:
        throw new Error(`No unit with ${name} name`);
    }
  }
}
