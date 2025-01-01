import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Question} from "../../models/Question/Question";
import {QuizOptions} from "../../models/QuizOptions";
import {MatDialog} from "@angular/material/dialog";
import {DialogQuizResultsComponent} from "../dialogs/dialog-quiz-results/dialog-quiz-results.component";
import {DomandaStateService} from "../../services/domanda-state.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-domanda-item',
  templateUrl: './domanda-item.component.html',
  styleUrls: ['./domanda-item.component.css']
})
export class DomandaItemComponent implements OnInit {

  @Input('item') item: Question;
  @Input('options') options: QuizOptions;
  isSelected: boolean = false;
  isCorrect: boolean;
  isAnswered: boolean = false;
  selectedIndex: number;


  constructor(private dialog: MatDialog, private domandaStateService: DomandaStateService) {
  }

  ngOnInit() {
    this.domandaStateService.resetState();
    if (typeof this.options === 'undefined') {
      this.options = {
        amount: 10
      }
    }
    this.domandaStateService.questionsLeft = this.options.amount;
    this.item.mixedAnswers;
  }

  checkAnswer(selectedAnswer: { text: string, isCorrect: boolean }, index: number): void {
    if (selectedAnswer.isCorrect) {
      this.domandaStateService.increaseCorrectAnswer();
      this.isCorrect = true;
    } else {
      this.domandaStateService.increaseWrongsAnswers();
      this.isCorrect = false;
    }
    this.selectedIndex = index;
    this.isSelected = true;
    this.domandaStateService.decreaseQuestionsLeft();
    this.isAnswered = true;

    if (this.domandaStateService.questionsLeft == 0) {
      this.domandaStateService.isFinished = true;
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogQuizResultsComponent,
      {
        data: {correctAnswers: this.domandaStateService.correctAnswers}
      });
  }
}
