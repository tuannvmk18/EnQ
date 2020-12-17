import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'AnswerQuestionPipe'})
export class AnswerQuestionPipe implements PipeTransform{
  transform(value: string): any {
    switch(parseInt(value)) {
      case 0:
        return 'A';
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
    }
  }
}
