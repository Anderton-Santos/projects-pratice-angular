import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-list-pai',
  imports: [],
  templateUrl: './list-pai.html',
  styleUrl: './list-pai.css'
})
export class ListPai {

    @Output() mensagem = new EventEmitter<string>()
    @Output() setNumber = new EventEmitter<number>()
    @Output() setBoolean = new EventEmitter<boolean>()
    @Output() handleInput = new EventEmitter<string>()
    @Output() handleFood = new EventEmitter<string>()
    @Output() addNumber = new EventEmitter<number>()


  enviar(){
    this.mensagem.emit("Olá mundo")
  }

  whatNumber(n:number){
    this.setNumber.emit(n)
  }
    private ativo = false;

  whatBoolean(){
        this.ativo = !this.ativo;
    this.setBoolean.emit(this.ativo);
    
  }

    myInput(e: string){
        this.handleInput.emit(e)
  }

   foods = [
    { name: 'Hambúrguer', selected: false },
    { name: 'Pizza', selected: false },
    { name: 'Sushi', selected: false },
  ];

  myFood(item:string){
    this.handleFood.emit(item)

  }

  num = signal(0)

  handleNumber(item:number){
    this.addNumber.emit(item)
    
  }


}
