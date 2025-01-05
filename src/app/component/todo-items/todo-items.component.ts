import { Component, input, output, signal } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, TitleCasePipe],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  todo = input.required<Todo>()

  todoToggled = output<Todo>()

  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}
