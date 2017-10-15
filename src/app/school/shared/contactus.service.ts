import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ContactusModel} from '../shared/contactus.model';

import {AppConfig} from '../../config/app.config';

import {SchoolFeature} from './schoolfeature.model';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class ContactusService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private contactusUrl: string;

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

    this.contactusUrl = AppConfig.endpoints.contactus;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

  }

  submitcontactdetails(contacumodel: ContactusModel): Observable<SchoolFeature[]> {
      console.log(this.contactusUrl);
    this.request$.emit('starting');
    return this.http.post(this.contactusUrl, contacumodel)
        .map(response => {
          this.request$.emit('finished');
          return response;
        })
        .catch(error => this.handleError(error));
  }


}
