import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-filho',
  imports: [],
  templateUrl: './list-filho.html',
  styleUrl: './list-filho.css'
})
export class ListFilho {
  @Input({ 
    required: true,
     transform: (value: string[]) => value.map(v => v.toUpperCase()),
  }) name: string[] = []
}
