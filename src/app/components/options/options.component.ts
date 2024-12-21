import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {QuizOptions} from "../../models/QuizOptions";
import {CategoryService} from "../../services/category.service";
import {Subscription} from "rxjs";
import {Category} from "../../models/Category/Category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnDestroy{

  optionsForm: FormGroup;
  categories: Category[];
  categorySub: Subscription;
  options: QuizOptions;

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(){
    this.optionsForm = new FormGroup({
      amount: new FormControl(Validators.min(1)),
      category: new FormControl(),
      difficulty: new FormControl(),
      type: new FormControl()
    })
    this.categorySub = this.categoryService.getCategoryRequest().subscribe({
      next: (categoryResponse) => {
        this.categories = categoryResponse.trivia_categories;
      }
    })
  }

  get amount(): AbstractControl {
    return this.optionsForm.get('amount')
  }

  get category(): AbstractControl {
    return this.optionsForm.get('category')
  }

  get difficulty(): AbstractControl {
    return this.optionsForm.get('difficulty')
  }

  get type(): AbstractControl {
    return this.optionsForm.get('type')
  }

  makeRequestOptions(): void {
    if(this.optionsForm.valid) {
      this.options = {
        amount: this.amount.value,
        category: this.category.value,
        difficulty: this.difficulty.value,
        type: this.type.value,
      }
      this.router.navigateByUrl('quiz-list', {state: this.getRequestOptions()})
    }
  }

  getRequestOptions(): QuizOptions  {
    return this.options;
  }

  ngOnDestroy(){
    this.categorySub?.unsubscribe();
  }

}
