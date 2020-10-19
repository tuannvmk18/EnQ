import { Answer } from './answer';

export enum Rank{
  EASY, NORMAL, HARD
}

export enum QuestionType{
  GRAMMAR, VOCABULARY
}

// tslint:disable-next-line: class-name
export interface reqQuestion{
  title: string;
  type: QuestionType;
  rank: Rank;
  answers: Array<Answer>;
}
