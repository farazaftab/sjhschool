import {Component} from '@angular/core';
import {SchoolFeatureService} from '../shared/schoolfeature.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    galleryData: any ;

    constructor(private schoolFeatureService: SchoolFeatureService) {
        this.schoolFeatureService.getGalleryPageProperties().subscribe((data) => {
            this.galleryData = data;
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
