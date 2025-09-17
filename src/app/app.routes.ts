import { Routes } from '@angular/router';
import { ListUsers } from './pratices/pages/list-users/list-users';
import { CreateListUser } from './pratices/pages/create-list-user/create-list-user';

export const routes: Routes = [
  {
    path: "",
    component: CreateListUser,
  },
  {
    path: "listuser",
    component: ListUsers,
  },
];
