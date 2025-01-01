import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-quiz-results',
  templateUrl: './dialog-quiz-results.component.html',
  styleUrls: ['./dialog-quiz-results.component.css']
})
export class DialogQuizResultsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogQuizResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { correctAnswers: number, wrongAnswers: number },
    private router: Router,
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  closeDialogAndRestart() {
    this.dialogRef.close();
    this.router.navigateByUrl('options').then(r => console.log(r));
  }
}
