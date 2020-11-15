import { TestExamHistory } from './TestExamHistory';

// tslint:disable-next-line: class-name
export interface UserModel {
    displayName: string; //string name
    email: string; //string gmail
    _id: string; //string
    photoURL: string; //string
    rank: number | 0; //number
    point: number | 0; //number
    testExamHistory?: Array<TestExamHistory>; //Maximum 5
    friend?: Array<{ _id: string }> // _id of User
}