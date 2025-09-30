import { Component, inject, signal } from '@angular/core';
import { Serviceapi } from '../serviceapi';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-component-cep',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
  <h1>Buscar Cep</h1>

  <div>
    <input class="border" [formControl]="inputCity" type="text">
  </div>

  <section>

  @if(thisVazio()){
    <ul>
          @for (item of serviceApi.importApi(); track $index) {
            <li>{{item.cidade}}- {{item.cep}}</li>
            }
        </ul>
  }@else {
    <p>Digite uma cidade</p>
  }


  </section>
  `,
  styleUrl: './component-cep.css'
})
export class ComponentCep {
  serviceApi = inject(Serviceapi)

  inputCity = new FormControl<string | null>(null)
  thisVazio = signal<boolean>(false)

  getApi() {
    this.inputCity.valueChanges.pipe(

      debounceTime(1500),
      tap(prev => {
        if (prev !== "") {
          this.thisVazio.set(true)
        }
        if (this.thisVazio()) {
          this.serviceApi.inputCep(prev || "")
        }



      })
    ).subscribe(prev => console.log(prev))
  }

  ngOnInit() {
    this.serviceApi.getApi()
    this.getApi();
  }

  constructor() {
    console.log(this.serviceApi.importApi())
  }

}
