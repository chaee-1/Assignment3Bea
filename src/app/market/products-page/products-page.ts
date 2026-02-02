import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryMenuComponent } from '../category-menu/category-menu';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CategoryMenuComponent],
  templateUrl: './products-page.html',
})
export class ProductsPageComponent {
  categoryList: Category[] = [
    { id: 1, name: 'Labubu' },
    { id: 2, name: 'Skullpanda' },
    { id: 3, name: 'Nyota' },
    { id: 4, name: 'Calico Critters' },
    { id: 5, name: 'Sonny Angels' }
  ];

  onCategorySelected(category: Category) {
    alert(`You selected: ${category.name}`);
  }
}