import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  formOutput = ''
  
  keyHandler(event: KeyboardEvent) {
    console.log(`User typed ${event.key}`);
  }
}
