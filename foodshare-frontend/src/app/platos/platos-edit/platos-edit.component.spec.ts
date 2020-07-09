import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosEditComponent } from './platos-edit.component';

describe('PlatosEditComponent', () => {
  let component: PlatosEditComponent;
  let fixture: ComponentFixture<PlatosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
