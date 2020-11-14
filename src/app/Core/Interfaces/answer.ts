export enum AnswerType {
  A, B, C, D
}

export interface Answer {
  A: string;
  B: string;
  C: string;
  D: string;
  correctAnswer: AnswerType;
}
