import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();


  onAddItem() {
    // to use the viewChild approch vs reading off input field
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredientAdded = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredientAdded);
  }

  constructor() { }

  ngOnInit() {
  }

}
