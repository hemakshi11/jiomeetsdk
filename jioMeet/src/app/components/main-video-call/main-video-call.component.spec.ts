import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideoCallComponent } from './main-video-call.component';

describe('MainVideoCallComponent', () => {
  let component: MainVideoCallComponent;
  let fixture: ComponentFixture<MainVideoCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainVideoCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainVideoCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
