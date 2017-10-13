import {async, TestBed} from '@angular/core/testing';
import {FeaturecardComponent} from './featurecard.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

describe('FooterComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [
          FeaturecardComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturecardComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create footer component', (() => {
    expect(component).toBeTruthy();
  }));
});
