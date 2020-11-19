import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'RankQuestionPipe'})
export class RankQuestionPipe implements PipeTransform{
  transform(value: string): any {
    switch(parseInt(value)) {
      case 0:
        return 'Easy';
      case 1:
        return 'Normal';
      case 2:
        return 'Hard';
    }
  }
}
