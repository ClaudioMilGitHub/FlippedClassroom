import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionRequest} from "../models/Question/QuestionRequest";
import {QuizOptions} from "../models/QuizOptions";

@Injectable({
  providedIn: 'root'
})
export class DomandaService {

  results: QuestionRequest;

  constructor(private http: HttpClient) {
  }

  buildQuizUrl(options: QuizOptions): string {

    const baseUrl = "https://opentdb.com/api.php?";
    const params = new URLSearchParams();

    if (typeof options !== "undefined"){
      if (options?.amount) {
        params.append('amount', options.amount.toString());
      }
      if (options?.category) {
        params.append('category', options.category.toString());
      }
      if (options?.difficulty) {
        params.append('difficulty', options.difficulty.toString());
      }
      if (options?.type) {
        params.append('type', options.type.toString());
      }
      return baseUrl + params.toString();
    }
    return baseUrl + 'amount=10';
  }

  getResult(options: QuizOptions): Observable<QuestionRequest> {
    return this.http.get<QuestionRequest>(this.buildQuizUrl(options));
  }
}
