import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tasktracker } from '../projecttracker';

@Component({
  selector: 'reusabletask',
  standalone: true,
  imports: [],
  templateUrl: './reusabletask.component.html',
  styleUrl: './reusabletask.component.css'
})
export class ReusabletaskComponent {
  @Input() task!: tasktracker;
  @Output() taskName = new EventEmitter<Event>();
  @Output() taskDeadline = new EventEmitter<Event>();
  @Output() increasePriority = new EventEmitter<void>();
  @Output() decreasePriority = new EventEmitter<void>();
  @Output() increaseStatus = new EventEmitter<void>();
  @Output() decreaseStatus = new EventEmitter<void>();
  @Output() removeTask = new EventEmitter<void>();
}