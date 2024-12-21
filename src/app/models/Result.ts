import {Question} from "./Question";

export interface Result {
  response_code?: number;
  results?: Question[];
}
