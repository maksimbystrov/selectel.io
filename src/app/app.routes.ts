import { Routes } from '@angular/router';
import { Test1Component } from '../app/test-1/test-1.component';
import { TestComponent } from '../app/test-2/test-2.component';


export const routes: Routes = [
  { path: '', redirectTo: '/test-1', pathMatch: 'full' },
  { path: 'test-1', component: Test1Component },
  { path: 'test-2', component: TestComponent },
];
