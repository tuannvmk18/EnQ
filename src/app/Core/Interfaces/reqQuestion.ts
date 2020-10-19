import { Answer } from './answer';

export enum Rank{
  EASY, NORMAL, HARD
}

export enum QuestionType{
  GRAMMAR, VOCABULARY
}

export interface reqQuestion{
  title: string;
  type: QuestionType;
  rank: Rank;
  answers: Answer;
}
