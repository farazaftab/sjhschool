import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {SchoolComponent} from './school.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';


const heroesRoutes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    children: [
      {path: 'contactus', component: ContactComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: ':id', component: HeroDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SchoolRoutingModule {
}
