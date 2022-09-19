import { defs as pet1Defs, pet1 } from './pet1';

(window as any).defs = {
  pet1: pet1Defs,
};
(window as any).API = {
  pet1,
};
