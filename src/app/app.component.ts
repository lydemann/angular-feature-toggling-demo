import { Component } from '@angular/core';
import { FeatureToggleService } from '@app/core/feature-toggle/feature-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'angular-feature-toggle-demo';
  public isKillerFeatureEnabled = false;

  constructor(private featureToggleService: FeatureToggleService) {
    this.isKillerFeatureEnabled = featureToggleService.isFeatureEnabled('killer-feature');
  }
}
