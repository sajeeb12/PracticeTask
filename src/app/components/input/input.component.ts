import { Component } from '@angular/core';
import { SerachBtnComponent } from '../serach-btn/serach-btn.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [SerachBtnComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

}
