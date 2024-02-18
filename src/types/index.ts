export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    img: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface Task {
    id: number,
    name: string,
    description: string,
    status: 'started' | 'not started' | 'finished',
    createdAt: Date,
    updatedAt: Date,
}