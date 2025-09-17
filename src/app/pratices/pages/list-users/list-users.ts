import { Component, inject } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-list-users',
  imports: [],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css'
})
export class ListUsers {

  userService = inject(UserService);



}
