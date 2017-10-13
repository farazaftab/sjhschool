import {Component} from '@angular/core';

import {Hero} from '../shared/hero.model';
import {SchoolFeature} from '../shared/schoolfeature.model';

//import {HeroService} from '../shared/hero.service';
import {SchoolFeatureService} from '../shared/schoolfeature.service';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-school-home',
  templateUrl: './school-home.component.html',
  styleUrls: ['./school-home.component.scss']
})
export class SchoolHomeComponent {
  schoolfeature: SchoolFeature[] = null;
  canVote = false;

  constructor(private schoolFeatureService: SchoolFeatureService) {
    //constructor(private heroService: HeroService) {
    this.schoolFeatureService.getAllHeroes().subscribe((schoolfeture) => {
      this.schoolfeature = schoolfeture;
    });
  }
  
}
