import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { ProductsPageComponent } from './market/products-page/products-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductsPageComponent],
  templateUrl: './app.html',
})
export class AppComponent {}