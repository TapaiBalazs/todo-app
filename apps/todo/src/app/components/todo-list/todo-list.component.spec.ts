import { waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { TodoListComponent } from './todo-list.component';

const MOCK_TODOS_SERVICE = {
  updateTodos: jest.fn(),
  todos$: of([{ id: 0 }, { id: 1 }, { id: 2 }]).pipe(shareReplay(1)),
};

describe(`TodoListComponent`, () => {
  let component: TodoListComponent;

  beforeEach(() => {
    component = new TodoListComponent(MOCK_TODOS_SERVICE as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it(
    `'moveDown' method should move the item towards the end of the array`,
    waitForAsync(() => {
      component.moveDown({ previousIndex: 0, currentIndex: 1 });

      expect(MOCK_TODOS_SERVICE.updateTodos).toHaveBeenCalledTimes(1);
      expect(MOCK_TODOS_SERVICE.updateTodos).toHaveBeenCalledWith([
        { id: 1 },
        { id: 0 },
        { id: 2 },
      ]);
    })
  );

  it(
    `'moveDown' method should not do anything when called on the last element of the array`,
    waitForAsync(() => {
      component.moveDown({ previousIndex: 2, currentIndex: 3 });

      expect(MOCK_TODOS_SERVICE.updateTodos).not.toHaveBeenCalled();
    })
  );

  it(
    `'moveUp' method should move the item towards the end of the array`,
    waitForAsync(() => {
      component.moveUp({ previousIndex: 2, currentIndex: 1 });

      expect(MOCK_TODOS_SERVICE.updateTodos).toHaveBeenCalledTimes(1);
      expect(MOCK_TODOS_SERVICE.updateTodos).toHaveBeenCalledWith([
        { id: 0 },
        { id: 2 },
        { id: 1 },
      ]);
    })
  );

  it(
    `'moveUp' method should not do anything when called on the first element of the array`,
    waitForAsync(() => {
      component.moveUp({ previousIndex: 0, currentIndex: -1 });

      expect(MOCK_TODOS_SERVICE.updateTodos).not.toHaveBeenCalled();
    })
  );

  it(
    `'drop' method should move the item towards the end of the array`,
    waitForAsync(() => {
      component.drop({ previousIndex: 0, currentIndex: 2 } as any);

      expect(MOCK_TODOS_SERVICE.updateTodos).toHaveBeenCalledTimes(1);
      expect(MOCK_TODOS_SERVICE.updateTodos).toHaveBeenCalledWith([
        { id: 1 },
        { id: 2 },
        { id: 0 },
      ]);
    })
  );
});
