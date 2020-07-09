import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosDetailComponent } from './platos-detail.component';

describe('PlatosDetailComponent', () => {
  let component: PlatosDetailComponent;
  let fixture: ComponentFixture<PlatosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
