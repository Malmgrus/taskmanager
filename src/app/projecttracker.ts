export interface Projecttracker {
    id: number,
    proName: string,
    tasks: [{
        taskId: number,
        taskName: string,
        description: string,
        priority: number,
        status: number
    }]
}
