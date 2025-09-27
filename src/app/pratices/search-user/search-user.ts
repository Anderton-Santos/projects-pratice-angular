

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of, switchMap } from 'rxjs';

interface ReqUserProps {
  name: string;
  email: string;
}

@Component({
  selector: 'app-search-user',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-user.html',
  styleUrl: './search-user.css'
})
@Injectable({ providedIn: 'root' })
export class SearchUser {
  private http = inject(HttpClient);

  inputSearch = new FormControl("");
  reqUser = signal<ReqUserProps[]>([]);        
  filteredUsers = signal<ReqUserProps[]>([]);  

  ngOnInit() {

    this.http.get<ReqUserProps[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.reqUser.set(res);
        this.filteredUsers.set(res); 
      });


    this.inputSearch.valueChanges
      .pipe(
        switchMap(value => this.filterUser(value || ""))
      )
      .subscribe(filtered => {
        this.filteredUsers.set(filtered);
        console.log("Filtrados:", filtered);
      });
  }

  filterUser(search: string) {
    const filtered = this.reqUser().filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    return of(filtered);
  }
}
