import { Injectable, signal } from '@angular/core';
import { CreateUserProps } from '../types/pratices_types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newUsers = signal<CreateUserProps[]>([])

  amount = signal<number>(0)


  addUser(user: any) {
    this.newUsers.update(current => [...current, user]);
    this.amount.update(prev => prev + this.newUsers.length + 1)
    console.log(this.amount())
  }




}
