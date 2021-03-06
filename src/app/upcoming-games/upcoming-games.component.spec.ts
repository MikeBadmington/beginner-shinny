import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingGamesComponent } from './upcoming-games.component';

describe('UpcomingGamesComponent', () => {
  let component: UpcomingGamesComponent;
  let fixture: ComponentFixture<UpcomingGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
