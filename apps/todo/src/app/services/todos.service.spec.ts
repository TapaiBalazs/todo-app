import { TestBed, waitForAsync } from '@angular/core/testing';
import { skip, take } from 'rxjs/operators';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it(
    `'addTodo' method should add a todo item to the store`,
    waitForAsync(() => {
      service.todos$
        .pipe(
          skip(1), // skip default value
          take(1) // take updated value
        )
        .subscribe((result) => {
          expect(result.length).toEqual(1);
          const [todo] = result;
          expect(todo.id).toEqual(1);
          expect(todo.task).toEqual('Test');
          expect(todo.isCompleted).toBe(false);
        });

      service.addTodo({ id: 1, task: 'Test', isCompleted: false });
    })
  );

  it(
    `'deleteTodo' method should remove a todo item from the store`,
    waitForAsync(() => {
      service.todos$
        .pipe(
          skip(2), // skip default value and the added value
          take(1) // take the deleted value
        )
        .subscribe((result) => {
          expect(result.length).toEqual(0);
        });

      service.addTodo({ id: 1, task: 'Test', isCompleted: false });
      service.deleteTodo(1);
    })
  );

  it(
    `'toggleCompleted' method should keep the length of the todoItems, but update the target todoItem`,
    waitForAsync(() => {
      service.todos$
        .pipe(
          skip(2), // skip default value and the added value
          take(1) // take the updated value
        )
        .subscribe((result) => {
          expect(result.length).toEqual(1);
          const [todo] = result;
          expect(todo.id).toEqual(1);
          expect(todo.task).toEqual('Test');
          expect(todo.isCompleted).toBe(true);
        });

      service.addTodo({ id: 1, task: 'Test', isCompleted: false });
      service.toggleCompleted(1);
    })
  );

  it(
    `'toggleCompleted' method should keep the length of the todoItems, but update the target todoItem as a toggle`,
    waitForAsync(() => {
      service.todos$
        .pipe(
          skip(3), // skip default value, the added value and the first toggle
          take(1) // take the updated value
        )
        .subscribe((result) => {
          expect(result.length).toEqual(1);
          const [todo] = result;
          expect(todo.id).toEqual(1);
          expect(todo.task).toEqual('Test');
          expect(todo.isCompleted).toBe(false);
        });

      service.addTodo({ id: 1, task: 'Test', isCompleted: false });
      service.toggleCompleted(1);
      service.toggleCompleted(1);
    })
  );
});
