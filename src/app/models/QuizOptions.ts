export interface QuizOptions {
  amount?: number;
  category?: number; // Select dinamica
  difficulty?: 'easy' | 'medium' | 'hard'; // Select predefinita
  type?: 'boolean' | 'multiple'; // Select predefinita
}
