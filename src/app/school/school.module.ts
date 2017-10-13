import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SchoolRoutingModule} from './school-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {HeroListComponent, RemoveHeroDialogComponent} from './hero-list/hero-list.component';
import {HeroService} from './shared/hero.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {SchoolComponent} from './school.component';
import {ContactComponent} from './contact/contact.component';

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
    ContactComponent
  ],
  entryComponents: [
    RemoveHeroDialogComponent
  ],
  providers: [
    HeroService
  ]
})

export class SchoolModule {
}
