import {Difficulty} from "./Difficulty";
import {Type} from "./Type";
import {Category} from "../Category/Category";
import {Answer} from "../Answer/Answer";

export interface Question {

  questionText: string;
  difficulty?: Difficulty;
  type?: Type;

  categoryDTO: Category;
  answerDTOS: Answer[];

}
