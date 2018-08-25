import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { FeatureToggleService } from '@app/core/feature-toggle/feature-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  constructor(private httpClient: HttpClient, private featureToggleService: FeatureToggleService) {}

  public init() {
    return this.httpClient
      .get('assets/feature-config.json')
      .pipe(tap((features) => (this.featureToggleService.features = features as any)))
      .toPromise();
  }
}
