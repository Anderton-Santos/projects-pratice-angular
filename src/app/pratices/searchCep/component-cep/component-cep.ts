import { Component, inject, signal } from '@angular/core';
import { Serviceapi } from '../serviceapi';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-component-cep',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
  <h1>Buscar Cep</h1>

  <div>
    <input class="border" [formControl]="inputCity" type="text">
  </div>

  <section>
    <ul>
      @for (item of serviceApi.importApi(); track $index) {
        <li>{{item.cidade}}- {{item.cep}}</li>
      }
    </ul>
  </section>
  `,
  styleUrl: './component-cep.css'
})
export class ComponentCep {
  serviceApi = inject(Serviceapi)

  inputCity = new FormControl<string | null>(null)

  getApi(){
    this.inputCity.valueChanges.pipe(
      tap(prev => {
        this.serviceApi.inputCep(prev || "")
      })
    ).subscribe(prev => console.log(prev))
  }

ngOnInit() {
  this.serviceApi.getApi()
  this.getApi();
}

}
