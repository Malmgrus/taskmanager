export interface Projecttracker {
    id: number,
    proName: string,
    tasks: tasktracker[]
}

export interface tasktracker {
  taskId: number;
  taskName: string;
  description: string;
  priority: number;
  status: number;
  deadline: Date | null;
}