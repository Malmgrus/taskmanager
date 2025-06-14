import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusabletaskComponent } from './reusabletask.component';

describe('ReusabletaskComponent', () => {
  let component: ReusabletaskComponent;
  let fixture: ComponentFixture<ReusabletaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusabletaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusabletaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
