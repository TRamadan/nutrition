import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IngredientsAnalysisService } from '../services/ingredients-analysis.service';
import { environment } from '../../../../environments/environment';
import { ShowAnalysisComponent } from '../show-analysis/show-analysis.component';
import { IngredientsDetailsComponent } from '../ingredients-details/ingredients-details.component';
@Component({
  selector: 'app-create-analysis',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ShowAnalysisComponent,
    IngredientsDetailsComponent,
  ],
  standalone: true,
  templateUrl: './create-analysis.component.html',
  styleUrls: ['./create-analysis.component.css'],
})
export class CreateAnalysisComponent implements OnInit {
  analysisForm!: FormGroup;
  showAnalysisDetails: boolean = false;
  ingredientsData: any[] = [];
  nutritionFacts: any;
  constructor(
    private ingredientsService: IngredientsAnalysisService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initialiseAnalysisForm();
    const ingredients = '1 cup rice,\n10 oz chickpeas';
    this.analysisForm.get('ingredients')?.setValue(ingredients);
  }

  //here is the function needed to initialise a form
  initialiseAnalysisForm() {
    this.analysisForm = this.formbuilder.group({
      ingredients: ['', Validators.required],
    });
  }

  //here is the function needed to analyse added ingredients
  analyseIngredients(): void {
    const ingredients = this.analysisForm.get('ingredients')?.value.split('\n');
    const body = {
      ingr: ingredients,
    };
    this.ingredientsService
      .makeAnalysis(body, environment.appId, environment.appKey)
      .then((response: any) => {
        this.showAnalysisDetails = true;
        this.nutritionFacts = {
          calories: response.calories,
          totalNutrients: response.totalNutrients,
          totalDaily: response.totalDaily,
        };
        console.log(this.nutritionFacts);
        // Create a new array containing the `parsed` property from each ingredient
        this.ingredientsData = response.ingredients.map(
          (ingredient: any) => ingredient.parsed
        );

        // Flatten the array of arrays if needed
        this.ingredientsData = this.ingredientsData.flat();
      })
      .catch((error: any) => {
        this.showAnalysisDetails = false;
      });
  }

  newRecipe(): void {
    this.showAnalysisDetails = false;
  }
}
