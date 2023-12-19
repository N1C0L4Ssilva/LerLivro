import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() MaxV:string="10";
  @Input() AttV:string="1";
  
  @Input() Imag:string="../../favicon.ico";
  @Input() Titu:string="TEST_TITULO";
  @Input() Desc:string="TEST_DESC";
}
