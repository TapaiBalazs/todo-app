import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoItem, TodosService } from '../../services/todos.service';

@Component({
  selector: 'cbs-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly todos$ = this.todosService.todos$;

  constructor(private todosService: TodosService) {}

  toggleCompleted(todo: TodoItem): void {
    this.todosService.toggleCompleted(todo.id);
  }

  delete(todo: TodoItem): void {
    this.todosService.deleteTodo(todo.id);
  }

  trackBy(index, todo: TodoItem) {
    return `${todo.id}_${todo.isCompleted}`;
  }
}
