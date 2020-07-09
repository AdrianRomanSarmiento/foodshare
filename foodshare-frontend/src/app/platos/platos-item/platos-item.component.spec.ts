import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosItemComponent } from './platos-item.component';

describe('PlatosItemComponent', () => {
  let component: PlatosItemComponent;
  let fixture: ComponentFixture<PlatosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
