import { Injectable } from '@angular/core';
import seedrandom from 'seedrandom';

export type featureTypes = {
  'killer-feature': number | boolean;
};

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  public features: featureTypes;
  public userId: string = 'some-user-id';

  constructor() {}

  public isFeatureEnabled(feautureName: keyof featureTypes): boolean {
    const featureValue = this.features[feautureName];

    if (Number.isInteger(featureValue as number)) {
      seedrandom(this.userId);
      const isEnabled = Math.floor(Math.random() * 100) <= featureValue;
      return isEnabled;
    } else {
      return featureValue as boolean;
    }
  }
}
