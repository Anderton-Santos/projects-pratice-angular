import { Component, signal, } from '@angular/core';
import { ListFilho } from "../Input/list-filho";
import { ListPai } from "../output/list-pai";


@Component({
  selector: 'app-list-out-inp',
  imports: [ListFilho, ListPai],
  templateUrl: './list-out-inp.html',
  styleUrl: './list-out-inp.css'
})
export class ListOutInp {
  msg = ""

  receberMsg(valor: string) {
    this.msg = valor
  }

  num = 0

  printNumber(num: number) {
    this.num = num
  }

  val = "inativo"


  togleNumber(num: boolean) {
    this.val = num ? "Ativo" : "Inativo"
  }

  inpu = ""

  setInput(item: string) {
    this.inpu = item
    console.log(item)

  }

  food:string[] = []

  setFood(item:string){
    this.food.push(item)
  }

  addNum = signal(0)

  setNumber(item:number){
    this.addNum.update(i => i + item)

  }


}
