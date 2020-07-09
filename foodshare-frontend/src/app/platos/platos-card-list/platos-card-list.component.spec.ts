import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosCardListComponent } from './platos-card-list.component';

describe('PlatosCardListComponent', () => {
  let component: PlatosCardListComponent;
  let fixture: ComponentFixture<PlatosCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatosCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
