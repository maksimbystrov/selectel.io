import { Component} from '@angular/core';
import { RouterOutlet} from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <div>Тестовое задание </div>
    </footer>
  `,
  styles: [`

    main {min-height: 600px; font-size: 20px;}

    footer {
      text-align: center;
      padding: 1rem;
      background: #f8f9fa;
      color: red;
    }
  `]
})
export class AppComponent {}




