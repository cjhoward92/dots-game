import {Emitter} from './emitter';
import {GameConstants} from './gameConstants';

export class BaseDeadEmitter implements Emitter {
  constructor(public x: number, public y: number, public power: number, public emitterId: number) {}
  get radius() {
    return GameConstants.emitterRadius;
  }
}
