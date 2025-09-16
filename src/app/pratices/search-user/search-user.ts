import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, Injectable, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

// 'https://jsonplaceholder.typicode.com/users'

interface ReqUserProps {
  name: string;
  email: string

}


@Component({
  selector: 'app-search-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-user.html',
  styleUrl: './search-user.css'
})

@Injectable({ providedIn: 'root' })
export class SearchUser {

  inputUser = signal("")

  reqUser = signal<ReqUserProps[]>([])

  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<ReqUserProps[]>('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.reqUser.set(res)
      console.log(this.reqUser)


    });

  }














}

