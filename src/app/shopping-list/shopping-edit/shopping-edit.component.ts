import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  onAddItem() {
    // to use the viewChild approch vs reading off input field
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredientAdded = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredientAdded);
  }

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

}
