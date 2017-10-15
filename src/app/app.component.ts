import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

import {NavigationEnd, Router} from '@angular/router';
import {AppConfig} from './config/app.config';
import {UtilsService} from './shared/services/utils.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private translateService: TranslateService,
              private title: Title,
              private meta: Meta,
              private utilsService: UtilsService,
              private router: Router) {

    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.title.setTitle('Welcome to SCHOOL OF JOY AND HAPPINESS');
            this.meta.updateTag({
              name: 'description',
              content: 'SCHOOL OF JOY AND HAPPINESS, Itawa english school, sjhitawa.com, sjhitawa'
            });
            break;
          case '/' + AppConfig.routes.heroes:
            this.title.setTitle('Welcome to SCHOOL OF JOY AND HAPPINESS');
            this.meta.updateTag({
              name: 'description',
              content: 'List of super-heroes'
            });
            break;
        }
      }
    });

    this.utilsService.checkBrowserFeatures();
  }


}
