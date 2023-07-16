import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNotificationTableComponent } from './main-notification-table.component';

describe('MainNotificationTableComponent', () => {
  let component: MainNotificationTableComponent;
  let fixture: ComponentFixture<MainNotificationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNotificationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNotificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
