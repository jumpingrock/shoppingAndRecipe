import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  receipes: Recipe[] = [new Recipe('A Test Recipe', 'This is a test', 'https://i1.wp.com/ohmyveggies.com/wp-content/uploads/2013/02/how_to_make_mushroom_stock.jpg')];


  constructor() { }

  ngOnInit() {
  }

}
