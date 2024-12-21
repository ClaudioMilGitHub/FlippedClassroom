import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryRequest} from "../models/Category/CategoryRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryRequest: CategoryRequest;

  constructor(private http: HttpClient) { }

  getCategoryRequest(): Observable<CategoryRequest> {
    return this.http.get<CategoryRequest>('https://opentdb.com/api_category.php');
  }

}
