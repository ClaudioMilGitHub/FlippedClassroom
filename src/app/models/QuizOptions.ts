import {Difficulty} from "./Question/Difficulty";
import {Type} from "./Question/Type";

export interface QuizOptions {
  amount?: number;
  category?: number; // Select dinamica
  difficulty?: Difficulty;
  type?: Type;
}
