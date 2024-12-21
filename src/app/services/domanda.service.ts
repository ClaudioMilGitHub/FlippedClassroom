import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Result} from "../models/Result";
import {QuizOptions} from "../models/QuizOptions";

@Injectable({
  providedIn: 'root'
})
export class DomandaService {

  results: Result;

  constructor(private http: HttpClient) {
  }

  buildQuizUrl(options: QuizOptions): string {

    const baseUrl = "https://opentdb.com/api.php?";
    const params = new URLSearchParams();

    if(typeof options !== "undefined") {
      if(options?.amount) {
        params.append('amount', options.amount.toString());
      }
      if(options?.category) {
        params.append('category', options.category.toString());
      }
      if(options?.difficulty) {
        params.append('difficulty', options.difficulty.toString());
      }
      if(options?.type) {
        params.append('type', options.type.toString());
      }
      return baseUrl + params.toString();
    }
    return baseUrl + 'amount=10';
  }

  getResult(options: QuizOptions): Observable<Result> {
    return this.http.get<Result>(this.buildQuizUrl(options));
  }
}
