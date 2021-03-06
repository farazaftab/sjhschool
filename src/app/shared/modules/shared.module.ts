import {ModuleWithProviders, NgModule} from '@angular/core';
//import {ProgressBarService} from '../services/progress-bar.service';
import {MaterialModule} from './material.module';
import {TranslateModule} from '@ngx-translate/core';
import {HeroService} from '../../heroes/shared/hero.service';
//import {HeroService} from '../../school/shared/hero.service';
import {SchoolFeatureService} from '../../school/shared/schoolfeature.service';
import {UtilsService} from '../services/utils.service';

@NgModule({
  imports: [
    MaterialModule,
    TranslateModule
  ],
  exports: [
    MaterialModule,
    TranslateModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
          UtilsService, SchoolFeatureService
      //  ProgressBarService, UtilsService, SchoolFeatureService, HeroService
      ]
    };
  }
}
