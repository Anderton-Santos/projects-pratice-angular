import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.html',
  styleUrl: './filho.css'
})
export class Filho implements AfterViewInit {
  @ViewChild('title') title!: ElementRef

  ngAfterViewInit(): void {
      console.log(this.title.nativeElement.innerText)
  }

  alterarText(){
      this.title.nativeElement.innerText = 'Texto alterado!';
  }

  // ---------------------------------

  mensagem = "Mensagem do filho"
  falar(){
    console.log("O filho falou")
  }

  // ------------------------
  @ViewChild('nameIn') nameIn!: ElementRef

  exibirNome(){
    console.log(this.nameIn.nativeElement.value)
  }


  // -------------------------
  // ViewChildren
  @ViewChildren('nameList') list!: QueryList<ElementRef>

  destacar(){
    this.list.forEach(p => {
      p.nativeElement.style.color = 'red'
    })
  }

}
