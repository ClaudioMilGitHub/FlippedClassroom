import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Question} from "../../models/Question";

@Component({
  selector: 'app-domanda-item',
  templateUrl: './domanda-item.component.html',
  styleUrls: ['./domanda-item.component.css']
})
export class DomandaItemComponent {

  @Input('item') item: Question;
  answered: boolean = false;
  static counterCorrect: number = 0;
  static counterWrong: number = 0;


  checkAnswer(answer: string) {
    if (answer === this.item.correct_answer) {
      DomandaItemComponent.counterCorrect++;
    } else {
      DomandaItemComponent.counterWrong++;
    }
    this.answered = true;
    console.log("Risposte corrette: " + DomandaItemComponent.counterCorrect);
    console.log("Risposte sbagliate: " + DomandaItemComponent.counterWrong);
  }
}
