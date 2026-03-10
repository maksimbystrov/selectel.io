import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-test-1',
    standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
     <header>
      <nav>
        <a routerLink="/test-1" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Page_1</a>
        <a routerLink="/test-2" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Page_2</a>
      </nav>
    </header>
    <div class="j">
      <h1>Добро пожаловать на главную страницу</h1>
      <p>Это первая страница приложения, для демонстрации кнопок</p>

      <button routerLink="/test-2">Перейти на страницу page_2</button>
    </div>
  `,

  styles : [`
  nav {
      background: #f0f0f0;
      padding: 20px 0px 20px 0px;
    }
    nav a {
      margin: 0px 10px 0px 50px;
      text-decoration: none;
      color: black;
    }
    nav a.active {
      color: red;
      border-bottom: 2px solid red;
    }
    .j {
       display: flex;
        flex-direction: column;
    }
    button {
      padding: 13px 13px;
      font-size: 18px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
      background: #00C12B;
    }
  `]
})
export class Test1Component {}
