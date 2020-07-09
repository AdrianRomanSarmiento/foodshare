import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosAddComponent } from './platos-add.component';

describe('PlatosAddComponent', () => {
  let component: PlatosAddComponent;
  let fixture: ComponentFixture<PlatosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
