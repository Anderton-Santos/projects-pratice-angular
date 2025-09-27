import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscriber, switchMap } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rx-js-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rx-js-component.html',
  styleUrl: './rx-js-component.css'
})
export class RxJsComponent {

  // ---------------Observable--------------------

  // ngOnInit() {

  //   // Cold
  //   const obs$ = new Observable<number>((Subscriber) => {
  //     Subscriber.next(1);
  //     Subscriber.next(2);
  //     Subscriber.next(3);
  //     Subscriber.complete()
  //   })

  //   obs$.subscribe(v => console.log("Valor0:", v))
  //   obs$.subscribe(v => console.log("Valor1:", v))

  //   // ------------------


  //   const time$ = new Observable<number>((Subscriber) => {
  //     let acm = 1
  //     const interval = setInterval(() => {
  //       Subscriber.next(acm++)
  //       if (acm > 3) {
  //         Subscriber.complete()
  //         clearInterval(interval)
  //       }
  //     }, 1000)
  //   })

  //   time$.subscribe(prev => console.log("Contando:", prev))


  //   // --------------Subject-------------

  //   const subj$ = new Subject<number>();

  //   subj$.subscribe(v => console.log('A:', v));

  //   subj$.next(1);
  //   subj$.next(2);

  //   subj$.subscribe(v => console.log('B:', v));

  //   subj$.next(3);


  //   // -----------------

  //   const timeSub$ = new Subject<number>();

  //   timeSub$.subscribe(v => console.log('A:', v));

  //   let i = 1;
  //   const interval = setInterval(() => {
  //     subj$.next(i++);
  //     if (i > 4) clearInterval(interval);
  //   }, 1000);

  //   setTimeout(() => {
  //     subj$.subscribe(v => console.log('B:', v));
  //   }, 2500);


  //   // --------------BehaviorSubject-------------

  //   const beh$ = new BehaviorSubject<number>(0);

  //   beh$.subscribe(v => console.log('A:', v));

  //   beh$.next(1);
  //   beh$.next(2);

  //   beh$.subscribe(v => console.log('B:', v));


  //   // ------------------


  //   const timebeh$ = new BehaviorSubject<number>(0);

  //   timebeh$.subscribe(v => console.log('A:', v));

  //   let int = 1;
  //   const BehavInterval = setInterval(() => {
  //     beh$.next(int++);
  //     if (int > 4) clearInterval(BehavInterval);
  //   }, 1000);

  //   setTimeout(() => {
  //     beh$.subscribe(v => console.log('B:', v));
  //   }, 2500);


  // }


  // --------------------SwitchMap-------------

  meuCampo = new FormControl<string>('')
  constructor(){
    this.meuCampo.valueChanges
    .pipe(switchMap(valor =>   this.getApi(valor as string)))
      .subscribe((item) => {
          console.log(item)
    })
  }

  getApi(url:string){
    // simulaçao HttpClient.get 
    return of(`buscando ${url}`)
  }








}
