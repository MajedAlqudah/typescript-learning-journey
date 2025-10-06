// Simple Task Manager
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string): void {
    const newTask: Task = {
      id: this.nextId,
      title,
      completed: false
    };
    this.tasks.push(newTask);
    this.nextId++;
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  listTasks(): void {
    console.log("Tasks:");
    this.tasks.forEach(task => {
      const status = task.completed ? "✓" : "○";
      console.log(`${status} ${task.title}`);
    });
  }
}

// Using the task manager
const myTasks = new TaskManager();
myTasks.addTask("Learn TypeScript");
myTasks.addTask("Build a project");
myTasks.completeTask(1);
myTasks.listTasks();