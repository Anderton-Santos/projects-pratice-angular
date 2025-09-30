import { Injectable, signal } from '@angular/core';
import { debounceTime, delay, of, switchMap, tap } from 'rxjs';

type CepCidade = {
  cidade:string;
  cep: string;
}

@Injectable({
  providedIn: 'root'
})
export class Serviceapi {

  private cepCidade: CepCidade[] = [
  { cidade: "São Paulo", cep: "01000-000" },
  { cidade: "Rio de Janeiro", cep: "20000-000" },
  { cidade: "Belo Horizonte", cep: "30000-000" },
  { cidade: "Salvador", cep: "40000-000" },
  { cidade: "Fortaleza", cep: "60000-000" },
  { cidade: "Curitiba", cep: "80000-000" },
  { cidade: "Porto Alegre", cep: "90000-000" },
  { cidade: "Recife", cep: "50000-000" },
  { cidade: "Manaus", cep: "69000-000" },
  { cidade: "Brasília", cep: "70000-000" },
];

importApi = signal<CepCidade[]>([])
importApiCopy = signal<CepCidade[]>([])


getApi(){
  of(this.cepCidade).pipe(
    delay(2000),
    tap(api => {
      this.importApi.set(api)
      this.importApiCopy.set(api)
    })
    
  ).subscribe(item => console.log(item))

}

inputCep(text: string) {
  const filtrado = this.importApiCopy().filter(prev =>
    prev.cidade.toLowerCase().includes(text.toLowerCase())
  );
  const filt = this.importApi.set(filtrado);
  return filt
}

  
}
