import { AnswerType } from './answer';


// tslint:disable-next-line: class-name
export interface TestExamHistory {
    timeStart: number; //Date seconds
    timeEnd: number; //Date seconds
    // testExam: TestExam; //string
    testExam: string
    answers: Array<AnswerType>; //Array<Enum<A, B, C, D>>
}