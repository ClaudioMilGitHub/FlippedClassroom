import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomandaStateService {

  correctAnswers: number = 0;
  wrongAnswers: number = 0;
  questionsLeft: number = 0;
  isFinished: boolean = false;

  constructor() {
  }

  increaseCorrectAnswer(): void {
    this.correctAnswers++;
  }

  increaseWrongsAnswers(): void {
    this.wrongAnswers++;
  }

  decreaseQuestionsLeft(): void {
    if (this.questionsLeft > 0) {
      this.questionsLeft--;
    }
  }

  resetState(): void {
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
    this.questionsLeft = 0;
  }

}
