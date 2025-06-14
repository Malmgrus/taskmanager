import { TestBed } from '@angular/core/testing';
import { ProjectServiceService } from './projectService.service';

describe('ProjectServiceService', () => {
  let service: ProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it("should add a project", () => {
    const project = { id: 1, proName: "Test Project", description: "", tasks: [] };
    service.addProject(project);
    expect(service.getProjects()).toContain(project);
  })

  it("should return all projects", () => {
    const projects = [
      { id: 1, proName: "Project 1", description: "", tasks: [] },
      { id: 2, proName: "Project 2", description: "", tasks: [] }
    ];
    service.setProjects(projects);
    expect(service.getProjects()).toEqual(projects);
  })
});