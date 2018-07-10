import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThingComponent } from './get-thing.component';

describe('GetThingComponent', () => {
  let component: GetThingComponent;
  let fixture: ComponentFixture<GetThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
