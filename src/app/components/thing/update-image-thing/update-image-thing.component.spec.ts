import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImageThingComponent } from './update-image-thing.component';

describe('UpdateImageThingComponent', () => {
  let component: UpdateImageThingComponent;
  let fixture: ComponentFixture<UpdateImageThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateImageThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImageThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
