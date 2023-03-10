import { Component, Input } from '@angular/core';
import { Transazione } from '../trans';

@Component({
  selector: 'app-transazioni-detail',
  templateUrl: './transazioni-detail.component.html',
  styleUrls: ['./transazioni-detail.component.css'],
})
export class TransazioniDetailComponent {
  @Input()
  transazione?: Transazione;
}
