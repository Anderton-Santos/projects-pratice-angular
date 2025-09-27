import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-pai',
  imports: [],
  templateUrl: './pai.html',
  styleUrl: './pai.css'
})
export class Pai {
    @ViewChildren('campo') itemInput!: QueryList<ElementRef>

  falar(){
    console.log("Oi do filho")
  }

  chamarInput(){
    this.itemInput.forEach(prev => {
      console.log(prev.nativeElement.value)
    })
  }


}
