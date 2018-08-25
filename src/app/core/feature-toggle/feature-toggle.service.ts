import { Injectable } from '@angular/core';

export type featureTypes = {
  'killer-feature': number | boolean;
};

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  public features: featureTypes;

  constructor() {}

  public isFeatureEnabled(feautureName: keyof featureTypes): boolean {
    const featureValue = this.features[feautureName];

    if (Number.isInteger(featureValue as number)) {
      const isEnabled = Math.floor(Math.random() * 100) <= featureValue;
      return isEnabled;
    } else {
      return featureValue as boolean;
    }
  }

  private hashCode = function(s) {
    var h = 0,
      l = s.length,
      i = 0;
    if (l > 0) while (i < l) h = ((h << 5) - h + s.charCodeAt(i++)) | 0;
    return h;
  };
}
