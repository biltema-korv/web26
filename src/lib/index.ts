// place files you want to import through the `#lib` alias in this folder.
let todos: {
    id: number;
    text: string;
    completed: boolean;
}[] = [];

export { db } from "../prisma/db";