import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamView } from './team.view';

describe('TeamView', () => {
  let component: TeamView;
  let fixture: ComponentFixture<TeamView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
