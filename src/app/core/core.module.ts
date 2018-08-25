import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureToggleService } from '@app/core/feature-toggle/feature-toggle.service';

@NgModule({
  imports: [CommonModule],
  providers: [FeatureToggleService]
})
export class CoreModule {}
