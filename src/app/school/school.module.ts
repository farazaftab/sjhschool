import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SchoolRoutingModule} from './school-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {HeroListComponent, RemoveHeroDialogComponent} from './hero-list/hero-list.component';
//import {HeroService} from './shared/hero.service';
//import {HeroService} from './shared/hero.service';
import {SchoolFeatureService} from './shared/schoolfeature.service';
import {ContactusService} from './shared/contactus.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {SchoolComponent} from './school.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SchoolRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SchoolComponent,
    HeroListComponent,
    RemoveHeroDialogComponent,
    HeroDetailComponent,
    ContactComponent,
      GalleryComponent
  ],
  entryComponents: [
    RemoveHeroDialogComponent
  ],
  providers: [
   // HeroService,
    SchoolFeatureService,
    ContactusService
  ]
})

export class SchoolModule {
}
