import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionRequest} from "../models/Question/QuestionRequest";
import {QuizOptions} from "../models/QuizOptions";
import {Question} from "../models/Question/Question";

@Injectable({
  providedIn: 'root'
})
export class DomandaService {

  results: QuestionRequest;

  constructor(private http: HttpClient) {
  }

  buildQuizUrl(options: QuizOptions): string {

    const baseUrl = "http://localhost:8080/questions?";
    const params = new URLSearchParams();

    if (typeof options !== "undefined"){

      if (options?.category) {
        params.append('categoryId', options.category.toString());
      } else {
        params.append('categoryId', '1');
      }
      if (options?.difficulty) {
        params.append('difficulty', options.difficulty.toString());
      }
      if (options?.type) {
        params.append('type', options.type.toString());
      }
      if(options?.amount) {
        params.append('amount', options.amount.toString());
      }
      return baseUrl + params.toString();
    }

    return baseUrl + 'categoryId=1';
  }

  getResult(options: QuizOptions): Observable<Question[]> {
    return this.http.get<Question[]>(this.buildQuizUrl(options));
  }
}
