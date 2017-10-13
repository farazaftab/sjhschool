import {Component, Input} from '@angular/core';
import {SchoolFeature} from './../../school/shared/schoolfeature.model';

@Component({
  selector: 'app-featurecard',
  templateUrl: './featurecard.component.html',
  styleUrls: ['./featurecard.component.scss']

})

export class FeaturecardComponent {

  @Input() feature: SchoolFeature;
}
