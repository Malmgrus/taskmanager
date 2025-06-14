import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectServiceService } from '../projectService.service';
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

  it("should get projects from service", () => {
    const projectService = TestBed.inject(ProjectServiceService);
    const project = {
      id: 1,
      proName: "project1",
      description: "e",
      tasks: []
    }
    projectService.setProjects([project])
    spyOn(projectService, 'getProjects').and.callThrough();
    
      component.ngOnInit();
    
    expect(projectService.getProjects).toHaveBeenCalled();
    expect(component.project.length).toBeGreaterThan(0);
  })
});