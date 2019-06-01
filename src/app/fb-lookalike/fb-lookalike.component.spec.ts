import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLookalikeComponent } from './fb-lookalike.component';

describe('FbLookalikeComponent', () => {
  let component: FbLookalikeComponent;
  let fixture: ComponentFixture<FbLookalikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbLookalikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLookalikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
