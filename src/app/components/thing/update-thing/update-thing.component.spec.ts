import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThingComponent } from './update-thing.component';

describe('UpdateThingComponent', () => {
  let component: UpdateThingComponent;
  let fixture: ComponentFixture<UpdateThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
