import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterHistory } from "./pratices/counter-history/counter-history";
import { Cronometro } from "./pratices/cronometro/cronometro";
import { Quiz } from "./pratices/quiz/quiz";
import { QuizTwo } from "./pratices/quiz-two/quiz-two";
import { Tables } from "./pratices/tables/tables";
import { ListBuy } from "./pratices/list-buy/list-buy";
import { SearchUser } from "./pratices/search-user/search-user";
import { ListBuyTrello } from "./pratices/list-buy-trello/list-buy-trello";
import { CreateListUser } from "./pratices/pages/create-list-user/create-list-user";
import { CatEcommerce } from "./pratices/cart/cat-ecommerce/cat-ecommerce";
import { RxJsComponent } from "./pratices/rx-js-component/rx-js-component";
import { ListOutInp } from "./pratices/comuComponent/list-out-inp/list-out-inp";
import { FilhoPai } from "./pratices/componentViews/filho-pai/filho-pai";
import { Componentapi } from "./pratices/currencyConverter/componentapi/componentapi";
import { ComponentCep } from "./pratices/searchCep/component-cep/component-cep";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CounterHistory,
    Cronometro,
    Quiz,
    QuizTwo,
    Tables,
    ListBuy,
    SearchUser,
    ListBuyTrello,
    CreateListUser,
    CatEcommerce,
    RxJsComponent,
    ListOutInp,
    FilhoPai,
    Componentapi,
    ComponentCep
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-pratice-angular');
}
