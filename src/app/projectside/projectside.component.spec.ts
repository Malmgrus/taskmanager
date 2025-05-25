import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsideComponent } from './projectside.component';

describe('ProjectsideComponent', () => {
  let component: ProjectsideComponent;
  let fixture: ComponentFixture<ProjectsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
