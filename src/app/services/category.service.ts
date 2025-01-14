import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryRequest} from "../models/Category/CategoryRequest";
import {Observable} from "rxjs";
import {Category} from "../models/Category/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryRequest: CategoryRequest;

  constructor(private http: HttpClient) {
  }

  getCategoryRequest(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/category/findAll');
  }

}
