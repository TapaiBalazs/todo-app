import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../../services/todos.service';

function generateUniqueId(): number {
  return Math.floor(Math.random() * 9999);
}

@Component({
  selector: 'cbs-todo-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {
  form: FormGroup = this.fb.group({
    id: [generateUniqueId(), Validators.required],
    task: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private todosService: TodosService) {}

  addTodo(): void {
    this.todosService.addTodo({
      ...this.form.getRawValue(),
      isCompleted: false,
    });
    this.form.reset();
    this.form.markAsUntouched();
    this.form.patchValue({
      id: generateUniqueId(),
    });
  }
}
