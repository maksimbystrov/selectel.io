
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Test {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-test-2',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  template: `
   <header>
      <nav>
        <a routerLink="/test-1" [routerLinkActive]="'active'" [routerLinkActiveOptions]="{ exact: true }">Page_1</a>
        <a routerLink="/test-2" [routerLinkActive]="'active'" [routerLinkActiveOptions]="{ exact: true }">Page_2</a>
        <span class="selected-info">
          Выбрано: {{ selectedCount() }}
          {{ totalPrice() | currency:'RUB':'symbol-narrow':'1.0-0' }}
        </span>
      </nav>

    </header>
  <div class="test-container">
      <ul class="test-list">
        @for (item of currentItems(); track item.id) {
          <li class="test-item">
            <label>
              <input type="checkbox"
                     [checked]="item.selected"
                     (change)="toggleItem(item)">
              {{ item.name }} — {{ item.price | currency:'RUB':'symbol-narrow':'1.0-0' }}
            </label>
          </li>
        } @empty {
        }
      </ul>
      <div class="buttons">
        <button class="btn back" routerLink="/test-1">
            Вернуться на page_1
        </button>

        <button class="btn clear" (click)="clearSelection()"
                  [disabled]="selectedCount() === 0">
            Очистить выбор
        </button>
      </div>

    </div>
  `,
  styles: [`
  nav {
      background: #f0f0f0;
      padding: 20px 0px 20px 40px;
      display: flex;
      gap: 80px
    }
    nav a {
      margin: 0px 0px 0px 0px;
      text-decoration: none;
      color: black;
    }
    nav a.active {
      color: red;
      border-bottom: 2px solid red;
    }
    .test-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .selected-info {font-size: 20px;}

    .test-list {
      list-style: none;
      padding: 0;
    }

    .test-item {
      padding: 15px;
      border-bottom: 1px solid #eee;
      font-size: 18px;
    }

    .buttons{
      display: flex;
      justify-content: space-between;
    }
    .back{
      background: #00C12B;
    }
    .btn {
      padding: 13px 13px;
      font-size: 18px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .clear {
      background: #e74c3c;
      color: white;
    }

    .clear:hover {
      background: #c0392b;
    }

    .clear:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

  `]
})
export class TestComponent {

  private menuData = {
    "Item": [
      { id: 1, name: 'Item_1', price: 500, selected: false },
      { id: 2, name: 'Item_2', price: 730, selected: false },
      { id: 3, name: 'Item_3', price: 980, selected: false },
      { id: 4, name: 'Item_4', price: 90, selected: false },
      { id: 5, name: 'Item_5', price: 710, selected: false },
      { id: 6, name: 'Item_6', price: 5501, selected: false },
    ]
  };


currentItems = signal<Test[]>(this.menuData['Item'] || []);

selectedCount = computed(() =>
  this.currentItems().filter(item => item.selected).length
);

totalPrice = computed(() =>
  this.currentItems()
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.price, 0)
);


toggleItem(item: Test) {
  this.currentItems.update(items =>
    items.map(i =>
      i.id === item.id ? { ...i, selected: !i.selected } : i
    )
  );
}

clearSelection() {
  this.currentItems.update(items =>
    items.map(item => ({ ...item, selected: false }))
  );
}
}


