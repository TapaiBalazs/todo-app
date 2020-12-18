import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { asyncScheduler, Observable } from 'rxjs';
import { filter, map, observeOn, take, tap } from 'rxjs/operators';
import { TodoItem, TodosService } from '../../services/todos.service';

@Component({
  selector: 'cbs-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly todos$ = this.todosService.todos$;
  @ViewChildren(CdkDrag)
  listElements: QueryList<CdkDrag>;

  constructor(private todosService: TodosService) {}

  toggleCompleted(todo: TodoItem): void {
    this.todosService.toggleCompleted(todo.id);
  }

  delete(todo: TodoItem): void {
    this.todosService.deleteTodo(todo.id);
  }

  drop({ previousIndex, currentIndex }: CdkDragDrop<TodoItem>): void {
    this.todos$
      .pipe(take(1), this.mapReorder(previousIndex, currentIndex))
      .subscribe(this.updateTodos.bind(this));
  }

  moveDown({
    previousIndex,
    currentIndex,
  }: Partial<CdkDragDrop<TodoItem>>): void {
    this.todos$
      .pipe(
        take(1),
        filter((todos: TodoItem[]) => currentIndex < todos.length - 1),
        this.mapReorder(previousIndex, currentIndex)
      )
      .subscribe(this.updateTodos.bind(this));
  }

  moveUp({
    previousIndex,
    currentIndex,
  }: Partial<CdkDragDrop<TodoItem>>): void {
    this.todos$
      .pipe(
        take(1),
        filter((_) => previousIndex > 0),
        this.mapReorder(previousIndex, currentIndex),
        tap(this.updateTodos.bind(this)),
        observeOn(asyncScheduler)
      )
      .subscribe((_) => {
        const listElement: CdkDrag = this.listElements?.find(
          (item, index: number) => index === currentIndex
        );
        if (listElement) {
          (listElement.element.nativeElement.firstChild as HTMLElement).focus();
        }
      });
  }

  trackBy(index, todo: TodoItem) {
    return `${todo.id}_${todo.isCompleted}`;
  }

  private updateTodos(todos: TodoItem[]): void {
    this.todosService.updateTodos(todos);
  }

  private mapReorder(
    previousIndex: number,
    currentIndex: number
  ): (s$: Observable<TodoItem[]>) => Observable<TodoItem[]> {
    return (s$) =>
      s$.pipe(
        map((todos: TodoItem[]) => {
          const reordered = [...todos];
          moveItemInArray(reordered, previousIndex, currentIndex);
          return reordered;
        })
      );
  }
}
