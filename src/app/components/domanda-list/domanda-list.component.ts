import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {QuestionRequest} from "../../models/Question/QuestionRequest";
import {Subscription} from "rxjs";
import {DomandaService} from "../../services/domanda.service";
import {QuizOptions} from "../../models/QuizOptions";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {Question} from "../../models/Question/Question";
import {Answer} from "../../models/Answer/Answer";

@Component({
  selector: 'app-domanda-list',
  templateUrl: './domanda-list.component.html',
  styleUrls: ['./domanda-list.component.css']
})
export class DomandaListComponent implements OnInit, OnDestroy {

  result: Question[];
  resultSub: Subscription;
  options: QuizOptions;

  constructor(private domandaService: DomandaService, private router: Router) {
    this.options = this.router.getCurrentNavigation()?.extras?.state as QuizOptions;
  }

  ngOnInit() {

    this.resultSub = this.domandaService.getResult(this.options).subscribe({
      next: (response) => {
        this.result = response;

        this.result.forEach(t => {
          t.questionText = new DOMParser().parseFromString(t.questionText, 'text/html').body.textContent;
          t.answerDTOS = this.shuffleArray(t.answerDTOS);
        });


        // this.result.results.forEach((t) => {
        //   t.question = new DOMParser().parseFromString(t.question, 'text/html').body.textContent;
        //   const allAnswers = [...t.incorrect_answers, t.correct_answer];
        //   const shuffledAnswers = this.shuffleArray(allAnswers);
        //
        //   t.mixedAnswers = shuffledAnswers.map(answer => ({
        //     text: answer,
        //     isCorrect: answer === t.correct_answer
        //   }))
        // })
      }
    })
  }

  private shuffleArray(array: Answer[]): Answer[] {
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
