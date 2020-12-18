import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

export interface TodoItem {
  id?: number;
  task: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
/**
 * Normally this whould use the HttpClient to save the data properly.
 */
export class TodosService {
  private todosSub: BehaviorSubject<TodoItem[]> = new BehaviorSubject<
    TodoItem[]
  >(this.getCachedTodos());
  readonly todos$ = this.todosSub
    .asObservable()
    .pipe(shareReplay(1), tap(this.cacheTodos));

  addTodo(todo: TodoItem): void {
    const todos = [...this.todosSub.getValue()];
    todos.push(todo);
    this.todosSub.next(todos);
  }

  deleteTodo(id: number): void {
    const todos = [...this.todosSub.getValue()];
    const todoIndex = todos.findIndex(
      (todoItem: TodoItem) => todoItem.id === id
    );
    todos.splice(todoIndex, 1);
    this.todosSub.next(todos);
  }

  toggleCompleted(id: number): void {
    const todos = [...this.todosSub.getValue()];
    const todoIndex = todos.findIndex(
      (todoItem: TodoItem) => todoItem.id === id
    );
    todos[todoIndex] = {
      ...todos[todoIndex],
      isCompleted: !todos[todoIndex].isCompleted,
    };
    this.todosSub.next(todos);
  }

  private cacheTodos(todos: TodoItem[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  private getCachedTodos(): TodoItem[] {
    let todos: TodoItem[];
    try {
      todos = JSON.parse(localStorage.getItem('todos')) || [];
    } catch (e) {
      console.error(e);
      todos = [];
    }

    return todos;
  }
}
