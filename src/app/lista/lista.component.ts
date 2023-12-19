import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA], 
  imports: [CardComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class LISTAComponent {

}
