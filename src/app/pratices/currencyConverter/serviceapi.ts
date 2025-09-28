import { Injectable, signal } from '@angular/core';
import { delay, map, Observable, of, switchMap } from 'rxjs';

interface coinProps {
  coin: string,
  rate: number
}

@Injectable({
  providedIn: 'root'
})
export class Serviceapi {

  public infoCoin: coinProps[] = [
    { coin: "BRL", rate: 5.45 },
    {coin: "EUR", rate: 0.93},
    {coin: "GBP", rate: 0.80},
    {coin: "JPY", rate: 148.23},
  ]

  upCoin = signal<coinProps[]>([])

  getApi() {
    of(this.infoCoin)
    .pipe(
      switchMap(prev => {this.upCoin.set(prev)
        return of(prev)
      })
    ).subscribe(
      item => {
        console.log(item)
      }
    )
  }

  convertCoin(to: string, amount:number) {
    of(this.infoCoin)
    .pipe(
      map(prev => {
        const toCoin = prev.find(c => c.coin === to )

        const convert = ( (toCoin?.rate || 0) * amount)

        return convert
      })
    )

    


  }

}
