import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, CategoryMenuItemComponent],
  templateUrl: './category-menu.html',
})
export class CategoryMenuComponent {
  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<Category>();

  onItemClicked(category: Category) {
    this.categorySelected.emit(category);
  }
}