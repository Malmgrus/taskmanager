import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProjectServiceService } from '../projectService.service';
import { ProjecttaskComponent } from './projecttask.component';
import { Projecttracker, tasktracker } from '../projecttracker';
import { ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

/*describe('ProjecttaskComponent', () => {
  let component: ProjecttaskComponent;
  let fixture: ComponentFixture<ProjecttaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [HttpClient,
        HttpHandler,
        {
                provide: ActivatedRoute,
                useValue: {
                  snapshot: {
                    params: {
                      id: '1'
                    },
                    paramMap: {
                      get: (key: string) => {
                        if (key === 'id') {
                        return '1'
                      }
                      return null
                    }
                  }
                }
          }
        },
        {
          
          provide: ProjectServiceService,
          useValue: {
            getProjects: () => {
               id: 1
               proName: 'Test' 
               tasks: [ taskId: 1, taskName: 'task1', description: 'desc', priority: 1, status: 1, deadline: null]

            } //jasmine.createSpy().and.returnValue(of([{ id: 1, proName: 'Test', tasks: []}])),
          }
        }
      ],
      imports: [CommonModule, FormsModule, ProjecttaskComponent, RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change priority', () => {
    const projectService = TestBed.inject(ProjectServiceService);
    component.proId = 1;
    component.count = 1;
    const project: Projecttracker[] = [{
      id: 1,
      proName: "project1",
      tasks: [
        { taskId: 1, taskName: "task1", description: "e", priority: 1, status: 1, deadline: null},
        ]
    }];
    component.project = project;
    component.changePrio(project[0].tasks[0].taskId, true);
    expect(project[0].tasks[0].priority).toBe(2);
  })
});*/