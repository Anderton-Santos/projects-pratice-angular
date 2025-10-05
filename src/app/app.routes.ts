import { Routes } from '@angular/router';
import { ListUsers } from './pratices/pages/list-users/list-users';

import { ListCartEcommerce } from './pratices/cart/list-cart-ecommerce/list-cart-ecommerce';
import { CatEcommerce } from './pratices/cart/cat-ecommerce/cat-ecommerce';

export const routes: Routes = [

  // {
  //   path: "",
  //   component: CatEcommerce,
  // },

  {
    path: "listuser",
    component: ListUsers,
  },
  {
    path: "listcar",
    component: ListCartEcommerce,
  },
];
