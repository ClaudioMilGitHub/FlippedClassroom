import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Result} from "../../models/Result";
import {Subscription} from "rxjs";
import {DomandaService} from "../../services/domanda.service";
import {QuizOptions} from "../../models/QuizOptions";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-domanda-list',
  templateUrl: './domanda-list.component.html',
  styleUrls: ['./domanda-list.component.css']
})
export class DomandaListComponent implements OnInit, OnDestroy{

  result: Result;
  resultSub: Subscription;
  options: QuizOptions;

  constructor(private domandaService: DomandaService, private router: Router) {
    this.options = this.router.getCurrentNavigation()?.extras?.state as QuizOptions;
  }

  ngOnInit() {
    this.resultSub = this.domandaService.getResult(this.options).subscribe({
      next: (response) => {
        this.result = response;
        console.log('Risposta ricevuta:', response); // Log per debug
        this.result.results.forEach((t) => {
          t.question = new DOMParser().parseFromString(t.question, 'text/html').body.textContent;
          const allAnswers = [...t.incorrect_answers, t.correct_answer];
          t.mixedAnswers = this.shuffleArray(allAnswers);
        })
        console.log(response);
      }
    })

  }

  private shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  ngOnDestroy() {
    this.resultSub?.unsubscribe();
  }

}
