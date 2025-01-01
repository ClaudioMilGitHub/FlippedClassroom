import {Question} from "./Question";

export interface QuestionRequest {
  response_code?: number;
  results?: Question[];
}
