import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Question} from "../../models/Question";
import {QuizOptions} from "../../models/QuizOptions";
import {MatDialog} from "@angular/material/dialog";
import {DialogQuizResultsComponent} from "../dialogs/dialog-quiz-results/dialog-quiz-results.component";

@Component({
  selector: 'app-domanda-item',
  templateUrl: './domanda-item.component.html',
  styleUrls: ['./domanda-item.component.css']
})
export class DomandaItemComponent implements OnInit {

  @Input('item') item: Question;
  @Input('options') options: QuizOptions;
  answered: boolean = false;
  static counterCorrect: number = 0;
  static counterWrong: number = 0;
  static answersGiven: number = 0;
  static questionsLeft: number = 0

  constructor(private dialog: MatDialog) {
    DomandaItemComponent.counterCorrect = 0;
    DomandaItemComponent.counterWrong = 0;
    DomandaItemComponent.answersGiven = 0;
  }

  ngOnInit() {
    if(typeof this.options === 'undefined') {
      this.options = {
        amount: 10
      }
      DomandaItemComponent.questionsLeft = this.options.amount;
    }
  }

  checkAnswer(answer: string) {
    if (answer === this.item.correct_answer) {
      DomandaItemComponent.counterCorrect++;
      DomandaItemComponent.answersGiven++;
    } else {
      DomandaItemComponent.counterWrong++;
      DomandaItemComponent.answersGiven++;
    }
    this.answered = true;
    console.log(this.options.amount);
    console.log(DomandaItemComponent.answersGiven);
    DomandaItemComponent.questionsLeft = this.options.amount - DomandaItemComponent.answersGiven;
    console.log('Domande rimaste ' + DomandaItemComponent.questionsLeft);
    if (DomandaItemComponent.questionsLeft == 0 ) {
      this.openDialog();
    }
  }

  openDialog(): void {
    console.log(DomandaItemComponent.counterCorrect)
    const dialogRef = this.dialog.open(
      DialogQuizResultsComponent,
      {data: {correctAnswers: DomandaItemComponent.counterCorrect}
      });
  }
}
