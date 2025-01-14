import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../models/Question/Question";
import {QuizOptions} from "../../models/QuizOptions";
import {MatDialog} from "@angular/material/dialog";
import {DialogQuizResultsComponent} from "../dialogs/dialog-quiz-results/dialog-quiz-results.component";
import {DomandaStateService} from "../../services/domanda-state.service";
import {Answer} from "../../models/Answer/Answer";

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
  correctAnswer: Answer;


  constructor(private dialog: MatDialog, private domandaStateService: DomandaStateService) {
  }

  ngOnInit() {
    this.domandaStateService.resetState();
    console.log(this.item);
    this.correctAnswer = this.item.answerDTOS.find(answer => answer.isCorrect);

  }

  checkAnswer(selectedAnswer: Answer, index: number): void {

    console.log(selectedAnswer.answerText, selectedAnswer.isCorrect);

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

    // if (this.domandaStateService.questionsLeft == 0) {
    //   this.domandaStateService.isFinished = true;
    //   this.openDialog();
    // }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogQuizResultsComponent,
      {
        data: {
          correctAnswers: this.domandaStateService.correctAnswers,
          wrongAnswers: this.domandaStateService.wrongAnswers
        }
      });
  }

  feedback(index: number): string {
    if (this.selectedIndex === index && this.isAnswered) {
      return this.isCorrect ? 'correct-answer' : 'wrong-answer';
    }
    return '';
  }

  showCorrectAnswer(): string  {
    return this.correctAnswer.answerText;
  }

}
