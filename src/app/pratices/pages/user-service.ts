import { Injectable, signal } from '@angular/core';
import { CreateUserProps } from '../types/pratices_types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  newUsers = signal<CreateUserProps[]>([])


  addUser(user: any) {
    this.newUsers.update(current => [...current, user]);
  }


}
