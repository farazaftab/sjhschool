import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';

import {SchoolFeature} from './schoolfeature.model';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class SchoolFeatureService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private heroesUrl: string;

  private handleError(error: any) {
    this.request$.emit('finished');
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private http: HttpClient,
              private translateService: TranslateService,
              private snackBar: MatSnackBar) {
    this.request$ = new EventEmitter();

    this.heroesUrl = AppConfig.endpoints.heroes;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

  }

  getAllHeroes(): Observable<SchoolFeature[]> {

    this.request$.emit('starting');
    return this.http.get('../../assets/resjson/feature.json')
        .map(response => {
          this.request$.emit('finished');
          return response;
        })
        .catch(error => this.handleError(error));
  }


    getHomePageProperties(): Observable<any> {

        return this.http.get('../../assets/resjson/home.json')
            .map(response => {
                this.request$.emit('finished');
                return response;
            })
            .catch(error => this.handleError(error));
    }

    getGalleryPageProperties(): Observable<any> {

        return this.http.get('../../assets/resjson/gallery.json')
            .map(response => {
                this.request$.emit('finished');
                return response;
            })
            .catch(error => this.handleError(error));
    }


}
