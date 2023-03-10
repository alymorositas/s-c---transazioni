import { Component } from '@angular/core';
import { Transazione } from '../trans';
import { TRANSAZIONI } from '../trans-dati';

@Component({
  selector: 'app-transazioni-list',
  templateUrl: './transazioni-list.component.html',
  styleUrls: ['./transazioni-list.component.css'],
})
export class TransazioniListComponent {
  transazioni: Transazione[] = TRANSAZIONI;
}
