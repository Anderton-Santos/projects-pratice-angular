import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { UserService } from '../user-service';


@Component({
  selector: 'app-create-list-user',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-list-user.html',
  styleUrl: './create-list-user.css'
})
export class CreateListUser {
  private formBuilder = inject(FormBuilder);

  buttonView = signal<null | number>(null)

  private userService = inject(UserService);

  ButtonIndex() {
    this.buttonView.set(1)
  }

  useForm = this.formBuilder.group({
    nameUser: [''],
    cell: [''],
    dateNascimento: [''],
    addres: [''],
    children: [''],
  })

  onSubmit() {
    this.userService.addUser(this.useForm.value);
    this.useForm.reset()
  }

}
