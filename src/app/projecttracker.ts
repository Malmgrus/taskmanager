export interface Projecttracker {
    id: number,
    proName: string,
    description: string,
    tasks: tasktracker[]
}

export interface tasktracker {
  taskId: number;
  taskName: string;
  priority: number;
  status: number;
  deadline: string | null;
}