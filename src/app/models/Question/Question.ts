export interface Question {
  type?: string;
  difficulty?: string;
  question?: string;
  correct_answer?: string;
  incorrect_answers?: string[];
  mixedAnswers?: {
    text: string,
    isCorrect: boolean
  }[];
}
