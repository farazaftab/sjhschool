import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {SchoolHomeComponent} from './school/home/school-home.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';
import {ContactComponent} from './school/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
 /* {path: '', component: HeroTopComponent},*/
  {path: '', component: SchoolHomeComponent},
  {path: 'school', loadChildren: './school/school.module#SchoolModule'},
   // {path: 'contactus', component:ContactComponent},
  //{path: AppConfig.routes.heroes, loadChildren: './heroes/heroes.module#HeroesModule'},
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
