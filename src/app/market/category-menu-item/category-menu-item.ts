import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  templateUrl: './category-menu-item.html',
  styleUrls: ['./category-menu-item.css']
})
export class CategoryMenuItemComponent {
  @Input() categoryName = '';
  @Output() itemClicked = new EventEmitter<string>();

  onItemClick() {
    this.itemClicked.emit(this.categoryName);
  }
}