import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { CoreModule } from '@app/core/core.module';
import { AppInitService } from '@app/app-init.service';
import { HttpClientModule } from '@angular/common/http';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
@NgModule({
  declarations: [AppComponent, ComponentAComponent, ComponentBComponent],
  imports: [BrowserModule, CoreModule, HttpClientModule],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
