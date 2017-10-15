import {Component} from '@angular/core';

import {Hero} from '../shared/hero.model';

//import {HeroService} from '../shared/hero.service';
import {AppConfig} from '../../config/app.config';
import {ContactusModel} from '../shared/contactus.model';
import {ContactusService} from '../shared/contactus.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    constructor(private ContactusService: ContactusService, private router:Router) {
    }

    model = new ContactusModel('', '', '', '', '');


    selectUndefinedOptionValue:any;

    subjectval = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    submitted = false;

    onSubmit() { this.submitted = false;  console.log(JSON.stringify(this.model));

        return new Promise((resolve, reject) => {
            this.ContactusService.submitcontactdetails(this.model).subscribe(() => {
                console.log("Submitted::");
                this.router.navigateByUrl('/');
            }, (error) => {
                console.trace();
                this.router.navigateByUrl('/');
            });
        });

    }




        /*heroes: Hero[] = null;
        canVote = false;

        constructor(private heroService: HeroService) {
          this.canVote = this.heroService.checkIfUserCanVote();

          this.heroService.getAllHeroes().subscribe((heroes) => {
            this.heroes = heroes.sort((a, b) => {
              return b.likes - a.likes;
            }).slice(0, AppConfig.topHeroesLimit);
          });
        }

        like(hero: Hero): Promise<any> {
          return new Promise((resolve, reject) => {
            this.heroService.like(hero).subscribe(() => {
              this.canVote = this.heroService.checkIfUserCanVote();
              resolve(true);
            }, (error) => {
              reject(error);
            });
          });
        }*/
}
