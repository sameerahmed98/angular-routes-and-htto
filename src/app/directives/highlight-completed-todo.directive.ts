import { Directive, effect, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false)
  el = inject(ElementRef)

  styleEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.className = 'completed'
    }
    else{
      this.el.nativeElement.classList.remove('completed')
    }
  })

}