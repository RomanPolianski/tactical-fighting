import Archimage from '../assets/images/ArchiMage.png';
import Bandit from '../assets/images/Bandit.png';
import Bishop from '../assets/images/Bishop.png';
import ElfArcher from '../assets/images/ElfArcher.png';
import Monk from '../assets/images/Monk.png';
import Sirena from '../assets/images/Sirena.png';
import SkeletonMage from '../assets/images/SkeletonMage.png';
import Skeleton from '../assets/images/Skeleton.png';
import Centaur from '../assets/images/Centaur.png';

export const getUnitImage = (name: string) => {
  switch (name) {
    case 'Archimage':
      return Archimage;
    case 'Bandit':
      return Bandit;
    case 'Skeleton':
      return Skeleton;
    case 'Skeleton Mage':
      return SkeletonMage;
    case 'Centaur':
      return Centaur;
    case 'Bishop':
      return Bishop;
    case 'Monk':
      return Monk;
    case 'Elf Archer':
      return ElfArcher;
    case 'Sirena':
      return Sirena;
    default:
      return undefined;
  }
};
