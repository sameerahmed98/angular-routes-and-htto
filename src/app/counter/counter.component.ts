import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterNumber = signal(0)
  disableButton = signal(true)
  
  increment () {
    this.counterNumber.set(this.counterNumber() + 1)
    this.disableButton.set(false)
  }

  decrement () {
    if (this.counterNumber() === 0) {
      alert("The counter can't be go below the zero")
      this.disableButton.set(true)
    }
    else {
      this.counterNumber.set(this.counterNumber() - 1)
      this.disableButton.set(false)
    }
  }
  
  reset () {
    this.counterNumber.set(0)
    alert('Counter is reset')
    this.disableButton.set(true)
  }
}